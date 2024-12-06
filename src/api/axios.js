import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://freyja-e4gc.onrender.com',
  timeout: 10000
})

export default apiClient
