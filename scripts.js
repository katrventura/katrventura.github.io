function scrollStories() {
  const dom = document.querySelector('#portfolio')
  dom.scrollIntoView({
    behavior: "smooth"
  });
}

function filterItems(tag) {
    var items = document.querySelectorAll('.columns .portfolio-item');
    items.forEach(function (item) {
        if (tag === 'All' || item.classList.contains(tag)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        // Set scroll-behavior to smooth
        document.body.style.scrollBehavior = 'smooth';
        section.scrollIntoView({ behavior: 'smooth' });
        // Reset scroll-behavior to auto after scrolling
        setTimeout(function() {
            document.body.style.scrollBehavior = 'auto';
        }, 1000); // Adjust the delay as needed
    }
}

