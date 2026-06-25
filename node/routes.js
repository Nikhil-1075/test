const express=require('express')
const app=express()
const fs=require('fs')







app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 


app.get('/',(req,res)=>{
    console.log('GET request received')
    res.status(200).send('Hello World!')
})

app.post('/data/:id',(req,res)=>{   
    let{name,age}=req.body
    let{id}=req.params  
    console.log(id)
    console.log(name,age)
    res.status(200).send('Data received')
})
app.use('/getdata',(req,res,next)=>{
    console.log('Middleware executed')
    next()
})

app.get('/getdata',(req,res)=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{              
       res.status(200).json(data)
       })
       .catch(err=>{
        console.log(err)
       })
});