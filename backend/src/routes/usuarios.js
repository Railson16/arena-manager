const express = require('express')
const router = express.Router()
const db = require('../db')

// GET — listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

// GET — buscar um usuário por id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [
      req.params.id,
    ])
    res.json(rows[0])
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

// POST — cadastrar novo usuário
router.post('/', async (req, res) => {
  try {
    const { nome, telefone, email } = req.body
    const [result] = await db.query(
      'INSERT INTO usuarios (nome, telefone, email) VALUES (?, ?, ?)',
      [nome, telefone, email],
    )
    res.status(201).json({ id: result.insertId })
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

// PUT — atualizar usuário
router.put('/:id', async (req, res) => {
  try {
    const { nome, telefone, email } = req.body
    await db.query(
      'UPDATE usuarios SET nome=?, telefone=?, email=? WHERE id=?',
      [nome, telefone, email, req.params.id],
    )
    res.json({ mensagem: 'Atualizado com sucesso' })
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

// DELETE — remover usuário
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id])
    res.json({ mensagem: 'Removido com sucesso' })
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

module.exports = router

