<template>
 <div class="bg-[#140F0A] min-h-[100%]">
 <Header></Header>
 <main>
  <div class="flex h-full">
    <div :class="`w-full md:max-w-[960px] hidden md:block h-[958px] bg-[url(${register})] bg-cover bg-center`"></div>   
   <template v-if="route.params.step!='2'">
    <div :class="`w-full before:top-[32px] before:bg-no-repeat before:bg-contain md:w-[50%] relative before:absolute before:w-full before:h-[170px] before:bg-[url(${smLine3})] md:before:bg-[url(${line3})] md:before:bg-cover before:block before:left-0 md:before:top-[72px] bg-no-repeat md:px-[20px]`">
     <div class="max-w-full md:max-w-[416px] mx-[20px] md:mx-auto pt-[92px] md:pt-[159px]">
      <span class="text-[16px] text-[#BF9D7D] line-height-[24px] font-bold relative">享樂酒店，誠摯歡迎</span>
      <h3 class="pt-[8px] pb-[32px] text-[#FFFFFF] text-[48px] font-bold line-height-[57.6px] relative">立即註冊</h3>
      <div class="step flex justify-between relative after:top-[50%] after:left-[50%] after:translate-y-[-50%] after:translate-x-[-50%]  after:absolute after:bg-[#909090] after:block after:h-[2px] after:w-full after:max-w-[30%]">
       
        <router-link class="flex flex-col items-center" :to="{name:'Signup',params:{step:1}}">
          <span class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]">1</span>
          <p class="text-white">輸入信箱及密碼</p>
        </router-link>
       
        <router-link class="flex flex-col items-center" :to="{name:'Signup',params:{step:2}}">
          <span class="rounded-full w-[32px] h-[32px] border-[1px]  block text-[#909090] flex items-center justify-center mb-[4px]">2</span>
          <p class="text-[#909090]">填寫基本資料</p>
        </router-link>
      </div>    
      <form class="mt-[56px]">
       <div class="flex flex-col mb-[8px]">
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">電子信箱</label>
        <input type="email" v-model="signupData.email" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="hello@exsample.com">
       </div>
       <div class="flex flex-col mb-[16px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">密碼</label>
        <input type="password" v-model="signupData.password" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請輸入密碼">
       </div>
       <div class="flex flex-col mb-[40px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">確認密碼</label>
        <input type="password" v-model="checkPassword" class="placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" placeholder="請再輸入一次密碼">
       </div>
       <router-link :to="{name: 'Signup', params: {step: 2}}" class="mb-[56px] inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[16px] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]">下一步</router-link>
      </form>
      <p class="text-[#FFFFFF] mb-[94px]">已經有會員了嗎？<router-link :to="{name: 'Login'}" class="mt-[8px] text-[#BF9D7D] underline">立即登入</router-link></p> 
     </div>    
    </div>
   </template> 
   <template v-else>
    <div :class="`w-full before:top-[32px] before:bg-no-repeat before:bg-contain md:w-[50%] relative before:absolute before:w-full before:h-[170px] before:bg-[url(${smLine3})] md:before:bg-[url(${line3})] md:before:bg-cover before:block before:left-0 md:before:top-[72px] bg-no-repeat md:px-[20px]`">
     <div class="max-w-full md:max-w-[416px] mx-[20px] md:mx-auto pt-[92px] md:pt-[159px]">      
      <h3 class="pt-[8px] pb-[16px] text-[#FFFFFF] text-[48px] font-bold line-height-[57.6px] relative">立即註冊</h3>
      <div class="step flex justify-between relative after:top-[50%] after:left-[50%] after:translate-y-[-50%] after:translate-x-[-50%]  after:absolute after:bg-[#ECECEC] after:block after:h-[2px] after:w-full after:max-w-[30%]">
       
        <router-link class="flex flex-col items-center" :to="{name:'Signup',params:{step:1}}">
          <span class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]">1</span>
          <p class="text-white">輸入信箱及密碼</p>
        </router-link>
       
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
          <select v-model="birthYear" class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" name="" id="">
           <option :value="year" :key="year" v-for="(year)  in years">{{ year }}</option>
          </select>
         </div> 
         <div class="w-1/3 pr-[8px]">         
          <select v-model="birthMonth" class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" name="" id="">
           <option :value="month" v-for="month in months">{{ month }}</option>
          </select>
         </div> 
         <div class="w-1/3">         
          <select v-model="birthDay" class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" name="" id="">
           <option :value="day" v-for="day in lastDayOfMonth">{{ day }}</option>
          </select>
         </div> 
        </div>
       </div>
       <div class="flex flex-col mb-[16px]"> 
        <label for="" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold mb-[8px]">地址</label>
        <div class="flex">
         <div class="w-1/2 pr-[8px]">         
          <select class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" v-model="cityName" name="" id="">
           <option value="">請選擇</option>
           <option v-for="(city) in taiwanCityData" :value="city.CityName">{{ city.CityName }}</option>
          </select>
         </div> 
         <div class="w-1/2">         
          <select class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" v-model="signupData.address.zipcode" name="" id="">
           <option value="">請選擇</option>
           <option v-for="(area) in areaList" :value="area.ZipCode">{{ area.AreaName }}</option>
          </select>
         </div>                   
        </div>
        <div class="flex mt-[16px]">
         <div class="w-full">         
          <input class="w-full placeholder:text-[16px] placeholder:text-[#909090] p-[16px] rounded-[8px]" v-model="signupData.address.detail" name="" id="">
         </div>
        </div> 
       </div>
       <!-- <div class="flex mb-[40px]">
        <input id="agree" type="checkbox" :class="`w-[24px] h-[24px] rounded-[4px] bg-white mr-[8px] appearance-none before:content-[''] before:bg-[url()] before:block before:w-full before:h-full checked:bg-[#BF9D7D]`">
        <label for="agree" class="text-[#FFFFFF] text-[16px] line-height-[24px] font-bold">我已閱讀並同意本網站個資使用規範</label>
       </div> -->
       <span @click.prevent="signup" class="mb-[56px] flex items-center justify-center inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[16px] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]">
        <button v-if="loading" type="button" class="bg-indigo-500" disabled>
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
        <span v-else>完成註冊</span>
       </span>
      </form>
      <p class="text-[#FFFFFF] mb-[94px]">已經有會員了嗎？<router-link :to="{name: 'Login'}" class="mt-[8px] text-[#BF9D7D] underline">立即登入</router-link></p> 
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
import { ref, computed, onMounted } from "vue"
import { useRoute } from 'vue-router';
import { Signup } from "../types/signup"
import Header from "../components/Header.vue";
import taiwanCityData from "../api/taiwanCityData.json"
import line3 from '../assets/img/pc/line3.png'
import smLine3 from '../assets/img/mobile/line.png';
import register from '../assets/img/pc/register.png';
// import ic_check from '../assets/img/ic_check.svg?url'



