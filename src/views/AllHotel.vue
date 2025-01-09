<template>
  <div class="min-h-[100%]">
    <Header></Header>
    <main>
      <section class="relative">
        <div class="relative before:top-0 before:absolute before:z-10 before:inset-0 before:bg-black/50">
          <Splide :options="options" aria-label="享樂酒店">
            <SplideSlide>
              <img class="w-full h-[466px] md:h-[800px] md:object-cover" src="@/assets/img/pc/banner.png" alt="Sample 1" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[466px] md:h-[800px] md:object-cover" src="@/assets/img/pc/banner.png" alt="Sample 2" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[466px] md:h-[800px] md:object-cover" src="@/assets/img/pc/banner.png" alt="Sample 3" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[466px] md:h-[800px] md:object-cover" src="@/assets/img/pc/banner.png" alt="Sample 4" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[466px] md:h-[800px] md:object-cover" src="@/assets/img/pc/banner.png" alt="Sample 5" />
            </SplideSlide>
          </Splide>
        </div>
        <div class="w-full px-[12px] absolute top-0 z-20 h-full">
          <div
            class="flex flex-col md:flex-row mx-auto w-full relative max-w-[335px] md:max-w-[780px] h-full justify-center md:items-center md:justify-between"
          >
            <div class="w-full md:min-w-[500px] md:mr-[80px]">
              <h3
                class="leading-9 text-[1.75rem] md:text-[2.5rem] text-center md:text-left font-bold text-[#BF9D7D] relative after:block after:h-[83px] after:w-[2px] after:bg-gradient-to-b after:from-[#BE9C7C] flex flex-col md:flex-none items-center md:items-start after:to-[#FFFFFF] after:mt-[20px] md:after:hidden md:before:absolute md:before:w-full md:before:bg-gradient-to-r md:before:from-[#BF9D7D] md:before:to-[#FFFFFF] md:before:bottom-0 md:before:h-[2px] pb-[40px]"
              >
                享樂酒店<br /><span class="text-[1rem] md:text-[1.5rem]">Enjoyment Luxury Hotel</span>
              </h3>
            </div>
            <div class="w-full">
              <h2 class="relative text-center md:text-left z-10 font-bold text-[2rem] md:text-[3rem] text-[#FFFFFF]">客房旅宿</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="md:pt-[120px] py-[42px] md:pb-[168px] bg-[#F7F2EE] px-[12px]">
        <div class="w-full max-w-[773px] lg:max-w-[1296px] mx-auto">
          <p class="text-[0.875rem] md:text-[1.25rem] text-[#4B4B4B] font-bold mb-[8px] md:mb-[16px]">房型選擇</p>
          <h3 class="text-[#BF9D7D] text-[2rem] md:text-[3rem] font-bold mb-[40px] md:mb-[80px]">各種房型，任您挑選</h3>
          <div class="lg:flex rounded-lg overflow-hidden bg-[#FFFFFF] mb-[24px] md:mb-[48px]">
            <div class="w-full max-w-[773px] h-[200px] lg:h-[457px]">
              <Splide :options="options2" aria-label="享樂酒店">
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room2-1.png" alt="Sample 1" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room2-2.png" alt="Sample 2" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room2-3.png" alt="Sample 3" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room2-4.png" alt="Sample 4" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room2-5.png" alt="Sample 5" />
                </SplideSlide>
              </Splide>
            </div>
            <div class="p-[16px] lg:p-[40px]">
              <h4 class="text-[1.75rem] md:text-[2.5rem] text-[#4B4B4B] font-bold mb-[8px]">尊爵雙人房</h4>
              <p class="text-[0.875rem] md:text-[1rem] text-[#4B4B4B] mb-[24px] md:mb-[40px]">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <BasicInfo customClass="border-[#F1EAE4] border-[1px]" roomSize="24" bedCount="1" peopleCount="2-4"></BasicInfo>
              <hr class="border-0 bg-gradient-to-r from-[#BE9C7C] to-[#FFFFFF] h-[2px] my-[24px] md:my-[40px]" />
              <div class="h-[56px] flex items-center justify-between">
                <p class="font-bold text-[1rem] md:text-[1.5rem] text-[#BF9D7D]">NT$ 10,000</p>
                <router-link :to="{ name: 'HotelDetail', params: { id: '677fd4985d26975987a10702' } }">
                  <button>
                    <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14_2275)">
                        <path
                          class="fill-[#BF9D7D]"
                          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_14_2275">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="lg:flex rounded-lg overflow-hidden bg-[#FFFFFF] mb-[24px] md:mb-[48px]">
            <div class="w-full max-w-[773px] h-[200px] lg:h-[457px]">
              <Splide :options="options2" aria-label="享樂酒店">
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room3-1.png" alt="Sample 1" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room3-2.png" alt="Sample 2" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room3-3.png" alt="Sample 3" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room3-4.png" alt="Sample 4" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room3-5.png" alt="Sample 5" />
                </SplideSlide>
              </Splide>
            </div>
            <div class="p-[16px] lg:p-[40px]">
              <h4 class="text-[1.75rem] md:text-[2.5rem] text-[#4B4B4B] font-bold mb-[8px]">景觀雙人房</h4>
              <p class="text-[0.875rem] md:text-[1rem] text-[#4B4B4B] mb-[24px] md:mb-[40px]">
                景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。
              </p>
              <BasicInfo customClass="border-[#F1EAE4] border-[1px]" roomSize="28" bedCount="1" peopleCount="2-4"></BasicInfo>
              <hr class="border-0 bg-gradient-to-r from-[#BE9C7C] to-[#FFFFFF] h-[2px] my-[24px] md:my-[40px]" />
              <div class="h-[56px] flex items-center justify-between">
                <p class="font-bold text-[1rem] md:text-[1.5rem] text-[#BF9D7D]">NT$ 10,000</p>
                <router-link :to="{ name: 'HotelDetail', params: { id: 1 } }">
                  <button>
                    <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14_2275)">
                        <path
                          class="fill-[#BF9D7D]"
                          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_14_2275">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="lg:flex rounded-lg overflow-hidden bg-[#FFFFFF] mb-[24px] md:mb-[48px]">
            <div class="w-full max-w-[773px] h-[200px] lg:h-[457px]">
              <Splide :options="options2" aria-label="享樂酒店">
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room4-1.png" alt="Sample 1" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room4-2.png" alt="Sample 2" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room4-3.png" alt="Sample 3" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room4-4.png" alt="Sample 4" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room4-5.png" alt="Sample 5" />
                </SplideSlide>
              </Splide>
            </div>
            <div class="p-[16px] lg:p-[40px]">
              <h4 class="text-[1.75rem] md:text-[2.5rem] text-[#4B4B4B] font-bold mb-[8px]">豪華雅緻房</h4>
              <p class="text-[0.875rem] md:text-[1rem] text-[#4B4B4B] mb-[24px] md:mb-[40px]">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <BasicInfo customClass="border-[#F1EAE4] border-[1px]" roomSize="36" bedCount="2" peopleCount="2-4"></BasicInfo>
              <hr class="border-0 bg-gradient-to-r from-[#BE9C7C] to-[#FFFFFF] h-[2px] my-[24px] md:my-[40px]" />
              <div class="h-[56px] flex items-center justify-between">
                <p class="font-bold text-[1rem] md:text-[1.5rem] text-[#BF9D7D]">NT$ 10,000</p>
                <router-link :to="{ name: 'HotelDetail', params: { id: 1 } }">
                  <button>
                    <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14_2275)">
                        <path
                          class="fill-[#BF9D7D]"
                          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_14_2275">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="lg:flex rounded-lg overflow-hidden bg-[#FFFFFF]">
            <div class="w-full max-w-[773px] h-[200px] lg:h-[457px]">
              <Splide :options="options2" aria-label="享樂酒店">
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room5-1.png" alt="Sample 1" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room5-2.png" alt="Sample 2" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room5-3.png" alt="Sample 3" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room5-4.png" alt="Sample 4" />
                </SplideSlide>
                <SplideSlide>
                  <img class="w-full h-[200px] lg:h-[457px] object-cover" src="@/assets/img/pc/room5-5.png" alt="Sample 5" />
                </SplideSlide>
              </Splide>
            </div>
            <div class="p-[16px] lg:p-[40px]">
              <h4 class="text-[1.75rem] md:text-[2.5rem] text-[#4B4B4B] font-bold mb-[8px]">景觀尊榮家庭房</h4>
              <p class="text-[0.875rem] md:text-[1rem] text-[#4B4B4B] mb-[24px] md:mb-[40px]">
                景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。
              </p>
              <BasicInfo customClass="border-[#F1EAE4] border-[1px]" roomSize="48" bedCount="2" peopleCount="2-4"></BasicInfo>
              <hr class="border-0 bg-gradient-to-r from-[#BE9C7C] to-[#FFFFFF] h-[2px] my-[24px] md:my-[40px]" />
              <div class="h-[56px] flex items-center justify-between">
                <p class="font-bold text-[1rem] md:text-[1.5rem] text-[#BF9D7D]">NT$ 10,000</p>
                <router-link :to="{ name: 'HotelDetail', params: { id: 1 }}">
                  <button>
                    <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14_2275)">
                        <path
                          class="fill-[#BF9D7D]"
                          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_14_2275">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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
    <Modal v-if="modalStore.option==='network'">
      <template #title> 網路狀態 </template>
      <template #content>
        <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatusCode }} <template v-if="modalStore.errorStatusCode">：</template> {{ modalStore.msg }}
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
    </Modal>
    <Loading></Loading>
    <BackgroundMask></BackgroundMask>
    <Footer></Footer>
  </div>
