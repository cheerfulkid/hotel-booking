<template>
  <div class="bg-[#140F0A] min-h-[100%]">
    <Header></Header>
    <main>
      <div class="flex h-full pt-[72px] md:pt-[120px] relative">
        <img class="hidden md:block absolute h-[187px] object-cover right-0 top-[191px]" :src="line3" alt="" />
        <div :class="`z-10 w-full md:max-w-[960px] hidden md:block h-[958px] bg-[url(${register})] bg-cover bg-center`"></div>
        <template v-if="route.params.step != '2'">
          <div class="z-10 w-full md:w-[50%] relative bg-no-repeat md:px-[20px] pt-[32px] md:pt-[159px]">
            <img class="absolute top-[38px] block md:hidden object-scale-down mb-[6px]" :src="customLine" alt="" />
            <div class="z-10 max-w-full md:max-w-[416px] mx-[20px] md:mx-auto">
              <span class="text-[0.875rem] md:text-[1rem] text-[#BF9D7D] line-height-[24px] font-bold relative"
                >享樂酒店，誠摯歡迎</span
              >
              <h3
                class="pt-[8px] pb-[16px] md:pb-[40px] text-[#FFFFFF] text-[2rem] md:text-[3rem] font-bold line-height-[57.6px] relative"
              >
                立即註冊
              </h3>
              <div
                class="step flex justify-between relative after:top-[50%] after:left-[50%] after:translate-y-[-50%] after:translate-x-[-50%] after:absolute after:bg-[#909090] after:block after:h-[2px] after:w-full after:max-w-[30%]"
              >
                <router-link class="flex flex-col items-center" :to="{ name: 'Signup', params: { step: 1 } }">
                  <span
                    class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]"
                    >1</span
                  >
                  <p class="text-[0.875rem] md:text-[1rem] text-white font-bold">輸入信箱及密碼</p>
                </router-link>

                <router-link class="flex flex-col items-center" :to="{ name: 'Signup', params: { step: 2 } }">
                  <span
                    class="rounded-full w-[32px] h-[32px] border-[1px] block text-[#909090] flex items-center justify-center mb-[4px]"
                    >2</span
                  >
                  <p class="text-[0.875rem] md:text-[1rem] text-[#909090] font-bold">填寫基本資料</p>
                </router-link>
              </div>
              <form class="mt-[40px] md:mt-[56px]">
                <div class="flex flex-col mb-[16px]">
                  <label
                    for=""
                    class="text-[0.875rem] md:text-[1rem] text-[#FFFFFF] text-[1rem] line-height-[24px] font-bold mb-[8px]"
                    >電子信箱<span class="ml-1 text-red-600">*</span></label
                  >
                  <input
                    type="email"
                    v-model="signupData.email"
                    class="placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
                    placeholder="hello@exsample.com"
                  />
                </div>
                <div class="flex flex-col mb-[16px]">
                  <label
                    for=""
                    class="text-[0.875rem] md:text-[1rem] text-[#FFFFFF] text-[1rem] line-height-[24px] font-bold mb-[8px]"
                    >密碼<span class="ml-1 text-red-600">*</span></label
                  >
                  <input
                    type="password"
                    v-model="signupData.password"
                    class="placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
                    placeholder="請輸入密碼"
                  />
                </div>
                <div class="flex flex-col mb-[40px]">
                  <label
                    for=""
                    class="text-[0.875rem] md:text-[1rem] text-[#FFFFFF] text-[1rem] line-height-[24px] font-bold mb-[8px]"
                    >確認密碼<span class="ml-1 text-red-600">*</span></label
                  >
                  <input
                    type="password"
                    v-model="checkPassword"
                    class="placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
                    placeholder="請再輸入一次密碼"
                  />
                </div>
                <router-link
                  :to="{ name: 'Signup', params: { step: 2 } }"
                  class="mb-[56px] inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[1rem] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]"
                  >下一步</router-link
                >
              </form>
              <p class="text-[0.875rem] md:text-[1rem] text-[#FFFFFF] mb-[94px]">
                已經有會員了嗎？<router-link :to="{ name: 'Login' }" class="mt-[8px] text-[#BF9D7D] underline font-bold"
                  >立即登入</router-link
                >
              </p>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="z-10 w-full md:w-[50%] relative md:px-[20px] pt-[32px] md:pt-[159px]">
            <img class="absolute top-[38px] block md:hidden object-scale-down mb-[6px]" :src="customLine" alt="" />
            <div class="z-10 max-w-full md:max-w-[416px] mx-[20px] md:mx-auto">
              <span class="text-[0.875rem] md:text-[1rem] text-[#BF9D7D] line-height-[24px] font-bold relative"
                >享樂酒店，誠摯歡迎</span
              >
              <h3
                class="pt-[8px] pb-[16px] md:pb-[40px] text-[#FFFFFF] text-[2rem] md:text-[3rem] font-bold line-height-[57.6px] relative"
              >
                立即註冊
              </h3>
              <div
                class="step flex justify-between relative after:top-[50%] after:left-[50%] after:translate-y-[-50%] after:translate-x-[-50%] after:absolute after:bg-[#ECECEC] after:block after:h-[2px] after:w-full after:max-w-[30%]"
              >
                <router-link class="flex flex-col items-center" :to="{ name: 'Signup', params: { step: 1 } }">
                  <span
                    class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]"
                    >1</span
                  >
                  <p class="text-[0.875rem] md:text-[1rem] text-white font-bold">輸入信箱及密碼</p>
                </router-link>

                <div class="flex flex-col items-center">
                  <span
                    class="rounded-full w-[32px] h-[32px] bg-[#BF9D7D] block text-white flex items-center justify-center mb-[4px]"
                    >2</span
                  >
                  <p class="text-[0.875rem] md:text-[1rem] text-white font-bold">填寫基本資料</p>
                </div>
              </div>
              <form class="mt-[40px] md:mt-[56px]">
                <div class="flex flex-col mb-[16px]">
                  <label for="" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
                    >姓名<span class="ml-1 text-red-600">*</span></label
                  >
                  <input
                    type="text"
                    v-model="signupData.name"
                    class="placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div class="flex flex-col mb-[16px]">
                  <label for="" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
                    >手機號碼<span class="ml-1 text-red-600">*</span></label
                  >
                  <input
                    type="text"
                    v-model="signupData.phone"
                    class="placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
                    placeholder="請輸入手機號碼"
                  />
                </div>
                <div class="flex flex-col mb-[16px]">
                  <label for="" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
                    >生日<span class="ml-1 text-red-600">*</span></label
                  >
                  <div class="flex">
                    <div class="w-1/3 pr-[8px]">
                      <InputSelectBind :data="years" propertyValue="" property="" v-model:name="birthYear"></InputSelectBind>
                    </div>
                    <div class="w-1/3 pr-[8px]">
                      <InputSelectBind :data="months" propertyValue="" property="" v-model:name="birthMonth"></InputSelectBind>
                    </div>
                    <div class="w-1/3">
                      <InputSelectBind
                        :data="lastDayOfMonth"
                        propertyValue=""
                        property=""
                        v-model:name="birthDay"
                      ></InputSelectBind>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col mb-[16px]">
                  <label for="" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
                    >地址<span class="ml-1 text-red-600">*</span></label
                  >
                  <div class="flex">
                    <div class="w-1/2 pr-[8px]">
                      <InputSelectBind
                        :data="taiwanCityData"
                        propertyValue="CityName"
                        property="CityName"
                        v-model:name="cityName"
                      ></InputSelectBind>
                    </div>
                    <div class="w-1/2">
                      <InputSelectBind
                        :data="areaList"
                        propertyValue="ZipCode"
                        property="AreaName"
                        v-model:name="signupData.address.zipcode"
                      ></InputSelectBind>
                    </div>
                  </div>
                  <div class="flex mt-[16px]">
                    <div class="w-full">
                      <input
                        class="w-full placeholder:text-[0.875rem] md:placeholder:text-[1rem] placeholder:text-[#909090] p-[16px] rounded-[8px]"
                        v-model="signupData.address.detail"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
                <div class="flex items-center mb-[40px]">
                  <input
                    id="agree"
                    type="checkbox"
                    :class="`w-[24px] h-[24px] rounded-[4px] bg-white mr-[8px] appearance-none before:content-[''] before:bg-[url(${ic_check})] before:block before:w-full before:h-full checked:bg-[#BF9D7D]`"
                  />
                  <label for="agree" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold"
                    >我已閱讀並同意本網站個資使用規範<span class="ml-1 text-red-600">*</span></label
                  >
                </div>
                <span
                  @click.prevent="signup"
                  class="mb-[56px] flex items-center justify-center inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[1rem] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]"
                >
                  <!-- <button v-if="loading" type="button" class="bg-indigo-500" disabled>
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </button> -->
                  <span>完成註冊</span>
                </span>
              </form>
              <p class="text-[0.875rem] md:text-[1rem] text-[#FFFFFF] mb-[94px]">
                已經有會員了嗎？<router-link :to="{ name: 'Login' }" class="mt-[8px] text-[#BF9D7D] underline font-bold"
                  >立即登入</router-link
                >
              </p>
            </div>
          </div>
        </template>
      </div>
    </main>
    <Modal>
      <template #title> 註冊狀態 </template>
      <template #content>        
        <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ errorStatus }} <template v-if="errorStatus">：</template> {{ msg }}
        </p>
        <template v-if="modalStep===1">
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-full mr-[16px]">
              <ClickButton @click="modalStore.closeModal();router.push({name: 'Login'})" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
          </div>
        </template>
        <template v-else-if="modalStep===0">
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
    <Loading></Loading>
    <BackgroundMask></BackgroundMask>
  </div>
