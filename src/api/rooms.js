import apiClient from './axios'

// 取得房型列表
export const apiGetRoomsAll = () => apiClient.get(`/api/v1/rooms/`)

// 取得房型詳細資料
export const apiGetRoomsDetail = (id) => apiClient.get(`/api/v1/rooms/${id}`)
