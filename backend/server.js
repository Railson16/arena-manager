const express = require('express')
const cors = require('cors')
require('dotenv').config()

const usuariosRoutes = require('./src/routes/usuarios')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/usuarios', usuariosRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
