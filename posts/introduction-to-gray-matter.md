---
title: Introduction to gray matter
slug: introduction-to-gray-matter
date: 3 January, 2023
---

# Introduction to gray matter

> Parse front-matter from a string or file. Fast, reliable and easy to use. Parses YAML front matter by default, but also has support for YAML, JSON, TOML or Coffee Front-Matter, with options to set custom delimiters. Used by metalsmith, assemble, verb and many other projects.

```shell
# Example with stdin input
$ marked -o hello.html
hello world
$ cat hello.html
<p>hello world</p>
```

### Returned object

gray-matter returns a file object with the following properties.

#### Enumerable

- `file.data` **{Object}**: the object created by parsing front-matter
- `file.content` **{String}**: the input string, with matter stripped
