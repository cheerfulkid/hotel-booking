<template>
  <div class="md:flex md:items-start">
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
          <button
            @click="edit()"
            class="text-[#BF9D7D] font-bold underline underline-offset-1 text-[0.875rem] md:text-[1rem]"
          >
            重設
          </button>
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
          <ClickButton
            isLink="false"
            @click="saveReset()"
            customClass="bg-[#ECECEC] text-[#909090]"
          >
            儲存設定
          </ClickButton>
        </div>
      </template>
    </div>
    <div class="w-full max-w-full md:max-w-[730px] bg-[#FFFFFF] rounded-lg p-[24px] md:p-[40px]">
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
        <!-- <div class="max-w-[97px]">
          <ClickButton
            isLink="false"
            @click="edit()"
            customClass="bg-[#FFFFFF] border-[1px] border-[#BF9D7D] text-[#BF9D7D]"
            :to="{ name: 'Book' }"
          >
            編輯
          </ClickButton>
        </div> -->
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
            <InputSelectBind
              customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]"
              :data="years"
              propertyValue=""
              property=""
              v-model:name="birthYear"
            ></InputSelectBind>
          </div>
          <div class="w-1/3 pr-[8px]">
            <InputSelectBind
              customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]"
              :data="months"
              propertyValue=""
              property=""
              v-model:name="birthMonth"
            ></InputSelectBind>
          </div>
          <div class="w-1/3">
            <InputSelectBind
              customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]"
              :data="lastDayOfMonth"
              propertyValue=""
              property=""
              v-model:name="birthDay"
            ></InputSelectBind>
          </div>
        </div>
        <label class="text-[#000000] mb-[8px] font-bold inline-block text-[0.875rem] md:text-[1rem]">地址</label>
        <div class="flex">
          <div class="w-1/2 pr-[8px]">
            <InputSelectBind
              customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]"
              :data="taiwanCityData"
              propertyValue="CityName"
              property="CityName"
              v-model:name="cityName"
            ></InputSelectBind>
          </div>
          <div class="w-1/2">
            <InputSelectBind
              customClass="text-[0.875rem] md:text-[1rem] border-[1px] border-[#ECECEC]"
              :data="areaList"
              propertyValue="ZipCode"
              property="AreaName"
              v-model:name="signupData.address.zipcode"
            ></InputSelectBind>
          </div>
        </div>
        <InputText
          placeholder="請輸入詳細地址"
          customClass="text-[0.875rem] md:text-[1rem] mt-[16px] mb-[24px] md:mb-[40px] mt-[16px]"
        ></InputText>
        <div class="max-w-full md:max-w-[129px]">
          <ClickButton
            isLink="false"
            @click="saveReset()"
            customClass="bg-[#ECECEC] text-[#909090]"
          >
            儲存設定
          </ClickButton>
        </div>
      </template>
    </div>
  </div>
  <Modal v-if="modalStore.option==='reset'">
    <template #title> 重設會員資料 </template>
    <template #content>
      <template v-if="modalStore.status===1">
        <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          修改成功！
        </p>
        <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
        <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
          <div class="w-full mr-[16px]">
            <ClickButton @click="modalStore.closeModal();router.go(0)" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
              關閉視窗
            </ClickButton>
          </div>
        </div>
      </template>
      <template v-else-if="modalStore.status===0">
        <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatus }} <template v-if="modalStore.errorStatus">：</template> {{ modalStore.msg }}
        </p>
        <svg class="checkmark error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_error" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" stroke-linecap="round" fill="none" d="M16 16 36 36 M36 16 16 36"/></svg>
        <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
          <div class="w-full mr-[16px]">
            <ClickButton @click="modalStore.closeModal();" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
              關閉視窗
            </ClickButton>
          </div>
        </div>
      </template>         
    </template>
  </Modal>
  <Modal v-if="modalStore.option!=='reset'">
    <template #title> 撈取會員資料 </template>
    <template #content>        
      <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
        {{ modalStore.errorStatus }} <template v-if="modalStore.errorStatus">：</template> {{ modalStore.msg }}
      </p> 
      <svg class="checkmark error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_error" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" stroke-linecap="round" fill="none" d="M16 16 36 36 M36 16 16 36"/></svg>
      <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
        <div class="w-full mr-[16px]">
          <ClickButton @click="modalStore.closeModal();router.push({name: 'Login'})" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
            關閉視窗
          </ClickButton>
        </div>
      </div>   
    </template>
  </Modal>
  <Loading></Loading>
  <BackgroundMask></BackgroundMask>
</template>
<style scoped></style>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { apiPutUserProfile } from '@/api/user';
import { useUserStore } from '../stores/user'
import { useModalStore } from '../stores/modal'
import { useRouter, useRoute } from 'vue-router'
import Modal from '../components/Modal.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import ClickButton from '../components/ClickButton.vue'
import InputText from '../components/InputText.vue'
import InputSelectBind from '../components/InputSelectBind.vue'
import taiwanCityData from '../api/taiwanCityData.json'
const userStore = useUserStore()
const modalStore = useModalStore()
const router = useRouter()
const route = useRoute()
const editPassword = ref(false)
const editBasicInfo = ref(false)
const cityName = ref('')
const years = ref<number[]>([])
const months = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
const currentDate = ref(new Date())
const signupData = ref<Signup>({
  name: '',
  email: '',
  password: '',
  phone: '',
  birthday: '',
  address: {
    zipcode: '',
    detail: ''
  }
})
const resetUserInfo = ref(
  {
    "userId": "",
    "name": "",
    "phone": "",
    "birthday": "",
    "address": {
      "zipcode": 0,
      "detail": ""
    },
    "oldPassword": "",
    "newPassword": ""
  }
)
const currentYear = computed(() => {
  return currentDate.value.getFullYear()
})
const birthYear = ref(currentYear.value)
const birthMonth = ref(1)
const birthDay = ref(1)
const lastDayOfMonth = computed(() => {
  return new Date(birthYear.value, birthMonth.value, 0).getDate()
})
signupData.value.birthday = `${birthYear.value}/${birthMonth.value}/${birthDay.value}`
const generateYearRange = () => {
  const startYear = currentYear.value - 100
  const endYear = currentYear.value
  for (let year = startYear; year <= endYear; year++) {
    years.value.push(year)
  }
}
const edit = () => {
  editBasicInfo.value = true
  editPassword.value = true
}
const saveReset = async() => {
  modalStore.option = 'reset'
  try {
    const res = await apiPutUserProfile(resetUserInfo.value)
    modalStore.status = 1    
  } catch(error) {
    console.log('catch error', error)
    modalStore.status = 0
    modalStore.errorStatus = error.status
    modalStore.msg = error.response.data.message
  } 
  modalStore.openModal()
}
const areaList = computed(() => {
  let city = taiwanCityData.find((item) => item.CityName === cityName.value)
  return city?.AreaList
})

resetUserInfo.value.userId = userStore.userInfo._id
resetUserInfo.value.name = userStore.userInfo.name
resetUserInfo.value.phone = userStore.userInfo.phone
resetUserInfo.value.birthday = '1948/6/5'
resetUserInfo.value.address.zipcode = userStore.userInfo.address.zipcode
resetUserInfo.value.address.detail = userStore.userInfo.address.detail
resetUserInfo.value.oldPassword = 'cheer801174'
resetUserInfo.value.newPassword = ''

onMounted(() => {
  generateYearRange()
})
// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })
</script>
