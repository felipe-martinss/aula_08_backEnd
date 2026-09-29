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
const alterar = (req, res) => {}
const excluir = (req, res) => {}

module.exports = {
    criar , listar, alterar, excluir
}