
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");
const savedTheme = localStorage.getItem("theme") || "light";

function applyTheme(theme) {
  document.body.dataset.theme = theme;

  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.dataset.theme;
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});

document.querySelectorAll(".favorite").forEach((button) => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    const isActive = button.classList.toggle("active");

    button.textContent = isActive ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(isActive));
  });
});
