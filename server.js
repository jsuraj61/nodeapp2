const express=require('express')
const app=express()


app.get('/',(req,resp)=>{
    resp.sendFile('public/form.html',{root:__dirname})
})

app.listen(7000,()=>{
    console.log("server started at 2k port")
})
