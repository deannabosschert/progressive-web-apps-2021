const CleanPhotographs = require('../lib/clean-photographs.js')
const RenderPhotographs = require('../lib/render-photographs.js')

// export de async functie, die wacht dan weer to CleanPhotographs is uitgevoerd, return dan de door die functie gereturnde waarde en render deze dan
// dit is async aangezien er wellicht nog meer uit te voeren functies bijkomen die asynchroon uitgevoerd mogen worden
module.exports = async () => {
  return eyeColors = await CleanPhotographs()
  .then(data => RenderPhotographs(data))
}