const File = require('../util.io/files');
let Pokemon = {};
const path = './models/mock-data.json';
Pokemon.findAll = async () => {
    let response = null;
    try{
        const mockData = await File.getJSONDataFromFile(path);
        response = mockData.pokemons;
    }catch(err){
        response = Promise.reject(err);
    }
    return response;
};

Pokemon.findById = async (id) => {
    let response = null;
    try{
        const mockData = await File.getJSONDataFromFile(path);
        const pokemon = mockData.pokemons.find(x => x.id === id);
        if(pokemon){
            response = pokemon;
        }
    }catch(err){
        response = Promise.reject(err);
    }
    return response;
};

Pokemon.Add = async (newPokemon) => {
    let response = null;
    try{
        const mockData = await File.getJSONDataFromFile(path);
        mockData.pokemons.push(newPokemon);
        response = await File.setJSONDataToFile(path,mockData);
    }catch(err){
        response = Promise.reject(err);
    }
    return response;
};

Pokemon.Update = async (id,data) => {
    let response = null;
    try{
        const mockData = await File.getJSONDataFromFile(path); 
        const target = mockData.pokemons.find(x => x.id === id);
        if(target){
            for(let key of Object.keys(data)){
                target[key] = data[key];
            }
            response = await File.setJSONDataToFile(path,mockData);
        }
    }catch(err){
        response = Promise.reject(err);
    }
    return response;
}

module.exports = Pokemon;