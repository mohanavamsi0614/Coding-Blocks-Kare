document.getElementById('event-registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    console.log(this.name.value);
    const formdata={
        fullName: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        event: this.Year.value,
        registerNumber: this.reg_no.value,
        department: this.department.value,
    }

    fetch("https://cb-kare-server.onrender.com/pay/createOrder", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: 50,
            currency: "INR",
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'created') {
            var options = {
                key: 'rzp_test_EzUsahd1tsDo2l', 
                amount: data.amount, 
                currency: data.currency,
                name: 'Event Registration',
                description: 'Register for the event',
                order_id: data.id, 
                handler: function (response) {
                    fetch("https://cb-kare-server.onrender.com/pay/verify", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ...formdata,payment_id: response.razorpay_payment_id 
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if(data.status === 200){
                            console.log(data);
                            document.getElementById('success-message').innerHTML = data.message;
                            document.getElementById('success-message').style.display = 'block';
                            document.getElementById('success-message').style.color = 'green';
                            this.reset(); 
                        } else {
                            console.log(data);
                            document.getElementById('success-message').innerHTML = data.message;
                            document.getElementById('success-message').style.display = 'block';
                            document.getElementById('success-message').style.color = 'red';
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('There was an error processing your registration. Please try again.'); 
                    });
                },
                prefill: {
                    name: this.name.value,
                    email: this.email.value,
                    contact: this.phone.value
                },
                theme: {
                    color: "#F37254"
                }
            };

            var rzp1 = new Razorpay(options);
            rzp1.open();
        } else {
            console.log(data);
            alert('Failed to create order. Please try again.'); 
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error creating the order. Please try again.'); 
    });
});
