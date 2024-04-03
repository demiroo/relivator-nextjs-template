/**
 * [app.ts] App Configuration
 * ==========================
 *
 * To reduce the number of config files, we aim to
 * combine as much as possible into a single file.
 */

import type { OAuthStrategy } from "@clerk/types";
import type { ContentSection, FooterItem, MainMenuItem } from "~/types";
import { slugify } from "~/utils";

import { productCategories } from "~/server/config/products";
import { networks } from "~/server/config/socials";

import { env } from "./env.mjs";
import type { Icons } from "./islands/icons";

// todo: parse this from clerk's dashboard instead of hardcoding it
export const oauthProvidersClerk = [
 // { name: "Google", strategy: "oauth_google", icon: "google" },
 // { name: "Discord", strategy: "oauth_discord", icon: "discord" },
 // { name: "Microsoft", strategy: "oauth_microsoft", icon: "microsoft" },
 // { name: "Facebook", strategy: "oauth_facebook", icon: "facebook" },
//  { name: "Github", strategy: "oauth_github", icon: "gitHub" },
] satisfies {
  name: string;
  icon: keyof typeof Icons;
  strategy: OAuthStrategy;
}[];

export const appts = {
  name: "Fleura",
  debug: false,
  social: networks({
    discord: "mancos007",
    facebook: "fleura.germany",
    twitter: "fleura_germany",
    github: "demiroo",
  }),
};

export default appts;

const links = {
  twitter: "https://x.com/oezkandemir",
  github: "https://github.com/demiroo/fleura",
  githubAccount: "https://github.com/demiroo",
  discord: "https://discord.gg/mancos007",
  facebook: "",
};

export const contactConfig = {
  email: "support@fleura.de",
};

export const REPOSITORY_OWNER = "demiroo";
export const REPOSITORY_NAME = "fleura";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const DISCORD_URL = "https://discord.gg/mancos007";
export const baseUrl = new URL(
  env.NEXT_PUBLIC_APP_URL ?? "https://fleura.de",
);

export const BASE_URL =
  process.env.NODE_ENV === "production" ? baseUrl : "https://fleura.de";
export const BRAND_NAME = "Fleura";
export const BRAND_DESCRIPTION =
  "Fleura der Starke partner in sachen Blumen.";

export const OWNER_ROLE = "owner";
export const ADMIN_ROLE = "admin";
export const MEMBER_ROLE = "member";

export const TRIAL_LENGTH_IN_DAYS = 7;
export const ROLES = [OWNER_ROLE, ADMIN_ROLE, MEMBER_ROLE] as const;

export const settings = {
  themeToggleEnabled: true,
};

export const siteConfig = {
  name: "Fleura",
  shortName: "Blumen",
  author: "Fleura",
  description: "Blumen für Jeden.",
  company: {
    name: "Fleura",
    link: "",
    email: "support@fleura.de",
    twitter: "@oezkandemir",
  },
  base: {
    url: "https://fleura.de",
  },
 handles: {
    twitter: "https://fleura.de/",
  },
  keywords: [
    "App Router",
    "Blefonix",
    "Bleverse",
    "Drizzle Orm",
    "Landing Page",
    "Next.js 14",
    "Nextjs",
    "Open Source",
    "Parallel Routes",
    "PostgreSQL",
    "Radix Ui",
    "React",
    "Relivator",
    "Server Actions",
    "Server Components",
    "Shadcn/UI",
    "Starter",
    "Stripe",
    "T3 Stack",
    "Tailwind Css",
    "Template",
    "Tools",
    "Utils",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: REPOSITORY_OWNER,
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og-image.jpg`,
  mainNav: [
    {
      title: "Über Uns",
      items: [
        {
          title: "Unsere Produkte",
          href: "/products",
          description: "Al unsere Produkte zum Kauf.",
          items: [],
        },
        {
          title: "Strauss Maker",
          href: "/custom/clothing",
          description: "Gestalte deinen Strauss",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
        {
          title: "Docs",
          href: "https://docs.fleura.de",
          description: "Fleura Documentation",
          items: [],
        },
      ],
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: [
        {
          title: "Alle",
          href: `/categories/${slugify(category.title)}`,
          description: `Alle ${category.title}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ] satisfies MainMenuItem[],
  links,
  footerNav: [
    {
      title: "Fleura",
      items: [

      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "About",
          href: "/about",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Github",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "Facebook",
          href: links.facebook,
          external: true,
        },
      ],
    },
    {
      title: "Github",
      items: [
        {
          title: "Fleura",
          href: "https://github.com/demiroo/fleura",
          external: true,
        },
        {
          title: "agypten.de",
          href: "https://github.com/blefnk/relivator",
          external: true,
        },
        {
          title: "Demiroo",
          href: "https://github.com/blefnk/",
          external: true,
        },
        {
          title: "Utils",
          href: "https://github.com/blefnk/utils",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};

export const featureCards: ContentSection = {
  header: "Powered by",
  subheader: "What Makes Relivator Possible",
  content: [
    {
      text: "Next.js",
      subtext: "The React Framework",
    },
    {
      text: "shadcn/ui",
      subtext: "Beautifully Designed Components",
    },
    {
      text: "Vercel",
      subtext: "Develop. Preview. Ship.",
    },
  ],
};

export const features: ContentSection = {
  header: "Features",
  subheader: "Why You Need to Download Relivator",
  content: [
    {
      text: "SEO Optimized",
      subtext: "Improved website visibility on search engines",
    },
    {
      text: "Highly Performant",
      subtext: "Fast loading times and smooth performance",
    },
    {
      text: "Easy Customization",
      subtext: "Change your content and layout with little effort",
    },
  ],
};
