<template>
  <div class="min-h-[100%]">
    <Header></Header>
    <main class="overflow-hidden">
      <section class="relative">
        <div class="relative before:top-0 before:absolute before:z-10 before:inset-0 before:bg-black/50">
          <Splide :options="options" aria-label="享樂酒店">
            <SplideSlide>
              <img class="w-full h-[812px] md:h-[1080px] object-cover" :src="`${banner}`" alt="Sample 1" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[812px] md:h-[1080px] object-cover" :src="`${banner}`" alt="Sample 2" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[812px] md:h-[1080px] object-cover" :src="`${banner}`" alt="Sample 3" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[812px] md:h-[1080px] object-cover" :src="`${banner}`" alt="Sample 4" />
            </SplideSlide>
            <SplideSlide>
              <img class="w-full h-[812px] md:h-[1080px] object-cover" :src="`${banner}`" alt="Sample 5" />
            </SplideSlide>
          </Splide>
        </div>
        <div class="w-full pl-[26px] pr-[46px] absolute top-0 z-20 h-full">
          <div
            class="flex flex-col md:flex-row mx-auto w-full relative max-w-[335px] md:max-w-[1760px] h-full mt-[112px] md:mt-0 md:justify-center md:items-center md:justify-between"
          >
            <div class="w-full md:max-w-[636px] md:mr-[80px]">
              <h3
                class="leading-9 text-[1.75rem] md:text-[2.5rem] text-center md:text-left font-bold text-[#BF9D7D] relative after:block after:h-[83px] after:w-[2px] after:bg-gradient-to-b after:from-[#BE9C7C] flex flex-col md:flex-none items-center md:items-start after:to-[#FFFFFF] after:mt-[20px] md:after:hidden md:before:absolute md:before:w-full md:before:bg-gradient-to-r md:before:from-[#BF9D7D] md:before:to-[#FFFFFF] md:before:bottom-0 md:before:h-[2px] pb-[40px]"
              >
                享樂酒店<br /><span class="text-[1rem] md:text-[1.5rem]">Enjoyment Luxury Hotel</span>
              </h3>
            </div>
            <!-- <div class="w-full">
            <h2 class="relative text-center md:text-left z-10 font-bold text-[2rem] md:text-[3rem] text-[#FFFFFF]">客房旅宿</h2>        
          </div>   -->
            <div
              class="w-full md:max-w-[772px] relative top-[40px] lg:top-0 before:absolute before:w-full before:max-w-[291px] md:before:max-w-[924px] before:h-[420px] md:before:h-[350px] 2xl:before:h-[678px] left-[-20px] md:left-[-48px] before:left-[48px] before:top-[-60px] md:before:top-[-50px] 2xl:before:top-[-96px] before:rounded-[40px] md:before:rounded-[60px] before:bg-white/10 before:backdrop-blur-sm before:border-t-2 before:border-r-2 before:border-white"
            >
              <h2 class="ml-[10px] md:ml-0 mb-[24px] relative z-10 text-[3rem] 2xl:text-[6.25rem] text-[#FFFFFF] font-bold">
                高雄<br />豪華住宿之選
              </h2>
              <p
                class="ml-[10px] mr-[24px] md:mr-0 md:ml-0 relative z-10 text-[1rem] 2xl:text-[2rem] text-[#FFFFFF] mb-[40px] 2xl:mb-[60px] font-bold"
              >
                我們致力於為您提供無與倫比的奢華體驗與優質服務
              </p>
              <router-link
                :to="{ name: 'AllHotel' }"
                class="ml-[10px] relative z-10 h-[64px] 2xl:h-[116px] flex items-center px-[40px] 2xl:text-[1.5rem] bg-[#FFFFFF] block w-full rounded-lg hover:bg-[#BF9D7D] hover:text-[#FFFFFF] group"
                ><span class="flex justify-end items-center w-full font-bold"
                  >立即訂房<span
                    class="ml-[15px] h-[2px] bg-[#140F0A] block w-full max-w-[80px] md:max-w-[150px] group-hover:bg-[#FFFFFF]"
                  ></span></span
              ></router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="px-[12px] pt-[80px] pb-[80px] md:pt-[256px] md:pb-[120px] bg-[#F7F2EE]">
        <div
          :class="`w-full md:max-w-[1296px] mx-auto flex flex-col xl:flex-row items-start justify-between  relative before:z-[40] before:absolute before:z-10 before:left-0 before:bottom-[-140px] md:before:left-[-112px] md:before:bottom-[-200px] before:w-[100px] before:h-[100px] 2xl:before:w-[200px] 2xl:before:h-[200px] before:bg-contain before:bg-[url(${dot})] after:absolute after:right-0 after:top-[-40px] md:after:right-[-68px] md:after:top-[-10px] after:w-[100px] after:h-[100px] 2xl:after:w-[200px] 2xl:after:h-[200px] after:bg-contain after:bg-[url(${dot})]`"
        >
          <h3
            class="text-[#BF9D7D] text-[2rem] md:text-[3rem] relative mb-[40px] xl:mb-0 before:absolute pb-[24px] md:pb-[40px] before:bottom-0 before:h-[2px] before:w-[140px] before:bg-gradient-to-r before:from-[#BE9C7C] before:to-[#FFFFFF] font-bold"
          >
            最新<br />消息
          </h3>
          <div>
            <div class="flex flex-col md:flex-row items-center mb-[40px]">
              <img class="rounded w-full md:max-w-[474px] mb-[24px] md:mb-0" :src="news1" alt="" />
              <div class="w-full md:max-w-[602px] md:pl-[24px]">
                <h5 class="text-[1.75rem] md:text-[2rem] mb-[24px] font-bold">秋季旅遊，豪華享受方案</h5>
                <p class="text-[0.875rem] md:text-[1rem]">
                  秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                </p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center mb-[40px]">
              <img class="rounded w-full md:max-w-[474px] mb-[24px] md:mb-0" :src="news2" alt="" />
              <div class="w-full md:max-w-[602px] md:pl-[24px]">
                <h5 class="text-[1.75rem] md:text-[2rem] mb-[24px] font-bold">輕鬆住房專案</h5>
                <p class="text-[0.875rem] md:text-[1rem]">
                  我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
                </p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center">
              <img class="rounded w-full md:max-w-[474px] mb-[24px] md:mb-0" :src="news3" alt="" />
              <div class="w-full md:max-w-[602px] md:pl-[24px]">
                <h5 class="text-[1.75rem] md:text-[2rem] mb-[24px] font-bold">耶誕快樂，住房送禮</h5>
                <p class="text-[0.875rem] md:text-[1rem]">
                  聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        :class="`bg-[#140F0A] pt-[80px] md:pt-[120px] relative z-30 before:absolute before:bg-[url(${about})] before:w-full before:h-[594px] md:before:h-[672px] before:bg-center before:bg-cover`"
      >
        <div
          class="max-w-[1044px] p-[24px] md:p-[80px] rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] md:rounded-tl-[60px] md:rounded-bl-[60px] md:rounded-tr-[60px] bg-gradient-to-b from-[#140F0ACC] to-[#BE9C7CCC] backdrop-blur-sm border-b-2 border-l-2 border-white relative top-[40px] md:top-[80px] xl:left-[120px] ml-[40px] mr-[12px] xl:mx-auto"
        >
          <h3
            class="mb-[40px] md:mb-[80px] text-[2rem] md:text-[3rem] text-[#FFFFFF] w-[304px] flex items-center relative after:w-full after:max-w-[165px] after:h-[2px] after:bg-[#FFFFFF] after:ml-[40px] font-bold"
          >
            <span>關於<br />我們</span>
          </h3>
          <p class="mb-[40px] text-[#FFFFFF] mb-[40px] text-[#FFFFFF] text-[0.875rem] md:text-[1rem]">
            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br />我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
          </p>
          <p class="mb-[40px] text-[#FFFFFF] mb-[40px] text-[#FFFFFF] text-[0.875rem] md:text-[1rem]">
            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br />我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
          </p>
          <p class="mb-[40px] text-[#FFFFFF] mb-[40px] text-[#FFFFFF] text-[0.875rem] md:text-[1rem]">
            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
          </p>
          <p class="text-[#FFFFFF] text-[#FFFFFF] text-[0.875rem] md:text-[1rem]">
            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
          </p>
        </div>
      </section>
      <section
        :class="`pt-[28%] md:py-[120px] bg-[#140F0A] relative bg-no-repeat bg-none md:bg-[url(${bg})] bg-contain bg-[center_450px]`"
      >
        <img class="absolute left-[100px] top-[200px] hidden md:block object-cover h-[187px]" :src="line2" alt="" />
        <div class="flex justify-end block md:hidden ml-[80px] mb-[20px]">
          <img class="object-scale-down" :src="mobile_line2" alt="" />
        </div>
        <div class="max-w-[1608px] flex flex-col md:flex-row items-end">
          <div class="px-[12px] md:px-0 w-full max-w-full xl:max-w-[900px] xl:mr-[80px] mb-[24px] xl:mb-0">
            <Splide ref="splide" :options="options2" aria-label="房型">
              <SplideSlide>
                <img class="rounded-tr rounded-br w-full h-[300px] md:h-[900px] object-cover" :src="`${room}`" alt="Sample 1" />
              </SplideSlide>
              <SplideSlide>
                <img class="rounded-tr rounded-br w-full h-[300px] md:h-[900px] object-cover" :src="`${room}`" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img class="rounded-tr rounded-br w-full h-[300px] md:h-[900px] object-cover" :src="`${room}`" alt="Sample 3" />
              </SplideSlide>
              <SplideSlide>
                <img class="rounded-tr rounded-br w-full h-[300px] md:h-[900px] object-cover" :src="`${room}`" alt="Sample 4" />
              </SplideSlide>
              <SplideSlide>
                <img class="rounded-tr rounded-br w-full h-[300px] md:h-[900px] object-cover" :src="`${room}`" alt="Sample 5" />
              </SplideSlide>
            </Splide>
          </div>
          <div
            :class="`w-full xl:max-w-[1060px] mb-[80px] md:mb-0 h-full bg-no-repeat bg-[url(${mobile_bg2})] md:bg-none bg-contain bg-[right_top]`"
          >
            <div class="px-[12px] w-full xl:max-w-[628px]">
              <h4 class="text-[#FFFFFF] text-[1.75rem] md:text-[2.5rem] mb-[16px] font-bold">尊爵雙人房</h4>
              <p class="text-[#FFFFFF] mb-[24px] md:mb-[40px] text-[0.875rem] md:text-[1rem]">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <h5 class="text-[#FFFFFF] text-[1.5rem] md:text-[2rem] mb-[30px] md:mb-[40px] font-bold font-bold">NT$ 10,000</h5>
              <router-link
                :to="{ name: 'Book' }"
                class="relative z-10 p-[20px] md:p-[40px] text-[1rem] font-bold md:text-[1.5rem] bg-[#FFFFFF] block w-full rounded-lg hover:bg-[#BF9D7D] hover:text-[#FFFFFF] group mb-[24px] md:mb-[40px]"
                ><span class="flex justify-end items-center"
                  >查看更多<span
                    class="ml-[15px] h-[2px] bg-[#140F0A] block w-full max-w-[80px] md:max-w-[150px] group-hover:bg-[#FFFFFF]"
                  ></span></span
              ></router-link>
              <div class="flex justify-end">
                <button @click="goPrev()" class="w-[50px] h-[50px] inline-flex items-center justify-center">
                  <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      class="fill-[#BF9D7D]"
                      d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.41 5.41L12 4L4 12L12 20Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button @click="goNext()" class="w-[50px] h-[50px] inline-flex items-center justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="px-[12px] overflow-hidden bg-[#F7F2EE] flex py-[80px] md:py-[120px] relative after:absolute after:z-20 after:right-[80px] after:top-[-40px] after:w-[200px] after:h-[200px] after:bg-contain"
      >
        <img class="object-cover h-[990px] absolute top-[60px] left-[50px] custom-show" :src="line" alt="" />
        <div class="w-full">
          <div class="max-w-[1296px] mx-auto">
            <h3
              class="text-[#BF9D7D] text-[2rem] md:text-[3rem] mb-[40px] md:mb-[80px] flex items-center after:block after:ml-[24px] after:h-[2px] after:w-[167px] after:bg-gradient-to-r after:from-[#BE9C7C] after:to-[#FFFFFF] font-bold"
            >
              佳餚<br />美饌
            </h3>
          </div>
          <div class="max-w-[1512px] ml-auto">
            <Splide :options="options3" :extensions="extensions" aria-label="享樂酒店">
              <SplideSlide>
                <div class="w-full h-full max-w-[300px] md:max-w-[416px] relative">
                  <img class="rounded h-full object-cover" :src="`${food1}`" alt="Sample 1" />
                  <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-[24px]">
                      <h6 class="text-[#FFFFFF] text-[1.5rem] font-bold">海霸</h6>
                      <span class="text-[#FFFFFF] font-bold"
                        ><span class="mr-[16px]">SUN-MON</span><span>11:00 - 20:30</span></span
                      >
                    </div>
                    <p class="text-[#FFFFFF]">
                      以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="w-full h-full max-w-[300px] md:max-w-[416px] relative">
                  <img class="rounded h-full object-cover" :src="`${food2}`" alt="Sample 2" />
                  <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-[24px]">
                      <h6 class="text-[#FFFFFF] text-[1.5rem] font-bold">日食</h6>
                      <span class="text-[#FFFFFF] font-bold"
                        ><span class="mr-[16px]">SUN-MON</span><span>17:00 - 22:00</span></span
                      >
                    </div>
                    <p class="text-[#FFFFFF]">
                      為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="w-full h-full max-w-[300px] md:max-w-[416px] relative">
                  <img class="rounded h-full object-cover" :src="`${food3}`" alt="Sample 3" />
                  <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-[24px]">
                      <h6 class="text-[#FFFFFF] text-[1.5rem] font-bold">山臻</h6>
                      <span class="text-[#FFFFFF] font-bold"
                        ><span class="mr-[16px]">SUN-MON</span><span>11:30 - 20:30</span></span
                      >
                    </div>
                    <p class="text-[#FFFFFF]">
                      帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="w-full h-full max-w-[300px] md:max-w-[416px] relative">
                  <img class="rounded h-full object-cover" :src="`${food4}`" alt="Sample 4" />
                  <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-[24px]">
                      <h6 class="text-[#FFFFFF] text-[1.5rem] font-bold">月永</h6>
                      <span class="text-[#FFFFFF] font-bold"
                        ><span class="mr-[16px]">SUN-MON</span><span>11:00 - 20:00</span></span
                      >
                    </div>
                    <p class="text-[#FFFFFF]">
                      從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="w-full h-full max-w-[300px] md:max-w-[416px] relative">
                  <img class="rounded h-full object-cover" :src="`${food5}`" alt="Sample 5" />
                  <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-[24px]">
                      <h6 class="text-[#FFFFFF] text-[1.5rem] font-bold">天潮</h6>
                      <span class="text-[#FFFFFF] font-bold"
                        ><span class="mr-[16px]">SUN-MON</span><span>14:00 - 19:30</span></span
                      >
                    </div>
                    <p class="text-[#FFFFFF]">
                      我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
      <section class="bg-[#140F0A] pt-[80px] md:pt-[120px] pb-[80px]">
        <div class="px-[12px] max-w-[1296px] mx-auto">
          <h3
            class="text-[#BF9D7D] text-[2rem] font-bold md:text-[3rem] mb-[40px] md:mb-[80px] flex items-center after:block after:ml-[24px] after:h-[2px] after:w-[167px] after:bg-gradient-to-r after:from-[#BE9C7C] after:to-[#FFFFFF]"
          >
            交通<br />方式
          </h3>
          <p class="text-[#FFFFFF] mb-[16px] font-bold">台灣高雄市新興區六角路123號</p>
          <div class="w-full h-[360px] mb-[24px] md:mb-[40px]">
            <!-- <img :src="`${map}`" alt="地址：台灣高雄市新興區六角路123號"> -->
            <iframe
              class="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d35033.236971886545!2d120.2960626251659!3d22.63829483171618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Y-w54Gj6auY6ZuE5biC5paw6IiI5Y2A5YWt6KeS6LevMTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1727255039806!5m2!1szh-TW!2stw"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="flex flex-col md:flex-row mb-[80px]">
            <div class="mr-[24px] mb-[24px] md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] md:w-[80px]" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_29_1895)">
                  <path
                    class="fill-[#BF9D7D]"
                    d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_29_1895">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h6 class="mt-[16px] mb-[8px] text-[1rem] md:text-[1.5rem] text-[#FFFFFF] font-bold">自行開車</h6>
              <p class="tracking-[2px] text-[#FFFFFF] text-[0.875rem] md:text-[1rem]">
                如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
              </p>
            </div>
            <div class="mr-[24px] mb-[24px] md:mb-0">
              <svg viewBox="0 0 24 24" class="w-[40px] md:w-[80px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_31_1909)">
                  <path
                    class="fill-[#BF9D7D]"
                    d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H8.23L10.23 19H14L16 21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17ZM11 10H6V6H11V10ZM13 10V6H18V10H13ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_1909">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h6 class="mt-[16px] mb-[8px] text-[1rem] md:text-[1.5rem] text-[#FFFFFF] font-bold">高鐵/火車</h6>
              <p class="tracking-[2px] text-[#FFFFFF] text-[0.875rem] md:text-[1rem]">
                如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
              </p>
            </div>
            <div>
              <svg class="w-[40px] md:w-[80px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="fill-[#BF9D7D]"
                  d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15H9C9 15.7956 8.68393 16.5587 8.12132 17.1213C7.55871 17.6839 6.79565 18 6 18C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5C6.39782 16.5 6.77936 16.342 7.06066 16.0607C7.34196 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5ZM18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15C19.5 14.6022 19.342 14.2206 19.0607 13.9393C18.7794 13.658 18.3978 13.5 18 13.5Z"
                  fill="black"
                />
              </svg>
              <h6 class="mt-[16px] mb-[8px] text-[1rem] md:text-[1.5rem] text-[#FFFFFF] font-bold">禮賓車服務</h6>
              <p class="tracking-[2px] text-[#FFFFFF] text-[0.875rem] md:text-[1rem]">
                承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
              </p>
            </div>
          </div>
        </div>
        <img class="block md:hidden mt-[40px] md:mt-[120px] object-scale-down" :src="mobile_line2" alt="" />
        <img class="hidden md:block mt-[40px] md:mt-[120px] object-cover h-[188px]" :src="line2" alt="" />
      </section>
    </main>
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

.custom-show {
  display: none;
}

@media (min-width: 1690px) {
  .custom-show {
    display: block;
  }
}
/* :deep(.custom-arrows) {
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
  background: #FFFFFF;
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
} */
</style>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { apiGetCulinaryAll, apiGetCulinary } from '@/api/culinary';
import { apiGetRoomsAll } from '@/api/rooms';
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css/core'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import banner from '@/assets/img/pc/banner.png'
import news1 from '@/assets/img/pc/news1.png'
import news2 from '@/assets/img/pc/news2.png'
import news3 from '@/assets/img/pc/news3.png'
import dot from '@/assets/img/pc/dot.png'
import about from '@/assets/img/pc/about.png'
import room from '@/assets/img/pc/room1.png'
import line from '@/assets/img/pc/line.png'
import mobile_line2 from '@/assets/img/mobile/line.png'
import line2 from '@/assets/img/pc/line2.png'
import bg from '@/assets/img/pc/bg.png'
import mobile_bg2 from '@/assets/img/mobile/bg.png'
import food1 from '@/assets/img/pc/food1.png'
import food2 from '@/assets/img/pc/food2.png'
import food3 from '@/assets/img/pc/food3.png'
import food4 from '@/assets/img/pc/food4.png'
import food5 from '@/assets/img/pc/food5.png'
const extensions = ref({ AutoScroll })
const culinary = ref([])
const rooms = ref([])
const splide = ref(null)
const options = reactive({
  rewind: true,
  height: '1080px',
  type: 'loop',
  arrows: false,
  classes: {
    pagination: 'splide__pagination pagination-wrapper',
    page: 'splide__pagination__page pagination-page'
  },
  breakpoints: {
    767: {
      height: '812px'
    }
  }
})

const options2 = reactive({
  rewind: true,
  height: '900px',
  type: 'loop',
  arrows: false,
  classes: {
    pagination: 'splide__pagination pagination-wrapper',
    page: 'splide__pagination__page pagination-page',
    arrows: 'splide__arrows custom-arrows',
    arrow: 'splide__arrow custom-arrow',
    prev: 'splide__arrow--prev custom-prev',
    next: 'splide__arrow--next custom-next'
  },
  breakpoints: {
    767: {
      height: '300px'
    }
  }
})

const options3 = reactive({
  perPage: 4,
  rewind: true,
  drag: 'free',
  gap: '24px',
  height: '600px',
  type: 'loop',
  arrows: false,
  pagination: false,
  autoWidth: true,
  // classes: {
  //   pagination: 'splide__pagination pagination-wrapper',
  //   page: 'splide__pagination__page pagination-page',
  // },
  autoScroll: {
    speed: 1
  },
  breakpoints: {
    1279: {
      perPage: 3
    },
    767: {
      perPage: 2,
      height: '480px'
    }
  }
})

const goPrev = () => {
  if (splide.value) {
    splide.value.go('<')
  }
}

const goNext = () => {
  if (splide.value) {
    splide.value.go('>')
  }
}

onMounted(async() => {
  try {
    const res = await apiGetCulinaryAll()
    if (res.data.status) { 
      culinary.value = res.data.result
    } else {
      console.error('apiGetCulinaryAll 未知錯誤')
    }    
  } catch(error) {
    console.error(error)
  }
  try {
    const res2 = await apiGetRoomsAll()
    if (res2.data.status) { 
      rooms.value = res2.data.result
    } else {
      console.error('apiGetRoomsAll 未知錯誤')
    }      
  } catch(error) {
    console.error(error)
  }
})
</script>
