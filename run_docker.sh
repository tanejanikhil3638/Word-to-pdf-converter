#!/bin/bash

# Step 1: Build the Docker image
echo "Building Docker image..."
docker build -t word-to-pdf-converter .

# Step 2: Run the Docker container
echo "Running Docker container..."
docker run -d -p 5000:5000 word-to-pdf-converter

# Output the status of the container
echo "Container is running on http://localhost:5000"
