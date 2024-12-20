import apiClient from './axios'

// 取得自己的訂單列表
export const apiGetOrdersAll = () => apiClient.get(`/api/v1/orders/`)

// 新增訂單
export const apiPostOrders = (data) => apiClient.post(`/api/v1/orders/`, data)

// 取得訂單詳細資料
export const apiGetOrdersDetail = (id) => apiClient.get(`/api/v1/orders/${id}`)

// 取消訂單
export const apiDeleteOrdersDetail = (id) => apiClient.delete(`/api/v1/orders/${id}`)
