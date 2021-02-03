const PORT = 3000;
const express = require('express');
const apiRoute = require('./routes/api')

const path = require('path')

const app = express()

// Para garantir que uma chamada a api nao busque por uma pasta chamada api, devemos inverter a chamada das rotas
app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, ()=> {
    console.log("Server running on port ", PORT)
})
