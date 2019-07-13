const File = require('../util.io/files');
module.exports = class Model{
    constructor(name,path = './models/mock-data.json'){
        this._path = path;
        this._name = name;
    }

    get name(){
        return this._name;
    }

    get path(){
        return this._path;
    }

    set name(name){
        this._name = name;
    }

    set path(path){
        this._path = path;
    }

    async findAll(){
        let response = null;
        try{
            const mockData = await File.getJSONDataFromFile(this.path);
            response = mockData[this.name];
        }catch(err){
            response = Promise.reject(err);
        }
        return response;
    }
    async findById(id){
        let response = null;
        try{
            const mockData = await File.getJSONDataFromFile(this.path);
            const item = mockData[this.name].find(x => x.id === id);
            if(item){
                response = item;
            }
        }catch(err){
            response = Promise.reject(err);
        }
        return response;
    }
    async Add(newItem){
        let response = null;
        try{
            const mockData = await File.getJSONDataFromFile(this.path);
            mockData[this.name].push(newItem);
            response = await File.setJSONDataToFile(this.path,mockData);
        }catch(err){
            response = Promise.reject(err);
        }
        return response;
    }
    async Update(id,data){
        let response = null;
        try{
            const mockData = await File.getJSONDataFromFile(this.path); 
            const target = mockData[this.name].find(x => x.id === id);
            if(target){
                for(let key of Object.keys(data)){
                    target[key] = data[key];
                }
                response = await File.setJSONDataToFile(this.path,mockData);
            }
        }catch(err){
            response = Promise.reject(err);
        }
        return response;
    }
}