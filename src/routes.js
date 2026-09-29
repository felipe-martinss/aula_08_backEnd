const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/clientes")
const Pedido = require("./controllers/pedido")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC repondendo")
}

router.get("/", rotaInicial)
router.get("/clientes", Cliente.listar)
router.get("/pedidos", Pedido.listar )
router.post("/pedidos", Pedido.criar)
router.post("/clientes", Cliente.criar)
router.put("/pedidos/:id", Pedido.alterar)
router.put("/clientes/:id", Cliente.alterar )
router.delete("/pedidos/:id", Pedido.excluir)
router.delete("/clientes/:id", Cliente.excluir)

module.exports = router
