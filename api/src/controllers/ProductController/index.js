const Product = require('../../models/Product')


const ProductController = {
    //Cadastrar um novo produto
    async createProduct(req, res) {
        
        const bodyData = req.body

        try {

            const data = {...bodyData}            

            const newProduct = await Product.create(data)          

            return res.status(200).json(newProduct)

        } catch(err) {

            return res.status(400).json(err)

        }
    },
    //Listar os produtos de um usuário
    async getUsersProducts(req, res) {

        const { userid } = req.params

        try{
            
            const productsOfAnUser = await Product.findByPk(userid)
            return res.status(200).json(productsOfAnUser)
            
        } catch(err) {

            return res.status(400).json(err)

        }

    },
    //Atualizar um produto
    async updateProduct(req, res) {

        const { productid } = req.params;
        const bodyData = req.body;
      
        try {
          const updatedProduct = await Product.update(bodyData, {
            where: { id: productid },
            returning: true
          })
          return res.status(200).json(updatedProduct)

        } catch (err) {

          return res.status(400).json(err)

        }
      },
    //Deletar um produto
    async deleteProduct(req, res) {

        const { productid } = req.params
      
        try {
          const deletedProduct = await Product.destroy( {
            where: { id: productid },
          })
          return res.status(200).json(deletedProduct)

        } catch(err) {

            return res.status(400).json(err)
            
        }

    },
    //Lista todos os produtos cadastrados
    async getProducts(req, res) {

        try{

            const products = await Product.findAll()
            return res.status(200).json(products)

        } catch(err) {

            return res.status(400).json(err)
            
        }

    },

}

module.exports = ProductController