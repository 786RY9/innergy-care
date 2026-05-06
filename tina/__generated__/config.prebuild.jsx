// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH ?? "main",
  clientId: process.env.TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    // Output admin UI into public/admin so Vite serves it as a static folder
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    // Manages uploaded media via Tina Cloud (stored in public/assets/)
    tina: {
      mediaRoot: "assets",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─────────────────────────────────────────────────────────────────────
      // SETTINGS  — global site data shared across all pages
      // ─────────────────────────────────────────────────────────────────────
      {
        name: "settings",
        label: "\u2699\uFE0F Site Settings",
        path: "content",
        format: "json",
        match: { include: "settings" },
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            description: "Displayed in the header and footer next to the logo.",
            required: true
          },
          {
            type: "image",
            name: "logoImage",
            label: "Logo Image",
            description: "The clinic logo shown in the header and footer."
          },
          {
            type: "string",
            name: "ctaButtonLabel",
            label: "Header CTA Button Label",
            description: 'The button in the top navigation bar (e.g. "Book Consultation").'
          },
          {
            type: "string",
            name: "footerTagline",
            label: "Footer Tagline",
            description: "Short paragraph shown in the footer under the logo.",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "footerCopyright",
            label: "Footer Copyright Text",
            description: 'Shown at the bottom of every page (year is added automatically). E.g. "Innergy Care. All rights reserved."'
          },
          // Contact details — used in Footer AND Book page
          {
            type: "string",
            name: "phone",
            label: "Phone Number (display)",
            description: 'Formatted for display. E.g. "(786) 618-1808"'
          },
          {
            type: "string",
            name: "phoneHref",
            label: "Phone Number (dial link)",
            description: 'E.164 format for the tel: link. E.g. "+17866181808"'
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
            description: "Shown in the footer and on the Book page."
          },
          {
            type: "string",
            name: "addressLine1",
            label: "Address \u2014 Street",
            description: 'E.g. "2335 Tamiami Trl N"'
          },
          {
            type: "string",
            name: "addressLine2",
            label: "Address \u2014 Suite / Unit",
            description: 'E.g. "Suite 208"'
          },
          {
            type: "string",
            name: "addressCityStateZip",
            label: "Address \u2014 City, State, ZIP",
            description: 'E.g. "Naples, FL 34103"'
          },
          {
            type: "string",
            name: "mapsUrl",
            label: "Google Maps URL",
            description: "Full URL for the 'Visit Us' card on the Book page."
          }
        ]
      },
      // ─────────────────────────────────────────────────────────────────────
      // HOMEPAGE  — all content on the / home page
      // ─────────────────────────────────────────────────────────────────────
      {
        name: "homepage",
        label: "\u{1F3E0} Home Page",
        path: "content",
        format: "json",
        match: { include: "homepage" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/"
        },
        fields: [
          // Hero Section
          {
            type: "string",
            name: "heroEyebrow",
            label: "Hero \u2014 Eyebrow Label",
            description: 'Small text above the headline. E.g. "Premium Longevity Clinic"'
          },
          {
            type: "string",
            name: "heroHeadline",
            label: "Hero \u2014 Headline (first part)",
            description: 'The main headline text before the italic word. E.g. "Advanced Care Meets How You"'
          },
          {
            type: "string",
            name: "heroHeadlineEmphasis",
            label: "Hero \u2014 Headline Italic Word",
            description: 'Rendered in italic. E.g. "Actually"'
          },
          {
            type: "string",
            name: "heroHeadlineSuffix",
            label: "Hero \u2014 Headline (last part)",
            description: 'Text after the italic word. E.g. "Want to Feel."'
          },
          {
            type: "string",
            name: "heroSubheading",
            label: "Hero \u2014 Subheading Paragraph",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "heroCta1Label",
            label: "Hero \u2014 Primary Button Label",
            description: 'Dark button linking to the Book page. E.g. "Start Your Journey"'
          },
          {
            type: "string",
            name: "heroCta2Label",
            label: "Hero \u2014 Secondary Button Label",
            description: 'Outline button linking to Therapies page. E.g. "Explore Therapies"'
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero \u2014 Main Image"
          },
          {
            type: "string",
            name: "heroImageAlt",
            label: "Hero \u2014 Image Alt Text",
            description: "Describes the hero image for screen readers and SEO."
          },
          {
            type: "string",
            name: "heroBadgeLabelTop",
            label: "Hero \u2014 Floating Badge (top line)",
            description: 'Small floating card on the hero image. E.g. "Precision"'
          },
          {
            type: "string",
            name: "heroBadgeLabelBottom",
            label: "Hero \u2014 Floating Badge (bottom line)",
            description: 'E.g. "Cellular Care"'
          },
          // Feature Cards
          {
            type: "string",
            name: "featureSectionHeading",
            label: "Feature Section \u2014 Heading",
            description: 'Title of the 3-card section. E.g. "A Foundation of Lasting Vitality"'
          },
          {
            type: "object",
            name: "features",
            label: "Feature Cards",
            description: "The three feature cards. Do not add or remove cards \u2014 just edit the content.",
            list: true,
            ui: { itemProps: (item) => ({ label: item.title }) },
            fields: [
              { type: "string", name: "title", label: "Card Title" },
              { type: "string", name: "description", label: "Card Description", ui: { component: "textarea" } },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "Internal icon name \u2014 do not change unless instructed.",
                options: ["Activity", "Brain", "HeartPulse"]
              }
            ]
          },
          // Approach Section
          {
            type: "image",
            name: "approachImage",
            label: "Approach Section \u2014 Image"
          },
          {
            type: "string",
            name: "approachImageAlt",
            label: "Approach Section \u2014 Image Alt Text"
          },
          {
            type: "string",
            name: "approachEyebrow",
            label: "Approach Section \u2014 Eyebrow Label"
          },
          {
            type: "string",
            name: "approachHeading",
            label: "Approach Section \u2014 Heading"
          },
          {
            type: "string",
            name: "approachParagraph1",
            label: "Approach Section \u2014 Paragraph 1",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "approachParagraph2",
            label: "Approach Section \u2014 Paragraph 2",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "approachLinkLabel",
            label: "Approach Section \u2014 Link Label"
          }
        ]
      },
      // ─────────────────────────────────────────────────────────────────────
      // PHILOSOPHY  — Our Philosophy page
      // ─────────────────────────────────────────────────────────────────────
      {
        name: "philosophy",
        label: "\u{1F33F} Philosophy Page",
        path: "content",
        format: "json",
        match: { include: "philosophy" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/philosophy"
        },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero \u2014 Background Image"
          },
          {
            type: "string",
            name: "heroImageAlt",
            label: "Hero \u2014 Image Alt Text"
          },
          {
            type: "string",
            name: "heroHeadline",
            label: "Hero \u2014 Headline (H1)"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero \u2014 Subtitle (italic)"
          },
          {
            type: "string",
            name: "missionQuote",
            label: "Mission Statement Blockquote",
            description: "The large quote displayed in the green box.",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "rootCauseHeading",
            label: "Root Cause \u2014 Section Heading"
          },
          {
            type: "string",
            name: "rootCauseParagraph1",
            label: "Root Cause \u2014 Paragraph 1",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "rootCauseParagraph2",
            label: "Root Cause \u2014 Paragraph 2",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "rootCauseParagraph3",
            label: "Root Cause \u2014 Paragraph 3",
            ui: { component: "textarea" }
          },
          {
            type: "image",
            name: "rootCauseImage",
            label: "Root Cause \u2014 Side Image"
          },
          {
            type: "string",
            name: "rootCauseImageAlt",
            label: "Root Cause \u2014 Image Alt Text"
          },
          {
            type: "string",
            name: "overlayProtocolLabel",
            label: "Image Overlay \u2014 Protocol Label",
            description: 'Gold label on the image card. E.g. "Advance Longevity Protocol"'
          },
          {
            type: "string",
            name: "overlayHeadline",
            label: "Image Overlay \u2014 Headline"
          },
          {
            type: "string",
            name: "overlayHeadlineEmphasis",
            label: "Image Overlay \u2014 Headline (italic line)"
          },
          {
            type: "string",
            name: "overlayBody",
            label: "Image Overlay \u2014 Body Text",
            ui: { component: "textarea" }
          }
        ]
      },
      // ─────────────────────────────────────────────────────────────────────
      // THERAPIES  — Therapies & Services page
      // ─────────────────────────────────────────────────────────────────────
      {
        name: "therapies",
        label: "\u{1F48A} Therapies Page",
        path: "content",
        format: "json",
        match: { include: "therapies" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/therapies"
        },
        fields: [
          {
            type: "string",
            name: "pageHeading",
            label: "Page Heading (H1)"
          },
          {
            type: "string",
            name: "pageSubheading",
            label: "Page Subheading",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "cardBlockTitle",
            label: "Service Block \u2014 Title"
          },
          {
            type: "string",
            name: "cardBlockSubtitle",
            label: "Service Block \u2014 Subtitle"
          },
          {
            type: "image",
            name: "ctaBannerImage",
            label: "CTA Banner \u2014 Background Image"
          },
          {
            type: "string",
            name: "ctaBannerImageAlt",
            label: "CTA Banner \u2014 Image Alt Text"
          },
          {
            type: "string",
            name: "ctaBannerHeadline",
            label: "CTA Banner \u2014 Headline"
          },
          {
            type: "string",
            name: "ctaBannerButtonLabel",
            label: "CTA Banner \u2014 Button Label"
          },
          {
            type: "object",
            name: "therapyList",
            label: "Therapy Cards",
            description: "Each card represents one service. You can add, remove, or reorder cards.",
            list: true,
            ui: { itemProps: (item) => ({ label: item.title }) },
            fields: [
              { type: "string", name: "title", label: "Therapy Name", required: true },
              {
                type: "string",
                name: "description",
                label: "Therapy Description",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "Choose the icon displayed on the card.",
                options: ["Sun", "Wind", "Dna", "Zap", "FlaskConical", "Apple", "Activity", "Brain", "HeartPulse"]
              }
            ]
          }
        ]
      },
      // ─────────────────────────────────────────────────────────────────────
      // BOOK PAGE  — Book a Consultation page
      // ─────────────────────────────────────────────────────────────────────
      {
        name: "bookPage",
        label: "\u{1F4C5} Book Page",
        path: "content",
        format: "json",
        match: { include: "bookPage" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/book"
        },
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "Eyebrow Label",
            description: 'Small label above the heading. E.g. "Get In Touch"'
          },
          {
            type: "string",
            name: "heading",
            label: "Page Heading (H1)"
          },
          {
            type: "string",
            name: "subheading",
            label: "Page Subheading",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "phoneCardLabel",
            label: "Phone Card \u2014 Label"
          },
          {
            type: "string",
            name: "phoneCardSub",
            label: "Phone Card \u2014 Subtext"
          },
          {
            type: "string",
            name: "emailCardLabel",
            label: "Email Card \u2014 Label"
          },
          {
            type: "string",
            name: "emailCardSub",
            label: "Email Card \u2014 Subtext"
          },
          {
            type: "string",
            name: "addressCardLabel",
            label: "Address Card \u2014 Label"
          },
          {
            type: "string",
            name: "appointmentCardLabel",
            label: "Appointment Card \u2014 Label"
          },
          {
            type: "string",
            name: "appointmentCardValue",
            label: "Appointment Card \u2014 Value",
            description: 'E.g. "By Appointment"'
          },
          {
            type: "string",
            name: "appointmentCardSub",
            label: "Appointment Card \u2014 Subtext"
          },
          {
            type: "string",
            name: "footerNote",
            label: "Bottom Note",
            ui: { component: "textarea" }
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
