import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
 const isShow = ref(false)
 const openModal = () => {
  isShow.value = true
 }
 const closeModal = () => {
  isShow.value = false
 }

 return {
  isShow,
  openModal,
  closeModal
 }
})
