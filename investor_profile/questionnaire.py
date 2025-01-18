from flask import Blueprint, request, render_template, redirect, url_for, session
from connect_db import get_db

questionnaire_blueprint = Blueprint('questionnaire', __name__)

@questionnaire_blueprint.route('/financial_knowledge', methods=['GET', 'POST'])
def financial_knowledge():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login.login'))
    
    # get the value of the form
    if request.method == 'POST':
        question1_value = int(request.form.get('question1', 0))
        question2_values = request.form.getlist('question2')
        question3_value = int(request.form.get('question3', 0))
        
        # calculate the score
        know_score = question1_value + sum([int(value) for value in question2_values]) + question3_value
        session['know_score'] = know_score
        return redirect(url_for('questionnaire.financial_behavior'))
    
    return render_template('financial_knowledge.html')

@questionnaire_blueprint.route('/financial_goal', methods=['GET', 'POST'])
def financial_goal():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login.login'))
    
    # get the value of the form
    if request.method == 'POST':
        question1_value = int(request.form.get('question1', 0))
        question2_value = int(request.form.get('question2', 0))
        
        # calculate the score
        goal_score = question1_value + question2_value
        session['goal_score'] = goal_score
        return redirect(url_for('questionnaire.financial_knowledge'))
    
    return render_template('financial_goal.html')

@questionnaire_blueprint.route('/risk_tolerance', methods=['GET', 'POST'])
def risk_tolerance():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login.login'))
    
    # get the value of the form
    if request.method == 'POST':
        question1_value = int(request.form.get('question1', 0))
        question2_value = int(request.form.get('question2', 0))
        question3_value = int(request.form.get('question3', 0))
        
        # calculate the score
        risk_score = question1_value + question2_value + question3_value
        session['risk_score'] = risk_score
        return redirect(url_for('questionnaire.savings_capacity'))
    
    return render_template('risk_tolerance.html')

@questionnaire_blueprint.route('/savings_capacity', methods=['GET', 'POST'])
def savings_capacity():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login.login'))
    
    # get the value of the form
    if request.method == 'POST':
        savingsquestion1_value = int(request.form.get('savingsquestion1', 0))
        savingsquestion2_value = int(request.form.get('savingsquestion2', 0))
        
        # calculate the score
        save_score = savingsquestion1_value + savingsquestion2_value
        session['save_score'] = save_score
        return redirect(url_for('result.result'))
    
    return render_template('savings_capacity.html')

def sum_score():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login.login'))
    
    know_score = session.get('know_score', 0)
    goal_score = session.get('goal_score', 0)
    risk_score = session.get('risk_score', 0)
    save_score = session.get('save_score', 0)
    
    return know_score + goal_score + risk_score + save_score

def risk_level(total_score):
    if total_score <= 10:
        return 'Conservador'
    elif total_score <= 15:
        return 'Moderado'
    else:
        return 'Agressivo'

def save_result():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login.login'))
    
    total_score = sum_score()
    risk = risk_level(total_score)
    
    db = get_db()
    db.execute('INSERT INTO user_profile (user_id, risk) VALUES (%s, %s)', (user_id, risk))
    db.commit()
    return redirect(url_for('result.result'))

@questionnaire_blueprint.route('/result', methods=['GET'])
def result():
    total_score = sum_score()
    risk = risk_level(total_score)
    save_result()  # Save the result before showing it
    return render_template('result.html', risk=risk, total_score=total_score)