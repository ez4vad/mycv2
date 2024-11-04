const scriptURL = 'https://script.google.com/macros/s/AKfycbz7lHNNXpiShcUR-cj6IfBiQuf12IgpqWBWTh-l2jnXveqP2EOl1McBC39CYKAqY_Lw/exec'


const form = document.forms['form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})