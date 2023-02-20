---
title: Format your front-matter of markdown file
slug: format-markdown-frontmatter
tags: gray-matter, javascript-package
date: 3 January, 2023
---

# Format your front-matter of markdown

Gray-matter is a JavaScript library that provides an easy way to parse front-matter from Markdown content. Front-matter is metadata that is often placed at the top of Markdown files and is enclosed by --- or +++ delimiters. It can be used to specify things like the title, author, and date of a blog post, or to add custom data to a Markdown file.

Gray-matter extracts the front-matter from a Markdown file and returns an object containing the parsed data as well as the raw content of the file. This makes it easy to programmatically work with Markdown files in a variety of contexts, such as generating static websites or building content management systems.

Gray-matter is widely used in the Node.js and JavaScript ecosystem, and is a popular choice for working with front-matter in Markdown files.


```shell
$ npm install --save gray-matter
```

## The content of markdown file
---
title: Hello
slug: home
---
<h1>Hello world!</h1>

Then you have acces to `data` with all the attributes you defined there in front-matter.