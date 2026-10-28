@import 'tailwindcss';

@theme {
  --color-vlas-navy: #0d1c32;
  --color-vlas-ink: #081220;
  --color-vlas-red: #ab131e;
  --color-vlas-slate: #aab3bf;
  --color-vlas-white: #ffffff;
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: Arial, Helvetica, sans-serif;
}

@layer base {
  html {
    background: var(--color-vlas-navy);
  }

  body {
    min-width: 320px;
    margin: 0;
    background: var(--color-vlas-navy);
    color: var(--color-vlas-white);
    font-family: var(--font-sans);
  }

  a {
    color: inherit;
  }
}

.site-shell {
  position: relative;
  display: flex;
  min-height: 100svh;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-vlas-navy);
}

.site-shell::before {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.16'/%3E%3C/svg%3E");
  content: '';
  opacity: 0.18;
  pointer-events: none;
}

.site-header,
.hero,
footer {
  position: relative;
  z-index: 1;
  width: min(100% - 3rem, 82rem);
  margin-inline: auto;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2.25rem 1.75rem;
  border-bottom: 1px solid rgb(255 255 255 / 14%);
}

.brand-logo {
  width: 15.5rem;
  height: 4.2rem;
  object-fit: cover;
  object-position: left center;
  transition:
    filter 450ms ease,
    transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.brand-logo:hover {
  filter: brightness(1.12);
  transform: translateY(-0.2rem) scale(1.07);
}

.header-note {
  color: var(--color-vlas-slate);
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition:
    color 400ms ease,
    letter-spacing 550ms cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 550ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.header-note:hover {
  color: var(--color-vlas-white);
  letter-spacing: 0.2em;
  transform: scale(1.08);
}

.hero {
  display: grid;
  flex: 1;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 6rem;
  padding-block: 5rem;
}

.hero-content {
  max-width: 52rem;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.7rem;
  color: #d9dee5;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow-mark {
  width: 2.6rem;
  height: 0.18rem;
  background: var(--color-vlas-red);
}

h1 {
  margin: 0;
  color: var(--color-vlas-white);
  font-family: var(--font-serif);
  font-size: clamp(3.4rem, 7.2vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 0.92;
  -webkit-text-stroke: 0 transparent;
  transition:
    filter 500ms ease,
    font-weight 600ms ease,
    -webkit-text-stroke 600ms ease,
    transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-origin: left center;
}

h1:hover {
  filter: drop-shadow(0 0.8rem 1.4rem rgb(0 0 0 / 22%));
  font-weight: 900;
  -webkit-text-stroke: 0.035rem currentColor;
  transform: translateX(0.35rem) scale(1.045);
}

h1 span {
  color: #c5cbd3;
  transition: color 500ms ease;
}

h1:hover span {
  color: var(--color-vlas-white);
}

.brand-message {
  margin: 1.6rem 0 0;
  color: var(--color-vlas-white);
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 700;
  width: fit-content;
  transition:
    filter 450ms ease,
    transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-origin: left center;
}

.brand-message:hover {
  filter: drop-shadow(0 0.5rem 0.8rem rgb(0 0 0 / 20%));
  transform: scale(1.075);
}

.intro {
  max-width: 39rem;
  margin: 1rem 0 0;
  color: #bec6d0;
  font-size: clamp(1rem, 1.4vw, 1.16rem);
  line-height: 1.7;
}

.intro span {
  display: inline-block;
  margin-right: 0.28em;
  transition:
    color 260ms ease,
    transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-origin: center bottom;
}

.intro span:hover {
  color: var(--color-vlas-white);
  transform: scale(1.18) translateY(-0.08em);
}

.hero-seal {
  width: 18rem;
  padding: 3.25rem 2rem;
  border: 1px solid rgb(255 255 255 / 18%);
  color: #8994a2;
  text-align: center;
  transition:
    border-color 400ms ease,
    color 400ms ease,
    transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero-seal:hover {
  border-color: rgb(255 255 255 / 38%);
  color: #b9c0c9;
  transform: translateY(-0.45rem);
}

.seal-stars {
  display: flex;
  justify-content: center;
  gap: 0.7em;
  color: var(--color-vlas-white);
  font-size: 2.25rem;
}

.seal-stars span {
  display: inline-block;
  transition:
    color 350ms ease,
    filter 400ms ease,
    transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.seal-stars span:hover {
  color: #dfe4ea;
  filter: drop-shadow(0 0.4rem 0.5rem rgb(0 0 0 / 28%));
  transform: scale(1.35) translateY(-0.08em);
}

.seal-rule {
  width: 2.5rem;
  height: 0.16rem;
  margin: 1.35rem auto;
  background: var(--color-vlas-red);
  transition: width 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero-seal:hover .seal-rule {
  width: 8rem;
}

.hero-seal p {
  margin: 0.65rem 0;
  font-family: var(--font-serif);
  font-size: 2.5rem;
  letter-spacing: 0.04em;
  line-height: 1.05;
  transition:
    color 350ms ease,
    letter-spacing 500ms cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero-seal p:hover {
  color: var(--color-vlas-white);
  letter-spacing: 0.08em;
  transform: scale(1.18);
}

footer {
  display: flex;
  justify-content: space-between;
  padding-block: 1.3rem;
  border-top: 1px solid rgb(255 255 255 / 14%);
  color: #6f7b89;
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

footer p {
  margin: 0;
}

@keyframes reveal-down {
  from {
    opacity: 0;
    transform: translateY(-1.2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(1.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes reveal-left {
  from {
    opacity: 0;
    transform: translateX(-1.8rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes reveal-right {
  from {
    opacity: 0;
    transform: translateX(2rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.brand-logo,
.header-note,
.eyebrow,
h1,
.brand-message,
.intro,
.hero-seal,
footer {
  animation-duration: 1700ms;
  animation-fill-mode: backwards;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.brand-logo {
  animation-name: reveal-down;
  animation-delay: 160ms;
}

.header-note {
  animation-name: reveal-down;
  animation-delay: 320ms;
}

.eyebrow {
  animation-name: reveal-left;
  animation-delay: 440ms;
}

h1 {
  animation-name: reveal-left;
  animation-delay: 640ms;
}

.brand-message {
  animation-name: reveal-up;
  animation-delay: 880ms;
}

.intro {
  animation-name: reveal-up;
  animation-delay: 1080ms;
}

.hero-seal {
  animation-name: reveal-right;
  animation-delay: 840ms;
}

footer {
  animation-name: reveal-up;
  animation-delay: 1520ms;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-delay: 0ms !important;
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
  }
}

@media (min-width: 761px) and (max-width: 1050px) {
  .hero {
    gap: 3rem;
  }

  .hero-seal {
    width: 16rem;
    padding-inline: 1.5rem;
  }
}

@media (max-width: 760px) {
  .site-header,
  .hero,
  footer {
    width: min(100% - 2.5rem, 82rem);
  }

  .site-header {
    padding-block: 1.5rem;
  }

  .brand-logo {
    width: 12.5rem;
    height: 3.4rem;
  }

  .header-note {
    display: none;
  }

  .hero {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 3.5rem;
    padding-block: 4rem;
  }

  .hero-seal {
    display: block;
    width: min(100%, 18rem);
    align-self: center;
  }

  h1 {
    font-size: clamp(3.25rem, 15vw, 5rem);
  }

  footer {
    gap: 1rem;
  }

  footer p:last-child {
    display: none;
  }
}
