const pedidos = require("../../dados/pedidos.json")

//calcular subtotal
function subtotais(){
    pedidos.forEach(pedido=>{
        pedido.subtotal = pedido.quantidade * pedido.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos.length) + 1 // AutoIncrement
    pedidos.push(dados)
     res.status(201).json(dados)
}

const listar = (req, res) => {
    subtotais()
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id){
            pedidos[indice] = dados
            pedidos[indice].id = id
            status = 1
        }
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

