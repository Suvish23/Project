require("dotenv").config();
const express = require('express')
const app=express();
const db = require('./db/index')
app.use(express.json());



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
//Get all the Products...
app.get("/getProducts",async(req,res)=> {
    try {
        const results=  await db.query("Select * from products");
        console.log(results.rows)
          res.status(200).json({status:"success",data: results.rows}
      )}
     catch (error) {
        res.status(500).json({status:"failed"})
    }});

//Get a single Product...
app.get("/getproduct/:id",async(req,res)=>{
    try {
        const results=await db.query("Select *  from products where id=$1 ",[req.params.id]);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
});

//Create a Product.......

app.post("/Create",async(req,res)=>{
    try {
        const results=await db.query("INSERT INTO products (id,title,subtitle,imgsrc,description) values ($1,$2,$3,$4,$5) returning *",[req.body.id,req.body.title,req.body.subtitle,req.body.imgsrc,req.body.description]);
        console.log(results);
        res.status(200).json({ status: 'success',data :results.rows[0]});
    } 
    catch (error) {
        res.status(500).json({status:"failed"});

    }
});


//Update the Price....
app.put('/update/:id',async(req,res)=>{
    try {
        const results = await db.query("UPDATE products SET subtitle=$1 where id=$2 returning * ",[req.body.subtitle,req.params.id]);
        res.status(200).json({ status: 'success',data :results.rows[0]});
        console.log(results.rows[0]);
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
})


//Delete a Product....

app.delete('/Remove/:id',async(req,res)=>{
    try {
        const results=await db.query("DELETE from products where id=$1 ",[req.params.id]);
        res.status(200).json({ status: 'success',data :results.rows});
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
})


//To Register a User
app.post('/Register',async(req, res) => {
    try {
        const results = await db.query("INSERT INTO users (name,email,password,phonenumber) values ($1,$2,$3,$4) returning *",[req.body.name,req.body.email,req.body.password,req.body.phonenumber]);
        console.log(results.rows);
        res.status(200).json({ status: 'success',data :results.rows[0]});
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
  });

//Login Route
  app.post('/Login', async(req, res) => {
      try{

          const {email,password}=req.body;
          const Email= await db.query("SELECT * from users where email=$1 ",[req.body.email] );
          const Password=Email.rows[0].password;
           if(Email.rows[0].email === email  && Password ===password)
           {
               res.json({status:"successfully Logged in"})
             }
            else(Password!==password)
            res.status(401).json({status:"Incorrect Password "})
            }    
catch(error){
    res.status(400).json({status:"Invalid input"})
}});

//To Remove 
//   app.delete('/Logout/:id',async(req,res)=>{
//     try {
//         console.log(req.params.id);
//         const results=await db.query("DELETE from users where id=$1 returning *",[req.params.id]);
//         res.status(200).json({ status: 'success',data :results.rows});
//     } 
//     catch (error) {
//         res.status(500).json({status:"failed"});
//     }
// })
const port= process.env.PORT; 

app.listen(port,()=>{
    console.log(`server runing in node on port ${port}`)
}
  );







  