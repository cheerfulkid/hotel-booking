import apiClient from './axios'

// 取得所有美味佳餚
export const getCulinaryAll = () => apiClient.get(`/api/v1/home/culinary/`)

// 取得單筆美味佳餚
export const getCulinary = (id) => apiClient.get(`/api/v1/home/culinary/${id}`)
