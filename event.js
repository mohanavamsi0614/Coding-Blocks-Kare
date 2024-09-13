document.getElementById('event-registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    console.log(this.name.value);

    fetch("https://cb-kare-server.onrender.com/event/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullName: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            event: this.event.value,
            registerNumber: this.reg_no.value,
            department: this.department.value,
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 201){
            console.log(data);
            document.getElementById('success-message').innerHTML = data.message;
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('success-message').style.color = 'green';

            this.reset(); 
        }
        else{
            console.log(data);
            document.getElementById('success-message').innerHTML = data.message;
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('success-message').style.color = 'red';

        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.'); 
    });
});
