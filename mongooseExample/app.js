const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    titile: {type: String, required:true},
    description: String,
    url: {type: String, required:true},
    click: {type: Number, default: 0}
})

const LinkModel = mongoose.model('LinkModel', linkSchema)

let linkModel = new LinkModel({
    titile:"gabrielvrl",
    description: "Link para o Instagram Pessoal",
    url: "https://instagram.com/gabrielvrl"
})

linkModel.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})

mongoose.connect('mongodb://localhost/links', { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro") })
db.once("open", () => { console.log("Banco carregado") })


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))



/* mongoose.connect('mongodb://localhost/links', (error, db) => {
    console.log(error);
    console.log(db);
}) */

// Outra forma de fazer:
/* mongoose.connect('mongodb://localhost/links').then(db => {
    console.log(db)
}).catch(error=>{
    console.log(error)
}) */


/* const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model('Person', personSchema)

let person = new Person({
    name: "Gabriel",
    age: 23
})

person.save().then(doc => {console.log(doc)}) */