</template>
<style scoped>
:deep(.pagination-wrapper) {
  position: absolute;
  width: 100%;
  bottom: 32px;
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
:deep(.custom-arrows) {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 10;
  padding: 24px;
}
:deep(.custom-arrow) {
  width: 56px;
  height: 56px;
  background: #ffffff;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
}
:deep(.custom-arrow svg) {
  width: 20px;
}
:deep(.custom-prev) {
  transform: rotate(180deg);
}
</style>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { apiGetRoomsAll } from '@/api/rooms';
import { useModalStore } from '@/stores/modal'
import Header from '@/components/Header.vue'
import ClickButton from '@/components/ClickButton.vue'
import Footer from '@/components/Footer.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import BasicInfo from '@/components/BasicInfo.vue'
import Modal from '@/components/Modal.vue'
import banner from '@/assets/img/pc/banner.png'
import room2_1 from '@/assets/img/pc/room2-1.png'
import room2_2 from '@/assets/img/pc/room2-2.png'
import room2_3 from '@/assets/img/pc/room2-3.png'
import room2_4 from '@/assets/img/pc/room2-4.png'
import room2_5 from '@/assets/img/pc/room2-5.png'
import room3_1 from '@/assets/img/pc/room3-1.png'
import room3_2 from '@/assets/img/pc/room3-2.png'
import room3_3 from '@/assets/img/pc/room3-3.png'
import room3_4 from '@/assets/img/pc/room3-4.png'
import room3_5 from '@/assets/img/pc/room3-5.png'
import room4_1 from '@/assets/img/pc/room4-1.png'
import room4_2 from '@/assets/img/pc/room4-2.png'
import room4_3 from '@/assets/img/pc/room4-3.png'
import room4_4 from '@/assets/img/pc/room4-4.png'
import room4_5 from '@/assets/img/pc/room4-5.png'
import room5_1 from '@/assets/img/pc/room5-1.png'
import room5_2 from '@/assets/img/pc/room5-2.png'
import room5_3 from '@/assets/img/pc/room5-3.png'
import room5_4 from '@/assets/img/pc/room5-4.png'
import room5_5 from '@/assets/img/pc/room5-5.png'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/css/core'
const modalStore = useModalStore()
const rooms = ref([])
const options = reactive({
  rewind: true,
  type: 'loop',
  arrows: false,
  classes: {
    pagination: 'splide__pagination pagination-wrapper',
    page: 'splide__pagination__page pagination-page'
  }
})

const options2 = reactive({
  rewind: true,
  type: 'loop',
  arrows: true,
  classes: {
    pagination: 'splide__pagination pagination-wrapper',
    page: 'splide__pagination__page pagination-page',
    arrows: 'splide__arrows custom-arrows',
    arrow: 'splide__arrow custom-arrow',
    prev: 'splide__arrow--prev custom-prev',
    next: 'splide__arrow--next custom-next'
  }
})

onMounted(async() => {
  try {
    const res = await apiGetRoomsAll()
    if (res.data.status) { 
      rooms.value = res.data.result
    } else {
      console.error('apiGetRoomsAll 未知錯誤')
    }    
  } catch(error) {
    if(error.code === 'ECONNABORTED') {
      modalStore.option = 'network'
      modalStore.errorStatusCode = '' 
      modalStore.msg = '連線逾時，請稍後再試'
    } else if (error.code === 'ERR_NETWORK'){
      modalStore.option = 'network'
      modalStore.errorStatusCode = '' 
      modalStore.msg = '請檢查網路連線'
    } else {
      modalStore.errorStatusCode = error.status
      modalStore.msg = error.response.data.message
    }
    modalStore.openModal() 
  }  
})
</script>
