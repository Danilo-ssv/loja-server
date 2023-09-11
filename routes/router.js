const express = require("express")
const router = express.Router()

const userController = require("../middlewares/userController.js")

const url = "https://www.reneelab.biz/wp-content/uploads/sites/9/2019/06/2k4k05.png"
const products = [
	{id: 1, model: "iphone", description: "Descrição", price: "1 R$", url},
	{id: 2, model: "galaxy", description: "Descrição", price: "2 R$", url},
	{id: 3, model: "speria", description: "Descrição", price: "3 R$", url},
	{id: 4, model: "xiami mi", description: "Descrição", price: "4 R$", url},
]

const eletronicos = [
  {
    id: 1,
    nome: "Smartphone Samsung Galaxy S21",
    marca: "Samsung",
    preco: 4599.99,
    estoque: 7,
    categoria: "Smartphones",
    imagem: "https://exemplo.com/samsung-galaxy-s21.jpg"
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron 15",
    marca: "Dell",
    preco: 5999.99,
    estoque: 4,
    categoria: "Notebooks",
    imagem: "https://exemplo.com/dell-inspiron-15.jpg"
  },
  {
    id: 3,
    nome: "Smart TV LG OLED",
    marca: "LG",
    preco: 9999.99,
    estoque: 2,
    categoria: "Televisores",
    imagem: "https://exemplo.com/lg-oled.jpg"
  },
  {
    id: 4,
    nome: "Caixa de som Bluetooth JBL",
    marca: "JBL",
    preco: 699.99,
    estoque: 8,
    categoria: "Caixas de som",
    imagem: "https://exemplo.com/jbl-bluetooth-speaker.jpg"
  },
  {
    id: 5,
    nome: "Console de videogame Playstation 5",
    marca: "Sony",
    preco: 4499.99,
    estoque: 3,
    categoria: "Consoles de videogame",
    imagem: "https://exemplo.com/ps5.jpg"
  }
];

router.get("/products", (req, res)=>{
	res.send(products)
})

router.post("/login", userController.login)
router.post("/register", userController.register)

module.exports = router