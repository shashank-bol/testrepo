const express = require('express')
const app = express() 
const fs = require('fs')
fs.writeFileSync("tets.txt" , "testing")
app.get('/' , (req,res) =>{
  res.send('<h1>Hello World</h1>')
})

app.listen(3000,()=> console.log('Server ruihni'))
