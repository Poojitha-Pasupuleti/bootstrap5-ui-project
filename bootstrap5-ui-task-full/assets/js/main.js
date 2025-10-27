const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault(); // prevent actual form submission to see modal
  // show modal
  const modal = new bootstrap.Modal(document.getElementById('successModal'));
  modal.show();
  form.reset(); // clear form fields
});

// Lightweight JS for form validation and behaviors
document.addEventListener('DOMContentLoaded', function(){
// Bootstrap client-side form validation
var forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms).forEach(function(form){
form.addEventListener('submit', function(event){
if(!form.checkValidity()){
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false)
})


// Modal form submit example (doesn't actually send anywhere)
var modalSubmit = document.getElementById('modalSubmit')
if(modalSubmit){
modalSubmit.addEventListener('click', function(){
var email = document.getElementById('modalEmail')?.value || '';
var note = document.getElementById('modalNote')?.value || '';
// Display a simple confirmation and close modal
if(email){
alert('Thanks! We received your input.');
var modalEl = document.getElementById('exampleModal')
var bsModal = bootstrap.Modal.getInstance(modalEl)
bsModal.hide()
document.getElementById('modalForm')?.reset()
} else {
alert('Please enter your email.')
}
})
}


// Newsletter form demo
var newsletter = document.getElementById('newsletterForm')
if(newsletter){
newsletter.addEventListener('submit', function(e){
e.preventDefault();
var em = document.getElementById('newsletterEmail').value;
if(em){
alert('Subscribed with ' + em + ' (demo)')
newsletter.reset()
}
})
}
});

// Fade-in cards on scroll
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
