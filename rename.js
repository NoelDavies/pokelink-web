const fs = require('fs');

const pokedex = require('./tempPokedex.json')

const sprites = fs
    .readdirSync('./download/Document_files/')

sprites.forEach(filename => {
    let originalId = filename.replace('.png', '')
    let id = originalId.replace(/^[0]+/, '')
    // fs.rename(filename)
    let newFileName = pokedex.find(pokemon => pokemon.id == id).name.english

    fs.renameSync('./download/Document_files/' + originalId + '.png', './download/Document_files/' + newFileName.toLowerCase() + '.png')
})