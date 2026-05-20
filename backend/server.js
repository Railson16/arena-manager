const express = require('express')
const cors = require('cors')
require('dotenv').config()

const usuariosRoutes = require('./src/routes/usuarios')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/usuarios', usuariosRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
