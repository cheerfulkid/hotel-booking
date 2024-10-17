<template>
  <div class="md:flex">
    <div class="w-full max-w-full md:max-w-[527px] md:mr-[40px] bg-[#FFFFFF] mb-[24px] md:mb-0 rounded-lg p-[24px] md:p-[40px]">
      <template v-if="!editPassword">
        <h6 class="text-[1.25rem] md:text-[1.5rem] mb-[24px] md:mb-[40px] font-bold">修改密碼</h6>
        <p class="text-[#4B4B4B] mb-[8px] text-[0.875rem] md:text-[1rem]">電子信箱</p>
        <p class="font-bold mb-[16px] md:mb-[24px] text-[0.875rem] md:text-[1rem]">Grace@exsample.com</p>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-[#4B4B4B] mb-[8px] text-[0.875rem] md:text-[1rem]">密碼</p>
            <p class="grid grid-cols-10 gap-[8px] auto-cols-auto">
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
              <span class="w-[8px] h-[8px] rounded-full bg-[#000000] block"></span>
            </p>
          </div>
          <button @click="editPassword = ! editPassword" class="text-[#BF9D7D] font-bold underline underline-offset-1 text-[0.875rem] md:text-[1rem]">重設</button>
        </div>      
      </template>
      <template v-else>
        <h6 class="text-[1.25rem] md:text-[1.5rem] mb-[24px] md:mb-[40px] font-bold">修改密碼</h6>
        <p class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">電子信箱</p>
        <p class="mb-[16px] md:mb-[24px] text-[0.875rem] md:text-[1rem]">Grace@exsample.com</p>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">舊密碼</label>
        <InputText class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" placeholder="請輸入舊密碼"></InputText>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">新密碼</label>
        <InputText class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" placeholder="請輸入新密碼"></InputText>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">確認新密碼</label>
        <InputText class="text-[0.875rem] md:text-[1rem] mb-[24px] md:mb-[40px]" placeholder="請再輸入一次新密碼"></InputText>
        <div class="max-w-full md:max-w-[129px]">
          <ClickButton isLink="false" @click="editPassword = ! editPassword" customClass="bg-[#ECECEC] text-[#909090]" :to="{ name: 'Book' }">
            儲存設定
          </ClickButton>
        </div>            
      </template>        
    </div>
    <div class="w-full max-w-full md:max-w-[730px] bg-[#FFFFFF] rounded-lg  p-[24px] md:p-[40px]">
      <template v-if="!editBasicInfo">
        <h6 class="text-[1.25rem] md:text-[1.5rem] mb-[24px] md:mb-[40px] font-bold">基本資料</h6>
        <p class="text-[#4B4B4B] mb-[8px] text-[0.875rem] md:text-[1rem]">姓名</p>
        <p class="font-bold mb-[16px] md:mb-[24px] text-[0.875rem] md:text-[1rem]">Grace YH</p>
        <p class="text-[#4B4B4B] mb-[8px] text-[0.875rem] md:text-[1rem]">手機號碼</p>
        <p class="font-bold mb-[16px] md:mb-[24px] text-[0.875rem] md:text-[1rem]">+886 912 345 678</p>
        <p class="text-[#4B4B4B] mb-[8px] text-[0.875rem] md:text-[1rem]">生日</p>
        <p class="font-bold mb-[16px] md:mb-[24px] text-[0.875rem] md:text-[1rem]">1991 年 7 月 4 日</p>
        <p class="text-[#4B4B4B] mb-[8px] text-[0.875rem] md:text-[1rem]">地址</p>
        <p class="font-bold mb-[24px] md:mb-[40px] text-[0.875rem] md:text-[1rem]">高雄市新興區六角路 123 號</p>
        <div class="max-w-[97px]">
          <ClickButton isLink="false" @click="editBasicInfo = ! editBasicInfo" customClass="bg-[#FFFFFF] border-[1px] border-[#BF9D7D] text-[#BF9D7D]" :to="{ name: 'Book' }">
            編輯
          </ClickButton> 
        </div> 
      </template>
      <template v-else>
        <h6 class="text-[1.25rem] md:text-[1.5rem] mb-[24px] md:mb-[40px] font-bold">基本資料</h6>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">姓名</label>
        <InputText class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" placeholder="請輸入姓名"></InputText>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">手機號碼</label>
        <InputText class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" placeholder="請輸入手機號碼"></InputText>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">生日</label>
        <div class="flex mb-[16px] md:mb-[24px]">
         <div class="w-1/3 pr-[8px]">
          <InputSelectBind customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]" :data="years" propertyValue="" property="" v-model:name="birthYear"></InputSelectBind>         
         </div> 
         <div class="w-1/3 pr-[8px]">     
          <InputSelectBind customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]" :data="months" propertyValue="" property="" v-model:name="birthMonth"></InputSelectBind>    
         </div> 
         <div class="w-1/3">
          <InputSelectBind customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]" :data="lastDayOfMonth" propertyValue="" property="" v-model:name="birthDay"></InputSelectBind>         
         </div> 
        </div>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">地址</label>
        <div class="flex">
          <div class="w-1/2 pr-[8px]">
            <InputSelectBind customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]" :data="taiwanCityData" propertyValue="CityName" property="CityName" v-model:name="cityName"></InputSelectBind>      
          </div> 
          <div class="w-1/2">
            <InputSelectBind customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]" :data="areaList" propertyValue="ZipCode" property="AreaName" v-model:name="signupData.address.zipcode"></InputSelectBind>          
          </div>
        </div>
        <InputText placeholder="請輸入詳細地址" customClass="text-[0.875rem] md:text-[1rem] mt-[16px] mb-[24px] md:mb-[40px] mt-[16px]"></InputText>
        <div class="max-w-full md:max-w-[129px]">
          <ClickButton isLink="false" @click="editBasicInfo = ! editBasicInfo" customClass="bg-[#ECECEC] text-[#909090]" :to="{ name: 'Book' }">
            儲存設定
          </ClickButton>
        </div> 
      </template>
    </div>
  </div>
  
</template>
<style scoped>
</style>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import ClickButton from '../components/ClickButton.vue';
import InputText from '../components/InputText.vue';
import InputSelectBind from '../components/InputSelectBind.vue';
import taiwanCityData from "../api/taiwanCityData.json"
const editPassword = ref(false)
const editBasicInfo = ref(false)
const cityName = ref("")
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

onMounted(()=>{
 generateYearRange()
})
// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })

</script>