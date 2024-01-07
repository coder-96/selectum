# Landing page

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

- Get introductory info about company.
- Check completed projects of the company.
- Contact the company via email.

### Links

- Repository URL: [Add solution URL here](https://github.com/coder-96/selectum)

## My process

### Built with

Frontend:
- React JS
- HTML5
- CSS3
- Flexbox
- CSS Grid
- Tailwind CSS

### What I learned

Improved my frontend skills once again, and gained more knowledge overall on Responsive Design, React JS.

```javascript react
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                className="hero"
                id="main"
            >
                <motion.h1 variants={textAnimation}>
                    <span>SELECTUM</span> КОНСАЛТИНГ
                </motion.h1>
                <motion.p variants={textAnimation}>
                    Вас приветствует команда <span>SELECTUM</span> Консалтинг
                </motion.p>
                <motion.div variants={textAnimation} className="btn-regis">
                    <a href="http://wa.me/996550069798">Запись на консультацию</a>
                </motion.div>
            </motion.div>
```

### Continued development

I'm focused on perfecting my Full Stack skills by building more projects.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - helped me find answers when I got stuck.

## Author

- Website - [Jalga](https://github.com/coder-96)

## Acknowledgments

I thank my family for supporting me on my way to becoming a Developer. 