<template>
  <transition name="fade">
    <div v-if="calendarStore.isShow">
      <!-- PC -->
      <div class="hidden lg:block fixed left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] z-70 w-[740px] rounded-lg bg-[#FFFFFF] p-[32px]">
        <!-- 上方區塊 -->
        <div class="flex mb-[40px]">
          <!-- 住宿時間 -->
          <div class="w-[220px] mr-[40px]">
            <p class="text-[1.5rem] mb-[8px]">16 晚</p>
            <p>2023/ 12 / 11 - 2023/ 12 / 27</p>
          </div>
          <!-- 入住與退房按鈕 -->
          <div class="relative w-[398px] grid grid-flow-col gap-[8px] mb-[16px] justify-stretch items-center">
            <button class="p-[16px] border rounded-lg text-left">
              <p class="text-[0.75rem]">入住</p>
              <p>2023 / 12 / 11</p>
            </button>
            <button class="p-[16px] border rounded-lg text-left">
              <p class="text-[0.75rem]">退房</p>
              <p>2023 / 12 / 27</p>
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
                    <path
                      d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                      fill="black"
                    ></path>
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
              <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#000000] rounded-full text-[#FFFFFF]">
                11
              </button>
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
              <button class="w-[44px] h-[44px] flex items-center justify-center bg-[#000000] rounded-full text-[#FFFFFF]">
                27
              </button>
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
            @click="calendarStore.makeSureDate('pc')"
          >
            確定日期
          </button>
        </div>
      </div>
      <!-- PC END -->
      <!-- MOBILE -->
      <div v-if="calendarStore.step===1"
        class="block lg:hidden fixed left-0 bottom-0 z-70 w-full rounded-tl-lg rounded-tr-lg bg-[#FFFFFF] h-[97%] overflow-auto"
      >
        <div class="fixed w-full bg-[#ECECEC] px-[24px] pt-[16px] pb-[8px] border-b-[1px] border-[black/10]">
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
        <div class="pt-[210px] pb-[81px] flex flex-col mb-[40px] p-[24px]  overflow-auto">
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
        <div
          class="flex justify-between p-[12px] items-center fixed w-full bottom-0 bg-[#FFFFFF] border-t-[1px] border-[black/10]"
        >
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
      <div v-if="calendarStore.step===2"
        class="block lg:hidden fixed left-0 bottom-0 z-70 w-full rounded-tl-lg rounded-tr-lg bg-[#FFFFFF]"
      >
        <div class="fixed w-full bg-[#ECECEC] px-[24px] pt-[16px] pb-[8px] border-b-[1px] border-[black/10]">
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
          <p class="text-[1.25rem] font-bold mb-[16px]">16 晚<span class="ml-[16px] text-[0.875rem] text-[#4B4B4B]">2023 / 12 / 11 - 2023 / 12 / 27</span></p>
        </div>
        <div class="pt-[141px] pb-[24px] flex flex-col mb-[40px] p-[24px]  overflow-auto">
          <div class="w-full mb-[48px]">            
            <p class="text-left w-full font-bold text-[1rem] mb-[4px]">選擇人數</p>
            <p class="text-left text-[0.875rem] text-[#4B4B4B] mb-[16px]">此房型最多供 4 人居住，不接受寵物入住。</p>
            <div class="flex items-center">
              <button @click="tempRoomStore.decreasePeopleNum()" class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
                <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 13H5V11H19V13Z" fill="black" />
                </svg>
              </button>
              <span class="text-[1.25rem] mx-[16px] w-[16px] text-center">{{ tempRoomStore.peopleNum }}</span>
              <button @click="tempRoomStore.increasePeopleNum()" class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
                <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between p-[12px] items-center fixed w-full bottom-0 bg-[#FFFFFF] border-t-[1px] border-[black/10]"
        >
          <button class="w-full max-w-[168px] h-[56px] flex items-center justify-center text-[#000000] rounded-lg font-bold" 
            @click="calendarStore.reSelect()">
            重新選擇日期
          </button>
          <button
            class="w-full max-w-[168px] h-[56px] flex items-center justify-center text-[#FFFFFF] bg-[#BF9D7D] rounded-lg font-bold"
            @click="calendarStore.save()"
          >
            儲存
          </button>
        </div>
      </div>
      <!-- MOBILE END -->
    </div>
  </transition>  
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
<script setup>
// import { ref, defineProps, defineEmits } from 'vue'
import { useCalendarStore } from '@/stores/calendar'
import { useTempRoomStore } from '@/stores/tempRoom'
const calendarStore = useCalendarStore()
const tempRoomStore = useTempRoomStore()
</script>
