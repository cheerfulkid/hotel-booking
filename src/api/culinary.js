import apiClient from './axios'

// 取得所有美味佳餚
export const apiGetCulinaryAll = () => apiClient.get(`/api/v1/home/culinary/`)

// 取得單筆美味佳餚
export const apiGetCulinary = (id) => apiClient.get(`/api/v1/home/culinary/${id}`)
