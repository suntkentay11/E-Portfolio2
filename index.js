// template_isfvar8
// service_v4kj6z2
// Pw8booTC_ZJ5jYt8K

function content(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += (" modal__overlay--visible");
    emailjs
    .sendForm('service_v4kj6z2', 'template_isfvar8', event.target, 'Pw8booTC_ZJ5jYt8K')
    .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += (" modal__overlay--visible");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at suntkentay@gmail.com"
        );
    })
}