const path = require('path')
const CSVParser = require('babyparse')

const data = CSVParser.parseFiles(path.join(__dirname, '/data/logoData.csv'))
const images = CSVParser.parseFiles(path.join(__dirname, '/data/logoImages.csv'))
console.log(images)
