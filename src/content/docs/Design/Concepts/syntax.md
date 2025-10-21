---
title: "Syntax Highlighting Guidelines"
hero:
  tagline: The Rosely colour palette can be easily used for syntax highlighting using guidelines similar to Base16
  image:
    file: ../../Themes/vs-code/rosely-light.png
sidebar:
  label: "Syntax Highlighting"
  order: 9
description: >
  The Rosely colour palette can be easily used for syntax highlighting using guidelines similar to Base16
---

[base16](http://chriskempson.com/projects/base16/) is an architecture for building themes based on carefully chosen syntax highlighting using a base of sixteen colours. Base16 provides a set of guidelines detailing how to style syntax and how to code a builder for compiling base16 schemes and templates.

Rosely is not completely compatible with base16 (although it is possible to get base16 compliance by rearranging the colour palette) but a similar technique can be used for syntax highlighting. The aim is to group similar language constructs with a single color. For example, floats, ints, and doubles would belong to the same colour group.

The following are base16 guidelines for syntax highlighting adapted for Rosely (colours are selected from the ANSI palette to be consistent with syntax highlighting on terminal):

| base16 | Syntax highlighting elements | Colour |
| --- | --- | --- |
| base08 | Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted | bright red |
| base09 | Integers, Boolean, Constants, XML Attributes, Markup Link Url | green |
| base0A | Classes, Markup Bold, Search Text Background | bright magenta |
| base0B | Strings, Inherited Class, Markup Code, Diff Inserted | bright green |
| base0C | Support, Regular Expressions, Escape Characters, Markup Quotes | cyan |
| base0D | Functions, Methods, Attribute IDs, Headings | blue |
| base0E | Keywords, Storage, Selector, Markup Italic, Diff Changed | magenta |
| base0F | Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> | white |
