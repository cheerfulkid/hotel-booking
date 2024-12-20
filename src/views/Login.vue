<template>
  <div class="bg-[#140F0A] min-h-[100%]">
    <Header></Header>
    <main>
      <div class="flex h-full pt-[72px] md:pt-[120px] relative">
        <img class="hidden md:block absolute h-[187px] object-cover right-0 top-[191px]" :src="line3" alt="" />
        <div :class="`z-10 w-full md:max-w-[960px] hidden md:block h-[958px] bg-[url(${register})] bg-cover bg-center`"></div>
        <div class="z-10 w-full md:w-[50%] relative bg-no-repeat md:px-[20px] pt-[32px] md:pt-[159px]">
          <img class="block md:hidden object-scale-down mb-[6px]" :src="customLine" alt="" />
          <div class="max-w-full md:max-w-[416px] mx-[20px] md:mx-auto">
            <span class="text-[0.875rem] md:text-[1rem] text-[#BF9D7D] line-height-[24px] font-bold relative"
              >享樂酒店，誠摯歡迎</span
            >
            <h3 class="pt-[8px] pb-[40px] text-[#FFFFFF] text-[2rem] md:text-[3rem] font-bold line-height-[57.6px] relative">
              立即開始旅程
            </h3>
            <form>
              <div class="flex flex-col mb-[16px]">
                <label for="" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
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
                <label for="" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold mb-[8px]"
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
                  <label for="remember" class="text-[#FFFFFF] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold"
                    >記住帳號</label
                  >
                </div>
                <a href="" @click.prevent="modalOption='verify';modalStore.openModal()" class="text-[#BF9D7D] text-[0.875rem] md:text-[1rem] line-height-[24px] font-bold underline"
                  >忘記密碼？</a
                >
              </div>
              <a
                href=""
                @click.prevent="login()"
                class="mb-[56px] font-bold inline-block py-[16px] text-[#909090] bg-[#ECECEC] rounded-[8px] text-[1rem] line-height-[24px] font-bold w-full text-center hover:bg-[#BF9D7D] hover:text-[#FFFFFF]"
              >
                <!-- <button type="button" class="bg-indigo-500" disabled>
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
                <span>會員登入</span>
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
    <Modal v-if="modalOption==='login'">
      <template #title> 登入狀態 </template>
      <template #content>
        <template v-if="loginStep===1">
          <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            登入成功！
          </p>
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-full mr-[16px]">
              <ClickButton @click="modalStore.closeModal();router.push({name: 'Home'})" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
          </div>
        </template>
        <template v-else-if="loginStep===0">
          <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            {{ errorStatus }} <template v-if="errorStatus">：</template> {{ errorMsg }}
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
    <Modal v-if="modalOption==='verify'">
      <template #title> 忘記密碼 </template>
      <template #content>
        <template v-if="verifyStep===1">
          <p class="text-[#4B4B4B] my-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            驗證註冊電子信箱
          </p>
          <div class="w-full px-[12px]">
            <InputText v-model="verifyColumn.email" class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" placeholder="請輸入註冊電子信箱"></InputText>    
          </div>        
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-[50%] mr-[16px]">
              <ClickButton @click="modalStore.closeModal();verifyStep=1" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
            <div class="w-[50%]">
              <ClickButton @click="verify()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 驗證 </ClickButton>
            </div>
          </div>
        </template>
        <template v-else-if="verifyStep===2">
          <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            信箱有註冊
          </p>
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-[50%] mr-[16px]">
              <ClickButton @click="modalStore.closeModal();verifyStep=1" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
            <div class="w-[50%]">
              <ClickButton @click="sendCode()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 寄發驗證碼 </ClickButton>
            </div>
          </div>
        </template>
        <template v-else-if="verifyStep===3">
          <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            已寄發驗證碼至電子信箱
          </p>
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-[50%] mr-[16px]">
              <ClickButton @click="modalStore.closeModal();verifyStep=1" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
            <div class="w-[50%]">
              <ClickButton @click="verifyStep=4" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]">
                進行重設密碼
              </ClickButton>
            </div>
            <!-- <div class="w-[50%]">
              <ClickButton @click="sendCode()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 寄發驗證碼 </ClickButton>
            </div> -->
          </div>
        </template>
        <template v-else-if="verifyStep===4">
          <p class="text-[#4B4B4B] my-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            重設密碼
          </p>
          <div class="w-full px-[12px]">
            <InputText v-model="resetColumn.email" class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" placeholder="請輸入註冊電子信箱"></InputText>
            <InputText v-model="resetColumn.code" class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" placeholder="請輸入驗證碼"></InputText>
            <InputText v-model="resetColumn.newPassword" class="text-[0.875rem] md:text-[1rem] mb-[16px] md:mb-[24px]" type="password" placeholder="請輸入新密碼"></InputText>    
          </div> 
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-[50%] mr-[16px]">
              <ClickButton @click="modalStore.closeModal();verifyStep=1" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
            <div class="w-[50%]">
              <ClickButton @click="resetPassword()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]">
                重設密碼
              </ClickButton>
            </div>
            <!-- <div class="w-[50%]">
              <ClickButton @click="sendCode()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 寄發驗證碼 </ClickButton>
            </div> -->
          </div>
        </template>
        <template v-else-if="verifyStep===5">
          <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            重新設置密碼成功！
          </p>
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-full">
              <ClickButton @click="modalStore.closeModal();verifyStep=1" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
            <!-- <div class="w-[50%]">
              <ClickButton @click="sendCode()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 寄發驗證碼 </ClickButton>
            </div> -->
          </div>
        </template>
        <template v-else>
          <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            {{ errorStatus }} <template v-if="errorStatus">：</template> {{ errorMsg }}
          </p>  
          <svg class="checkmark error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_error" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" stroke-linecap="round" fill="none" d="M16 16 36 36 M36 16 16 36"/></svg>     
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <template v-if="hasPrev">
              <div class="w-[50%] mr-[16px]">
                <ClickButton @click="modalStore.closeModal();verifyStep=1" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                  關閉視窗
                </ClickButton>
              </div>
              <div class="w-[50%]">
                <ClickButton @click="prevToStep(4)" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]">
                  上一步
                </ClickButton>                
              </div>
            </template>
            <template v-else>
              <div class="w-full">
                <ClickButton @click="modalStore.closeModal();verifyStep=1" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                  關閉視窗
                </ClickButton>
              </div>
            </template>            
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
import { ref } from 'vue'
import type { Login } from '../types/login'
import { useUserStore } from '../stores/user'
import { useModalStore } from '../stores/modal'
import { apiPostUserForget, apiPostUserVerifyEmail, apiPostUserVerifyGenerateEmailCode } from '@/api/user';
import { useRouter, useRoute } from 'vue-router'
// import '@/validation-rules';
import Header from '../components/Header.vue'
import InputText from '../components/InputText.vue'
import ClickButton from '../components/ClickButton.vue'
import Modal from '../components/Modal.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import line3 from '../assets/img/pc/line3.png'
import smLine3 from '../assets/img/mobile/line.png'
import customLine from '../assets/img/pc/custom-line.png'
import register from '../assets/img/pc/register.png'
import ic_check from '../assets/img/svg/ic_check.svg'
const userStore = useUserStore()
const modalStore = useModalStore()
const router = useRouter()
const modalOption = ref('')
const verifyStep = ref(1)
const loginStep = ref(0)
const hasPrev = ref(false)
const errorMsg = ref('')
const errorStatus = ref('')
const verifyColumn = ref({
  email: ''
})
const resetColumn = ref({
  'email': '',
  'code': '',
  'newPassword': ''
})
const loginData = ref<Login>({
  email: '',
  password: ''
})
const login = async () => {
  modalOption.value = 'login'
  try {
    await userStore.storePostUserLogin(loginData.value);
    if (userStore.isLoggedIn) {
      loginStep.value = 1
    } else {
      loginStep.value = 0
      errorStatus.value = ''
      errorMsg.value = '登入失敗'
    }
  } catch(error) {
    console.log('error!!')
    loginStep.value = 0
    errorStatus.value = error.status
    errorMsg.value = error.response.data.message
  }
  modalStore.openModal()
};
const verify = async () => {
  modalOption.value = 'verify'
  try {
    const res = await apiPostUserVerifyEmail(verifyColumn.value)
    if(res.data.result.isEmailExists) {
      verifyStep.value = 2
    } else {
      verifyStep.value = 0
      errorStatus.value = ''
      errorMsg.value = '此信箱並無註冊'
    }
  } catch(error) {
    verifyStep.value = 0
    errorStatus.value = error.status
    errorMsg.value = error.response.data.message
  } 
  modalStore.openModal() 
}
const sendCode = async () => {
  modalOption.value = 'verify'
  try {
    const res = await apiPostUserVerifyGenerateEmailCode(verifyColumn.value)
    if(res.data.status) {      
      verifyStep.value = 3
    } else {
      verifyStep.value = 0
      errorStatus.value = ''
      errorMsg.value = '驗證碼寄發失敗'
    }
    // console.log('res', res)
  } catch(error) {
    verifyStep.value = 0
    errorStatus.value = error.status
    errorMsg.value = error.response.data.message
  }
  modalStore.openModal()
}
const resetPassword = async () => {
  modalOption.value = 'verify'
  try {
    const res = await apiPostUserForget(resetColumn.value)
    console.log(res)
    if(res.data.status) {      
      verifyStep.value = 5
    } else {
      verifyStep.value = 0
      hasPrev.value = true
      errorStatus.value = ''
      errorMsg.value = '重新設置密碼失敗'
    }    
  } catch(error) {
    verifyStep.value = 0
    hasPrev.value = true
    errorStatus.value = error.status
    errorMsg.value = error.response.data.message
  }
  modalStore.openModal()
}
const prevToStep = (step) => {
  verifyStep.value = 4
  // hasPrev.value = false
}
</script>
