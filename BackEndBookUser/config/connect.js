const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userbook')

.then(
  ()=>{
    console.log('connected to database :) !');
  }
)

.catch(
  (err)=>{
    console.log(err);
  }
)