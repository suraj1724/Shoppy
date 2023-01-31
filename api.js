var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var constr = "mongodb://127.0.0.1:27017";
var app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());


app.post("/signup", (req, res)=> {
  var customer = {
      
      UserName: req.body.UserName, 
      Name:req.body.Name,
      Password: req.body.Password, 
      Email: req.body.Email, 
      Mobile: req.body.Mobile,
      
  }
  mongoClient.connect(constr,(err, clientObject)=>{
      if(!err) {
          var database = clientObject.db("Shopping");
          database.collection("customer").insertOne(customer, (err, result)=>{
              if(!err){
                  console.log("Record Inserted");
                  res.redirect("/customers");
              }
          })
      }
  })
});



app.get("/accountdetails", (req, res) => {
  mongoClient.connect(constr, (err, clientObj) => {
    if (!err) {
      var dbo = clientObj.db("Shopping");
      dbo
        .collection("customer")
        .find()
        .toArray((err, document) => {
          if (!err) {
            res.send(document)          
          }
        });
    }
  });
});








//----------------finding all products api sta
app.get("/products", (req, res) => {
  mongoClient.connect(constr, (err, clientObj) => {
    if (!err) {
      var dbo = clientObj.db("Shopping");
      dbo
        .collection("product")
        .find()
        .toArray((err, document) => {
          if (!err) {
            res.send(document);
          }
        });
    }
  });
});


//-------------id api api start-------------------//

app.get("/products/:id", (req, res) => {
  var productid = parseInt(req.params.id);
  mongoClient.connect(constr, (err, output) => {
    var dbo = output.db("Shopping");
    dbo
      .collection("product")
      .find({ id: parseInt(productid) })
      .toArray((err, document) => {
        res.send(document);
      });
  });
});
//-------------id api api end--------------------//



//----------rating api started---------------//
app.get("/product/:rating",(req,res)=>{
  mongoClient.connect(constr,(err,output)=>{
    var dbo=output.db("Shopping");
    dbo.collection("product").find({"rating.rate":{$gt:parseFloat(req.params.rating)}}).toArray((err,document)=>{
      res.send(document);
    })
  })
});

//----------------------- END ------------------------------->

app.get("/login",(req,res)=>{
  mongoClient.connect("mongodb://localhost:27017",(err,clientObject)=>{
      if(!err){
          var dbo = clientObject.db("Shopping");
          dbo.collection("customer").find().toArray((err,documents)=>{
              if(!err){
                  res.send(documents)
              }
          })
      }
  })
});

// app.put("/update/:UserName",(req,res)=>{
//   var Username = req.params.UserName
//   mongoClient.connect("mongodb://localhost:27017",(err,clientObject)=>{
//     if(!err){
//       var dbo =clientObject.db("Shopping");
//       dbo.collection("customer").updateOne()
//     }
//   })
// });

// app.delete("/delete",(req,res)=>{
//   mongoClient.connect("mongodb://localhost:27017",(err,clientObject)=>{
//     if(!err){
//       var dbo =clientObject.db("Shopping");
//       dbo.collection("customer").deleteOne
//     }
//   })
// })


app.listen(3366);
console.log("server started.. http://127.0.0.1:3366");