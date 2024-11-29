<template>
 <template v-if="calendarStore.isShow">
  <div class="hidden lg:block relative">
   <!-- 背景模糊遮罩 -->
   <div class="fixed w-full h-full bg-black/10 backdrop-blur-sm top-0 left-0 z-40"></div>
   <!-- 背景模糊遮罩 END -->
   <!-- PC 因為希望對準日期的絕對位置 所以不使用 teleport-->
   <div class="absolute right-[-40px] top-[-32px] z-50 w-[740px] rounded-lg bg-[#FFFFFF] p-[32px]">
    <!-- 上方區塊 -->
    <div class="flex mb-[40px]">
     <!-- 住宿時間 -->
     <div class="w-[220px] mr-[40px]">
      <p class="text-[1.5rem] mb-[8px]">1 晚</p>
      <p>2023/ 12 / 03 - 2023/ 12 / 04</p>
     </div>
     <!-- 入住與退房按鈕 -->
     <div class="relative w-[398px] grid grid-flow-col gap-[8px] mb-[16px] justify-stretch items-center">
      <button class="p-[16px] border rounded-lg text-left">
       <p class="text-[0.75rem]">入住</p>
       <p>2023 / 12 / 03</p>
      </button>
      <button class="p-[16px] border rounded-lg text-left">
       <p class="text-[0.75rem]">退房</p>
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
       <p class="text-[1.25rem] text-center w-full">2023 年 11 月</p>
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
       <p class="text-[1.25rem] text-center w-full">2023 年 12 月</p>
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
     <button class="w-full max-w-[129px] h-[56px] flex items-center justify-center text-[#000000] rounded-lg font-bold">
      清除日期
     </button>
     <button
      class="w-full max-w-[129px] h-[56px] flex items-center justify-center text-[#FFFFFF] bg-[#BF9D7D] rounded-lg font-bold"
      @click="calendarStore.makeSureDate()"
     >
      確定日期
     </button>
    </div>
   </div>
   <!-- PC END -->
  </div>
  <!-- MOBILE -->
  <teleport to="body">
   <!-- 背景模糊遮罩 -->
   <div class="block lg:hidden fixed w-full h-full bg-black/10 backdrop-blur-sm top-0 left-0 z-40"></div>
   <!-- 背景模糊遮罩 END -->
   <div
    class="block lg:hidden fixed left-0 bottom-0 z-50 w-full rounded-tl-lg rounded-tr-lg bg-[#FFFFFF] h-[97%] overflow-hidden"
   >
    <div class="bg-[#ECECEC] px-[24px] pt-[16px] pb-[8px] border-b-[1px] border-[black/10]">
     <button @click="calendarStore.closeCalendar" class="w-[40px] h-[40px] mb-[16px] flex items-center justify-center">
      <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g clip-path="url(#clip0_14_2300)">
        <path
         class="fill-[#4B4B4B]"
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
     <p class="text-[1.25rem] font-bold mb-[16px]">選擇入住日期</p>
     <div class="w-full grid grid-cols-7 place-items-center">
      <button class="w-[44px] h-[40px] font-bold flex items-center justify-center text-[0.875rem]">日</button>
      <button class="w-[44px] h-[40px] font-bold flex items-center justify-center text-[0.875rem]">一</button>
      <button class="w-[44px] h-[40px] font-bold flex items-center justify-center text-[0.875rem]">二</button>
      <button class="w-[44px] h-[40px] font-bold flex items-center justify-center text-[0.875rem]">三</button>
      <button class="w-[44px] h-[40px] font-bold flex items-center justify-center text-[0.875rem]">四</button>
      <button class="w-[44px] h-[40px] font-bold flex items-center justify-center text-[0.875rem]">五</button>
      <button class="w-[44px] h-[40px] font-bold flex items-center justify-center text-[0.875rem]">六</button>
     </div>
    </div>
    <!-- 月曆區塊 -->
    <div class="flex flex-col mb-[40px] p-[24px]">
     <!-- 11月月曆 -->
     <div class="w-full mb-[48px]">
      <!-- 月份與左箭頭 -->
      <div class="flex mb-[16px] justify-between items-center">
       <p class="text-left w-full font-bold text-[0.875rem]">2023 年 11 月</p>
      </div>
      <!-- 日期區 -->
      <div class="w-full grid grid-cols-7 place-items-center">
       <!-- 日期排列 -->
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">1</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">2</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">3</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">4</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">5</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">6</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">7</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">8</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">9</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">10</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">11</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">12</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">13</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">14</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">15</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">16</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">17</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">18</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">19</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">20</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">21</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">22</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">23</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">24</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">25</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">26</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">27</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">28</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">29</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">30</button>
      </div>
     </div>
     <!-- 12月月曆 -->
     <div class="w-full">
      <!-- 月份與右箭頭 -->
      <div class="flex mb-[16px] justify-between items-center">
       <p class="text-left w-full font-bold text-[0.875rem]">2023 年 12 月</p>
      </div>
      <!-- 日期區 -->
      <div class="w-full grid grid-cols-7 place-items-center">
       <!-- 日期排列 -->
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]"></button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">1</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">2</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">3</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">4</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">5</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">6</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">7</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">8</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">9</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">10</button>
       <button
        class="w-[40px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#000000] rounded-full text-[#FFFFFF]"
       >
        11
       </button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">12</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">13</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">14</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">15</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">16</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">17</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">18</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">19</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">20</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">21</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">22</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">23</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">24</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">25</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#F9F9F9]">26</button>
       <button
        class="w-[40px] h-[40px] flex items-center justify-center text-[0.875rem] bg-[#000000] rounded-full text-[#FFFFFF]"
       >
        27
       </button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">28</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">29</button>
       <button class="w-[44px] h-[40px] flex items-center justify-center text-[0.875rem]">30</button>
      </div>
     </div>
    </div>
    <div class="flex justify-between p-[12px] items-center fixed w-full bottom-0 bg-[#FFFFFF] border-t-[1px] border-[black/10]">
     <button class="w-full max-w-[168px] h-[56px] flex items-center justify-center text-[#000000] rounded-lg font-bold">
      清除日期
     </button>
     <button
      class="w-full max-w-[168px] h-[56px] flex items-center justify-center text-[#FFFFFF] bg-[#BF9D7D] rounded-lg font-bold"
      @click="calendarStore.makeSureDate()"
     >
      確定日期
     </button>
    </div>
   </div>
  </teleport>
  <!-- MOBILE END -->
 </template>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { useCalendarStore } from '../stores/calendar'
const props = defineProps({
 customClass: {
  type: String,
  required: false
 }
})
const calendarStore = useCalendarStore()
</script>
