/* ===== Theme toggle ===== */
var root = document.documentElement;
var toggle = document.getElementById("theme-toggle");
var toggleLabel = document.getElementById("theme-label");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  var isDark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggleLabel.textContent = isDark ? "Light mode" : "Dark mode";
  try { localStorage.setItem("theme", theme); } catch (e) { /* storage may be blocked */ }
}

applyTheme(root.getAttribute("data-theme") || "light");

toggle.addEventListener("click", function () {
  applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ===== Contact form validation (written by hand) ===== */
var form = document.getElementById("contact-form");
var success = document.getElementById("form-success");

// simple email pattern: text@text.text, no spaces
var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, message) {
  var errorBox = document.getElementById(input.id + "-error");
  errorBox.textContent = message;
  input.classList.add("invalid");
  input.setAttribute("aria-invalid", "true");
}

function clearError(input) {
  document.getElementById(input.id + "-error").textContent = "";
  input.classList.remove("invalid");
  input.removeAttribute("aria-invalid");
}

function validateName(input) {
  if (input.value.trim() === "") {
    showError(input, "Please enter your name.");
    return false;
  }
  clearError(input);
  return true;
}

function validateEmail(input) {
  var value = input.value.trim();
  if (value === "") {
    showError(input, "Please enter your email address.");
    return false;
  }
  if (!EMAIL_PATTERN.test(value)) {
    showError(input, "This email looks incorrect. Use the format name@example.com.");
    return false;
  }
  clearError(input);
  return true;
}

function validateMessage(input) {
  if (input.value.trim() === "") {
    showError(input, "Please write a message.");
    return false;
  }
  clearError(input);
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  success.textContent = "";

  var nameOk = validateName(form.elements.name);
  var emailOk = validateEmail(form.elements.email);
  var messageOk = validateMessage(form.elements.message);

  if (nameOk && emailOk && messageOk) {
    var firstName = form.elements.name.value.trim().split(" ")[0];
    success.textContent = "Thank you, " + firstName + "! Your message was validated successfully (nothing is actually sent).";
    form.reset();
  } else {
    // move focus to the first field with a problem
    var firstInvalid = form.querySelector(".invalid");
    if (firstInvalid) firstInvalid.focus();
  }
});

// clear an error as soon as the user fixes the field
form.elements.name.addEventListener("input", function () { if (this.classList.contains("invalid")) validateName(this); });
form.elements.email.addEventListener("input", function () { if (this.classList.contains("invalid")) validateEmail(this); });
form.elements.message.addEventListener("input", function () { if (this.classList.contains("invalid")) validateMessage(this); });
