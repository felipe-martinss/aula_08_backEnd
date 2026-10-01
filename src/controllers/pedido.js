const pedidos = require("../../dados/pedido.json")
const item = require("./item.js")
const listaItens = require("../../dados/item.json")
const produto = require("../../dados/pedido.json")

function total (req, res){

    pedidos.forEach(p => {

        let total = 0
        const aux = listaItens.filter(i => i.pedido_id == p.id)

        aux.forEach(a => {
            total += a.quantidade* produtos.find(p => p.id == a.produto_id).preco
        })
        console.log(p.id, total)
    })

    res.send()
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos.length) + 1 // AutoIncrement
    pedidos.push(dados)
     res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

     const chaves = Object.keys(dados)
    const pedido = pedidos.find((c) => c.id == id);

    chaves.forEach((chave) =>{
        pedido[chave] = dados[chave]
        status = 1
    })
    if (status === 1){
        res.status(201).json("Pedido alterado com sucesso!")
    } else{
        res.status(404).json("Pedido não encontrado")
    }
}

const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    pedidos.forEach((pedido, indice)=>{
        if(pedido.id == id){
            pedidos.splice(indice, 1)
            status = 1
        }
    })
    if (status == 1){
        res.json("Pedido excluido!")
    } else{
        res.status(404).json("Pedido não encontrado")
    }
}

module.exports = {
    criar , listar, alterar, excluir
}

