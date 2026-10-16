# Ganesh Dental Clinic — website

A static, single-page site built from `project/Ganesh Dental Home v2.dc.html`. It has no build step. GitHub Pages serves this `docs/` folder from the `main` branch (Settings → Pages → Deploy from a branch → `main` / `/docs`). `.nojekyll` tells Pages to serve the files as they are.

- `index.html`: the page content, plus SEO and `schema.org` Dentist data
- `css/styles.css`: Broadsheet design tokens and the site layout (breakpoints at 1000px, 860px and 600px)
- `js/main.js`: the open/closed status in India time and the WhatsApp enquiry form
- `favicon.svg`: the "G" roundel

Online booking goes to https://clinicdesk-app.netlify.app/book/ganesh-dental-home.

## Still dummy content (replace when the clinic provides it)
- Service descriptions, the dentist's quote, the "Before you come" tips and the FAQ answers
- The hero shop-front drawing: replace the `.shopfront` block with a real `<img>`
- The dentist portrait: replace the `.portrait` SVG with `<img src="images/dr-mahaldar.jpg" alt="Dr. Ganesh Ch. Mahaldar">`
- The pincode 764073 and the 8 a.m.–8 p.m. hours, which also appear in `main.js` and the JSON-LD data
