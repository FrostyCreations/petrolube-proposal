// PetroLube Energy - Website Proposal (short)
// Copy follows the approved short proposal. Prices match the PetroLube Energy Quotes
// (Zoho Books QUO-000519 to QUO-000522). No VAT is added, matching the quotes.

// Zoho Books estimates the client can open, one per quote
const ESTIMATES = {
  website: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b2669484c311a5312aaeb63fccae5aa0dda56949c7d6d85168f1a407822c23fa6afe13f0fc5ac66f7360f7642c3b5d8d980fd3e87edfb18cb303b711e80a707f5b3196",
  care: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b2669484c311a5312aaeb6f195cfa231e282151f8d84e2d49dfd89c1d458bc427f7b1af0fc5ac66f7360f7642c3b5d8d980fd3e87edfb18cb303b711e80a707f5b3196",
  hosting: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b2669484c311a5312aaeb603ad15c958f6c9fef2699abfbe6e49ddb3ddf2723b142d97f0fc5ac66f7360f7642c3b5d8d980fd3e87edfb18cb303b711e80a707f5b3196",
  visualGuide: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b2669484c311a5312aaeb6df3021af7286ccf7fff433a0425750a6457370bc709a69e5f0fc5ac66f7360f7642c3b5d8d980fd3e87edfb18cb303b711e80a707f5b3196"
};

