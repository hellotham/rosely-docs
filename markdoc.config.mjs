import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";

export default defineMarkdocConfig({
  tags: {
    swatch: {
      render: component("./src/components/Swatch.astro"),
      attributes: {
        color: { type: String },
        code: { type: String },
        name: { type: String },
        pantone: { type: String },
      },
    },
    swatchgroup: {
      render: component("./src/components/SwatchGroup.astro"),
      attributes: {
        name: { type: String },
      },
    },
    download: {
      render: component("./src/components/Download.astro"),
      attributes: {
        href: { type: String },
        title: { type: String },
        description: { type: String },
      },
    },
  },
  extends: [starlightMarkdoc()],
});
