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
app.listen(8080, () =>{
    console.log('hehe')
})




