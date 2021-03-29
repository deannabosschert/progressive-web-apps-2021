#### progressive web apps
## Assessment
"In this course we will convert the client side web application previously made Web App From Scratch into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application."


# PWA
[![Netlify Status](https://api.netlify.com/api/v1/badges/17240f94-6d45-474e-a192-b32b7565d4cc/deploy-status)](https://app.netlify.com/sites/progressive-web-apps-2021/deploys)
 ... [link to deploy](https://progressive-web-apps-2021.netlify.app/)

![screenshot of website](https://github.com/deannabosschert/progressive-web-apps-2021/blob/trunk/_site/assets/img/screenshot_website.png)
![gif of LR audit](https://github.com/deannabosschert/progressive-web-apps-2021/blob/trunk/_site/assets/img/documentation/LR_audit.gif)

<details>
  <summary><strong>gif screencapture</strong> (click to expand)</summary>

![gif of website](https://github.com/deannabosschert/progressive-web-apps-2021/blob/trunk/_site/assets/img/documentation/screenshot_website.gif)
</details>

## Table of Contents
  * [Assessment](#assessment)
- [Survey Data Cleaning](#survey-data-cleaning)
  * [✅ To-do](#--to-do)
  * [📋 Concept](#---concept)
  * [⚙️ Installation](#---installation)
  * [🗃 Data](#---data)
  * [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
  * [🏫 Assignment](#---assignment)
  * [ℹ️ Resources](#---resources)
  * [🗺️ License](#----license)

## ✅ To-do
See the [project board](https://github.com/deannabosschert/progressive-web-apps-2021/projects/1) for my current to-do's

## 📋 Concept
With this PWA, you can take a look at my photo album.

## ⚙️ Installation
Clone this repository to your own device:
```bash
$ git https://github.com/deannabosschert/progressive-web-apps-2021.git
```
Then, navigate to this folder and run:

```bash
npm install
```

To run the project:

```bash
npm run dev
```

#### Dependencies
```json
"devDependencies": {
    "@11ty/eleventy": "^0.11.0",
    "cross-env": "^7.0.2",
    "node-fetch": "^2.6.0",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "mkdirp": "^0.5.1"
  }
```

#### Scripts
```json
  "scripts": {
    "predev": "rimraf _site",
    "dev:eleventy": "npx @11ty/eleventy --formats=html,njk,ejs,gif,jpg,png,css --serve --port=3000",
    "dev:css": "sass --watch assets/scss:_site/assets/css/",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*",
    "debug": "DEBUG=* eleventy",
    "prebuild": "rimraf _site",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*",
    "build:eleventy": "eleventy",
    "build:css": "node-sass --importer node_modules/node-sass-glob-importer/dist/cli.js assets/scss/index.scss _site/assets/css/index.css"
  }
```

## 🗃 Data
### 💽 Data cleaning
_What has been done with the fetched data?_What has been done with the initial data? Cleaning pattern?_

See my [Wiki](https://github.com/deannabosschert/progressive-web-apps-2021/wiki/Data-opschonen) for a detailed view of my data cleaning and functional patterns.


## 👯🏿‍ Features (+ wishlist)
_What would you like to add (feature wishlist / backlog)?_
- [ ] Some actual like-feature for PE maybe

## 🏫 Assignment
<details>
  <summary></strong> (click to expand)</summary>
In this course we were rated on:

- Application of subject matter
- Understanding
- Quality
- Process

### Learning goals
This assessment focusses on:
- Understanding the difference between client side and server side rendering and you being able to apply server side rendering in an application.       
- Understanding how a Service Worker works and the ability to implement it in an application.     
- Understanding how the critical render path works and how to optimize it for a better runtime and / or perceived performance.     

### Week 1 - Server Side Rendering 📡    
**Goal**: Render web pages server side         
See my [wiki](https://github.com/deannabosschert/progressive-web-apps-2021/wiki) for more.    

### Week 2 - Progressive Web App 🚀
**Goal**: Convert application to a Progressive Web App   
See my [wiki](https://github.com/deannabosschert/progressive-web-apps-2021/wiki) for more.    

### Week 3 - Critical Rendering Path 📉     
**Goal**: Optimize the Critical Rendering Path       
See my [wiki](https://github.com/deannabosschert/progressive-web-apps-2021/wiki) for more.    

</details>

### Rubric

[Rubric- detailed rating of my project](https://github.com/deannabosschert/progressive-web-apps-2021/wiki/Rubric)
![rubric](https://github.com/deannabosschert/progressive-web-apps-2021/blob/trunk/assets/img/rubric.png)

## ℹ️ Resources
### (Small) inspiration sources
- https://www.section.io/engineering-education/templating-your-static-site/ for using ejs with 11ty
- https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1 for the datasets
- _site of Nunjucks, Eleventy, EJS, D3.js, etc.
- My former projects, like functional-programming

## 🗺️ License
Author: [Deanna Bosschert](https://github.com/deannabosschert) , license by
[MIT](https://github.com/deannabosschert/progressive-web-apps-2021/blob/master/LICENSE)      
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
