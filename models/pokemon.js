const File = require('../util.io/files');
let Pokemon = {};

Pokemon.findAll = async () => {
    const mockData = await File.getJSONDataFromFile('mock-data.json');
    return mockData.pokemons;
}

module.exports = Pokemon;