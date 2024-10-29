document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        background: formData.get('background'),
    };
    
    fetch('/submit-application', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Application submitted successfully!');
    })
    .catch(error => console.error('Error:', error));
});