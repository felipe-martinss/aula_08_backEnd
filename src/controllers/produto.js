const produtos = require("../../dados/produto.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id) +1 // AutoIncrement
    produtos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    subtotais()
    res.json(produtos)
}

const alterar = (req, res) =>{
    const id = req.params.id
    const dados = req.body
    let status = 0

    const chaves = Object.keys(dados)
    const produto = produtos.find((c) => c.id == id);

    chaves.forEach((chave) =>{
        produto[chave] = dados[chave]
        status = 1
    })
   
    if (status === 1){
        res.status(201).json("produto alterado com sucesso!")
    } else{
        res.status(404).json("produto não encontrado")
    }
}

const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    produtos.forEach((produto, indice)=>{
        if(produto.id == id){
            produtos.splice(indice,1)
            status = 1
        }
    })
    if (status == 1){
        res.json("produto excluido!")
    } else{
        res.status(404).json("produto não encontrado")
    }
}
module.exports = {
    criar , listar, alterar, excluir
}