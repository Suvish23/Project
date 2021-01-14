require("dotenv").config();
const express = require('express')
const app=express();
const db = require('./db/index')
app.use(express.json());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header( "Access-Control-Allow-Methods","GET,PUT,POST,DELETE,PATCH,OPTIONS")
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

app.post("/createProduct",async(req,res)=>{
    try {
        const results=await db.query("INSERT INTO products (title,subtitle,imgsrc,description) values ($1,$2,$3,$4) returning *",[req.body.title,req.body.subtitle,req.body.imgsrc,req.body.description]);
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
        console.log(error)
        res.status(404).json({status:"failed"});
    }
})


//Delete a Product....

app.delete('/remove/:id',async(req,res)=>{
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
        const {email}=req.body;
        const Email=await db.query("SELECT * from users where email=$1",[email]);
        if(Email.rows[0].email === email){
            res.status(400).json({status:"email is already registered"});
        }
    } 
    catch (error) {
        const results = await db.query("INSERT INTO users (name,email,password,phonenumber) values ($1,$2,$3,$4) returning *",[req.body.name,req.body.email,req.body.password,req.body.phonenumber]);
        res.status(200).json({ status: 'success',data :results.rows[0]});
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
               res.json({status:"successfully Logged in",name:Email.rows[0].name,id:Email.rows[0].userid})
             }
            else if(Password!== password)
            res.status(401).json({data:"Incorrect Password "})
            }    
catch(error){
    res.status(400).json({status:"Invalid input"})
}});

//place a order
app.post('/placeorder',async(req,res)=>{
    try{
        const results=await db.query("INSERT INTO orders (userid,productid,producttitle) values ($1,$2,$3) returning *",[req.body.userid,req.body.productid,req.body.producttitle]);
     res.status(200).json({ status: 'success',data:results.rows});
    }
    catch(error){
        res.status(404).json({ status: 'failed'});
    }
})
//orders of users

app.post("/orders",async(req,res)=> {
    try {
        const results = await db.query("Select * from orders where userid=$1",[req.body.userid]);
        console.log(results.rows)
          res.status(200).json({status:"success",data:results.rows}
      )}
     catch (error) {
        res.status(500).json({status:"failed"})
    }});
   
    //add feedback

    app.post('/feedback',async(req, res) => {
        try {
            const results = await db.query("INSERT INTO feedback (name,email,message) values ($1,$2,$3) returning *",[req.body.name,req.body.email,req.body.message]);
            res.status(200).json({ status: 'success',data :results.rows[0]});
        }
        catch (error) {
            res.status(400).json({status:"failed",data :""})
        }
      });  

      //get all employees
    app.get('/employees',async(req, res) => {
        try {
            const results = await db.query("Select * from employee");
            res.status(200).json({ status: 'success',data :results.rows});
        }
        catch (error) {
            res.status(400).json({status:"failed",data :""})
        }
      }); 

      //add employee
      app.post("/addemployee",async(req,res)=>{
        try {
            const results=await db.query("INSERT INTO employee (emp_name,emp_email,emp_phonenumber,role) values ($1,$2,$3,$4) returning *",[req.body.name,req.body.email,req.body.phonenumber,req.body.role]);
            console.log(results);
            res.status(200).json({ status: 'success',data :results.rows[0]});
        } 
        catch (error) {
            res.status(500).json({status:"failed"});
    
        }
    }); 
    app.post('/remove',async(req,res)=>{
        try {
            const results=await db.query("DELETE from employee where emp_name=$1 ",[req.body.name]);
            res.status(200).json({ status: 'success',data :results.rows});
        } 
        catch (error) {
            res.status(500).json({status:"failed"});
        }
    })
    app.get('/trigger',async(req,res)=>{
        try {
            const results=await db.query("Select * from updateprice");
            res.status(200).json({ status: 'success',data :results.rows});
        } 
        catch (error) {
            res.status(500).json({status:"failed"});
        }
    })






const port= process.env.PORT; 

app.listen(port,()=>{
    console.log(`server runing in node on port ${port}`)
}
  );







//   app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });