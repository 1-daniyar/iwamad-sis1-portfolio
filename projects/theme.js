/* Reuse the theme chosen on the main page */
(function () {
  var t = "light";
  try {
    t = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  } catch (e) {}
  document.documentElement.setAttribute("data-theme", t);
})();
