<template>
 <div class="bg-[#140F0A] min-h-[100%]">
  <Header></Header>
 <main>
  <div class="flex h-full">
   <div class="w-full xl:w-[50%] hidden xl:block">
    <img src="../assets/img/pc/register.png" alt="">
   </div>
   <div :class="`w-full before:top-[32px] before:bg-no-repeat before:h-[67px] before:bg-contain xl:w-[50%] relative before:absolute before:w-full xl:before:h-[170px] before:bg-[url(${line3})] xl:before:bg-cover before:block before:left-0 xl:before:top-[72px] bg-no-repeat`">
    <div class="max-w-[416px] mx-[20px] xl:mx-auto pt-[92px] xl:pt-[159px]">
     <span class="text-[16px] text-[#BF9D7D] line-height-[24px] font-bold relative">享樂酒店，誠摯歡迎</span>
     <h3 class="pt-[8px] pb-[40px] text-[#FFFFFF] text-[48px] font-bold line-height-[57.6px] relative">立即開始旅程</h3>
     <form>
      <div class="flex flex-col mb-[8px]">
       <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">電子信箱</label>
       <input type="email" v-model="loginData.email" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="hello@exsample.com">
      </div>
      <div class="flex flex-col mb-[16px]"> 
       <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">密碼</label>
       <input type="password" v-model="loginData.password" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請輸入密碼">
      </div>
      <!-- <div class="flex mb-[40px] justify-between">
       <div class="flex mb-[8px]">
        <input id="remember" type="checkbox" :class="`w-[24px] h-[24px] rounded-[4px] bg-white mr-[8px] appearance-none before:content-[''] before:bg-[url()] before:block before:w-full before:h-full checked:bg-[#BF9D7D]`">
        <label for="remember" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold">記住帳號</label>
       </div>
       <a href="" class="text-[#BF9D7D] text-[16px] line-height-[24px] font-bold underline">忘記密碼？</a>  
      </div> -->
      <a href="" @click.prevent="login" class="mb-[56px] inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[16px] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]">
        <button v-if="loading" type="button" class="bg-indigo-500" disabled>
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
        <span v-else>會員登入</span>
      </a>
     </form>
     <p class="text-[#FFFFFF]">沒有會員嗎？<router-link :to="{name:'Signup',params:{step:1}}" class="mt-[8px] text-[#BF9D7D] underline">前往註冊</router-link></p> 
    </div>    
   </div>
  </div>
 </main>
 </div> 
 <!-- <SvgIcon name="ic_check"></SvgIcon> -->
</template>
<style scoped>
</style>
<script setup lang="ts">
import { ref } from "vue";
import type { Login } from "../types/login"
import Header from "../components/Header.vue";
import line3 from '../assets/img/pc/line3.png';
// import ic_check from '../assets/img/ic_check.svg?url';
// import SvgIcon from "../components/SvgIcon.vue";

const loading = ref(false)
const loginData = ref<Login>({
 email: "",
 password: ""
})
const login = async() => {
 loading.value = true
 let response = await fetch('https://freyja-e4gc.onrender.com/api/v1/user/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json;charset=utf-8'
   },
   body: JSON.stringify(loginData.value)
 });
 let result = await response.json();
 if(result.status===true) {
  alert("登入成功！")
 } else {
  alert(result.message);
 }
 loading.value = false
}
</script>