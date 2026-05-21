import axios from 'axios'

const api = axios.create({
  baseURL: 'https://arena-manager-production.up.railway.app/api',
})

export default api
