# Daniyar Ospanov – Portfolio (SIS 1)

**Live site:** https://1-daniyar.github.io/iwamad-sis1-portfolio/

## About the site
This is my personal portfolio built with plain HTML5, CSS3 and vanilla JavaScript, with no frameworks. It is one page with three sections – About Me, Projects and Contact – and a navigation menu. The Projects section links to three small working tools I built, and the Contact form validates input by itself without sending anything.

## Design decisions
1. **Mobile-first layout with one clear change.** I wrote the styles for 375px first (one column, navigation under the logo) and at 900px and wider the About section becomes two columns and the projects become three cards in a row.
2. **Design tokens in CSS variables.** All colours, font sizes (14/16/20/28/40px) and spacing (multiples of 8px) are defined once in `:root`. Dark mode only redefines the colour variables, so the whole page switches with one attribute.
3. **Validation with specific messages.** Each field has its own message: an empty field says what is missing, a wrong email shows the correct format, and a valid form shows a success message. Errors are linked to inputs with `aria-describedby`, so screen readers announce them.
