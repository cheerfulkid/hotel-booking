import apiClient from './axios'

// 取得房型列表
export const getRoomsAll = () => apiClient.get(`/api/v1/rooms/`)

// 取得房型詳細資料
export const getRoomsDetail = (id) => apiClient.get(`/api/v1/rooms/${id}`)
