// Example JavaScript for form validation or other interactive features
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Your custom form validation or submission logic can go here
    // For example, you can validate inputs and then submit using fetch or XMLHttpRequest
    // Example:
    // fetch('submit_form.php', {
    //     method: 'POST',
    //     body: new FormData(document.getElementById('contact-form'))
    // })
    // .then(response => {
    //     if (response.ok) {
    //         // Handle successful form submission, e.g., show success message
    //     } else {
    //         // Handle errors, e.g., show error message
    //     }
    // })
    // .catch(error => console.error('Error submitting form:', error));
});
