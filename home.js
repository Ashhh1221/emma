document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // Smooth Scroll for Anchor Links
  // ============================
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // prevent default jump

      const targetID = this.getAttribute('href').substring(1); // get id without #
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        const header = document.getElementById('mainHeader');
        const headerHeight = header ? header.offsetHeight : 0;

        // Calculate position considering sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        // Smooth scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

function filterLetters(category) {
  const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
      if (category === 'all') {
        letter.style.display = 'block';
      } else {
        if (letter.querySelector('.letter-tag.' + category)) {
          letter.style.display = 'block';
        } else {
          letter.style.display = 'none';
        }
      }
    });
  }

