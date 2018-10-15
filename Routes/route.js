var mongoose=require("mongoose");
var express= require("express");
var router=express.Router();
const LoginSchema=require('./../models/LoginSchema');

router.post('/login',(req,res,next)=>{
    LoginSchema.findOne({ email: req.body.email }, (err, data) => {
      if (err) {
        res.send({ err });
      } else {
          res.status(201).json({
                message: "You have Login  Successfully",
          });
      }
    })

})

router.post("/register", (req, res, next) => {
 var userData = {
    email: req.body.email,
    password: req.body.password,
  }
    LoginSchema.create(userData,(err,data)=>{
        if(err)
        {
 res.send({ err });
        }else
        {
             res.send({ data });
        }
    })
});

module.exports=router;