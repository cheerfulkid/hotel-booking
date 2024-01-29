<template>
 <div class="bg-[#140F0A]">
  <Header></Header>
 <main class="h-[1080px]">
  <div class="lg:grid lg:grid-cols-2 h-full">
   <div class="lg:max-w-[960px] self-start">
    <img src="../assets/img/pc/register.png" alt="">    
   </div>   
   <template v-if="parseInt(route.params.step)!=2">
    <div class="lg:max-w-[960px] relative before:absolute before:w-full before:h-[170px] before:bg-[url('/src/assets/img/pc/line3.png')] before:bg-cover before:block before:left-0 before:top-[72px] bg-no-repeat">
     <div class="lg:max-w-[416px] mx-auto lg:pt-[85px]">
      <span class="text-[16px] text-[#BF9D7D] line-height-[24px] font-bold relative">享樂酒店，誠摯歡迎</span>
      <h3 class="pt-[8px] pb-[32px] text-[#FFFFFF] text-[48px] font-bold line-height-[57.6px] relative">立即註冊</h3>
      <div class="step flex justify-between relative after:top-[50%] after:left-[50%] after:translate-y-[-50%] after:translate-x-[-50%]  after:absolute after:bg-[#909090] after:block after:h-[2px] after:w-[188px]">
       <div class="flex flex-col items-center">
        <span class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]">1</span>
        <p class="text-white">輸入信箱及密碼</p>
       </div>
       <div class="flex flex-col items-center">
        <span class="rounded-full w-[32px] h-[32px] border-[1px]  block text-[#909090] flex items-center justify-center mb-[4px]">2</span>
        <p class="text-[#909090]">填寫基本資料</p>
       </div>
      </div>    
      <form class="mt-[56px]">
       <div class="flex flex-col mb-[8px]">
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">電子信箱</label>
        <input type="text" v-model="signupData.email" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="hello@exsample.com">
       </div>
       <div class="flex flex-col mb-[16px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">密碼</label>
        <input type="text" v-model="signupData.password" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請輸入密碼">
       </div>
       <div class="flex flex-col mb-[40px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">確認密碼</label>
        <input type="text" v-model="checkPassword" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請再輸入一次密碼">
       </div>
       <router-link :to="{name: 'Signup', params: {step: 2}}" class="mb-[56px] inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[16px] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]">下一步</router-link>
      </form>
      <p class="text-[#FFFFFF]">已經有會員了嗎？<a class="mt-[8px] text-[#BF9D7D] underline" href="">立即登入</a></p> 
     </div>    
    </div>
   </template> 
   <template v-else>
    <div class="lg:max-w-[960px] relative before:absolute before:w-full before:h-[170px] before:bg-[url('/src/assets/img/pc/line3.png')] before:bg-cover before:block before:left-0 before:top-[72px] bg-no-repeat">
     <div class="lg:max-w-[416px] mx-auto lg:pt-[5px]">      
      <h3 class="pt-[8px] pb-[16px] text-[#FFFFFF] text-[48px] font-bold line-height-[57.6px] relative">立即註冊</h3>
      <div class="step flex justify-between relative after:top-[50%] after:left-[50%] after:translate-y-[-50%] after:translate-x-[-50%]  after:absolute after:bg-[#ECECEC] after:block after:h-[2px] after:w-[188px]">
       <div class="flex flex-col items-center">
        <span class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]">
         <img src="/src/assets/img/ic_check.svg" alt="">
        </span>
        <p class="text-white">輸入信箱及密碼</p>
       </div>
       <div class="flex flex-col items-center">
        <span class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]">2</span>
        <p class="text-white">填寫基本資料</p>
       </div>
      </div>
      <form class="mt-[56px]">
       <div class="flex flex-col mb-[8px]">
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">姓名</label>
        <input type="text" v-model="signupData.name" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請輸入姓名">
       </div>
       <div class="flex flex-col mb-[16px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">手機號碼</label>
        <input type="text" v-model="signupData.phone" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請輸入手機號碼">
       </div>
       <div class="flex flex-col mb-[16px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">生日</label>
        <div class="flex">
         <div class="w-1/3 pr-[8px]">         
          <select v-model="birthYear" class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" name="" id=""></select>
         </div> 
         <div class="w-1/3 pr-[8px]">         
          <select v-model="birthMonth" class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" name="" id=""></select>
         </div> 
         <div class="w-1/3">         
          <select v-model="birthDay" class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" name="" id=""></select>
         </div> 
        </div>
       </div>
       <div class="flex flex-col mb-[16px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">地址</label>
        <div class="flex">
         <div class="w-1/2 pr-[8px]">         
          <select class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" v-model="cityName" name="" id="">
           <option value="">請選擇</option>
           <option v-for="(city, cindex) in taiwanCityData" :value="city.CityName">{{ city.CityName }}</option>
          </select>
         </div> 
         <div class="w-1/2">         
          <select class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" v-model="signupData.address.zipcode" name="" id="">
           <option value="">請選擇</option>
           <option v-for="(area, aindex) in areaList" :value="area.ZipCode">{{ area.AreaName }}</option>
          </select>
         </div>                   
        </div>
        <div class="flex mt-[16px]">
         <div class="w-full">         
          <input class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" v-model="signupData.address.detail" name="" id="">
         </div>
        </div> 
       </div>
       <div class="flex mb-[40px]">
        <input type="checkbox" class="w-[24px] h-[24px] rounded-[4px] bg-white mr-[8px] appearance-none before:content-[''] before:bg-[url('/src/assets/img/ic_check.svg')] before:block before:w-full before:h-full checked:bg-[#BF9D7D]">
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold">我已閱讀並同意本網站個資使用規範</label>
       </div>
       <span class="mb-[56px] inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[16px] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]">完成註冊</span>
      </form>
      <p class="text-[#FFFFFF]">已經有會員了嗎？<router-link :to="{name: 'Login'}" class="mt-[8px] text-[#BF9D7D] underline">立即登入</router-link></p> 
     </div>    
    </div>
   </template>  
  </div>
 </main>
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