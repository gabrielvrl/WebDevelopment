const express = require('express')
const fs = require('fs')
const app = express()

let user = {
    id: 0,
    name: "Gabriel Varela",
    phone: "(222)234-4321",
}

function render(data, obj){
    for (let key in obj){
        data = data.replace(`{{{${key}}}}`, obj[key])
    }

    return data
}

app.get("/", (req, res) => {
    fs.readFile('./templates/user.html','UTF8', (err,data)=>{
        if(!err){
            res.send(render(data, user))
        }
    })
})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})