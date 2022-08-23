const fs=require('fs').promises

const deleteFile=async(path)=>{
 try{
    await fs.unlink(path)
    console.log(`Deleted ${path}`)
 }
 catch(err){
    console.log(`bhasad hogya${err.message}`)
 }
}
deleteFile('groceries.csv');