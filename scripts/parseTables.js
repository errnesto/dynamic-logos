const path = require('path')
const fs = require('fs')
const CSVParser = require('babyparse')

const data = CSVParser.parseFiles(path.join(__dirname, '/data/logoData.csv'),
                                  { header: true }).data
const images = CSVParser.parseFiles(path.join(__dirname, '/data/logoImages.csv'),
                                    { header: true }).data

const years = new Set()
const industries = new Set()
const countries = new Set()

const res = data.map(logo => {
  years.add(logo.Jahreszahl)
  industries.add(logo.Branche)
  countries.add(logo.Staaten)

  const values = {
    color: +logo.Farbe,
    wording: +logo.Text,
    images: +logo.Bildwelt,
    alignment: +logo.Anordnung,
    font: +logo.Typografie,
    form: +logo.Formwahrnehmung
  }
  const valuesArray = Object.keys(values).map(key => values[key])

  return {
    id: logo.ID,
    name: logo.Unternehmensnahme,
    companyType: logo.Unternehmensbeschreibung,
    companyWebsite: logo['U-Webseite'],
    text: logo['Logo Beschreibung'],
    industry: logo.Branche,
    year: logo.Jahreszahl,
    countries: logo.Staaten,
    agency: logo.Agentur,
    agencyWebsite: [logo['A-Webseite'], logo['A-Webseite Alternative']],
    values: values,
    dynamics: valuesArray.reduce((prev, value) => prev + Math.PI * value * value, 0) /
      valuesArray.length,
    images: images.filter(image => image.ID === logo.ID)
      .map(image => image.Bild)
  }
})

const buildFilterOptionsFrom = (set) => {
  const array = Array.from(set)
  return array.sort().map(value => ({ title: value, isActive: true }))
}

const filters = [
  { key: 'year', title: 'Jahr', options: buildFilterOptionsFrom(years) },
  { key: 'industry', title: 'Branche', options: buildFilterOptionsFrom(industries) },
  { key: 'countries', title: 'Land', options: buildFilterOptionsFrom(countries) }
]

res.sort((a, b) => a.dynamics - b.dynamics)
fs.writeFile(path.join(__dirname, '../src/assets/data/logos.json'), JSON.stringify(res), err => {
  if (err) return console.log(err)
})

fs.writeFile(path.join(__dirname, '../src/assets/data/toggleFilters.json'), JSON.stringify(filters), err => {
  if (err) return console.log(err)
})
