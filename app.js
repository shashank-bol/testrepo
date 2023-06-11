const express = require('express')
const app = express() 
const pool = require('./db')
//pool.connect()
app.use(express.json())
app.get('/' , (req,res) =>{
  res.send('<h1>Hello World</h1>')
  
})

app.get('/users' , async (req,res) => {
  try{
    const users  = (await pool.query('SELECT * FROM testuser')).rows
    res.status(200).json({users})
  }catch(error){
    res.status(500).json({error})
  }
})

app.post('/add' , async (req,res) => {
  try {
    const {name,id,email} = req.body;
    await pool.query("INSERT INTO testuser(name,id,email) VALUES ($1,$2,$3)" , 
    [name,id,email]);
    res.status(201).json({message : 'SUCCESS'})
  } catch (error) {
    res.status(500).json({error})
  }
})

app.listen(3000,()=> console.log('Server ruihni'))
