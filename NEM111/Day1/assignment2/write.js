const fs = require('fs').promises;

const openFile=async()=>{
try{
    const data="plagarism ke bad bhau khane walo ka bhasad"
    await fs.writeFile("groceries.csv",data)
}catch{
    console.log("firse check kro bhai kuch galat he")
}
}

const addItem=async(name,quantity,price)=>{
    try{
        const csvLine=`\n${name},${quantity},${price}`
        await fs.writeFile("groceries.csv",csvLine,{flag:'a'})
    }catch{
        console.log("firse check kro bhai kuch galat he")
    }
    }
    

    (async()=>{
        await openFile()
        await addItem('eggs',12,"nahi")
    })();