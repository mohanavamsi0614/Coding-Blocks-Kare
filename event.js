document.getElementById('event-registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(this);
    console.log(this.action);
    // Send data to the Google Apps Script via fetch
    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Show success message
        document.getElementById('success-message').style.display = 'block';
        this.reset(); // Optionally reset the form after submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.'); // Optionally show error message
    });
});
