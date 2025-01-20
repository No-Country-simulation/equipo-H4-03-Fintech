from flask import Flask, request, jsonify
from ai21 import AI21Client
from ai21.models.chat import ChatMessage
import os
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

# Initialize the Flask application
app = Flask(__name__)

# Initialize the logger
logging.basicConfig(level=logging.INFO)

# Initialize AI21 client
ai21_client = AI21Client(api_key=os.getenv("AI21_API_KEY"))

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        if not request.is_json:
            return jsonify({"error": "Content-Type must be application/json"}), 415

        data = request.get_json()
        user_profile = data.get("user_profile")
        
        if user_profile is None:
            return jsonify({"error": "Missing 'user_profile' in JSON data"}), 400

        # Extract necessary fields from the user's profile
        name = user_profile.get("name")
        age = user_profile.get("age", "Unknown")
        income = user_profile.get("income")
        risk_tolerance = user_profile.get("risk_tolerance")
        goals = user_profile.get("goals")
        
        # Create a prompt using the user's profile, explicitly asking for Spanish
        prompt = (f"Proporciona una recomendación financiera personalizada para {name}, que tiene {age} años. {name} tiene un ingreso anual de ${income} y una tolerancia al riesgo de {risk_tolerance}. Los objetivos financieros de {name} son: {goals}. Proporciona un párrafo corto en español con consejos específicos y acciones prácticas.")

        # Prepare messages for AI21 chat completion
        messages = [
            ChatMessage(content="Eres un asesor financiero.", role="system"),
            ChatMessage(content=prompt, role="user")
        ]

        # Log the prompt
        logging.info(f"Prompt: {prompt}")

        # Use the client to make the API call for chat completion
        response = ai21_client.chat.completions.create(
            messages=messages,
            model="jamba-1.5-mini",
            stream=False,
        )

        # Since streaming is False, we'll handle the response differently
        recommendation = response.choices[0].message.content

        # Log the response
        logging.info(f"Response: {recommendation}")

        return jsonify({"recommendation": recommendation})

    except Exception as e:
        # General exception catch to handle any errors from AI21 or elsewhere
        logging.error(f"Error during recommendation: {str(e)}")
        return jsonify({"error": f"Error during recommendation: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)