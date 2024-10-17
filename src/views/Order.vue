<template>
 <div class="min-h-[100%]">
  <Header></Header>
  <main>
   <section class="bg-[#140F0A] pt-[80px] pb-[120px]">
    <nav class="mb-[80px]">
     <router-link class="w-[113px] h-[56px] flex items-center justify-center text-[#BF9D7D] font-bold after:inline-block after:bg-[#BF9D7D] after:w-[32px] after:h-[4px] after:rounded-full flex flex-col after:mt-[8px]" :to="{ name: 'Profile' }">個人資料</router-link>
     <router-link class="w-[113px] h-[56px] flex items-center justify-center text-[#FFFFFF] font-bold" :to="{ name: 'Order' }">我的訂單</router-link>
    </nav>
    <router-view></router-view>
   </section>
  </main>
  <Footer></Footer>
 </div> 
</template>
<style scoped>
</style>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'
// import type { Login } from "../types/login"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ClickButton from '../components/ClickButton.vue';
import InputText from '../components/InputText.vue';
import CheckItem from '../components/CheckItem.vue';
import BasicInfo from '../components/BasicInfo.vue';
import DecoTitle from '../components/DecoTitle.vue';
import DivideLine from '../components/DivideLine.vue';
import InputSelectBind from '../components/InputSelectBind.vue';
import taiwanCityData from "../api/taiwanCityData.json"
const cityName = ref("")
const areaList = computed(() => {
 let city = taiwanCityData.find((item) => item.CityName === cityName.value)
 return city?.AreaList
})
// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })

</script>