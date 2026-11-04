const form = document.getElementById("ctaForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    status.classList.remove("error", "success");

    if (!valid) {
      status.textContent = "Пожалуйста, введите корректный e-mail.";
      status.classList.add("error");
      form.email.focus();
      return;
    }

    status.textContent = "Спасибо! Сообщим о запуске MVP первыми. 🎉";
    status.classList.add("success");
    form.reset();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".card, .scenario, .preview-item").forEach((el) => {
  observer.observe(el);
});
