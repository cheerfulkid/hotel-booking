<template>
  <div class="min-h-[100%]">
    <Header></Header>
    <main class="bg-[#140F0A]">
      <section class="pt-[72px] md:pt-[120px]">
        <div :class="`w-full h-[206px] sm:h-[384px] bg-cover bg-center bg-[url(${hero})]`">
          <div class="max-w-[1296px] h-full mx-auto px-[12px] sm:flex items-center pt-[40px] sm:pt-0">
            <div class="max-w-[72px] sm:max-w-[144px] mr-[24px] mb-[16px] sm:mb-0">
              <img :src="`${user1}`" alt="" />
            </div>
            <p class="font-bold text-[2rem] sm:text-[3rem] text-[#FFFFFF]">Hello，{{ userStore.userInfo.name }}</p>
          </div>
        </div>
      </section>
      <section class="pt-[40px] md:pt-[80px] px-[12px]">
        <div class="max-w-[1296px] mx-auto">
          <nav class="mb-[40px] md:mb-[80px] flex items-center">
            <router-link
              class="w-[113px] h-[56px] flex items-center justify-center font-bold after:inline-block after:w-[32px] after:h-[4px] flex flex-col after:mt-[8px]"
              :class="{
                'text-[#FFFFFF]': route.name != 'Profile',
                ['text-[#BF9D7D] after:bg-[#BF9D7D] after:rounded-full']: route.name === 'Profile'
              }"
              :to="{ name: 'Profile' }"
              >個人資料</router-link
            >
            <router-link
              class="w-[113px] h-[56px] flex items-center justify-center font-bold after:inline-block after:w-[32px] after:h-[4px] flex flex-col after:mt-[8px]"
              :class="{
                'text-[#FFFFFF]': route.name != 'Order',
                ['text-[#BF9D7D] after:bg-[#BF9D7D] after:rounded-full']: route.name === 'Order'
              }"
              :to="{ name: 'Order' }"
              >我的訂單</router-link
            >
          </nav>
          <router-view></router-view>
        </div>
      </section>
      <img class="block md:hidden mt-[40px] md:mt-[120px] object-scale-down" :src="mobile_line2" alt="" />
      <img class="hidden md:block mt-[40px] md:mt-[120px] object-cover h-[188px]" :src="line2" alt="" />
    </main>
    <Footer></Footer>
  </div>
</template>
<style scoped></style>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import hero from '@/assets/img/pc/hero.png'
import mobile_line2 from '@/assets/img/mobile/line.png'
import line2 from '@/assets/img/pc/line2.png'
import user1 from '@/assets/img/pc/user1.png'
const route = useRoute()
const userStore = useUserStore()
</script>
