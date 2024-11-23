# Word to PDF Converter

This is a web application that allows users to upload a `.docx` file, convert it to PDF, and optionally apply a password to the resulting PDF file. The app is built using **Flask**, **Docker**, and is deployable in **Kubernetes**.

## Setup Instructions

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/word-to-pdf-converter.git
   cd word-to-pdf-converter
    ```

2. Install dependencies:
    ```bash
   pip install -r requirements.txt
    ```

3. Run the Flask app:
    ```bash
    python app. py
    ```

### Docker

1. Build the Docker image:
    ```bash
    docker build -t word-to-pdf-converter .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 5000:5000 word-to-pdf-converter
    ```

### Deployment
1. Apply the deployment:
    ```bash
    kubectl apply -f deployment.yaml
    ```

2. Apply the service:
    ```bash
    kubectl apply -f service.yaml
    ```

3. Check the status of your deployment:
    ```bash
    kubectl get deployments
    ```
4. To get the external IP address of your service (if using a cloud provider with LoadBalancer type):
    ```bash
    kubectl get svc word-to-pdf-converter-service
    ```

** If you're using a local Kubernetes cluster (e.g., Minikube), you may need to run:
     ```bash
    kubectl port-forward svc/word-to-pdf-converter-service 5000:80
    ```
