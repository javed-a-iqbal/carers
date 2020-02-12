const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const PORT=4000;
const mongoose=require('mongoose');
let Carer=require('../models/carer.model');

let carerRoutes=express.Router();

app.use(cors());
app.use(bodyParser.json());


 mongoose.connect('mongodb://127.0.0.1:27017/carers', {useNewUrlParser:true});
const connection=mongoose.connection;

connection.once('open',function(){

    console.log("connection established successfuly");

 });

 carerRoutes.route('/').get(function(req,res){
    Carer.find(function(err,todos){
        if(err){
          console.log(err)  
        }else{
            res.json(todos);
        }
    });

});

carerRoutes.route('/:id').get(function(req,res){
    let id=req.params.id;
    Carer.findById(id, function(err,todo){
        res.json(todo);

    })

});

carerRoutes.route('/add').post(function(req,res){
    let carer=new Carer(req.body);
    carer.save()
    .then(todo => {
        res.status(200).json({'carer':'record added successfully'});
    })
    .catch(err =>{
        res.status(400).send('adding new todo failed');
    })

});

carerRoutes.route('/update/:id').post(function(req,res){
    Carer.findById(req.params.id, function(err,carer){
      if(!carer) {
          res.status(404).send('record  is not found');
      } else {
        carer.name=req.body.name;
        carer.save().then(carer =>{
              res.json('carer is updated');

          })
          .catch( err =>{
            res.status(400).send("updated not possible")
          });

      }
    })
})

 app.use('/carers',carerRoutes);

app.listen(PORT,function(){

    console.log("server is running on port: "+PORT)

});