const route = useRoute();
const loading = ref(false)
const cityName = ref("")
const checkPassword = ref<string>("")
const years = ref<number[]>([])
const months = ref([1,2,3,4,5,6,7,8,9,10,11,12])
const currentDate = ref(new Date());
const signupData = ref<Signup>({
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
const currentYear = computed(()=>{
 return currentDate.value.getFullYear()
})
const birthYear = ref(currentYear.value)
const birthMonth = ref(1)
const birthDay = ref(1)
const lastDayOfMonth = computed(()=>{
 return new Date(birthYear.value, birthMonth.value, 0).getDate()
})
signupData.value.birthday = `${birthYear.value}/${birthMonth.value}/${birthDay.value}`
const generateYearRange = () => {
 const startYear = currentYear.value - 100;
 const endYear = currentYear.value;
 for (let year = startYear; year <= endYear; year++) {
   years.value.push(year);
 }
}
const areaList = computed(() => {
 let city = taiwanCityData.find((item) => item.CityName === cityName.value)
 return city?.AreaList
})
const signup = async() => {
  loading.value = true
  if(checkPassword.value===signupData.value.password){
    let response = await fetch('https://freyja-e4gc.onrender.com/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(signupData.value)
    });
    let result = await response.json();
    if(result.status===true) {
      alert("註冊成功！")
    } else {
      alert(result.message);
    }
    loading.value = false  
  } else {
    alert("密碼與第一次輸入的不同，再請確認！")
    loading.value = false  
  }
  
}
onMounted(()=>{
 generateYearRange()
})
</script>