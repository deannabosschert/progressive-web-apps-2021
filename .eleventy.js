const pluginPWA = require("eleventy-plugin-pwa")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets/fonts')
  eleventyConfig.addPassthroughCopy('assets/img')
  eleventyConfig.addPlugin(pluginPWA);

  
  return {
    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      output: '_site'
    },
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
