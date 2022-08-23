const fs = require("fs").promises

async function readFile(path){
    try{
        const data=await fs.readFile(path,{encoding:"utf-8"})
    console.log(data)
    }
catch(error){
console.error(`error agya:${error.message}`)
}
}
readFile('test.txt')

