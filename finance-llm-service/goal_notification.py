from flask import Flask, request, jsonify
from flask_cors import CORS
from ai21 import AI21Client
from ai21.models.chat import ChatMessage
import os
from dotenv import load_dotenv
import logging
from datetime import datetime

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for specified origins
CORS(app, resources={r"/notification": {"origins": ["http://example.com", "http://another-site.com"]}})

# Set up logging
logging.basicConfig(level=logging.INFO)

# Initialize AI21 client with API key from environment variables
ai21_client = AI21Client(api_key=os.getenv("AI21_API_KEY"))

def validate_goal(goal):
    required_fields = ["goal_id", "user_id", "goal_name", "target_amount", "saved_amount", "end_date"]
    for field in required_fields:
        if field not in goal:
            raise ValueError(f"Missing field '{field}' in goal data.")

def months_until(end_date):
    today = datetime.now().date()
    end = datetime.strptime(end_date, "%Y-%m-%d").date() if end_date != "unknown" else datetime.now().date()
    return (end - today).days // 30

@app.route('/notification', methods=['POST'])
def notification():
    try:
        if not request.is_json:
            return jsonify({"error": "Content-Type must be application/json"}), 415

        data = request.get_json()
        user_goals = data.get("goals")

        if not user_goals:
            return jsonify({"error": "Missing 'goals' in JSON data"}), 400

        notifications = []

        for goal in user_goals:
            try:
                validate_goal(goal)
                
                goal_id = goal["goal_id"]
                user_id = goal["user_id"]
                goal_name = goal["goal_name"]
                target_amount = goal.get("target_amount", 0)
                saved_amount = goal.get("saved_amount", 0)
                end_date = goal["end_date"]  # Assuming end_date is always provided now
                
                # Calculate progress percentage
                progress_percentage = round((saved_amount / target_amount) * 100, 1) if target_amount > 0 else 0
                
                # Months until end date
                months_left = months_until(end_date)
                
                # Calculate recommended savings per month
                recommended_savings = round((target_amount - saved_amount) / months_left, 2) if months_left > 0 else 0
                
                # Prepare AI21 prompt
                system = "Eres un asesor financiero. Genera notificaciones concisas y personalizadas del progreso (máximo 90 caracteres)."
                user_prompt = f"""Objetivo: '{goal_name}'. Progreso: {progress_percentage}%. Ahorro recomendado: ${recommended_savings}.
                Motiva al usuario con el progreso para alcanzar {goal_name} y recomienda el ahorro mensual para alcanzar la meta en la fecha límite."""

                messages = [
                    ChatMessage(content=system, role="system"),
                    ChatMessage(content=user_prompt, role="user")
                ]
                
                logging.info(f"Prompt for goal '{goal_name[:5]}...': {user_prompt}")
                
                response = ai21_client.chat.completions.create(
                    messages=messages,
                    model="jamba-1.5-mini",
                    stream=False,
                )
                
                advice = response.choices[0].message.content.strip()[:160]  # Ensure it's within 90 chars limit
                
                notifications.append({
                    "goal_id": goal_id,
                    "user_id": user_id,
                    "message": advice,
                    "status": "success"
                })
            except ValueError as ve:
                logging.error(f"Validation error for goal '{goal.get('goal_name', 'unknown')}': {str(ve)}")
                notifications.append({
                    "goal_id": goal.get("goal_id", "unknown"),
                    "user_id": goal.get("user_id", "unknown"),
                    "message": f"Error: {str(ve)}",
                    "status": "error"
                })
            except Exception as e:
                logging.error(f"Unexpected error processing goal '{goal.get('goal_name', 'unknown')}': {str(e)}")
                notifications.append({
                    "goal_id": goal.get("goal_id", "unknown"),
                    "user_id": goal.get("user_id", "unknown"),
                    "message": "Error inesperado al generar la notificación.",
                    "status": "error"
                })
        
        logging.info(f"Generated Notifications: {notifications}")
        return jsonify({"notifications": notifications})
    except Exception as e:
        logging.error(f"General error generating notifications: {str(e)}")
        return jsonify({"error": f"General error generating notifications: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)