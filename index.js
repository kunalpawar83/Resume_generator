const express =require('express');
const bodypaser =require('body-parser');
const ejs =  require('ejs');
let newitems=[];

const app =express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodypaser.urlencoded({extended:true}))

 //const arr =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
app.get('/',(req,res)=>{
      let  options ={weekday:'long',year:'numeric',month:'long',day:'numeric'}
     let date = new Date(); 
    let day = date.toLocaleDateString('en-us',options);
      res.render('index',{kindOfDay:day , newlistitem:newitems});
 })
 app.post('/',(req,res)=>{
    let newitem= req.body.newitem;
         newitems.push(newitem);
   res.redirect('/')
 })
app.listen(4500 ,()=>{
   console.log("this my port number 4500");
})
