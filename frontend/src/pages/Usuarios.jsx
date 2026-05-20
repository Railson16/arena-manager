import { useState, useEffect } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const navigate = useNavigate()
  const deletar = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este usuário?')) return
    await api.delete(`/usuarios/${id}`)
    setUsuarios(usuarios.filter((u) => u.id !== id))
  }

  useEffect(() => {
    api.get('/usuarios').then((resposta) => {
      setUsuarios(resposta.data)
    })
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Usuários</h1>
        <button
          onClick={() => navigate('/usuarios/novo')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Novo Usuário
        </button>
      </div>

      <table className="w-full border-collapse shadow rounded overflow-hidden">
        <thead className="bg-yellow-00 text-white">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">Telefone</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{usuario.id}</td>
              <td className="p-3">{usuario.nome}</td>
              <td className="p-3">{usuario.telefone}</td>
              <td className="p-3">{usuario.email}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => navigate(`/usuarios/${usuario.id}/editar`)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Editar
                </button>
                <button
                  onClick={() => deletar(usuario.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Usuarios
