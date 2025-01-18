from flask import Blueprint, request, render_template, redirect, url_for, session
from connect_db import get_db

personal_info_blueprint = Blueprint('personal_info', __name__)

@personal_info_blueprint.route('/profile', methods=['GET', 'POST'])
def profile():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))
    
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        sex = request.form['sex']
        date_of_birth = request.form['date_of_birth']
        
        db = get_db()
        with db.cursor() as cursor:  # Use context manager for cursor
            cursor.execute('''
                INSERT INTO users_profile (user_id, first_name, last_name, sex, date_of_birth) 
                VALUES (%s, %s, %s, %s, %s)
            ''', (user_id, first_name, last_name, sex, date_of_birth))
        db.commit()
        return redirect(url_for('personal_info.address'))
    
    return render_template('personal_info/profile.html')

@personal_info_blueprint.route('/address', methods=['GET', 'POST'])
def address():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))
    
    if request.method == 'POST':
        country = request.form['country']
        city = request.form['city']
        street = request.form['street']
        number = request.form['number']
        postal_code = request.form['postal_code']
        
        db = get_db()
        with db.cursor() as cursor:
            cursor.execute('''
                INSERT INTO users_profile (user_id, country, city, street, number, postal_code) 
                VALUES (%s, %s, %s, %s, %s, %s)
            ''', (user_id, country, city, street, number, postal_code))
        db.commit()
        return redirect(url_for('personal_info.identification'))
    
    return render_template('personal_info/address.html')

@personal_info_blueprint.route('/identification', methods=['GET', 'POST'])
def identification():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))
    
    if request.method == 'POST':
        dni = request.form['dni']
        
        db = get_db()
        with db.cursor() as cursor:
            cursor.execute('''
                INSERT INTO users_profile (user_id, dni) 
                VALUES (%s, %s)
            ''', (user_id, dni))
        db.commit()
        return redirect(url_for('personal_info.decision'))
    
    return render_template('personal_info/identification.html')

@personal_info_blueprint.route('/decision', methods=['GET', 'POST'])
def decision():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))
    
    if request.method == 'POST':
        choice = request.form['choice']
        if choice == 'continue':
            return redirect(url_for('questionnaire.financial_knowledge'))
        elif choice == 'later':
            return redirect(url_for('home.home'))
    
    return render_template('personal_info/decision.html')
