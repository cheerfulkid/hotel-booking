import axios from 'axios'
import { useLoadingStore } from '@/stores/loading';
import { useUserStore } from '@/stores/user'
// const userStore = useUserStore()
// const token = userStore.token

const apiClient = axios.create({
  baseURL: 'https://freyja-e4gc.onrender.com',
  // withCredentials: true, // 允許發送 Cookies
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
  timeout: 10000
})

apiClient.interceptors.request.use(
  (config) => {
    const loadingStore = useLoadingStore();
    loadingStore.startLoading();

    const userStore = useUserStore()
    config.headers.Authorization = `Bearer ${userStore.token}`;
    
    return config;
  },
  (error) => {
    const loadingStore = useLoadingStore();
    loadingStore.stopLoading();
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    const loadingStore = useLoadingStore();
    loadingStore.stopLoading();
    return response;
  },
  (error) => {
    const loadingStore = useLoadingStore();
    loadingStore.stopLoading();
    return Promise.reject(error);
  }
);

export default apiClient
