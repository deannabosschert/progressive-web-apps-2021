module.exports = function renderPhotographs(data) {
  return new Promise((resolve, reject) => {
    // const rendered = data.map((item) => {
    //   return `<img src="${data.url_small}" alt="${data.description}" style="background-color:${item[color]};">${item[color]}>` // bit of a dirty fix to do it like this, only usable in case of generated 'main' color as with Unsplash
    // })

    const rendered = data
    // console.log(rendered[0])
    resolve(rendered)
  })
}