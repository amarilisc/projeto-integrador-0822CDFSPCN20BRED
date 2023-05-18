const User = require('../../models/UserModel')


const UserController = {

    //Criar um usuário
    async createUser(req, res) {

        const bodyData = req.body

        try{

            const newUser = await User.create(bodyData)
            return res.status(200).json(newUser)

        } catch(err) {

            return res.status(400).json(err)

        }
    },

    //listar todos os usuarios
    async getUsers(req, res) {

        try { 

            const users = await User.findAll()
            return res.status(200).json(users)

         } catch(err) {

            return res.status(400).json(err)

        }

    },

    //Lista o usuário pelo ID
    async getUserById(req,res) {

        const { userid } = req.params

        try {

            const user = await User.findByPk(userid)
            return res.status(200).json(user)

        } catch(err) {
            
            console.log(err)
            return res.status(400).send(err)


        }
    }

}

module.exports = UserController