export const proposalData = {
  client: {
    "name": "PetroLube Energy",
    "tagline": "Fuel · Fluids · Asset Reliability",
    "iconUrl": "pl/petrolube-icon.webp"
  },
  agency: {
    "name": "Big On Digital",
    "contactEmail": "hello@bigondigital.co.za",
    "logoUrl": "big-on-digital-logo-dark.webp"
  },
  hero: {
    "eyebrow": "Website Proposal",
    "title": "PetroLube Energy",
    "banner": { "text": "Website Proposal by", "agency": "Big On Digital", "logoUrl": "big-on-digital-logo-dark.webp" },
    "heroBgUrl": "pl/fuel-hero.webp"
  },
  sections: [
    {
      type: 'Problem',
      id: 'problem',
      data: {
        eyebrow: "The Problem",
        title: "Your Website Is Costing You Fuel Customers",
        intro: "We reviewed all 32 pages of plenergy.co.za. Buyers struggle to see that you supply fuel equipment, and those who do want a quote can’t easily ask for one.",
        stats: [
          { value: "15 of 32", label: "pages about solar or backup power" },
          { value: "0 of 32", label: "pages with a Google search description" },
          { value: "4 MB+", label: "homepage size, slow on mobile data" },
          { value: "1", label: "contact page sending enquiries astray" }
        ],
        issues: [
          { title: "Enquiries go to the wrong person", text: "On the Contact page, Keith’s email link opens a message to Pieter, and the phone number shown dials someone else." },
          { title: "Solar leads, fuel gets lost", text: "The homepage opens with solar panels. Fuel, fleet and mining buyers can’t quickly tell that you are the right supplier." },
          { title: "Slow, generic and hard to find", text: "The site is slow on phones, uses stock photos, doesn’t show your logo and has no Google descriptions." }
        ]
      }
    },

    {
      type: 'Solution',
      id: 'solution',
      data: {
        eyebrow: "The Solution",
        title: "A Clean, Simple Website Focused on Fuel",
        intro: "Clean and simple, like the cfsolution.co.za site Keith likes, with a quote button on every product. There is no online shop.",
        concept: { imageUrl: "pl/homepage-concept.webp", caption: "Homepage concept for the new website" },
        features: [
          { label: "Products", title: "A clear product catalogue", text: "Tanks, dispensers, mobile filling stations, fluid handling, AdBlue and fleet monitoring, each with a photo and key specifications." },
          { label: "Quotes", title: "Request a Quote on every product", text: "The form fills in the product for the buyer and sends the enquiry to the right person, by email or WhatsApp." },
          { label: "Focus", title: "Fuel first, solar removed", text: "Five simple menu items, with old solar pages redirected so you keep your existing Google traffic." },
          { label: "Brand", title: "Your logo and real photos", text: "Your logo on every screen and photos of your own equipment, so the site looks like PetroLube Energy." },
          { label: "Speed", title: "Fast and secure", text: "Built for phones first, on fast South African hosting, with your email records fixed so quote replies reach the inbox." },
          { label: "Google", title: "Easy to find", text: "A title, description and FAQs on every page, so buyers find you on Google and in AI assistants." }
        ]
      }
    },

    {
      type: 'Investment',
      id: 'investment',
      data: {
        eyebrow: "Investment",
        title: "One Website Build, Then Simple Monthly Care",
        intro: "The website build is a once-off cost, and the monthly services start in the month the new website goes live.",
        build: {
          quoteUrl: ESTIMATES.website,
          label: "Website build",
          name: "New Website",
          price: "R36,000",
          period: "once-off",
          items: [
            "Up to 16 pages, designed mobile-first",
            "Catalogue of up to 60 products with Request a Quote buttons",
            "Quote and contact forms routed to the right person",
            "Solar content removed, with redirects to keep your Google traffic",
            "Foundational SEO and AEO, testing and launch"
          ],
          note: "50% deposit to book, balance before go-live"
        },
        monthly: [
          { name: "Website Care and Content", quoteUrl: ESTIMATES.care, price: "R2,990", period: "per month", text: "Updates, backups, security monitoring and one optimised blog article every month." },
          { name: "Hosting", tag: "Recommended", quoteUrl: ESTIMATES.hosting, price: "R295", period: "per month", text: "Managed South African hosting on xneelo with 10 GB storage, SSL, daily backups, caching and security monitoring. Once-off set-up of R890, including your email records." }
        ],
        optional: { name: "Visual Guide", tag: "Recommended", quoteUrl: ESTIMATES.visualGuide, price: "R4,500", period: "once-off", text: "Optimisation of your existing logo, plus a short guide for colours, fonts and imagery." }
      }
    },

    {
      type: 'NextSteps',
      id: 'next-steps',
      data: {
        eyebrow: "Next Steps",
        title: "Live in About Eight Weeks",
        intro: "We can start with the quick fixes while the new website is being built.",
        steps: [
          { when: "This week", title: "Quick fixes", text: "Correct the contact details and repair the email records." },
          { when: "Week 1", title: "Confirm the scope", text: "Agree on your products and services, and gather photos and accreditations." },
          { when: "Weeks 2–8", title: "Build and launch", text: "Design, build and launch the new website, keeping your existing search traffic." }
        ]
      }
    },

    {
      type: 'ApproveCta',
      id: 'approve',
      data: {
        buttonText: "View Quotes and Approve"
      }
    },

    {
      type: 'ClientShowcase',
      id: 'clients',
      data: {
        title: "Some of our Clients",
        // Websites built by Big On Digital. A card links out once its `url` is filled in,
        // and shows the name as lettering until a `logoUrl` is added.
        clients: [
          { name: "Kulani Collective", tagline: "Website Design and Copy", logoUrl: "clients/kulani-collective.svg", platform: "Website", url: "https://www.kulanicollective.org/" },
          { name: "Ferris Workshop", tagline: "Supercar Service and Repair Specialists", logoUrl: "clients/ferris-group.webp", platform: "Website", url: "https://ferriscars.com/" },
          { name: "WHT Electrical", tagline: "Electrical, Solar, Plumbing and Maintenance", logoUrl: "clients/wht-electrical.svg", platform: "Website", url: "https://whtelectrical.co.za/" },
          { name: "Supercar Rhino Run", tagline: "Record-Breaking Supercar Charity Convoy", logoUrl: "clients/supercar-rhino-run.webp", platform: "Website", url: "https://rhinorun.co.za/" }
        ]
      }
    },

    {
      type: 'BrandBand',
      id: 'brand-band',
      data: {}
    },

    {
      type: 'AboutAgency',
      id: 'about',
      data: {
        title: "About Big On Digital",
        paragraphs: [
          "Big On Digital is a boutique digital marketing agency offering expert, end-to-end marketing services to both small businesses and large corporations. With over two decades of combined industry experience, our team specialises in social media, branding, web development, and digital strategy that help clients grow their reach and strengthen their brand presence.",
          "At Big On Digital, we don’t just build brands, we bring visions to life."
        ],
        team: [
          {
            name: "Dominique",
            title: "Founder & Strategic Director",
            subtitle: "Growth & Strategy",
            description: "Dominique defines the vision behind every project, guiding brand positioning, marketing strategy, and long-term growth. She works closely with clients to translate ambition into structured digital direction that delivers measurable results.",
            image: "team/dominique.jpg"
          },
          {
            name: "Francois",
            title: "Creative & AI Lead",
            subtitle: "Content, Design & Innovation",
            description: "Francois leads creative execution while driving the integration of AI across content and workflows. He shapes how ideas come to life, from social media and design to intelligent content systems, ensuring the brand remains both relevant and forward-thinking.",
            image: "team/francois.jpg"
          },
          {
            name: "Andy",
            title: "Technical & Performance Lead",
            subtitle: "Development & Paid Media",
            description: "Andy owns the technical and performance layer of the agency. From website development to paid advertising and tracking, he ensures every campaign is built on strong systems and optimised for results.",
            image: "team/andy.jpg"
          }
        ]
      }
    }
  ],

  // Quotes page: the four Zoho Books quotes, QUO-000519 to QUO-000522.
  // `onceOff` and `monthly` are numbers in rand, as on the Zoho quotes.
  quote: {
    validUntil: "23 November 2026",
    quotes: [
      {
        id: 'website',
        estimateUrl: ESTIMATES.website,
        number: "Quote 1",
        ref: "QUO-000519",
        name: "New Website",
        covers: "WordPress website with a catalogue of up to 60 products, quote forms, content migration, solar removal, imagery and foundational SEO/AEO",
        onceOff: 36000,
        monthly: 0
      },
      {
        id: 'care',
        estimateUrl: ESTIMATES.care,
        number: "Quote 2",
        ref: "QUO-000520",
        name: "Website Care and Content",
        covers: "Website maintenance plus one SEO/AEO blog article a month. Initial three-month commitment, then month to month",
        onceOff: 0,
        monthly: 2990
      },
      {
        id: 'hosting',
        estimateUrl: ESTIMATES.hosting,
        number: "Quote 3",
        ref: "QUO-000521",
        name: "Hosting",
        tag: "Recommended",
        covers: "10 GB managed hosting on xneelo with SSL, daily backups and caching, plus a once-off transfer that fixes your email records. 12-month agreement",
        onceOff: 890,
        monthly: 295
      },
      {
        id: 'visual-guide',
        estimateUrl: ESTIMATES.visualGuide,
        number: "Quote 4",
        ref: "QUO-000522",
        name: "Visual Guide",
        tag: "Recommended",
        covers: "A visual guide for your logo, colours, fonts and imagery, including optimisation of your existing logo",
        onceOff: 4500,
        monthly: 0
      }
    ],
    terms: [
      "The website, the hosting transfer and the visual guide each need a 50% deposit, with the balance due before handover.",
      "Website maintenance and content has an initial three-month commitment, then continues month to month.",
      "Hosting is a 12-month agreement. Either monthly service can be cancelled with 30 days’ written notice.",
      "Monthly fees are payable in advance, by the last day of the preceding month.",
      "These quotes are valid until 23 November 2026."
    ]
  }
};
