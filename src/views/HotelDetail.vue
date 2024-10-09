<template>
 <div class="min-h-[100%]">
  <Header></Header>
  <main>
    <section class="relative bg-[#F7F2EE] pt-[200px] pb-[80px]">
     <div class="max-w-[1760px] mx-auto overflow-hidden rounded-xl">
      <Splide :options="options" :extensions="extensions" aria-label="享樂酒店">
       <SplideSlide>
         <img class="h-[600px] object-cover" :src="`${room2_1}`" alt="Sample 1">
       </SplideSlide>
       <SplideSlide>
         <img class="h-[296px] object-cover" :src="`${room2_2}`" alt="Sample 2">
       </SplideSlide>
       <SplideSlide>
         <img class="h-[296px] object-cover" :src="`${room2_3}`" alt="Sample 3">
       </SplideSlide>
       <SplideSlide>
         <img class="h-[296px] object-cover" :src="`${room2_4}`" alt="Sample 4">
       </SplideSlide>
       <SplideSlide>
         <img class="h-[296px] object-cover" :src="`${room2_5}`" alt="Sample 5">
       </SplideSlide>
      </Splide>
     </div>     
    </section>
    <section class="relative bg-[#F7F2EE] pt-[120px] pb-[120px]">
     <div class="max-w-[1296px] mx-auto flex items-start">
      <div class="w-full max-w-[746px] mr-[72px]">
       <h3 class="text-[48px] mb-[16px]">尊爵雙人房</h3>
       <p class="mb-[80px]">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>       
       <div class="mb-[80px]">
        <h6 class="mb-[24px] text-[24px] before:inline-block inline-block flex items-center before:h-[24px] before:w-[4px] before:bg-[#BF9D7D] before:rounded before:mr-[12px]">房型基本資訊</h6>
        <div class="w-[97px] h-[97px] inline-block px-[16px] py-[20px] mr-[16px] bg-[#FFFFFF] rounded-lg">
         <svg class="w-[24px] h-[24px] mb-[12px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="fill-[#BF9D7D]" d="M2 6.75C2 6.02065 2.28973 5.32118 2.80546 4.80546C3.32118 4.28973 4.02065 4 4.75 4H19.25C19.9793 4 20.6788 4.28973 21.1945 4.80546C21.7103 5.32118 22 6.02065 22 6.75V17.25C22 17.6111 21.9289 17.9687 21.7907 18.3024C21.6525 18.636 21.4499 18.9392 21.1945 19.1945C20.9392 19.4499 20.636 19.6525 20.3024 19.7907C19.9687 19.9289 19.6111 20 19.25 20H4.75C4.38886 20 4.03127 19.9289 3.69762 19.7907C3.36398 19.6525 3.06082 19.4499 2.80546 19.1945C2.5501 18.9392 2.34753 18.636 2.20933 18.3024C2.07113 17.9687 2 17.6111 2 17.25V6.75ZM16.78 7.22C16.6395 7.07931 16.4488 7.00017 16.25 7H13.75C13.5511 7 13.3603 7.07902 13.2197 7.21967C13.079 7.36032 13 7.55109 13 7.75C13 7.94891 13.079 8.13968 13.2197 8.28033C13.3603 8.42098 13.5511 8.5 13.75 8.5H14.44L12.72 10.219C12.6463 10.2877 12.5872 10.3705 12.5462 10.4625C12.5052 10.5545 12.4832 10.6538 12.4814 10.7545C12.4796 10.8552 12.4982 10.9552 12.5359 11.0486C12.5736 11.142 12.6297 11.2268 12.701 11.298C12.7722 11.3693 12.857 11.4254 12.9504 11.4631C13.0438 11.5008 13.1438 11.5194 13.2445 11.5176C13.3452 11.5158 13.4445 11.4938 13.5365 11.4528C13.6285 11.4118 13.7113 11.3527 13.78 11.279L15.5 9.56V10.25C15.5 10.4489 15.579 10.6397 15.7197 10.7803C15.8603 10.921 16.0511 11 16.25 11C16.4489 11 16.6397 10.921 16.7803 10.7803C16.921 10.6397 17 10.4489 17 10.25V7.75C16.9998 7.55115 16.9207 7.36052 16.78 7.22ZM7.75 17H10.251C10.4499 17 10.6407 16.921 10.7813 16.7803C10.922 16.6397 11.001 16.4489 11.001 16.25C11.001 16.0511 10.922 15.8603 10.7813 15.7197C10.6407 15.579 10.4499 15.5 10.251 15.5H9.561L11.281 13.78C11.4176 13.6385 11.4931 13.449 11.4913 13.2523C11.4895 13.0557 11.4105 12.8676 11.2714 12.7286C11.1322 12.5896 10.9441 12.5109 10.7475 12.5092C10.5508 12.5076 10.3614 12.5833 10.22 12.72L8.5 14.438V13.748C8.5 13.5491 8.42098 13.3583 8.28033 13.2177C8.13968 13.077 7.94891 12.998 7.75 12.998C7.55109 12.998 7.36032 13.077 7.21967 13.2177C7.07902 13.3583 7 13.5491 7 13.748V16.248C7 16.4469 7.07902 16.6377 7.21967 16.7783C7.36032 16.919 7.55109 16.998 7.75 16.998V17Z" fill="black"/>
         </svg>
         <p class="text-[#4B4B4B]">24 坪</p>
        </div>
        <div class="w-[97px] h-[97px] inline-block px-[16px] py-[20px] mr-[16px] bg-[#FFFFFF] rounded-lg">
         <svg class="w-[24px] h-[24px] mb-[12px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_40_4434)">
           <path class="fill-[#BF9D7D]" d="M20 10V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V10C2.9 10 2 10.9 2 12V17H3.33L4 19H5L5.67 17H18.34L19 19H20L20.67 17H22V12C22 10.9 21.1 10 20 10ZM11 10H6V7H11V10ZM18 10H13V7H18V10Z" fill="black"/>
          </g>
          <defs>
           <clipPath id="clip0_40_4434">
            <rect width="24" height="24" fill="white"/>
           </clipPath>
          </defs>
         </svg>
         <p class="text-[#4B4B4B]">1 張大床</p>
        </div>
        <div class="w-[97px] h-[97px] inline-block px-[16px] py-[20px] mr-[16px] bg-[#FFFFFF] rounded-lg">
         <svg class="w-[24px] h-[24px] mb-[12px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_40_4435)">
           <path class="fill-[#BF9D7D]" d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="black"/>
          </g>
          <defs>
           <clipPath id="clip0_40_4435">
            <rect width="24" height="24" fill="white"/>
           </clipPath>
          </defs>
         </svg>
         <p class="text-[#4B4B4B]">2-4 人</p>
        </div>
       </div>
       <div class="mb-[80px]">
        <h6 class="mb-[24px] text-[24px] before:inline-block inline-block flex items-center before:h-[24px] before:w-[4px] before:bg-[#BF9D7D] before:rounded before:mr-[12px]">房間格局</h6>
        <div class="w-full justify-start flex flex-wrap gap-y-[8px] px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg">
         <div class="flex items-center mr-[40px]">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">市景</p>
         </div>
         <div class="flex items-center mr-[40px]">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">獨立衛浴</p>
         </div>
         <div class="flex items-center mr-[40px]">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">客廳</p>
         </div>
         <div class="flex items-center mr-[40px]">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">書房</p>
         </div>
         <div class="flex items-center mr-[40px]">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">樓層電梯</p>
         </div>         
        </div>
       </div>
       <div class="mb-[80px]">
        <h6 class="mb-[24px] text-[24px] before:inline-block inline-block flex items-center before:h-[24px] before:w-[4px] before:bg-[#BF9D7D] before:rounded before:mr-[12px]">房內設備</h6>
        <div class="w-full grid grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg">
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">平面電視</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">吹風機</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">冰箱</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">熱水壺</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">檯燈</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">衣櫃</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">除濕機</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">浴缸</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">書桌</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">音響</p>
         </div>         
        </div>
       </div>
       <div class="mb-[80px]">
        <h6 class="mb-[24px] text-[24px] before:inline-block inline-block flex items-center before:h-[24px] before:w-[4px] before:bg-[#BF9D7D] before:rounded before:mr-[12px]">備品提供</h6>
        <div class="w-full grid grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg">
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">衛生紙</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">拖鞋</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">沐浴用品</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">清潔用品</p>
         </div>
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">刮鬍刀</p>
         </div>   
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">吊衣架</p>
         </div>   
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">浴巾</p>
         </div>   
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">刷牙用品</p>
         </div>   
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">罐裝水</p>
         </div>   
         <div class="flex items-center">
          <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_14_2332)">
            <path class="fill-[#BF9D7D]" d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z" fill="white"/>
           </g>
           <defs>
            <clipPath id="clip0_14_2332">
             <rect width="24" height="24" fill="white"/>
            </clipPath>
           </defs>
          </svg>
          <p class="text-[#4B4B4B]">梳子</p>
         </div>         
        </div>
       </div>
       <div class="mb-[80px]">
        <h6 class="mb-[24px] text-[24px] before:inline-block inline-block flex items-center before:h-[24px] before:w-[4px] before:bg-[#BF9D7D] before:rounded before:mr-[12px]">訂房須知</h6>
        <ol class="list-decimal ml-[12px] text-[#4B4B4B]">
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
      <aside class="p-[40px] bg-[#FFFFFF] rounded-xl max-w-[478px] sticky top-[120px]">
       <h6 class="text-[24px] mb-[56px] pb-[16px] border-b border-[#ECECEC]">預訂房型</h6>
       <h3 class="text-[40px] mb-[8px]">尊爵雙人房</h3>
       <p class="mb-[40px]">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
       <div class="relative grid grid-flow-col gap-[8px] mb-[16px] justify-stretch items-center" :class="{'before:fixed before:w-full before:h-full before:bg-black/10 before:backdrop-blur-sm before:z-10 before:top-0 before:left-0':clickedDate}">
        <button class="p-[16px] border rounded-lg text-left" @click="clickedDate=!clickedDate">
         <p class="text-[12px]">入住</p>
         <p>2023 / 12 / 03</p>
        </button>
        <button class="p-[16px] border rounded-lg text-left" @click="clickedDate=!clickedDate">
         <p class="text-[12px]">退房</p>
         <p>2023 / 12 / 04</p>
        </button>
        <div class="absolute right-[-40px] top-[-32px] z-30 w-[740px] rounded-lg bg-[#FFFFFF] p-[32px]" :class="{'hidden':clickedDate===false}">
         <!-- 上方區塊 -->
         <div class="flex mb-[40px]">
           <!-- 住宿時間 -->
           <div class="w-[220px] mr-[40px]">
             <p class="text-[24px] mb-[8px]">1 晚</p>
             <p>2023/ 12 / 03 - 2023/ 12 / 04</p>
           </div>
           <!-- 入住與退房按鈕 -->
           <div class="relative w-[398px] grid grid-flow-col gap-[8px] mb-[16px] justify-stretch items-center">
             <button class="p-[16px] border rounded-lg text-left">
               <p class="text-[12px]">入住</p>
               <p>2023 / 12 / 03</p>
             </button>
             <button class="p-[16px] border rounded-lg text-left">
               <p class="text-[12px]">退房</p>
               <p>2023 / 12 / 04</p>
             </button>
           </div>
         </div>
         <!-- 月曆區塊 -->
         <div class="flex mb-[40px]">
           <!-- 11月月曆 -->
           <div class="w-full mr-[60px]">
             <!-- 月份與左箭頭 -->
             <div class="flex mb-[8px] justify-between items-center">
              <button>
               <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_14_2307)">
                   <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="black"></path>
                 </g>
                 <defs>
                   <clipPath id="clip0_14_2307">
                     <rect width="24" height="24" fill="white"></rect>
                   </clipPath>
                 </defs>
               </svg>
              </button>               
              <p class="text-[20px] text-center w-full">2023 年 11 月</p>
             </div>
             <!-- 日期區 -->
             <div class="w-full grid grid-cols-7 gap-y-[4px] auto-cols-auto justify-stretch items-center">
               <button class="w-[44px] h-[44px] flex items-center justify-center">日</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">一</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">二</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">三</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">四</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">五</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">六</button>

               <!-- 日期排列 -->
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">1</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">2</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">3</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">4</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">5</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">6</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">7</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">8</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">9</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">10</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">11</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">12</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">13</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">14</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">15</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">16</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">17</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">18</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">19</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">20</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">21</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">22</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">23</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">24</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">25</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">26</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">27</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">28</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">29</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">30</button>               
             </div>
           </div>

           <!-- 12月月曆 -->
           <div class="w-full">
             <!-- 月份與右箭頭 -->
             <div class="flex mb-[8px] justify-between items-center">
               <p class="text-[20px] text-center w-full">2023 年 12 月</p>
               <button>
                <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_14_2310)">
                   <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="black"></path>
                 </g>
                 <defs>
                   <clipPath id="clip0_14_2310">
                     <rect width="24" height="24" fill="white"></rect>
                   </clipPath>
                 </defs>
                </svg>
               </button>
             </div>
             <!-- 日期區 -->
             <div class="w-full grid grid-cols-7 gap-y-[4px] auto-cols-auto justify-stretch items-center">
               <button class="w-[44px] h-[44px] flex items-center justify-center">日</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">一</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">二</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">三</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">四</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">五</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">六</button>

               <!-- 日期排列 -->
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center"></button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">1</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">2</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">3</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">4</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">5</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">6</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">7</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">8</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">9</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">10</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#000000] rounded-full text-[#FFFFFF]">11</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">12</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">13</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">14</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">15</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">16</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">17</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">18</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">19</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">20</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">21</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">22</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">23</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">24</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">25</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#F9F9F9]">26</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#000000] rounded-full text-[#FFFFFF]">27</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">28</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">29</button>
               <button class="w-[44px] h-[44px] flex items-center justify-center">30</button>               
             </div>
           </div>
         </div>
         <div class="flex justify-end">
          <button class="w-full max-w-[129px] h-[56px] flex items-center justify-center text-[#000000] rounded-lg">清除日期</button>
          <button class="w-full max-w-[129px] h-[56px] flex items-center justify-center text-[#FFFFFF] bg-[#BF9D7D] rounded-lg" @click="clickedDate=false">確定日期</button>
         </div>
        </div>
       </div>
       <div class="flex justify-between items-center mb-[40px]">
        <p class="text-[24px]">人數</p>
        <div class="flex items-center">
         <button class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
          <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M19 13H5V11H19V13Z" fill="black"/>
          </svg>
         </button>
         <span class="text-[20px] mx-[16px]">2</span>
         <button class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
          <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black"/>
          </svg>
         </button>
        </div>
       </div>
       <p class="text-[24px] text-[#BF9D7D] mb-[40px]">NT$ 10,000</p>
       <ClickButton :to="{ name: 'Book' }">立即預訂</ClickButton>
      </aside>
     </div>
    </section>
  </main>
  <Footer></Footer>
 </div> 
