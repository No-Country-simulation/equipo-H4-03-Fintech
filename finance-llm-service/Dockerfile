# Description: Dockerfile for the finance-llm-service application
FROM python:3.11-slim
WORKDIR /finance-llm-service

# Install the application dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . /finance-llm-service/
EXPOSE 5000

# Run the application
CMD ["gunicorn", "-b", "0.0.0.0:5000", "recommend:app"]