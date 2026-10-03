export type Repository = {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

export type Contributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export const repositories: Repository[] = [
  {
    id: 1,
    name: "next.js",
    full_name: "vercel/next.js",
    owner: {
      login: "vercel",
      avatar_url: "https://github.com/vercel.png",
    },
    description:
      "The React framework for building full-stack web applications.",
    html_url: "https://github.com/vercel/next.js",
    stargazers_count: 138420,
    forks_count: 29600,
    language: "TypeScript",
    updated_at: "2026-09-22T14:32:00Z",
  },
  {
    id: 2,
    name: "react",
    full_name: "facebook/react",
    owner: {
      login: "facebook",
      avatar_url: "https://github.com/facebook.png",
    },
    description:
      "A JavaScript library for building user interfaces.",
    html_url: "https://github.com/facebook/react",
    stargazers_count: 241350,
    forks_count: 49300,
    language: "JavaScript",
    updated_at: "2026-09-21T18:14:00Z",
  },
  {
    id: 3,
    name: "typescript",
    full_name: "microsoft/TypeScript",
    owner: {
      login: "microsoft",
      avatar_url: "https://github.com/microsoft.png",
    },
    description:
      "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
    html_url: "https://github.com/microsoft/TypeScript",
    stargazers_count: 105780,
    forks_count: 12900,
    language: "TypeScript",
    updated_at: "2026-09-23T07:45:00Z",
  },
  {
    id: 4,
    name: "tailwindcss",
    full_name: "tailwindlabs/tailwindcss",
    owner: {
      login: "tailwindlabs",
      avatar_url: "https://github.com/tailwindlabs.png",
    },
    description:
      "A utility-first CSS framework for rapid UI development.",
    html_url: "https://github.com/tailwindlabs/tailwindcss",
    stargazers_count: 90240,
    forks_count: 4700,
    language: "TypeScript",
    updated_at: "2026-09-20T11:21:00Z",
  },
  {
    id: 5,
    name: "vite",
    full_name: "vitejs/vite",
    owner: {
      login: "vitejs",
      avatar_url: "https://github.com/vitejs.png",
    },
    description: "Next generation frontend tooling.",
    html_url: "https://github.com/vitejs/vite",
    stargazers_count: 75210,
    forks_count: 7100,
    language: "TypeScript",
    updated_at: "2026-09-22T21:03:00Z",
  },
  {
    id: 6,
    name: "rust",
    full_name: "rust-lang/rust",
    owner: {
      login: "rust-lang",
      avatar_url: "https://github.com/rust-lang.png",
    },
    description:
      "Empowering everyone to build reliable and efficient software.",
    html_url: "https://github.com/rust-lang/rust",
    stargazers_count: 108900,
    forks_count: 14200,
    language: "Rust",
    updated_at: "2026-09-23T06:18:00Z",
  },
];