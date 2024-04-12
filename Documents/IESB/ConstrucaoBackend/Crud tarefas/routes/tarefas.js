const express = require('express')
const router = express.Router()

let ListaDeTarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]

router.get('/tarefas', (req, res) =>{
    res.json(ListaDeTarefas)
})

router.get('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    const tarefa = ListaDeTarefas[id]
    res.json(tarefa)
})

router.post('/tarefas', (req, res) =>{
    const tarefa = req.body
    ListaDeTarefas.push(tarefa.nome)
    res.status(201).json({mensagem: "Tarefa adicionada."})
})

router.delete('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    ListaDeTarefas.splice(id, 1)
    res.json({mensagem: "Tarefa removida."})
})

router.put('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    const tarefa = req.body
    ListaDeTarefas[id] = tarefa.nome
    res.json({mensagem: "Tarefa atualizada."})
})

module.exports = router