import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

function EditarUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', telefone: '', email: '' });

  useEffect(() => {
    api.get(`/usuarios/${id}`).then((resposta) => {
      setForm(resposta.data);
    });
  }, []);

 const salvar = async () => {
  if (!form.nome || !form.telefone || !form.email) {
    alert('Preencha todos os campos!');
    return;
  }

  if (!form.email.includes('@')) {
    alert('Email inválido!');
    return;
  }

  await api.put(`/usuarios/${id}`, form);
  navigate('/usuarios');
};

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Editar Usuário</h1>

      <div className="bg-green-900 bg-opacity-50 rounded p-6 flex flex-col gap-4">
        <input
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          placeholder="Nome"
          className="p-3 rounded border border-green-700 bg-transparent text-white placeholder-gray-400 outline-none w-full"
        />
        <input
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
          placeholder="Telefone"
          className="p-3 rounded border border-green-700 bg-transparent text-white placeholder-gray-400 outline-none w-full"
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="p-3 rounded border border-green-700 bg-transparent text-white placeholder-gray-400 outline-none w-full"
        />
        <div className="flex gap-3">
          <button
            onClick={salvar}
            className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 flex-1"
          >
            Salvar
          </button>
          <button
            onClick={() => navigate('/usuarios')}
            className="bg-white bg-opacity-20 text-black px-6 py-2 rounded hover:bg-opacity-30 flex-1"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;