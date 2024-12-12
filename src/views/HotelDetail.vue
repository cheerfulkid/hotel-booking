<template>
  <div class="min-h-[100%]">
    <Header></Header>
    <main>
      <section class="relative bg-[#F7F2EE] px-0 lg:px-[12px] pt-[72px] lg:pt-[200px] lg:pb-[80px]">
        <div class="max-w-[1760px] mx-auto overflow-hidden lg:rounded-xl">
          <Splide :options="options" :extensions="extensions" aria-label="享樂酒店">
            <SplideSlide>
              <img class="lg:h-[600px] object-cover object-center" :src="`${room2_1}`" alt="Sample 1" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" :src="`${room2_2}`" alt="Sample 2" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" :src="`${room2_3}`" alt="Sample 3" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" :src="`${room2_4}`" alt="Sample 4" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" :src="`${room2_5}`" alt="Sample 5" />
            </SplideSlide>
          </Splide>
        </div>
        <router-link
          :to="{ name: 'AllHotel' }"
          class="absolute bottom-[23px] right-[12px] lg:hidden w-[113px] h-[56px] border-[#BF9D7D] bg-[#FFFFFF] rounded-lg font-bold text-[#BF9D7D] flex items-center justify-center"
          >看更多</router-link
        >
      </section>
      <section class="relative bg-[#F7F2EE] px-[12px] py-[40px] lg:pt-[120px] lg:pb-[120px]">
        <div class="max-w-[1296px] mx-auto md:flex items-start">
          <div class="w-full max-w-full lg:max-w-[746px] lg:mr-[72px]">
            <h3 class="text-[2rem] md:text-[3rem] mb-[16px]">尊爵雙人房</h3>
            <p class="text-[0.875rem] mb-[24px] md:mb-[80px]">
              享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
            </p>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >房型基本資訊</DecoTitle
              >
              <BasicInfo roomSize="24" bedCount="1" peopleCount="2-4"></BasicInfo>
            </div>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >房間格局</DecoTitle
              >
              <div
                class="w-full grid grid-cols-3 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
              >
                <CheckItem>市景</CheckItem>
                <CheckItem>獨立衛浴</CheckItem>
                <CheckItem>客廳</CheckItem>
                <CheckItem>書房</CheckItem>
                <CheckItem>樓層電梯</CheckItem>
              </div>
            </div>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >房內設備</DecoTitle
              >
              <div
                class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
              >
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">平面電視</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吹風機</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">冰箱</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">熱水壺</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">檯燈</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衣櫃</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">除濕機</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴缸</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">書桌</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">音響</CheckItem>
              </div>
            </div>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >備品提供</DecoTitle
              >
              <div
                class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
              >
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衛生紙</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">拖鞋</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">沐浴用品</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">清潔用品</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刮鬍刀</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吊衣架</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴巾</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刷牙用品</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">罐裝水</CheckItem>
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]">梳子</CheckItem>
              </div>
            </div>
            <div class="md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >訂房須知</DecoTitle
              >
              <ol class="list-decimal ml-[24px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">
                <li>入住時間為下午3點，退房時間為上午12點。</li>
                <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
                <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
                <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
                <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
                <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
                <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
                <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
                <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
                <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
              </ol>
            </div>
          </div>
          <aside class="relative hidden lg:block p-[40px] bg-[#FFFFFF] rounded-xl max-w-[478px] sticky top-[120px]">
            <h6 class="text-[1.5rem] mb-[56px] pb-[16px] border-b border-[#ECECEC]">預訂房型</h6>
            <h3 class="text-[2.5rem] mb-[8px]">尊爵雙人房</h3>
            <p class="mb-[40px]">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            <div class="relative grid grid-flow-col gap-[8px] mb-[16px] justify-stretch items-center">
              <button class="p-[16px] border rounded-lg text-left" @click="calendarStore.openCalendar()">
                <p class="text-[0.75rem]">入住</p>
                <p>2023 / 12 / 03</p>
              </button>
              <button class="p-[16px] border rounded-lg text-left" @click="calendarStore.openCalendar()">
                <p class="text-[0.75rem]">退房</p>
                <p>2023 / 12 / 04</p>
              </button>
            </div>
            <div class="flex justify-between items-center mb-[40px]">
              <p class="text-[1.5rem]">人數</p>
              <div class="flex items-center">
                <button class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
                  <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H5V11H19V13Z" fill="black" />
                  </svg>
                </button>
                <span class="text-[1.25rem] mx-[16px]">2</span>
                <button class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
                  <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
            <p class="text-[1.5rem] text-[#BF9D7D] mb-[40px]">NT$ 10,000</p>
            <ClickButton customClass="bg-[#BF9D7D] text-[#FFFFFF]" :to="{ name: 'Book' }">立即預訂</ClickButton>
          </aside>
        </div>
      </section>
    </main>
    <div
      v-if="!calendarStore.isShow"
      class="fixed lg:hidden bottom-0 w-full p-[12px] bg-[#FFFFFF] flex justify-between items-center border-[#ECECEC] border-[1px]"
    >
      <p class="text-[0.875rem] text-[#4B4B4B]">ＮＴ$ 10,000 / 晚</p>
      <div class="w-full max-w-[194px]">
        <ClickButton @click="checkOrder" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 查看可訂日期 </ClickButton>
      </div>
    </div>
    <Calendar></Calendar>
    <Loading></Loading>
    <BackgroundMask></BackgroundMask>
    <Footer></Footer>
  </div>
</template>
<style scoped>
:deep(.pagination-wrapper) {
  position: absolute;
  width: 100%;
  bottom: 23px;
  z-index: 30;
}
:deep(.pagination-page) {
  width: 32px;
  height: 4px;
  border-radius: 20px;
  background: #ffffff !important;
  margin: 0 4px;
}
:deep(.pagination-page.is-active) {
  background: #bf9d7d !important;
  width: 60px;
}
@media (max-width: 1023px) {
  :deep(.splide__pagination) {
    justify-content: start;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
<script setup lang="ts">
import { ref, reactive } from 'vue'
// import type { Login } from "../types/login"
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ClickButton from '../components/ClickButton.vue'
import Calendar from '../components/Calendar.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import BasicInfo from '../components/BasicInfo.vue'
import DecoTitle from '../components/DecoTitle.vue'
import CheckItem from '../components/CheckItem.vue'
import room2_1 from '../assets/img/pc/room2-1.png'
import room2_2 from '../assets/img/pc/room2-2.png'
import room2_3 from '../assets/img/pc/room2-3.png'
import room2_4 from '../assets/img/pc/room2-4.png'
import room2_5 from '../assets/img/pc/room2-5.png'
import { useCalendarStore } from '../stores/calendar'
import { useMaskStore } from '../stores/mask'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import '@splidejs/splide/css/core'
const calendarStore = useCalendarStore()
const maskStore = useMaskStore()
const extensions = ref({ Grid })
const clickedDate = ref(false)

const options = reactive({
  type: 'loop',
  height: '600px',
  arrows: false,
  perPage: 2,
  perMove: 1,
  gap: '8px',
  grid: {
    // [rows, cols]
    dimensions: [
      [1, 1],
      [2, 2]
    ],
    gap: {
      row: '8px',
      col: '8px'
    }
  },
  breakpoints: {
    1023: {
      perPage: 1,
      grid: false,
      classes: {
        pagination: 'splide__pagination pagination-wrapper',
        page: 'splide__pagination__page pagination-page'
      },
      height: '350px'
    },
    639: {
      height: '240px'
    }
  }
})

const checkOrder = () => {
  calendarStore.openCalendar()
}
</script>
