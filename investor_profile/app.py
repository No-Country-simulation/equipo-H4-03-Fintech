from flask import Flask, redirect, url_for, request, session, render_template
import jwt
import os
from personal_info import personal_info_blueprint
from questionnaire import questionnaire_blueprint

app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'default-secret-key')  # Use env var or default

JWT_SECRET = os.environ.get('JWT_SECRET', 'default-jwt-secret')  # Use env var or default

# Register blueprints
app.register_blueprint(personal_info_blueprint, url_prefix='/personal_info')
app.register_blueprint(questionnaire_blueprint, url_prefix='/questionnaire')

# Middleware to validate JWT
def validate_jwt(token):
    try:
        decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])  # Changed to HS256
        return decoded
    except jwt.ExpiredSignatureError:
        print("Token has expired")
        return None
    except jwt.InvalidTokenError:
        print("Invalid token")
        return None

@app.before_request
def check_login():
    if request.endpoint not in ('login', 'static'):
        token = request.cookies.get('auth_token')
        if token:
            user_data = validate_jwt(token)
            if user_data:
                session['user_id'] = user_data['sub']
                return
        session.pop('user_id', None)  # Clear session if token invalid or expired
        return redirect(url_for('login'))

@app.route('/login')
def login():
    # Redirect to Java-based login page or show a redirect page with meta refresh
    return redirect("URL_OF_JAVA_LOGIN_PAGE")

@app.route('/home')
def home():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=False)  # Set to False for production