<h1 align="center">Welcome to readme-md-generator 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/readme-md-generator.svg?orange=blue" />
  <a href="https://www.npmjs.com/package/readme-md-generator">
    <img alt="downloads" src="https://img.shields.io/npm/dm/readme-md-generator.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://codecov.io/gh/kefranabg/readme-md-generator">
    <img src="https://codecov.io/gh/kefranabg/readme-md-generator/branch/master/graph/badge.svg" />
  </a>
  <a href="https://github.com/frinyvonnick/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
  <a href="https://github.com/zinothec">
    <img alt="github : zinothec" src="https://img.shields.io/github/followers/zinothec?style=social" target="_blank" />
  </a>
</p>

> CLI that generates beautiful README.md files.<br /> `readme-md-generator` will suggest you default answers by reading your `package.json` and `git` configuration.

## ✨ Demo

`README.md` creation process:

<p align="center">
  <img width="700" align="center" src="" alt="demo"/>
</p>

Generated `README.md`:

<p align="center">
  <img width="700" src="" alt="cli output"/>
</p>

Example of `package.json` with good meta data:

```json
{
 "engines": "npm"
}
```

## 🚀 Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since npm `5.2.0`)

Just run the following command at the root of your project and answer questions:

```sh
npx readme-md-generator
```

Or use default values for all questions (`-y`):

```sh
npx readme-md-generator -y
```
## Author

👤 **zino thec**

- Github: [@zinothec](https://github.com/zinothec)

## 📝 License

Copyright © 2019 [zinothec](https://github.com/zinothec).<br />
This project is [MIT](https://github.com/zinothec/zinothec.github.io/blob/main/LICENSE) licensed.

---
