<template>
 <div class="bg-[#140F0A]">
  <Header></Header>
 <main class="h-[1080px]">
  <div class="lg:grid lg:grid-cols-2 h-full">
   <div class="lg:max-w-[960px] self-start">
    <img src="../assets/img/pc/register.png" alt="">
   </div>
   <div class="lg:max-w-[960px] relative before:absolute before:w-full before:h-[170px] before:bg-[url('/src/assets/img/pc/line3.png')] before:bg-cover before:block before:left-0 before:top-[72px] bg-no-repeat">
    <div class="lg:max-w-[416px] mx-auto lg:pt-[159px]">
     <span class="text-[16px] text-[#BF9D7D] line-height-[24px] font-bold relative">享樂酒店，誠摯歡迎</span>
     <h3 class="pt-[8px] pb-[40px] text-[#FFFFFF] text-[48px] font-bold line-height-[57.6px] relative">立即開始旅程</h3>
     <form>
      <div class="flex flex-col mb-[8px]">
       <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">電子信箱</label>
       <input type="text" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="hello@exsample.com">
      </div>
      <div class="flex flex-col mb-[16px]"> 
       <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">密碼</label>
       <input type="text" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請輸入密碼">
      </div>
      <div class="flex mb-[40px] justify-between">
       <div class="flex mb-[8px]">
        <input type="checkbox" class="w-[24px] h-[24px] rounded-[4px] bg-white mr-[8px] appearance-none before:content-[''] before:bg-[url('/src/assets/img/ic_check.svg')] before:block before:w-full before:h-full checked:bg-[#BF9D7D]">
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold">記住帳號</label>
       </div>
       <a href="" class="text-[#BF9D7D] text-[16px] line-height-[24px] font-bold underline">忘記密碼？</a>  
      </div>
      <a href="" class="mb-[56px] inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[16px] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]">會員登入</a>
     </form>
     <p class="text-[#FFFFFF]">沒有會員嗎？<router-link :to="{name:'Signup',params:{step:1}}" class="mt-[8px] text-[#BF9D7D] underline">前往註冊</router-link></p> 
    </div>    
   </div>
  </div>
 </main>
 </div> 
</template>
<style scoped>
</style>
<script setup lang="ts">
import Header from "../components/Header.vue";
</script>