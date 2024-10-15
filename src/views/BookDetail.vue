<template>
 <div class="min-h-[100%]">
  <Header></Header>
  <main>
   <section class="bg-[#140F0A] pt-[112px] md:pt-[240px] pb-[40px] md:pb-[120px]">
    <div class="max-w-[1296px] mx-auto md:flex items-start px-[12px]">
     <div class="w-full max-w-[746px] md:pr-[16px] lg:pr-[72px]">
      <div class="flex mb-[40px]">
       <div class="w-[56px] h-[56px] bg-[#52DD7E] rounded-full flex items-center justify-center mr-[40px]">
        <img class="w-[40px] h-[40px]" :src="`${ic_check}`" alt="">
       </div>
       <h3 class="text-[3rem] font-bold">恭喜，Jessica！<br>您已預訂成功</h3>
      </div>
      <p>我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
      <DivideLine customClass="bg-[#ECECEC] my-[80px]"></DivideLine>
      <h6 class="text-[1.5rem] font-bold mb-[40px]">立即查看您的訂單紀錄</h6>
      <div class="max-w-[218px]">
       <ClickButton customClass="bg-[#BF9D7D]" :to="{ name: 'BookDetail' }">
        確認訂房
       </ClickButton>
      </div>
      <DivideLine customClass="bg-[#ECECEC] my-[80px]"></DivideLine>
      <h6 class="text-[1.5rem] font-bold mb-[40px]">訂房人資訊</h6>
      <p class="text-[#FFFFFF] mb-[8px]">姓名</p>
      <p class="text-[#FFFFFF] font-bold mb-[24px]">Jessica Wang</p>
      <p class="text-[#FFFFFF] mb-[8px]">手機號碼</p>
      <p class="text-[#FFFFFF] font-bold mb-[24px]">+886 912 345 678</p>
      <p class="text-[#FFFFFF] mb-[8px]">電子信箱</p>
      <p class="text-[#FFFFFF] font-bold">jessica@sample.com</p>
     </div>     
     <aside class="p-[40px] bg-[#FFFFFF] rounded-xl w-full md:max-w-[478px] sticky top-[120px]">
      <p class="mb-[8px] text-[#4B4B4B]">預訂參考編號： HH2302183151222</p>
      <p class="text-[1.5rem] font-bold mb-[40px]">即將來的行程</p>
      <div class="max-w-[398px] mb-[40px]">
       <img class="rounded-lg" :src="`${room2_1}`" alt="">
      </div>  
      <p class="text-[#4B4B4B] text-[1.25rem] flex items-center mb-[24px]">尊爵雙人房，1 晚<span class="bg-[#909090] w-[1px] h-full inline-block mx-[16px]"></span>住宿人數：2 位</p>
      <DecoTitle customClass="mb-[8px]">入住：6 月 10 日星期二，15:00 可入住</DecoTitle>
      <DecoTitle customClass="before:bg-[#4B4B4B] mb-[24px]">退房：6 月 11 日星期三，12:00 前退房</DecoTitle>
      <p class="font-bold text-[#4B4B4B]">NT$ 10,000</p>
      <DivideLine customClass="bg-[#ECECEC] my-[40px]"></DivideLine>
      <DecoTitle customClass="mb-[24px]">房內設備</DecoTitle>
      <div class="w-full grid grid-cols-2 xl:grid-cols-3 gap-[40px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-[40px]">
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">電視</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吹風機</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">熱水壺</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衣櫃</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">除濕機</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">書桌</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">冰箱</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴缸</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">檯燈</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">音響</CheckItem>        
      </div>
      <DecoTitle customClass="mb-[24px]">備品提供</DecoTitle>
      <div class="w-full grid grid-cols-2 xl:grid-cols-3 gap-[40px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-[40px]">
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衛生紙</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">沐浴用品</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刮鬍刀</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吊衣架</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刷牙用品</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">梳子</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">拖鞋</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">清潔用品</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">罐裝水</CheckItem>
       <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴巾</CheckItem>  
      </div>
     </aside>
    </div>    
   </section>
  </main>
  <Footer></Footer>
 </div> 
</template>
<style scoped>
</style>
<script setup lang="ts">
import { ref, computed } from "vue";
// import type { Login } from "../types/login"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ic_check from '../assets/img/svg/ic_check.svg';
import room2_1 from '../assets/img/pc/room2-1.png';
import DivideLine from '../components/DivideLine.vue';
import ClickButton from '../components/ClickButton.vue';
import DecoTitle from '../components/DecoTitle.vue';

// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })

</script>