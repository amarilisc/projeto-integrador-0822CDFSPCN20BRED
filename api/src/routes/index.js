const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá mundo!')
})

routes.post('/users', UserController.createUser) //Criar um usuário
routes.get('/users', UserController.getUsers) //Listar todos os usuarios
routes.get('/users/:userid', UserController.getUserById) //Encontra o usuario pelo ID

routes.post('/sessions', SessionController.createSession) //Criar uma sessão

routes.post('/products/:userid', ProductController.createProduct) //Cadastrar um novo produto
routes.get('/products/:userid', ProductController.getUsersProducts) //Listar os produtos de um usuário
routes.patch('/products/:userid/:productid', ProductController.updateProduct) //Atualizar um produto
routes.delete('/products/:userid/:productid', ProductController.deleteProduct) //Deletar um produto

routes.get('/products', ProductController.getProducts) //Lista todos os produtos cadastrados


module.exports = routes