</template>
<style>
/* .pagination-wrapper {
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
} */
</style>
<script setup lang="ts">
import { ref, reactive } from "vue";
// import type { Login } from "../types/login"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ClickButton from '../components/ClickButton.vue';
import room2_1 from '../assets/img/pc/room2-1.png';
import room2_2 from '../assets/img/pc/room2-2.png';
import room2_3 from '../assets/img/pc/room2-3.png';
import room2_4 from '../assets/img/pc/room2-4.png';
import room2_5 from '../assets/img/pc/room2-5.png';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/splide/css/core';

const extensions = ref({ Grid });

const options = reactive({
 type: 'loop',
 height: '600px',
 arrows: false,
 perPage: 2,
 perMove: 1,
 // padding: '8px',
 gap: '8px',
 // gap: {
 //  col: '16px'
 // },
 // trimSpace: false,
 grid: {
  // [rows, cols]
  dimensions: [ [ 1, 1 ], [ 2, 2 ]],
  // gap: '16px',
  // padding: '16px'
  gap: {
   row: '8px',
   col: '8px'
  }
		// gap : [{
		// 	row: 8,
		// 	col: 8,
		// },{
		// 	row: 8,
		// 	col: 8,
		// }],
 },
 breakpoints: {
  767: {
    perPage: 1,
    grid: false
  },
 },
});

const clickedDate = ref(false)

</script>