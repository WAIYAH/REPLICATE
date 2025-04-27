document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
  
    // Show or hide the "Back to Top" button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
  
    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });