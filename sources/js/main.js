// Function to add the "show" class when elements come into view
function animateOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}

// Create an observer for the elements with the "animated" class
const animatedElements = document.querySelectorAll('.animated');
const observer = new IntersectionObserver(animateOnScroll, { rootMargin: '-50px' });
animatedElements.forEach(element => {
  observer.observe(element);
});
