var express = require('express');
var app = express();
var mongoose =require('mongoose');
var bodyParser =require("body-parser");
var routes=express.Router();
var loginRoutes=require('./Routes/route')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*"),
  res.header("Access-Control-Allow-Headers","Content-Type,Accept,Origin")
  next()
})
var connection = mongoose.connect(
  "mongodb://localhost:27017/raidd",
  { useNewUrlParser: true }
);

app.use("/api", loginRoutes);


app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);