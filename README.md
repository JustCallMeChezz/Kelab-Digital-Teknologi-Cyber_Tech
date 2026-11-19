# Kelab Teknologi Digital CyberTech

Website for our club (CyberTech, JMTI). Built with Vue 3 + Vite.

## Run it

```bash
npm install
npm run dev
```

Then open the link Vite gives you.

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Pages

- `index.html` / `testing2.html` - home
- `kelab.html` - the club
- `about.html` - about, leaders, skills
- `Project.html` - projects and workshops (`project.html` is just an alias for old links)
- `service.html` - contact
- `pendaftaran.html` - registration

## Forms

Forms aren't connected to a server yet. They only check your input in the browser. Registration can be emailed to `kelabdigital@gmail.com` (passwords are never included).

## Deploy

Push to GitHub, set Pages source to GitHub Actions, and run the workflow in `.github/workflows/deploy.yml`. Don't forget to upload the hidden `.github/` folder and `.gitignore` too.

## Credits

Images and Mona Sans font are in `public/`. Font is under the SIL OFL 1.1 (see `public/fonts/OFL.txt`).

## Note

Im not a student on JMTI, this website just a template for my friend... if he want it...
