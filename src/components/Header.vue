<template>
  <header class="flex justify-between items-center py-2 px-5">
    <div class="xl:my-[24px] xl:ml-[80px] ">
      <img class="max-w-[110px] xs:max-w-[110px] xl:max-w-[196px]" src="../assets/img/pc/logo.png" alt="享樂酒店">
    </div>
    <nav v-if="route.name!='Login' && route.name !='Signup'" class="flex">
      <div class="cursor-pointer relative">
        <span @click="dropdownOpen=!dropdownOpen" class="block p-[16px] mr-[16px] text-[#FFFFFF]">客房旅宿</span>
        <ul v-if="dropdownOpen" class="absolute z-10 w-[260px] -left-[25px] top-[68px] list-none rounded-[20px] bg-[#FFFFFF] overflow-hidden">
          <li class="mt-[12px]">
            <router-link class="block text-[16px] font-bold py-[16px] px-[24px] hover:bg-[#F7F2EE] hover:text-[#BF9D7D] text-[#4B4B4B]" to="./">我的帳戶</router-link>
          </li>
          <li class="mb-[12px]">
            <span class="block cursor-pointer text-[16px] font-bold py-[16px] px-[24px] hover:bg-[#F7F2EE] hover:text-[#BF9D7D] text-[#4B4B4B]">登出</span>
          </li>  
        </ul>
      </div>
      <router-link v-if="user" :to="{name:'Login'}">會員登入</router-link>
      <div v-else class="flex items-center p-[16px] mr-[16px]">
        <!-- <img class="mr-[8px]" src="../assets/img/ic_Profile.svg" alt=""> -->
        <span class="text-[#FFFFFF]">Jessica</span>
      </div>
      <router-link class="block rounded-[8px] px-[32px] py-[16px] font-bold text-[#FFFFFF] bg-[#BF9D7D]" to="./">立即訂房</router-link>    
    </nav>
    <span class="cursor-pointer xl:hidden">
      <!-- <img src="../assets/img/ic_menu.svg" alt=""> -->
    </span>      
  </header>
</template>
<style scoped>
</style>
<script setup lang="ts">
import { ref } from "vue"
import { useUserStore } from '../stores/user'
import { useRoute } from 'vue-router';
const dropdownOpen = ref(false)
const user = useUserStore()
const route = useRoute()

</script>




