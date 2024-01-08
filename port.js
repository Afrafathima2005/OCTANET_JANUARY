document.addEventListener('DOMContentLoaded', function() {
  let headline = document.querySelector('.headline');
  let subheadline = document.querySelector('.subheadline');

  let text = ['Passion', 'Creativity', 'Innovation'];
  let wordIndex = 0;
  let letterIndex = 0;

  function type() {
    if (letterIndex < text[wordIndex].length) {
      headline.innerHTML += text[wordIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1000);
    }
  }
document.addEventListener('DOMContentLoaded', function() {
  let sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  function showSection() {
    sections[currentSectionIndex].style.opacity = 1;
    currentSectionIndex++;

    if (currentSectionIndex < sections.length) {
      setTimeout(showSection, 500);
    }
  }

  // Initially hide all sections
  sections.forEach((section) => {
    section.style.opacity = 0;
  });

  // Start showing sections when the DOM is loaded
  setTimeout(showSection, 500);
})

  function erase() {
    if (letterIndex > 0) {
      headline.innerHTML = text[wordIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(erase, 50);
    } else {
      wordIndex++;
      if (wordIndex >= text.length) wordIndex = 0;
      setTimeout(type, 500);
    }
  }

  setTimeout(type, 500);
});

// Form validation
function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return false;
  }

  // You can add more advanced validation logic if needed

  alert('Form submitted successfully!');
  return true;
}