import type { Option } from "~/types";

import type { Product } from "~/data/db/schema";

export const sortOptions = [
  { label: "Date: Old to new", value: "createdAt.asc" },
  {
    label: "Date: New to old",
    value: "createdAt.desc",
  },
  { label: "Price: Low to high", value: "price.asc" },
  { label: "Price: High to low", value: "price.desc" },
  {
    label: "Alphabetical: A to Z",
    value: "name.asc",
  },
  {
    label: "Alphabetical: Z to A",
    value: "name.desc",
  },
];

export const productCategories = [
  {
    title: "schnittblumen",
    image: "/images/skateboard-one.webp",
    subcategories: [
      {
        title: "Rosen",
        description: "Die Königen der Blumen",
        image: "/images/deck-one.webp",
        slug: "rosen",
      },
      {
        title: "Gerbera",
        description: "Soviele Sorten",
        image: "/images/wheel-one.webp",
        slug: "gerbera",
      },
      {
        title: "Lilien",
        description: "The trucks that go on the board.",
        image: "/images/truck-one.webp",
        slug: "lilien",
      },
      {
        title: "Chrysanthemen",
        description: "The bearings that go in the wheels.",
        image: "/images/bearing-one.webp",
        slug: "chrysanthemen",
      },
      {
        title: "Cala",
        description: "The griptape that goes on the board.",
        image: "/images/griptape-one.webp",
        slug: "cala",
      },
      {
        title: "Tulpen",
        description: "The hardware that goes on the board.",
        image: "/images/hardware-one.webp",
        slug: "tulpen",
      },
      {
        title: "Exoten",
        description: "The tools that go with the board.",
        image: "/images/tool-one.webp",
        slug: "exoten-schnittblumen",
      },
    ],
  },
  {
    title: "topfpflanzen",
    image: "/images/clothing-one.webp",
    subcategories: [
      {
        title: "Zimmerpflanzen",
        description: "Schöne zimmerpflanzen für die 4 Wände",
        slug: "zimmerpflanzen",
      },
      {
        title: "Gartenpflanzen",
        description: "Pflanzen für den Garten",
        slug: "gartenpflanzen",
      },
      {
        title: "Palmen",
        description: "Palmen für innen und aussen.",
        slug: "palmen",
      },
      {
        title: "Orchideen",
        description: "Orchideen in allen Farben",
        slug: "orchideen",
      },
      {
        title: "Exoten",
        description: "Exotische Zimmerpflanzen",
        slug: "exoten",
      },
    ],
  },
  {
    title: "hochzeit",
    image: "/images/shoe-one.webp",
    subcategories: [
      {
        title: "Brautstrauss",
        description: "Blumen für die Braut",
        slug: "brautstrauss",
      },
      {
        title: "Autogestecke",
        description: "Blumen fürs Auto",
        slug: "autogestecke",
      },
      {
        title: "Saal Schmuck",
        description: "Schmuck für den Saal",
        slug: "saal-schmuck",
      },
      {
        title: "Rosenblätter",
        description: "Blütten zum Schmeissen",
        slug: "rosenblaetter",
      },
      {
        title: "Haarschmuck",
        description: "Kopfschmuck",
        slug: "haarschmuck",
      },
    ],
  },
  {
    title: "trauer",
    image: "/images/backpack-one.webp",
    subcategories: [
      {
        title: "Trauer Kränze",
        description:
          "Trauer Kränze in allen Farben",
        slug: "trauer-kraenze",
      },
      {
        title: "Trauer Gestecke",
        description: "Trauer Gestecke",
        slug: "trauer-gestecke",
      },
      {
        title: "Sarggestecke",
        description:
          "Gestecke für den Sarg",
        slug: "sarggestecke",
      },
      {
        title: "Einzelne Blumen",
        description:
          "Blumen zum Schmeissen",
        slug: "Einzelne Blumen",
      },
      {
        title: "Urnen Kranz",
        description: "Urnen Kranz",
        slug: "urnen-kranz",
      },
      {
        title: "Herzen",
        description: "Herz Gestecke",
        slug: "herzen",
      },
    ],
  },
] satisfies {
  title: Product["category"];
  image: string;
  subcategories: {
    title: string;
    description?: string;
    image?: string;
    slug: string;
  }[];
}[];

export const productTags = [
  "new",
  "sale",
  "bestseller",
  "featured",
  "popular",
  "trending",
  "limited",
  "exclusive",
];

export function getSubcategories(category?: string): Option[] {
  if (!category) return [];

  const subcategories =
    productCategories
      .find((c) => c.title === category)
      ?.subcategories.map((s) => ({
        label: s.title,
        value: s.slug,
      })) ?? [];

  return subcategories;
}
