<template>
 <div class="min-h-[100%]">
  <Header></Header>
  <main class="relative">
    <section class="relative">
      <div class="relative before:top-0 before:absolute before:z-10 before:inset-0 before:bg-black/50">
      <Splide :options="options" aria-label="享樂酒店">
        <SplideSlide>
          <img :src="`${banner}`" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img :src="`${banner}`" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
          <img :src="`${banner}`" alt="Sample 3">
        </SplideSlide>
        <SplideSlide>
          <img :src="`${banner}`" alt="Sample 4">
        </SplideSlide>
        <SplideSlide>
          <img :src="`${banner}`" alt="Sample 5">
        </SplideSlide>
      </Splide>
      </div>
      <div class="w-full absolute top-0 z-20 h-full">
      <div class="flex mx-auto w-full relative md:max-w-[1760px] h-full items-center justify-between">
        <div class="w-full md:max-w-[636px]">
        <h3 class="text-[40px] text-[#BF9D7D] leading-[1.2] relative before:absolute before:w-full before:bg-[#BF9D7D]  before:bottom-0 before:h-[2px] pb-[40px]">享樂酒店<br><span class="text-[24px]">Enjoyment Luxury Hotel</span></h3>
        </div>
        <div class="w-full md:max-w-[772px] relative before:absolute before:w-full before:max-w-[924px] before:h-[678px] left-[-48px] before:left-[48px] before:top-[-96px] before:rounded-[60px] before:bg-white/10 before:backdrop-blur-sm before:border-t-2 before:border-r-2 before:border-white">
        <h2 class="relative z-10 text-[100px] leading-[1.2] text-[#FFFFFF]">高雄<br>豪華住宿之選</h2>
        <p class="relative z-10 text-[32px] text-[#FFFFFF] mb-[60px]">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
        <router-link :to="{name:'Book'}" class="relative z-10 p-[40px] text-[24px] bg-[#FFFFFF] block w-full rounded-md hover:bg-[#BF9D7D] hover:text-[#FFFFFF] group"><span class="flex justify-end items-center">立即訂房<span class="ml-[15px] h-[2px] bg-[#000000] block w-full md:max-w-[150px] group-hover:bg-[#FFFFFF]"></span></span></router-link>
        </div>  
      </div>
      </div>    
    </section>
    <section class="pt-[256px] pb-[120px] bg-[#F7F2EE]">
      <div :class="`w-full md:max-w-[1296px] mx-auto flex items-start justify-between  relative before:absolute before:z-10 before:left-[-112px] before:bottom-[-200px] before:w-[200px] before:h-[200px] before:bg-contain before:bg-[url(${dot})] after:absolute after:right-[-68px] after:top-[-10px] after:w-[200px] after:h-[200px] after:bg-contain after:bg-[url(${dot})]`">
        <h3 class="text-[#BF9D7D] text-[48px] leading-[1.2] relative before:absolute pb-[40px] before:bottom-0 before:h-[2px] before:w-[140px] before:bg-gradient-to-r before:from-[#BE9C7C] before:to-[#FFFFFF]">最新<br>消息</h3>
        <div>
          <div class="flex items-center mb-[40px]">
            <img class="rounded max-w-[474px]" :src="news1" alt="">
            <div class="max-w-[602px] pl-[24px]">
              <h5 class="text-[32px] leading-[1.2] mb-[24px]">秋季旅遊，豪華享受方案</h5>
              <p class="leading-[1.2]">秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。</p>
            </div>
          </div>
          <div class="flex items-center mb-[40px]">
            <img class="rounded max-w-[474px]" :src="news2" alt="">
            <div class="max-w-[602px] pl-[24px]">
              <h5 class="text-[32px] leading-[1.2] mb-[24px]">輕鬆住房專案</h5>
              <p class="leading-[1.2]">我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。</p>
            </div>
          </div>
          <div class="flex items-center">
            <img class="rounded max-w-[474px]" :src="news3" alt="">
            <div class="max-w-[602px] pl-[24px]">
              <h5 class="text-[32px] leading-[1.2] mb-[24px]">耶誕快樂，住房送禮</h5>
              <p class="leading-[1.2]">聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section :class="`bg-[#000000] pt-[120px] pb-[120px] relative before:absolute before:bg-[url(${about})] before:w-full before:h-[672px] before:bg-center before:bg-cover`">
      <div class="max-w-[1044px] p-[80px] rounded-tl-[60px] rounded-bl-[60px] rounded-tr-[60px] bg-gradient-to-b from-[#140F0ACC] to-[#BE9C7CCC] backdrop-blur-sm border-b-2 border-l-2 border-white mx-auto relative top-[80px] left-[120px]">
        <h3 class="mb-[80px] text-[48px] leading-[1.2] text-[#FFFFFF] w-[304px] flex items-center relative after:w-full after:max-w-[165px] after:h-[2px] after:bg-[#FFFFFF] after:ml-[40px]"><span>關於<br>我們</span></h3>
        <p class="mb-[40px] text-[#FFFFFF]">享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br>我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。</p>
        <p class="mb-[40px] text-[#FFFFFF]">我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br>我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。</p>
        <p class="mb-[40px] text-[#FFFFFF]">在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。</p>
        <p class="text-[#FFFFFF]">享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。</p>
      </div>
    </section>
    <section :class="`py-[120px] bg-[#000000] relative bg-no-repeat bg-[url(${bg})] bg-contain bg-[center_top_450px]`">
      <img class="object-[620px_center] absolute top-[200px]" :src="line2" alt="">
      <div class="max-w-[1608px] flex items-end">
        <div class="max-w-[900px] mr-[80px]">
          <Splide :options="options" aria-label="房型">
            <SplideSlide>
              <img class="rounded-tr rounded-br" :src="`${room}`" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
              <img class="rounded-tr rounded-br" :src="`${room}`" alt="Sample 2">
            </SplideSlide>
            <SplideSlide>
              <img class="rounded-tr rounded-br" :src="`${room}`" alt="Sample 3">
            </SplideSlide>
            <SplideSlide>
              <img class="rounded-tr rounded-br" :src="`${room}`" alt="Sample 4">
            </SplideSlide>
            <SplideSlide>
              <img class="rounded-tr rounded-br" :src="`${room}`" alt="Sample 5">
            </SplideSlide>
          </Splide>
        </div>
        <div class="max-w-[1060px] h-full">
          <div class="max-w-[628px]">
            <h4 class="text-[#FFFFFF] text-[40px]">尊爵雙人房</h4>
            <p class="text-[#FFFFFF] mb-[40px]">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            <h5 class="text-[#FFFFFF] text-[32px] mb-[40px]">NT$ 10,000</h5>
            <router-link :to="{name:'Book'}" class="relative z-10 p-[40px] text-[24px] bg-[#FFFFFF] block w-full rounded-md hover:bg-[#BF9D7D] hover:text-[#FFFFFF] group"><span class="flex justify-end items-center">查看更多<span class="ml-[15px] h-[2px] bg-[#000000] block w-full md:max-w-[150px] group-hover:bg-[#FFFFFF]"></span></span></router-link>
          </div>
        </div> 
      </div>
    </section>
    <section class="overflow-hidden bg-[#F7F2EE] flex py-[120px] relative after:absolute after:z-20 after:right-[80px] after:top-[-40px] after:w-[200px] after:h-[200px] after:bg-contain">
      <img class="object-contain h-[990px] absolute top-[60px] left-[50px]" :src="line" alt="">
      <div class="w-full">
        <div class="max-w-[1296px] mx-auto">
          <h3 class="text-[#BF9D7D] text-[48px] leading-[1.2] mb-[80px]  flex items-center after:block after:ml-[24px] after:h-[2px] after:w-[167px] after:bg-gradient-to-r after:from-[#BE9C7C] after:to-[#FFFFFF]">佳餚<br>美饌</h3>
        </div>
        <div class="max-w-[1512px] ml-auto">
          <Splide :options="options2" aria-label="享樂酒店">
            <SplideSlide>
              <div class="max-w-[416px] relative">
                <img class="rounded" :src="`${food1}`" alt="Sample 1">
                <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                  <div class="flex items-center justify-between mb-[24px]">
                    <h6 class="text-[#FFFFFF] text-[24px]">海霸</h6>
                    <span class="text-[#FFFFFF]"><span class="mr-[16px]">SUN-MON</span><span>11:00 - 20:30</span></span>            
                  </div>
                  <p class="leading-[1.2] text-[#FFFFFF]">以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。</p>
                </div>            
              </div>        
            </SplideSlide>
            <SplideSlide>
              <div class="max-w-[416px] relative">
                <img class="rounded" :src="`${food2}`" alt="Sample 2">
                <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                  <div class="flex items-center justify-between mb-[24px]">
                    <h6 class="text-[#FFFFFF] text-[24px]">日食</h6>
                    <span class="text-[#FFFFFF]"><span class="mr-[16px]">SUN-MON</span><span>17:00 - 22:00</span></span>            
                  </div>
                  <p class="leading-[1.2] text-[#FFFFFF]">為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。</p>
                </div>            
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="max-w-[416px] relative">
                <img class="rounded" :src="`${food3}`" alt="Sample 3">
                <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                  <div class="flex items-center justify-between mb-[24px]">
                    <h6 class="text-[#FFFFFF] text-[24px]">山臻</h6>
                    <span class="text-[#FFFFFF]"><span class="mr-[16px]">SUN-MON</span><span>11:30 - 20:30</span></span>            
                  </div>
                  <p class="leading-[1.2] text-[#FFFFFF]">帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。</p>
                </div>            
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="max-w-[416px] relative">
                <img class="rounded" :src="`${food4}`" alt="Sample 4">
                <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                  <div class="flex items-center justify-between mb-[24px]">
                    <h6 class="text-[#FFFFFF] text-[24px]">月永</h6>
                    <span class="text-[#FFFFFF]"><span class="mr-[16px]">SUN-MON</span><span>11:00 - 20:00</span></span>            
                  </div>
                  <p class="leading-[1.2] text-[#FFFFFF]">從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。</p>
                </div>            
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="max-w-[416px] relative">
                <img class="rounded" :src="`${food5}`" alt="Sample 5">
                <div class="absolute p-[24px] rounded-bl rounded-br bottom-0 bg-white/10 backdrop-blur-sm">
                  <div class="flex items-center justify-between mb-[24px]">
                    <h6 class="text-[#FFFFFF] text-[24px]">天潮</h6>
                    <span class="text-[#FFFFFF]"><span class="mr-[16px]">SUN-MON</span><span>14:00 - 19:30</span></span>            
                  </div>
                  <p class="leading-[1.2] text-[#FFFFFF]">我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。</p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
    <section class="bg-[#000000] pt-[120px] pb-[80px]">
      <div class="max-w-[1296px] mx-auto">
        <h3 class="text-[#BF9D7D] text-[48px] leading-[1.2] mb-[80px]  flex items-center after:block after:ml-[24px] after:h-[2px] after:w-[167px] after:bg-gradient-to-r after:from-[#BE9C7C] after:to-[#FFFFFF]">交通<br>方式</h3>
        <p class="text-[#FFFFFF] mb-[16px]">台灣高雄市新興區六角路123號</p>
        <div class="w-full h-[360px] mb-[40px]">
          <!-- <img :src="`${map}`" alt="地址：台灣高雄市新興區六角路123號"> -->
          <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d35033.236971886545!2d120.2960626251659!3d22.63829483171618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Y-w54Gj6auY6ZuE5biC5paw6IiI5Y2A5YWt6KeS6LevMTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1727255039806!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="flex mb-[80px]">
          <div class="mr-[24px]">          
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[80px]" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_29_1895)">
                <path class="fill-[#BF9D7D]" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_29_1895">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <h6 class="mt-[16px] mb-[8px] text-[24px] text-[#FFFFFF]">自行開車</h6>
            <p class="tracking-[2px] text-[#FFFFFF] leading-[1.2]">如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
          </div>
          <div class="mr-[24px]">
            <svg viewBox="0 0 24 24" class="w-[80px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_31_1909)">
                <path class="fill-[#BF9D7D]" d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H8.23L10.23 19H14L16 21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17ZM11 10H6V6H11V10ZM13 10V6H18V10H13ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_31_1909">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <h6 class="mt-[16px] mb-[8px] text-[24px] text-[#FFFFFF]">高鐵/火車</h6>
            <p class="tracking-[2px] text-[#FFFFFF] leading-[1.2]">如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
          </div>
          <div>
            <svg class="w-[80px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-[#BF9D7D]" d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15H9C9 15.7956 8.68393 16.5587 8.12132 17.1213C7.55871 17.6839 6.79565 18 6 18C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5C6.39782 16.5 6.77936 16.342 7.06066 16.0607C7.34196 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5ZM18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15C19.5 14.6022 19.342 14.2206 19.0607 13.9393C18.7794 13.658 18.3978 13.5 18 13.5Z" fill="black"/>
            </svg>
            <h6 class="mt-[16px] mb-[8px] text-[24px] text-[#FFFFFF]">禮賓車服務</h6>
            <p class="tracking-[2px] text-[#FFFFFF] leading-[1.2]">承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
          </div>
        </div>        
      </div>  
      <img :src="line2" alt="">    
    </section>
    <section class="bg-[#000000] pt-[80px] pb-[120px]">
      <div class="max-w-[1296px] mx-auto">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <div class="h-[152px] mb-[80px]">
              <img class="mb-[40px] max-w-[196px]" :src="`${logo}`" alt="">
              <div class="flex">
                <a href="" target="_blank">
                  <svg class="w-[40px] mr-[16px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
                    <path d="M20 8C26.6165 8 32 12.368 32 17.738C32 19.8875 31.1675 21.8225 29.4275 23.729C26.9105 26.627 21.281 30.1565 20 30.6965C18.755 31.2215 18.899 30.401 18.956 30.077L18.9605 30.05L19.1315 29.0225C19.172 28.7165 19.214 28.241 19.0925 27.938C18.9575 27.6035 18.4265 27.4295 18.0365 27.3455C12.269 26.585 8 22.5515 8 17.738C8 12.368 13.385 8 20 8ZM15.533 19.529H13.2455V15.377C13.2455 15.3152 13.2211 15.2559 13.1775 15.2121C13.1339 15.1682 13.0748 15.1434 13.013 15.143H12.17C12.1393 15.143 12.1088 15.1491 12.0805 15.1608C12.0521 15.1726 12.0263 15.1898 12.0045 15.2115C11.9828 15.2333 11.9656 15.2591 11.9538 15.2875C11.9421 15.3158 11.936 15.3463 11.936 15.377V20.606C11.936 20.6675 11.9615 20.726 12.002 20.7665V20.768L12.005 20.771L12.008 20.774C12.0515 20.8158 12.1096 20.839 12.17 20.8385H15.533C15.662 20.8385 15.7655 20.7335 15.7655 20.6045V19.7645C15.7657 19.7338 15.7598 19.7033 15.7483 19.6748C15.7367 19.6464 15.7196 19.6205 15.698 19.5986C15.6764 19.5767 15.6507 19.5593 15.6224 19.5474C15.5941 19.5354 15.5637 19.5292 15.533 19.529ZM16.7195 15.143C16.6574 15.143 16.5979 15.1677 16.554 15.2115C16.5102 15.2554 16.4855 15.3149 16.4855 15.377V20.606C16.4855 20.735 16.5905 20.8385 16.7195 20.8385H17.5625C17.6915 20.8385 17.795 20.7335 17.795 20.606V15.377C17.795 15.3152 17.7706 15.2559 17.727 15.2121C17.6834 15.1682 17.6243 15.1434 17.5625 15.143H16.7195ZM22.514 15.143C22.4519 15.143 22.3924 15.1677 22.3485 15.2115C22.3047 15.2554 22.28 15.3149 22.28 15.377V18.482L19.8845 15.248C19.8784 15.2401 19.8719 15.2326 19.865 15.2255C19.8603 15.2202 19.8553 15.2137 19.85 15.209L19.8455 15.2045C19.8404 15.1996 19.8348 15.1951 19.829 15.191L19.82 15.185L19.8155 15.182C19.8132 15.1803 19.8106 15.1787 19.808 15.1775L19.796 15.17H19.793L19.7885 15.167L19.7735 15.161L19.7675 15.158C19.7626 15.1562 19.7576 15.1547 19.7525 15.1535H19.7495L19.745 15.152L19.7315 15.149H19.7225L19.718 15.1475H19.712L19.709 15.146H18.848C18.7862 15.146 18.7269 15.1704 18.6831 15.214C18.6392 15.2576 18.6144 15.3167 18.614 15.3785V20.6075C18.614 20.7365 18.719 20.84 18.848 20.84H19.688C19.8185 20.84 19.9235 20.735 19.9235 20.6075V17.5025L22.3235 20.7425C22.3395 20.7648 22.3593 20.7841 22.382 20.7995L22.3835 20.801L22.3985 20.81L22.4045 20.813C22.4084 20.8153 22.4124 20.8173 22.4165 20.819L22.427 20.8235L22.4345 20.8265C22.4395 20.8282 22.4445 20.8297 22.4495 20.831H22.454C22.4735 20.8366 22.4937 20.8396 22.514 20.84H23.354C23.4845 20.84 23.5895 20.735 23.5895 20.6075V15.377C23.5895 15.3149 23.5648 15.2554 23.521 15.2115C23.4771 15.1677 23.4176 15.143 23.3555 15.143H22.514ZM28.2365 16.2185V15.3785C28.2367 15.3478 28.2308 15.3173 28.2193 15.2888C28.2077 15.2604 28.1906 15.2345 28.169 15.2126C28.1474 15.1907 28.1217 15.1733 28.0934 15.1614C28.0651 15.1494 28.0347 15.1432 28.004 15.143H24.641C24.5805 15.1431 24.5223 15.1668 24.479 15.209H24.4775L24.476 15.212L24.473 15.2165C24.4311 15.2595 24.4075 15.317 24.407 15.377V20.606C24.407 20.6675 24.4325 20.726 24.473 20.7665L24.476 20.771L24.479 20.774C24.5226 20.8157 24.5807 20.8388 24.641 20.8385H28.004C28.133 20.8385 28.2365 20.7335 28.2365 20.6045V19.7645C28.2367 19.7338 28.2308 19.7033 28.2193 19.6748C28.2077 19.6464 28.1906 19.6205 28.169 19.5986C28.1474 19.5767 28.1217 19.5593 28.0934 19.5474C28.0651 19.5354 28.0347 19.5292 28.004 19.529H25.715V18.6455H28.0025C28.1315 18.6455 28.235 18.5405 28.235 18.4115V17.5715C28.2352 17.5408 28.2293 17.5103 28.2178 17.4818C28.2062 17.4534 28.1891 17.4275 28.1675 17.4056C28.1459 17.3837 28.1202 17.3663 28.0919 17.3544C28.0636 17.3424 28.0332 17.3362 28.0025 17.336H25.715V16.4525H28.0025C28.1315 16.4525 28.235 16.3475 28.235 16.2185H28.2365Z" fill="white"/>
                  </svg>
                </a>
                <a href="" target="_blank">
                  <svg class="w-[40px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
                    <g clip-path="url(#clip0_39_3487)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 11C25.3261 11 26.5979 11.5268 27.5355 12.4645C28.4732 13.4021 29 14.6739 29 16V24C29 25.3261 28.4732 26.5979 27.5355 27.5355C26.5979 28.4732 25.3261 29 24 29H16C14.6739 29 13.4021 28.4732 12.4645 27.5355C11.5268 26.5979 11 25.3261 11 24V16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11H24ZM24 13H16C15.2044 13 14.4413 13.3161 13.8787 13.8787C13.3161 14.4413 13 15.2044 13 16V24C13 24.7956 13.3161 25.5587 13.8787 26.1213C14.4413 26.6839 15.2044 27 16 27H24C24.7956 27 25.5587 26.6839 26.1213 26.1213C26.6839 25.5587 27 24.7956 27 24V16C27 15.2044 26.6839 14.4413 26.1213 13.8787C25.5587 13.3161 24.7956 13 24 13ZM20 16C21.0609 16 22.0783 16.4214 22.8284 17.1716C23.5786 17.9217 24 18.9391 24 20C24 21.0609 23.5786 22.0783 22.8284 22.8284C22.0783 23.5786 21.0609 24 20 24C18.9391 24 17.9217 23.5786 17.1716 22.8284C16.4214 22.0783 16 21.0609 16 20C16 18.9391 16.4214 17.9217 17.1716 17.1716C17.9217 16.4214 18.9391 16 20 16ZM20 18C19.4696 18 18.9609 18.2107 18.5858 18.5858C18.2107 18.9609 18 19.4696 18 20C18 20.5304 18.2107 21.0391 18.5858 21.4142C18.9609 21.7893 19.4696 22 20 22C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20C22 19.4696 21.7893 18.9609 21.4142 18.5858C21.0391 18.2107 20.5304 18 20 18ZM24.5 14.5C24.7652 14.5 25.0196 14.6054 25.2071 14.7929C25.3946 14.9804 25.5 15.2348 25.5 15.5C25.5 15.7652 25.3946 16.0196 25.2071 16.2071C25.0196 16.3946 24.7652 16.5 24.5 16.5C24.2348 16.5 23.9804 16.3946 23.7929 16.2071C23.6054 16.0196 23.5 15.7652 23.5 15.5C23.5 15.2348 23.6054 14.9804 23.7929 14.7929C23.9804 14.6054 24.2348 14.5 24.5 14.5Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_39_3487">
                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </a>            
              </div>
            </div>            
            <p class="text-[#FFFFFF]">806023 台灣高雄市新興區六角路123號</p>
          </div> 
          <div class="flex flex-col items-end">
            <div class="mb-[80px] h-[152px] grid grid-rows-2 grid-cols-2 grid-flow-col place-content-between">
              <div class="">
                <p class="mb-[8px] text-[#FFFFFF]">TEL</p>
                <p class="text-[#FFFFFF]">+886-7-1234567</p>
              </div>
              <div class="self-end">
                <p class="mb-[8px] text-[#FFFFFF]">FAX</p>
                <p class="text-[#FFFFFF]">+886-7-1234567</p>
              </div>
              <div class="">
                <p class="mb-[8px] text-[#FFFFFF]">MAIL</p>
                <p class="text-[#FFFFFF]">elh@hexschool.com</p>
              </div>
              <div class="self-end">
                <p class="mb-[8px] text-[#FFFFFF]">WEB</p>
                <p class="text-[#FFFFFF]">www.elhhexschool.com.tw</p>
              </div>
            </div>
            <p class="text-[#FFFFFF]">© 享樂酒店 2023 All Rights Reserved.</p>
          </div>
        </div>               
      </div>
    </section>
  </main>
 </div> 
</template>
<style>
.pagination-wrapper {
 position: absolute;
 width: 100%;
 bottom: 32px;
 z-index: 30;
}
.pagination-page {
 width: 32px;
 height: 4px;
 border-radius: 20px;
 background: #FFFFFF !important;
 margin:0 4px;
}
.pagination-page.is-active {
 background: #BF9D7D !important;
 width: 60px;
}
</style>
<script setup lang="ts">
import { reactive } from "vue";
// import type { Login } from "../types/login"
import Header from "../components/Header.vue";
import logo from '../assets/img/pc/logo.png';
import banner from '../assets/img/pc/banner.png';
import news1 from '../assets/img/pc/news1.png';
import news2 from '../assets/img/pc/news2.png';
import news3 from '../assets/img/pc/news3.png';
import dot from '../assets/img/pc/dot.png';
import about from '../assets/img/pc/about.png';
import room from '../assets/img/pc/room1.png';
import line from '../assets/img/pc/line.png';
import line2 from '../assets/img/pc/line2.png';
import bg from '../assets/img/pc/bg.png';
import food1 from '../assets/img/pc/food1.png';
import food2 from '../assets/img/pc/food2.png';
import food3 from '../assets/img/pc/food3.png';
import food4 from '../assets/img/pc/food4.png';
import food5 from '../assets/img/pc/food5.png';
import map from '../assets/img/pc/map.png';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css/core';

const options = reactive({
  rewind: true,
  type: 'loop',
  arrows: false,
  classes: {
      pagination: 'splide__pagination pagination-wrapper',
      page: 'splide__pagination__page pagination-page',
  },
});

const options2 = reactive({
  perPage: 4,
  rewind: true,
  drag: 'free',
  gap: '24px',
  type: 'loop',
  arrows: false,
  pagination: false,
  classes: {
      pagination: 'splide__pagination pagination-wrapper',
      page: 'splide__pagination__page pagination-page',
  },
  autoScroll: {
    speed: 1
  }
});
// import line3 from '../assets/img/pc/line3.png';
// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })

</script>