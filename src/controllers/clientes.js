const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) +1 // AutoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}

const alterar = (req, res) =>{
    const id = req.params.id
    const dados = req.body
    let status = 0

    clientes.forEach((cliente, indice) => {
        if (cliente.id == id){
            clientes[indice] = dados
            clientes[indice].id = id
            status = 1
        }
    })
    if (status === 1){
        res.status(201).json("Cliente alterado com sucesso!")
    } else{
        res.status(404).json("Cliente não encontrado")
    }
}

const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    clientes.forEach((cliente, indice)=>{
        if(cliente.id == id){
            clientes.splice(indice,1)
            status = 1
        }
    })
    if (status == 1){
        res.json("Cliente excluido!")
    } else{
        res.status(404).json("Cliente não encontrado")
    }
}
module.exports = {
    criar , listar, alterar, excluir
}
