
const scriptURL = 'https://script.google.com/macros/s/AKfycbxIGVmr8RSRpqUALdKXy0TOSB26FO8-F4gOwre7hUiAcrlIqfO7WWLjjMU0YntIegGm/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})