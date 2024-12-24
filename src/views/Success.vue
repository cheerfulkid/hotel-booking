<template>
  <div class="min-h-[100%]">
    <Header></Header>
    <main>
      <section class="bg-[#140F0A] pt-[112px] md:pt-[240px]">
        <div class="max-w-[1296px] mx-auto md:flex items-start px-[12px]">
          <div class="w-full max-w-[746px] md:pr-[16px] lg:pr-[72px] mb-[60px] md:mb-0">
            <div class="md:flex mb-[32px] md:mb-[40px] md:flex-wrap">
              <div
                class="w-[56px] h-[56px] bg-[#52DD7E] rounded-full flex items-center justify-center mr-[40px] mb-[16px] md:mb-0"
              >
                <img class="w-[40px] h-[40px]" :src="`${ic_check}`" alt="" />
              </div>
              <h3 class="text-[2rem] md:text-[2rem] lg:text-[3rem] font-bold text-[#FFFFFF]">恭喜，Grace！<br />您已預訂成功</h3>
            </div>
            <p class="text-[#FFFFFF]">我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
            <DivideLine customClass="bg-[#ECECEC] my-[40px] md:my-[80px]"></DivideLine>
            <h6 class="text-[1rem] md:text-[1.5rem] font-bold mb-[24px] md:mb-[40px] text-[#FFFFFF]">立即查看您的訂單紀錄</h6>
            <div class="max-w-full lg:max-w-[218px]">
              <ClickButton customClass="bg-[#BF9D7D] text-[#FFFFFF]" :to="{ name: 'Order' }"> 前往我的訂單 </ClickButton>
            </div>
            <DivideLine customClass="bg-[#ECECEC] my-[40px] md:my-[80px]"></DivideLine>
            <h6 class="text-[1.5rem] font-bold mb-[32px] md:mb-[40px] text-[#FFFFFF]">訂房人資訊</h6>
            <p class="text-[#FFFFFF] mb-[8px] text-[#FFFFFF]">姓名</p>
            <p class="text-[#FFFFFF] font-bold mb-[24px] text-[#FFFFFF]">Grace Lin</p>
            <p class="text-[#FFFFFF] mb-[8px] text-[#FFFFFF]">手機號碼</p>
            <p class="text-[#FFFFFF] font-bold mb-[24px] text-[#FFFFFF]">+886 912 345 678</p>
            <p class="text-[#FFFFFF] mb-[8px] text-[#FFFFFF]">電子信箱</p>
            <p class="text-[#FFFFFF] font-bold text-[#FFFFFF]">grace@sample.com</p>
          </div>
          <aside class="p-[16px] md:p-[40px] bg-[#FFFFFF] rounded-xl w-full md:max-w-[478px] sticky top-[120px]">
            <p class="mb-[8px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">預訂參考編號： HH2302183151222</p>
            <p class="text-[1rem] md:text-[1.5rem] font-bold mb-[24px] md:mb-[40px]">即將來的行程</p>
            <img
              class="w-full max-w-full md:max-w-[398px] h-[240px] object-cover object-left-bottom mb-[24px] md:mb-[40px] rounded-lg"
              :src="`${room2_1}`"
              alt=""
            />
            <p class="text-[#4B4B4B] text-[0.875rem] md:text-[1.25rem] flex items-center mb-[24px] font-bold">
              尊爵雙人房，1 晚<span class="bg-[#909090] w-[1px] h-full inline-block mx-[16px]"></span>住宿人數：2 位
            </p>
            <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]"
              >入住：6 月 10 日星期二，15:00 可入住</DecoTitle
            >
            <DecoTitle customClass="before:bg-[#909090] mb-[24px] text-[0.875rem] md:text-[1rem]"
              >退房：6 月 11 日星期三，12:00 前退房</DecoTitle
            >
            <p class="font-bold text-[#4B4B4B] text-[0.875rem] md:text-[1rem]">NT$ 10,000</p>
            <DivideLine customClass="bg-[#ECECEC] my-[24px] md:my-[40px]"></DivideLine>
            <DecoTitle customClass="mb-[24px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]">房內設備</DecoTitle>
            <div
              class="w-full grid grid-cols-2 xl:grid-cols-3 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-[24px] md:mb-[40px]"
            >
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
            <DecoTitle customClass="mb-[24px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]">備品提供</DecoTitle>
            <div
              class="w-full grid grid-cols-2 xl:grid-cols-3 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-0 md:mb-[40px]"
            >
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
        <img class="block md:hidden mt-[40px] md:mt-[120px] object-scale-down" :src="mobile_line2" alt="" />
        <img class="hidden md:block mt-[40px] md:mt-[120px] object-cover h-[188px]" :src="line2" alt="" />
      </section>
    </main>
    <Modal>
      <template #title> 訂單狀態 </template>
      <template #content>        
        <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatusCode }} <template v-if="modalStore.errorStatusCode">：</template> {{ modalStore.msg }}
        </p>
        <svg class="checkmark error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_error" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" stroke-linecap="round" fill="none" d="M16 16 36 36 M36 16 16 36"/></svg>
        <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
          <div class="w-full mr-[16px]">
            <ClickButton @click="modalStore.closeModal();router.push({name: 'Home'})" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
              關閉視窗
            </ClickButton>
          </div>
        </div>      
      </template>
    </Modal>
    <Modal v-if="modalStore.option==='status'">
      <template #title> 登入狀態 </template>
      <template #content>
        <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatusCode }} <template v-if="modalStore.errorStatusCode">：</template> {{ modalStore.msg }}
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
    <Footer></Footer>
  </div>
</template>
<style scoped></style>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { apiGetOrdersDetail } from '@/api/orders';
import { useModalStore } from '@/stores/modal'
import { useOrderStore } from '@/stores/order'
import { useRouter, useRoute } from 'vue-router'
import { previousRoute } from '@/router';
import { useCommon } from '@/composables/useCommon';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import ic_check from '@/assets/img/svg/ic_check.svg'
import room2_1 from '@/assets/img/pc/room2-1.png'
import mobile_line2 from '@/assets/img/mobile/line.png'
import line2 from '@/assets/img/pc/line2.png'
import DivideLine from '@/components/DivideLine.vue'
import ClickButton from '@/components/ClickButton.vue'
import DecoTitle from '@/components/DecoTitle.vue'
import CheckItem from '@/components/CheckItem.vue'
const { isEmpty } = useCommon();
const modalStore = useModalStore()
const orderStore = useOrderStore()
const router = useRouter()
const route = useRoute()
const newestSuccessOrder = ref(null)

onMounted(async () => {
  if(previousRoute?.name === 'Book') {
    if (isEmpty(orderStore.newestSuccessOrder)) {
      router.push({
        name: 'Home'
      })
    } else {
      try {
        const res = await apiGetOrdersDetail(orderStore.newestSuccessOrder._id)
        if (res.data.status) { 
          newestSuccessOrder.value = res.data.result
        } else {
          console.error('apiGetOrdersDetail 未知錯誤')
        }        
      } catch(error) {
        console.log('error', error.response.data.message)
      }          
    }
  } else {
    router.push({
      name: 'Home'
    })
  }
});
// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })
</script>
