<template>
 <div class="bg-[#140F0A]">
  <Header></Header>
  <div class="flex items-center bg-[url('/src/assets/img/pc/hero.png')] bg-cover h-[384px]">
   <div class="max-w-[1297px] w-full mx-auto">
    <div class="flex items-center">
     <img class="w-[144px] h-[144px] mr-[24px]" src="../assets/img/pc/user1.png" alt="">
     <p class="font-bold text-[48px] text-[#FFFFFF] tracking-[5%]">Hello，Jessica</p> 
    </div>    
   </div>
  </div>
  <div class="max-w-[1297px] w-full mx-auto pt-[80px] pb-[120px]">
   <div class="mb-[80px]">
    <router-link class="px-[16px] py-[24px] text-[#FFFFFF] font-bold relative hover:text-[#BF9D7D] hover:before:absolute before:left-[50%] before:bottom-[8px] before:translate-x-[-50%] hover:before:content-[''] hover:before:w-[32px] hover:before:h-[4px] hover:before:bg-[#BF9D7D]" to="./">個人資料</router-link>
    <router-link class="px-[16px] py-[24px] text-[#FFFFFF] font-bold relative hover:text-[#BF9D7D] hover:before:absolute before:left-[50%] before:bottom-[8px] before:translate-x-[-50%] hover:before:content-[''] hover:before:w-[32px] hover:before:h-[4px] hover:before:bg-[#BF9D7D]" to="./">我的訂單</router-link>
   </div>
   <div class="flex">
    <div class="rounded-[20px] bg-[#FFFFFF] p-[40px] max-w-[527px] w-full mr-[40px]">
    <p class="text-[24px] font-bold text-[#000000] mb-[40px]">修改密碼</p>
    <p class="text-[16px] text-[#000000] font-bold mb-[8px]">電子信箱</p>
    <p class="text-[16px] text-[#000000] font-bold mb-[24px]">jessica@example.com</p>
    <div class="flex items-center justify-between">
     <div>
      <p class="text-[16px] text-[#4B4B4B] font-bold mb-[8px]">密碼</p>
      <p class="text-[16px] text-[#000000] font-bold">●●●●●●●●●●</p>
     </div>
     <router-link class="text-[#BF9D7D] underline underline-offset-1" to="./">重設</router-link>
    </div> 
    </div>
    <div class="rounded-[20px] bg-[#FFFFFF] p-[40px] max-w-[730px] w-full ">
     <p class="text-[24px] font-bold text-[#000000] mb-[40px]">基本資料</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[8px]">姓名</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[24px]">Jessica Wang</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[8px]">手機號碼</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[24px]">+886 912 345 678</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[8px]">生日</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[24px]">1990 年 8 月 15 日</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[8px]">地址</p>
     <p class="text-[16px] text-[#000000] font-bold mb-[40px]">高雄市新興區六角路 123 號</p>
     <router-link class="inline-block rounded-[8px] text-[#BF9D7D] border-[1px] border-[#BF9D7D] py-[16px] px-[32px]" to="./">編輯</router-link>
    </div>
   </div>   
  </div>  
  <div class="bg-[url('/src/assets/img/pc/line2.png')] bg-cover h-[188px]"></div>
  <footer class="max-w-[1297px] w-full mx-auto pt-[80px] pb-[120px]">
   <div class="flex items-center justify-between mb-[80px]">
    <div class="w-full">
     <img class="lg:w-[196px] mb-[40px]" src="../assets/img/pc/logo.png" alt="享樂酒店">
     <div class="flex">
      <a href="" class="mr-[16px]">
       <img src="../assets/img/LINE.svg" alt="">
      </a>
      <a href="">
       <img src="../assets/img/IG.svg" alt="">
      </a>
     </div>
    </div>
    <div class="flex w-full justify-end">
     <div class="mr-[80px]">
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[8px]">TEL</p>
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[40px]">+886-7-1234567</p>
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[8px]">FAX</p>
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[8px]">+886-7-1234567</p>     
     </div>
     <div>
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[8px]">MAIL</p>
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[40px]">elh@hexschool.com</p>
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[8px]">WEB</p>
      <p class="text-[16px] text-[#FFFFFF] font-bold mb-[8px]">www.elhhexschool.com.tw</p>
     </div>
    </div>  
   </div> 
   <div class="flex justify-between">
    <p class="text-[16px] font-bold text-[#FFFFFF]">806023 台灣高雄市新興區六角路123號</p> 
    <p class="text-[16px] font-bold text-[#FFFFFF]">© 享樂酒店 2023 All Rights Reserved.</p>
   </div>     
  </footer>
 </div> 
</template>
<style scoped>
</style>
<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref, reactive, computed } from "vue"
import { useRoute, useRouter } from 'vue-router';
import { Signup } from "../types/signup"
import taiwanCityData from "../api/taiwanCityData.json"
const route = useRoute();
const cityName = ref("")
// const areaList = ref([])
const checkPassword = ref<string>("")
const birthYear = ref("")
const birthMonth = ref("")
const birthDay = ref("")
const signupData:Signup = reactive({
 name: "",
 email: "",
 password: "",
 phone: "",
 birthday: "",
 address: {
  zipcode: "",
  detail: ""
 }
})

const areaList = computed(() => {
 let city = taiwanCityData.find((item) => item.CityName === cityName.value)
 return city?.AreaList
})

</script>