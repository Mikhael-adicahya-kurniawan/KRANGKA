import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin"; // Import plugin yang benar dari flowbite

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}", // Pastikan untuk menambahkan ini agar flowbite bekerja
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        saddle: '#8B4513',
      },
    },
  },
  plugins: [
    flowbite, // Menggunakan plugin flowbite
  ],
};

export default config;
