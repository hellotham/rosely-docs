// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightSidebarTopics from "starlight-sidebar-topics";

import markdoc from "@astrojs/markdoc";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://rosely.hellotham.com",

  integrations: [
    starlight({
      title: "Rosely",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/hellotham/rosely-docs",
        },
        {
          icon: "information",
          label: "Hello Tham",
          href: "https://hellotham.com/",
        },
      ],
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/noto-sans-mono/400.css",
        "@fontsource/noto-sans-mono/600.css",
        "@fontsource/noto-sans/400.css",
        "@fontsource/noto-sans/600.css",
      ],
      logo: {
        src: "./public/favicon.svg",
      },
    }),
    markdoc(),
  ],

  adapter: netlify(),
});
