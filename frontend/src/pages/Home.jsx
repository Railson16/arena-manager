import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Arena Manager</h1>
      <p className="text-xl text-gray-300 mb-2">
        Sistema de gerenciamento de arenas esportivas
      </p>
      <p className="text-gray-400 mb-8">
        Gerencie usuários e reservas de forma simples e eficiente
      </p>
      <button
        onClick={() => navigate('/usuarios')}
        className="bg-yellow-600 text-white px-8 py-3 rounded text-lg hover:bg-yellow-700"
      >
        Acessar Sistema
      </button>
      <p className="text-gray-700 mt-12 text-sm">
        🚧 Módulo de reservas em breve!
      </p>
    </div>
  )
}

export default Home
