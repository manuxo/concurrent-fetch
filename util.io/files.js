const fs = require('fs');
let File = {};

File.getJSONDataFromFile = path => {
    return new Promise((resolve,reject) => {
        fs.readFile(path,(err,data) => {
            if(err){
                reject(err);
            }else{
                const mockData = JSON.parse(data);
                resolve(mockData);
            }
        })
    });
}

File.setJSONDataToFile = (path,data) => {
    return new Promise((resolve,reject) => {
        const strData = JSON.stringify(data,null,2);
        fs.writeFile(path,strData,err => {
            if(err){
                reject(err);
            }else{
                resolve("Mock Data saved successfully.");
            }
        });
    });
}

module.exports = File;