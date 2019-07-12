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

module.exports = File;