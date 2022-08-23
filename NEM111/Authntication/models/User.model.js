const userSchema = new mongoose.Schema({

    email:{type:String, required:true , unique:true},
    age:{Number},
    password:{type:String, required:true , unique:true},
    
})
const notesSchema = new mongoose.Schema({
    title:String
    , note:String
     , label:String
})
const UserModel = mongoose.model('User',userSchema)
const NotesModel=mongoose.model('Note',notesSchema)