</template>
<style scoped></style>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '../stores/user'
import { useModalStore } from '../stores/modal'
import { apiPostUserSignup } from '@/api/user';
import { useRouter, useRoute } from 'vue-router'
import { Signup } from '../types/signup'
import Header from '../components/Header.vue'
import ClickButton from '../components/ClickButton.vue'
import Modal from '../components/Modal.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import taiwanCityData from '../api/taiwanCityData.json'
import line3 from '../assets/img/pc/line3.png'
import smLine3 from '../assets/img/mobile/line.png'
import customLine from '../assets/img/pc/custom-line.png'
import register from '../assets/img/pc/register.png'
import InputSelectBind from '../components/InputSelectBind.vue'
import ic_check from '../assets/img/svg/ic_check.svg'
const userStore = useUserStore()
const modalStore = useModalStore()
const router = useRouter()
const route = useRoute()
const modalStep = ref(1)
const msg = ref('')
const errorStatus = ref('')
// const loading = ref(false)
const cityName = ref('')
const checkPassword = ref<string>('')
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
const areaList = computed(() => {
  let city = taiwanCityData.find((item) => item.CityName === cityName.value)
  return city?.AreaList
})
const signup = async () => {
  msg.value = ''
  errorStatus.value = ''
  if (checkPassword.value === signupData.value.password) {
    try {
      const res = await apiPostUserSignup(signupData.value)
      // console.log('res', res)
      if (res.data.status) {
        modalStep.value = 1
        msg.value = '註冊成功！'
        // alert('註冊成功！')
        // router.push({
        //   name: 'Login'
        // })
      } else {
        modalStep.value = 0
        msg.value = '註冊失敗'
      }
    } catch(error) {
      modalStep.value = 0
      errorStatus.value = error.status
      msg.value = error.response.data.message
    }
  } else {
    modalStep.value = 0
    msg.value = '密碼與第一次輸入的不同，再請確認！'
  }
  // console.log('msg.value',msg.value)
  modalStore.openModal() 
}
onMounted(() => {
  generateYearRange()
})
</script>
