FROM python:3.11
WORKDIR /finance-llm-service

# Install the application dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . /finance-llm-service/
EXPOSE 5000

# Run the application
CMD ["python", "recommend.py"]