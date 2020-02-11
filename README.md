# RandomJS
## Installation

You can download the latest version of RandomJS from the [GitHub releases]().

## Getting started
In first it's important to have an element in your page.
```html
<body></body>
```
Now we need to include RandomJS
```html
<script type="text/javascript" src="./js/RandomJS.js"></script>
```
Now it's time to generate a random color
```js
document.querySelector("body").style.backgroundColor = RandomJS.color();
```

## Function
Function | Return | Usage
--- | --- | --- 
RandomJS.number() | A random number between 0 - 100 | `let number = RandomJS.number()` 
RandomJS.color() | A random hexadecimal color | `element.style.backgroundColor = RandomJS.color()` 
RandomJS.gradient() | A random gradient | `element.style.backgroundImage = RandomJS.gradient()` 
RandomJS.zen() | A random zen sentence | `let zenSentence = RandomJS.zen()` 
RandomJS.user() | A random user with some information in json | `let user = RandomJS.user()` 
RandomJS.username() | A random username | `let username = RandomJS.username()` 
RandomJS.password() | A random password | `let password = RandomJS.password()`
RandomJS.country() | A random country | `let country = RandomJS.country()` 
