
const express = require('express')
const cors = require('cors')

const app = express()

const database = require('./database/DbEcommerce')

const routes = require('./routes')


//Databse auth
try {
    database.authenticate();
    database.sync();
    console.log('Db conectado!')
}
catch(error) {
    console.error(error);
}

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(1234, () => console.log('Servidor funcionando!'))