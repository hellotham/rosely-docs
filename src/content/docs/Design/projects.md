---
title: "Use in Projects"
hero:
  tagline: Use the Rosely palette in your own projects.
  image:
    file: ../../../assets/undraw/color-schemes.svg
sidebar:
  order: 12
description: >
  Use the Rosely palette in your own projects.
---

Rosely comes in many formats to cover a wide range of project types and tech stacks.
Its [colors and palettes](../Colours-and-Palettes/index.md) have especially been designed for UI elements and code syntax highlighting often found in projects build with web technologies like websites.

## Usage

Next to the available [color swatches](../Swatches/index.md) for your favorite applications, Rosely is available in many module formats for various CSS [preprocessors][wiki-preproc].

### Sass

[Sass][sass] is a CSS preprocessor and extension language.
Rosely can be used simply by declaring the colour palettes as variables:

```scss
$rosely0: #27272a;
$rosely1: #615F5F;
$rosely2: #A49E9E;
$rosely3: #F4EEE8;
$rosely4: #EC809E;
$rosely5: #F7CACA;
$rosely6: #F8D7DD;
$rosely7: #F4DEDE;
$rosely8: #85677B;
$rosely9: #B565A7;
$roselyA: #BE9CC1;
$roselyB: #D2C4D6;
$roselyC: #D2386C;
$roselyD: #64BFA4;
$roselyE: #3CADD4;
$roselyF: #EADA4F;

// Example
body {
  background-color: $rosely5;
  color: $rosely0;
}
```

### Less

[Less][less] is a dynamic CSS preprocessor and extension language that was influenced by [Sass][sass] and has influenced the newer [SCSS syntax][sass-docs-scss].

```less
@rosely0: #27272a;
@rosely1: #615F5F;
@rosely2: #A49E9E;
@rosely3: #F4EEE8;
@rosely4: #EC809E;
@rosely5: #F7CACA;
@rosely6: #F8D7DD;
@rosely7: #F4DEDE;
@rosely8: #85677B;
@rosely9: #B565A7;
@roselyA: #BE9CC1;
@roselyB: #D2C4D6;
@roselyC: #D2386C;
@roselyD: #64BFA4;
@roselyE: #3CADD4;
@roselyF: #EADA4F;

body {
  background-color: @rosely5;
  color: @rosely0;
}
```

### Stylus

[Stylus][stylus] is a dynamic CSS preprocessor and extension language that was influenced by [Sass][sass] and [Less][less].

```stylus
rosely0 = #27272a;
rosely1 = #615F5F;
rosely2 = #A49E9E;
rosely3 = #F4EEE8;
rosely4 = #EC809E;
rosely5 = #F7CACA;
rosely6 = #F8D7DD;
rosely7 = #F4DEDE;
rosely8 = #85677B;
rosely9 = #B565A7;
roselyA = #BE9CC1;
roselyB = #D2C4D6;
roselyC = #D2386C;
roselyD = #64BFA4;
roselyE = #3CADD4;
roselyF = #EADA4F;

body {
  background-color: @rosely5;
  color: @rosely0;
}
```

### CSS

The [CSS specification][w3-css-spec-vars] supports the definition of **custom properties**, often referred to as **CSS variables**, that contain specific values to be reused throughout a document.
They are set using custom property notation (e.g. `--rosely8: #88c0d0;`) and are accessed using the CSS [`var()`][mdn-css-func-var] function (e.g. `color: var(--rosely8);`).


```css
:root {
  --rosely0: #27272a;
  --rosely1: #615F5F;
  --rosely2: #A49E9E;
  --rosely3: #F4EEE8;
  --rosely4: #EC809E;
  --rosely5: #F7CACA;
  --rosely6: #F8D7DD;
  --rosely7: #F4DEDE;
  --rosely8: #85677B;
  --rosely9: #B565A7;
  --roselyA: #BE9CC1;
  --roselyB: #D2C4D6;
  --roselyC: #D2386C;
  --roselyD: #64BFA4;
  --roselyE: #3CADD4;
  --roselyF: #EADA4F;
}

body {
  background-color: var(--rosely5);
  color: var(--rosely0);
}
```

[gh-postcss-import]: https://github.com/postcss/postcss-import
[gh-tree-css]: https://github.com/hellotham/rosely/blob/develop/src/rosely.css
[gh-tree-less]: https://github.com/hellotham/rosely/blob/develop/src/rosely.less
[gh-tree-sass]: https://github.com/hellotham/rosely/blob/develop/src/rosely.scss
[gh-tree-src]: https://github.com/hellotham/rosely/tree/develop/src
[gh-tree-stylus]: https://github.com/hellotham/rosely/blob/develop/src/rosely.styl
[gh]: https://github.com/hellotham/rosely
[kss-docs-styleguides]: http://warpspire.com/kss/styleguides
[kss]: https://warpspire.com/kss
[less-docs-import-rule]: http://lesscss.org/features/#import-atrules-feature
[less-docs-importing]: http://lesscss.org/#importing
[less-docs-vars]: http://lesscss.org/features/#variables-feature
[less]: http://lesscss.org
[mdn-css-@import]: https://developer.mozilla.org/en-US/docs/Web/CSS/@import
[mdn-css-func-var]: https://developer.mozilla.org/en-US/docs/Web/CSS/var
[node.js]: https://nodejs.org
[npm]: https://www.npmjs.com
[postcss]: https://postcss.org
[sass-docs-import]: https://sass-lang.com/documentation/file.SASS_REFERENCE#import
[sass-docs-scss]: https://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS
[sass-docs-syntax-indented]: https://sass-lang.com/documentation/file.INDENTED_SYNTAX
[sass-docs-syntax]: https://sass-lang.com/documentation/file.SASS_REFERENCE#syntax
[sass-docs-vars]: https://sass-lang.com/documentation/file.SASS_REFERENCE#variables_
[sass]: https://sass-lang.com
[sassdoc-docs-start]: http://sassdoc.com/getting-started
[sassdoc]: http://sassdoc.com
[stylus-docs-import-req]: http://stylus-lang.com/docs/import#require
[stylus-docs-import]: http://stylus-lang.com/docs/import
[stylus-docs-vars]: http://stylus-lang.com/docs/variables
[stylus]: http://stylus-lang.com
[w3-css-spec-vars]: https://www.w3.org/TR/css-variables
[wiki-preproc]: https://en.wikipedia.org/wiki/Preprocessor
[yarn]: https://yarnpkg.com
