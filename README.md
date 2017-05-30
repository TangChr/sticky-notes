# CSS3 Sticky Notes

[![Build Status](https://img.shields.io/travis/TangChr/sticky-notes.svg?style=flat-square)](https://travis-ci.org/TangChr/sticky-notes)
[![License](https://img.shields.io/github/license/TangChr/sticky-notes.svg?style=flat-square)](https://raw.githubusercontent.com/TangChr/sticky-notes/master/LICENSE)

Stylesheet that uses CSS3-transitions and transformations to create "Sticky Notes" (Post-it notes).

The stylesheet can be seen in action here: [seaweed.dk](http://seaweed.dk)

## Compiling the stylesheet
1. Install node.js.
2. Install gulp `npm i -g gulp`
3. Clone repository `git clone https://github.com/TangChr/sticky-notes`
4. Install dependencies `npm i`

```
gulp build
```
Compile the stylesheet with "classic" colors
```
gulp build --classic
```
Minify the stylesheet
```
gulp clean
```
Compiling and minifying can be done with a single command
```
gulp
gulp --classic
```

## Using the stylesheet

```html
<head>
    <link rel="stylesheet" href="css/sticky.css" type="text/css" media="screen" />
</head>
```

```html
<ul class="sticky-notes">
    <li>
        <a href="#">
            <h2>Note #1</h2>
            <p>Content #1</p>
        </a>
    </li>
    <li>
        <a href="#">
            <h2>Note #2</h2>
            <p>Content #2</p>
        </a>
    </li>
    <li>
        <a href="#">
            <h2>Note #3</h2>
            <p>Content #3</p>
        </a>
    </li>
</ul>
```