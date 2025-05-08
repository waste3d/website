// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import node from "@astrojs/node";

import react from "@astrojs/react";

import i18n from 'astro-i18n';



// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },


  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [react()],
});