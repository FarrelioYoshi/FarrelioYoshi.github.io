function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.scroll-animate').forEach(card => {
  observer.observe(card);
});
