import { ref } from "vue"
import { defineStore } from 'pinia'

export const useCalendarStore = defineStore('modal', () => {
 const isShow = ref(false)
 const openCalendar = () => {
  isShow.value = true
 }
 const closeCalendar = () => {
  isShow.value = false
 }
 const makeSureDate = () => {
  closeCalendar()
 }


 return { 
  isShow,
  openCalendar,
  closeCalendar,
  makeSureDate
 }
})
