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
    required_fields = ["goal_id", "user_id", "goal_name", "target_amount", "saved_amount"]
    for field in required_fields:
        if field not in goal:
            raise ValueError(f"Missing field '{field}' in goal data.")

def months_until(end_date):
    today = datetime.now().date()
    end = datetime.strptime(end_date, "%Y-%m-%d").date() if end_date != "unknown" else today
    return max((end - today).days // 30, 1)  # Avoid division by zero

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
                
                # Calculate progress percentage
                progress_percentage = round((saved_amount / target_amount) * 100, 1) if target_amount > 0 else 0
                
                # Prepare AI21 prompt
                system_prompt = (
                    "Eres un asesor financiero. Genera notificaciones cortas y motivadoras "
                    "para ayudar a los usuarios a alcanzar sus metas de ahorro (máximo 90 caracteres)."
                )
                user_prompt = f"Meta: {goal_name}. Avance: {progress_percentage}%. Motiva al usuario a continuar ahorrando."
                
                messages = [
                    ChatMessage(content=system_prompt, role="system"),
                    ChatMessage(content=user_prompt, role="user")
                ]
                
                logging.info(f"Prompt for goal '{goal_name[:5]}...': {user_prompt}")
                
                response = ai21_client.chat.completions.create(
                    messages=messages,
                    model="jamba-1.5-large",
                    stream=False,
                )
                
                advice = response.choices[0].message.content.strip()[:100]
                
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
