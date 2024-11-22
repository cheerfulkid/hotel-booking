<template>
 <div class="bg-[#140F0A] min-h-[100%]">
  <Header></Header>
  <main>
   <div class="flex h-full pt-[72px] md:pt-[120px] relative">
    <img
     class="hidden md:block absolute h-[187px] object-cover right-0 top-[191px]"
     :src="line3"
     alt=""
    />
    <div
     :class="`z-10 w-full md:max-w-[960px] hidden md:block h-[958px] bg-[url(${register})] bg-cover bg-center`"
    ></div>
    <div
     class="z-10 w-full md:w-[50%] relative bg-no-repeat md:px-[20px] pt-[32px] md:pt-[159px]"
    >
     <img
      class="block md:hidden object-scale-down mb-[6px]"
      :src="customLine"
      alt=""
     />
     <div class="max-w-full md:max-w-[416px] mx-[20px] md:mx-auto">
      <span
       class="text-[0.875rem] md:text-[1rem] text-[#BF9D7D] line-height-[24px] font-bold relative"
       >享樂酒店，誠摯歡迎</span
      >
      <h3
       class="pt-[8px] pb-[40px] text-[#FFFFFF] text-[2rem] md:text-[3rem] font-bold line-height-[57.6px] relative"
      >
       立即開始旅程
      </h3>
      <form>
       <div class="flex flex-col mb-[16px]">
        <label
         for=""
         class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
         >電子信箱</label
        >
        <input
         type="email"
         v-model="loginData.email"
         class="placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
         placeholder="hello@exsample.com"
        />
       </div>
       <div class="flex flex-col mb-[16px]">
        <label
         for=""
         class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
         >密碼</label
        >
        <input
         type="password"
         v-model="loginData.password"
         class="placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
         placeholder="請輸入密碼"
        />
       </div>
       <div class="flex mb-[40px] justify-between items-center">
        <div class="flex items-center">
         <input
          id="remember"
          type="checkbox"
          :class="`w-[24px] h-[24px] rounded-[4px] bg-white mr-[8px] appearance-none before:content-[''] before:bg-[url(${ic_check})] before:block before:w-full before:h-full checked:bg-[#BF9D7D]`"
         />
         <label
          for="remember"
          class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold"
          >記住帳號</label
         >
        </div>
        <a
         href=""
         class="text-[#BF9D7D] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold underline"
         >忘記密碼？</a
        >
       </div>
       <a
        href=""
        @click.prevent="login"
        class="mb-[56px] font-bold inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[1rem] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]"
       >
        <button v-if="loading" type="button" class="bg-indigo-500" disabled>
         <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
         >
          <circle
           class="opacity-25"
           cx="12"
           cy="12"
           r="10"
           stroke="currentColor"
           stroke-width="4"
          ></circle>
          <path
           class="opacity-75"
           fill="currentColor"
           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
         </svg>
        </button>
        <span v-else>會員登入</span>
       </a>
      </form>
      <p class="text-[0.875rem] md:text-[1rem] text-[#FFFFFF] mb-[94px]">
       沒有會員嗎？<router-link
        :to="{ name: 'Signup', params: { step: 1 } }"
        class="mt-[8px] text-[#BF9D7D] underline font-bold"
        >前往註冊</router-link
       >
      </p>
     </div>
    </div>
   </div>
  </main>
 </div>
 <!-- <SvgIcon name="ic_check"></SvgIcon> -->
</template>
<style scoped></style>
<script setup lang="ts">
import { ref } from 'vue'
import type { Login } from '../types/login'
import Header from '../components/Header.vue'
import line3 from '../assets/img/pc/line3.png'
import smLine3 from '../assets/img/mobile/line.png'
import customLine from '../assets/img/pc/custom-line.png'
import register from '../assets/img/pc/register.png'
import ic_check from '../assets/img/svg/ic_check.svg'
//  import SvgIcon from "../components/SvgIcon.vue";

const loading = ref(false)
const loginData = ref<Login>({
 email: '',
 password: ''
})
const login = async () => {
 loading.value = true
 let response = await fetch(
  'https://freyja-e4gc.onrender.com/api/v1/user/login',
  {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json;charset=utf-8'
   },
   body: JSON.stringify(loginData.value)
  }
 )
 let result = await response.json()
 if (result.status === true) {
  alert('登入成功！')
 } else {
  alert(result.message)
 }
 loading.value = false
}
</script>
