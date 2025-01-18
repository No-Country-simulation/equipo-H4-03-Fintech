import os
import psycopg2
from psycopg2 import pool
from psycopg2.errors import OperationalError
from flask import g
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database connection parameters
DB_CONFIG = {
    'dbname': os.getenv('DB_NAME'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'host': os.getenv('DB_HOST'),
    'port': os.getenv('DB_PORT')
}

# Validate environment variables
def validate_env_vars():
    missing_vars = [key for key, value in DB_CONFIG.items() if not value]
    if missing_vars:
        raise ValueError(f"Missing environment variables: {', '.join(missing_vars)}")

# Initialize connection pool
try:
    validate_env_vars()
    connection_pool = psycopg2.pool.ThreadedConnectionPool(1, 20, **DB_CONFIG)
except (ValueError, OperationalError) as e:
    print(f"Error initializing database connection pool: {e}")
    raise

def get_db():
    """Get a database connection from the pool."""
    if 'db' not in g:
        try:
            g.db = connection_pool.getconn()
        except psycopg2.Error as e:
            print(f"Error getting connection from pool: {e}")
            raise
    return g.db

def close_db(e=None):
    """Return database connection to the pool."""
    db = g.pop('db', None)
    if db is not None:
        try:
            connection_pool.putconn(db)
        except psycopg2.Error as e:
            print(f"Error returning connection to pool: {e}")

def init_app(app):
    """Register the database teardown with Flask app."""
    app.teardown_appcontext(close_db)