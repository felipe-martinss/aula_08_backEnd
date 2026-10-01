const itens = require("../../dados/item.json")

//calcular subtotal
function subtotais(){
    itens.forEach(item=>{
        item.subtotal = item.quantidade * item.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id) +1 // AutoIncrement
    itens.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    subtotais()
    res.json(itens)
}

const alterar = (req, res) =>{
    const id = req.params.id
    const dados = req.body
    let status = 0

    const chaves = Object.keys(dados)
    const item = itens.find((c) => c.id == id);

    chaves.forEach((chave) =>{
        item[chave] = dados[chave]
        status = 1
    })
   
    if (status === 1){
        res.status(201).json("item alterado com sucesso!")
    } else{
        res.status(404).json("item não encontrado")
    }
}

const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    itens.forEach((item, indice)=>{
        if(item.id == id){
            itens.splice(indice,1)
            status = 1
        }
    })
    if (status == 1){
        res.json("item excluido!")
    } else{
        res.status(404).json("item não encontrado")
    }
}
module.exports = {
    criar , listar, alterar, excluir
}