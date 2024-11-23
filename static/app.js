document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const passwordInput = document.getElementById('passwordInput');
    const file = fileInput.files[0];
    const password = passwordInput.value || null; // Get password if entered, otherwise null

    if (!file) {
        alert('Please select a file before uploading.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    if (password) {
        formData.append('password', password);  // Add password if provided
    }

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            document.getElementById('metadata').innerHTML = `
                <strong>Metadata:</strong>
                <div class="metadata-box">
                    <div><strong>Paragraph Count:</strong> ${result.metadata.paragraph_count}</div>
                    <div><strong>Word Count:</strong> ${result.metadata.word_count}</div>
                </div>
            `;

            document.getElementById('downloadLink').innerHTML = `
                <a href="${result.download_url}" target="_blank" style="color: blue; text-decoration: underline;">
                    Download PDF
                </a>`;
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
});
