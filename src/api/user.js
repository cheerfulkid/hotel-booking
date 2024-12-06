import apiClient from './axios'

// 登入
export const postUserLogin = (data) => apiClient.post(`/api/v1/user/login/`, data)

// 註冊
export const postUserSignup = (data) => apiClient.post(`/api/v1/user/signup/`, data)

// 忘記密碼
export const postUserForget = (data) => apiClient.post(`/api/v1/user/forgot/`, data)

// 檢查是否登入
export const getUserCheck = () => apiClient.get(`/api/v1/user/check/`)

// 獲取用戶資料
export const getUserProfile = () => apiClient.get(`/api/v1/user/`)

// 更新用戶資料
export const putUserProfile = (data) => apiClient.put(`/api/v1/user/`, data)

// 驗證用戶信箱是否註冊過
export const postUserVerifyEmail = (data) => apiClient.post(`/api/v1/verify/email/`, data)

// 產生信箱驗證碼
export const postUserVerifyGenerateEmailCode = (data) => apiClient.post(`/api/v1/verify/generateEmailCode/`, data)
