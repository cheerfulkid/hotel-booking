import apiClient from './axios'

// 取得自己的訂單列表
export const getOrdersAll = () => apiClient.get(`/api/v1/orders/`)

// 新增訂單
export const postOrders = (data) => apiClient.get(`/api/v1/orders/`, data)

// 取得訂單詳細資料
export const getOrdersDetail = (id) => apiClient.get(`/api/v1/orders/${id}`)

// 取消訂單
export const deleteOrdersDetail = (id) => apiClient.delete(`/api/v1/orders/${id}`)
