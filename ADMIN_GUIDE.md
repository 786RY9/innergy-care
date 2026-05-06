# Innergy Care — Admin Guide
### Content Management with TinaCMS

---

## How to Access the Admin Panel

1. Open your browser and go to: **`https://your-domain.com/admin`**  
   *(Replace `your-domain.com` with the actual live website URL)*
2. You will be redirected to the **Tina Cloud login page**
3. Log in with the email address that was invited to the Tina Cloud project
4. Once logged in, you will see the **Innergy Care content dashboard**

> **Note:** You must be connected to the internet to use the admin panel. Content changes require an active Tina Cloud session.

---

## What Each Section Controls

### ⚙️ Site Settings
**Where it appears:** Every page (header, footer, and the Book page)

| Field | What it does |
|---|---|
| Site Name | The "Innergy Care" text next to the logo in the header and footer |
| Logo Image | Upload a new logo — shown in header and footer |
| Header CTA Button Label | The dark button at the top right of every page |
| Footer Tagline | Short paragraph below the logo in the footer |
| Footer Copyright Text | Small text at the very bottom of every page |
| Phone Number | Displayed on the Book page and footer — update BOTH "display" and "dial link" fields |
| Email Address | Shown in the footer and Book page |
| Address fields | Physical address in the footer and Book page |
| Google Maps URL | The link the address card on the Book page opens |

> ⚠️ **If you change the phone number or email**, update it in **Site Settings only** — it automatically updates everywhere on the site.

---

### 🏠 Home Page
**Route:** `/` (the main landing page)

| Section | What you can edit |
|---|---|
| **Hero** | Eyebrow label, main headline (3 parts), subheading paragraph, both button labels, hero image + alt text |
| **Floating Badge** | The small card floating over the hero image (top label + bottom label) |
| **Feature Cards** | The 3 green-icon cards — title, description, and icon for each |
| **Approach Section** | Image, eyebrow, heading, 2 paragraphs, link label |

---

### 🌿 Philosophy Page
**Route:** `/philosophy`

| Section | What you can edit |
|---|---|
| **Hero** | Background image + alt text, H1 headline, italic subtitle |
| **Mission Quote** | The green blockquote box — full quote text |
| **Root Cause Section** | H2 heading, 3 body paragraphs, side image + alt text |
| **Image Overlay** | Protocol label (gold text), headline, italic headline, body text |

---

### 💊 Therapies Page
**Route:** `/therapies`

| Section | What you can edit |
|---|---|
| **Page Header** | H1, subheading |
| **Service Block** | Title and subtitle of the white card container |
| **Therapy Cards** | Each card: name, description, icon — you can **add, remove, and reorder** cards |
| **CTA Banner** | Background image, headline, button label |

> ✅ **To add a new therapy:** Click the **+** button inside "Therapy Cards" and fill in the Name, Description, and choose an icon from the dropdown.

---

### 📅 Book Page
**Route:** `/book`

| Section | What you can edit |
|---|---|
| Eyebrow label, heading, subheading | Top of the page text |
| Card labels and subtexts | Labels for Phone, Email, Address, and Appointment cards |
| Bottom note | Small text at the bottom of the page |

> ℹ️ The actual phone number, email, and address shown on this page come from **Site Settings** — not from this page directly.

---

## How Long Until Changes Go Live

| Scenario | Time to publish |
|---|---|
| Content saved in admin panel | ~30–90 seconds (Tina Cloud commits to GitHub, Vercel deploys automatically) |
| New image uploaded | ~1–2 minutes |
| If deployment fails | Check the Vercel dashboard — contact your developer |

---

## What You Should NOT Touch

| Area | Why |
|---|---|
| **Any code files** (`.tsx`, `.ts`, `.json` in `src/`, `tina/`) | Changing these can break the website |
| **Tina Cloud project settings** (especially Tokens) | Rotating tokens without updating Vercel env vars will take the site down |
| **Vercel project settings** | Build configuration — changes here affect deployment |
| **GitHub repository** | Do not delete branches or force-push |
| **Privacy Policy / Terms of Service pages** | These are placeholder pages — editing requires a developer |

---

## Setting Up Tina Cloud (First-Time Setup)

If the admin panel shows an error or asks for credentials, your developer needs to:

1. **Create a Tina Cloud account** at [https://app.tina.io](https://app.tina.io)
2. **Create a project** and connect it to the GitHub repository
3. **Copy the credentials** from the project Overview and Tokens pages
4. **Add environment variables** to the Vercel project:

| Variable | Where to find it |
|---|---|
| `TINA_CLIENT_ID` | Tina Cloud → your project → Overview tab |
| `TINA_TOKEN` | Tina Cloud → your project → Tokens tab → "Content token" |
| `TINA_BRANCH` | Set to `main` |

5. **Redeploy** the Vercel project after adding the variables

---

## Who to Contact

If something breaks or you need help:

- **Developer contact:** *(fill in your name/email here)*
- **Tina Cloud support:** [https://tina.io/docs](https://tina.io/docs)
- **Vercel dashboard:** [https://vercel.com](https://vercel.com)

---

## Quick Checklist Before Saving Changes

- [ ] Preview the change in the admin panel before publishing
- [ ] Check that all required fields are filled in (especially image alt text for accessibility)
- [ ] For image uploads: use `.jpg`, `.png`, or `.webp` format — avoid very large files (keep under 2MB)
- [ ] After saving, wait ~1 minute then refresh the live site to confirm the change appears
