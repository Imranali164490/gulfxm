document.getElementById('newsletter-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = e.target.email.value;

    const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        alert('Thank you for subscribing!');
    } else {
        alert('There was an error. Please try again.');
    }
});
