// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send form data to server (example code)
    // You would need to implement your own server-side functionality for form submission
    // Here, we're using the Fetch API to send a POST request to a server endpoint
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        // You can display a success message or perform any other actions
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during form submission
        console.error('Error:', error);
    });
});