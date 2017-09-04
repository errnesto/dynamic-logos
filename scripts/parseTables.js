const path = require('path')
const fs = require('fs')
const CSVParser = require('babyparse')

const data = CSVParser.parseFiles(path.join(__dirname, '/data/logoData.csv'),
                                  { header: true }).data
const images = CSVParser.parseFiles(path.join(__dirname, '/data/logoImages.csv'),
                                    { header: true }).data

console.log(data[193])

const res = data.map(logo => ({
  id: logo.ID,
  name: logo.Unternehmen,
  text: logo['Logo Beschreibung'],
  industry: logo.Branche,
  area: +(logo['Flächeninhalt'].replace(',', '.')),
  values: {
    color: +logo.Farbe,
    wording: +logo.Text,
    images: +logo.Bildwelt,
    alignment: +logo.Anordnung,
    font: +logo.Typografie,
    form: +logo.Formgebung
  },
  images: images.filter(image => image.ID === logo.ID)
                .map(image => image.Bild)
}))

fs.writeFile(path.join(__dirname, '../src/assets/data/logos.json'), JSON.stringify(res), err => {
  if (err) return console.log(err)
})
