const path = require('path')
const fs = require('fs')
const CSVParser = require('babyparse')

const data = CSVParser.parseFiles(path.join(__dirname, '/data/logoData.csv'),
                                  { header: true }).data
const images = CSVParser.parseFiles(path.join(__dirname, '/data/logoImages.csv'),
                                    { header: true }).data

const res = data.map(logo => ({
  id: logo.ID,
  name: logo.Unternehmen,
  values: {
    color: +logo.Farbe,
    wording: +logo.Sprache,
    images: +logo.Bildwelt,
    form: +logo.Form,
    font: +logo.Typografie
  },
  images: images.filter(image => image.ID === logo.ID)
                .map(image => image.Bild)
}))

fs.writeFile(path.join(__dirname, '../src/assets/data/logos.json'), JSON.stringify(res), err => {
  if (err) return console.log(err)
})
