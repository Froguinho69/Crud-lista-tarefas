const express = require('express')
const tarefas = require('./routes/tarefas')

const port = 3000

const app = express()

app.use(express.json())

app.use(tarefas)

app.get('/', (req, res) =>{
    res.send("Aplicação Tarefas rodando!")
})

app.listen(3000,() =>{
    console.log("Api tarefas rodando em http://localhost:3000")
})