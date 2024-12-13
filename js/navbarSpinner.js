function showPageSpinner() {
    const pageSpinner = document.getElementById('page-spinner');
    if (pageSpinner) {
        pageSpinner.style.display = 'flex';
    }
}

function hidePageSpinner() {
    const pageSpinner = document.getElementById('page-spinner');
    if (pageSpinner) {
        pageSpinner.style.display = 'none';
    }
}

window.addEventListener('load', hidePageSpinner);

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        showPageSpinner();
        
        setTimeout(hidePageSpinner, 2000);
    });
});


document.querySelector('a[href="#signupForm"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#signupForm').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});
</script>