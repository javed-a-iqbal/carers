const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Carer =new Schema({
    _id: {
        type:String
    },
    name: {
        type:String
    }
});
module.exports=mongoose.model('Carers', Carer);