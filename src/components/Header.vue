<template>
  <header
    class="px-5 fixed w-full z-40 transition-all duration-300"
    :class="{
      'bg-[#140F0A]':
        route.name === 'Book' ||
        route.name === 'Success' ||
        route.name === 'Profile' ||
        route.name === 'Order' ||
        route.name === 'HotelDetail' ||
        route.name === 'Login' ||
        route.name === 'Signup' ||
        isScrolled
    }"
  >
    <div class="flex w-full justify-between items-center md:max-w-[1760px] h-[72px] md:h-[120px] mx-auto">
      <router-link class="md:my-[24px]" :to="{ name: 'Home' }">
        <img class="max-w-[110px] xs:max-w-[110px] md:max-w-[196px]" src="../assets/img/pc/logo.png" alt="享樂酒店" />
      </router-link>
      <button class="block md:hidden" @click="menuOpen = true">
        <img :src="`${ic_menu}`" alt="" />
      </button>
      <nav v-if="route.name != 'Login' && route.name != 'Signup'" class="hidden md:flex">
        <div v-if="userStore.userInfo" class="cursor-pointer relative">
          <span @click="dropdownOpen = !dropdownOpen" class="block p-[16px] mr-[16px] text-[#FFFFFF]">客房旅宿</span>
          <ul
            v-if="dropdownOpen"
            class="absolute z-10 w-[260px] -left-[25px] top-[68px] list-none rounded-[20px] bg-[#FFFFFF] overflow-hidden"
          >
            <li class="mt-[12px]">
              <router-link
                class="block text-[1rem] font-bold py-[16px] px-[24px] hover:bg-[#F7F2EE] hover:text-[#BF9D7D] text-[#4B4B4B]"
                :to="{ name: 'Profile' }"
                >我的帳戶</router-link
              >
            </li>
            <li class="mb-[12px]">
              <span @click="logout()"
                class="block cursor-pointer text-[1rem] font-bold py-[16px] px-[24px] hover:bg-[#F7F2EE] hover:text-[#BF9D7D] text-[#4B4B4B]"
                >登出</span
              >
            </li>
          </ul>
        </div>
        <router-link v-if="!userStore.userInfo" :to="{ name: 'Login' }" class="block p-[16px] mr-[16px] text-[#FFFFFF]">會員登入</router-link>
        <div v-else class="flex items-center p-[16px] mr-[16px]">
          <!-- <img class="mr-[8px]" src="../assets/img/ic_Profile.svg" alt=""> -->
          <span class="text-[#FFFFFF]">{{ userStore.userInfo.name }}</span>
        </div>
        <router-link
          class="block rounded-[8px] px-[32px] py-[16px] font-bold text-[#FFFFFF] bg-[#BF9D7D]"
          :to="{ name: 'AllHotel' }"
          >立即訂房</router-link
        >
      </nav>
    </div>
    <div v-if="menuOpen" class="w-full h-full bg-[#000000] fixed z-30 top-0 left-0 px-[20px]">
      <button
        @click="menuOpen = false"
        class="absolute top-[28px] right-[28px] w-[64px] h-[64px] flex items-center justify-center"
      >
        <svg class="w-[28px] h-[28px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_14_2300)">
            <path
              class="fill-[#FFFFFF]"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_14_2300">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div class="flex flex-col justify-center w-full h-full">
        <ClickButton v-if="userStore.userInfo" @click="dropdownOpen = !dropdownOpen" customClass="hover:bg-[#BF9D7D] text-[#FFFFFF]" isLink="false"> 客房旅宿 </ClickButton>
        <ClickButton v-else customClass="hover:bg-[#BF9D7D] text-[#FFFFFF]" :to="{ name: 'Login' }"> 會員登入 </ClickButton>
        <transition name="expand">
          <ul v-if="dropdownOpen">
            <li class="text-right">
              <router-link
                class="block text-[1rem] font-bold py-[16px] px-[24px] hover:bg-[#F7F2EE] hover:text-[#BF9D7D] text-[#FFFFFF]"
                :to="{ name: 'Profile' }"
                >我的帳戶</router-link
              >
            </li>
            <li class="text-right">
              <span @click="logout()"
                class="block cursor-pointer text-[1rem] font-bold py-[16px] px-[24px] hover:bg-[#F7F2EE] hover:text-[#BF9D7D] text-[#FFFFFF]"
                >登出</span
              >
            </li>
          </ul>
        </transition>
        <ClickButton customClass="hover:bg-[#BF9D7D] text-[#FFFFFF]" :to="{ name: 'AllHotel' }"> 立即訂房 </ClickButton>
      </div>
    </div>
  </header>
</template>
<style scoped>
/* 定義過渡樣式 */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 300px; /* 這裡可以根據內容調整最大高度 */
  opacity: 1;
}
</style>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter, useRoute } from 'vue-router'
import ic_menu from '@/assets/img/svg/ic_menu.svg'
import ic_close from '@/assets/img/svg/ic_close.svg'
import ClickButton from '@/components/ClickButton.vue'
const dropdownOpen = ref(false)
const menuOpen = ref(false)
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}
const logout = () => {
  userStore.logout()
  router.push({ name: 'Home' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
