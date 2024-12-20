import apiClient from './axios'

// 登入
export const apiPostUserLogin = (data) => apiClient.post(`/api/v1/user/login/`, data)

// 註冊
export const apiPostUserSignup = (data) => apiClient.post(`/api/v1/user/signup/`, data)

// 忘記密碼
export const apiPostUserForget = (data) => apiClient.post(`/api/v1/user/forgot/`, data)

// 檢查是否登入
export const apiGetUserCheck = () => apiClient.get(`/api/v1/user/check/`)

// 獲取用戶資料
export const apiGetUserProfile = () => apiClient.get(`/api/v1/user/`)

// 更新用戶資料
export const apiPutUserProfile = (data) => apiClient.put(`/api/v1/user/`, data)

// 驗證用戶信箱是否註冊過
export const apiPostUserVerifyEmail = (data) => apiClient.post(`/api/v1/verify/email/`, data)

// 產生信箱驗證碼
export const apiPostUserVerifyGenerateEmailCode = (data) => apiClient.post(`/api/v1/verify/generateEmailCode/`, data)
