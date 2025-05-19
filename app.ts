// menyimpan package ke dalam variable 
// const express = require('express')
import express, {type Application} from 'express'

// const app = express()
// app.listen(8080, () => {
//     console.log('anjay bisa')
// })
// // console.log(app)

class App{
    public app:Application;
    constructor(){
        this.app = express()
    }
}
const app = new App().app
const port = 8080

app.get("/", (req, res) => {
    res.send("CRUD Sederhana dengan TypeScript !");
  });

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})




