<template>
  <div class="lex-col lg:flex pl-4 lg:pl-44 my-4 gap-4 lg:my-20">
    <div class="text w-96">
      <h1 class="text-4xl font-semibold text-[rgb(15,26,67)]">
        Our vaccines <br />
        and medicines
      </h1>
      <p class="text-xs font-medium py-4">
        Getting ahead means preventing disease as well as treating it. OUr R&D
        focus is to deliver new vaccines and medicines using the science of the
        immune system, human genetics and advanced technology.
      </p>
      <a href="#" class="flex items-center">
        <span
          class="mr-3 text-xs font-bold tracking-tight border-b-[1.5px] border-gray-600/90 inline-block leading-[9px]"
          >View more</span
        >
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            class="h-5 w-5 stroke-current"
          >
            <path
              style="
                fill: black;
                stroke: #000 !important;
                stroke-width: 0.5;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
        </span>
      </a>
    </div>

    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      loop="{true}"
      :keyboard="{
        enabled: true,
      }"
      :pagination="flase"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div
          class="relative single-card-first h-40 lg:h-48 min-w-[170px] lg:min-w-[200px] border-[1.5px] shadow-indigo-50 shadow-sm border-[#4e6acf] bg-border-gradient-to-r from-red to-black rounded-xl"
        >
          <h1 class="text-5xl font-normal pl-4 pb-4 pt-2">15</h1>
          <p class="text-xs font-normal pl-4 text-gray-900 px-2">
            vaccines manufacturing site-enabling a supply capability to produce
            and deliver 500 million vaccine doses in 2022
          </p>
          <img
            src="../assets/images/home/Group-3.svg"
            alt="Image"
            class="absolute overflow-hidden z-30 left-0 transform translate-x-56 -translate-y-1/2 top-1/2 w-14 h-14 cursor-pointer hidden hover:block"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative single-card-second h-40 lg:h-48 min-w-[170px] lg:min-w-[200px] border-[1.5px] shadow-indigo-50 shadow-sm border-[#eceded] rounded-xl"
        >
          <h1 class="text-5xl font-normal pl-4 pb-4 pt-2">20+</h1>
          <p class="text-xs font-normal pl-4 text-gray-900 px-2">
            vaccines, helping to protect lives from diseases including
            meningitis, shingles, flu, whooping cough, measles, hepatitis and
            human papillomavirus (HPV)
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="single-card-third h-40 lg:h-48 min-w-[170px] lg:min-w-[200px] border-[1.5px] shadow-indigo-50 shadow-sm border-[#eceded] rounded-xl"
        >
          <h1 class="text-5xl font-normal pl-4 pb-4 pt-2">1.5m</h1>
          <p class="text-xs font-normal pl-4 text-gray-900 px-2">
            does of vaccines & medicine delivered every day
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="single-card-fourth h-40 lg:h-48 min-w-[170px] lg:min-w-[200px] border-[1px] shadow-sm border-[#eceded] rounded-xl"
        >
          <h1 class="text-5xl font-normal pl-4 pb-4 pt-2">40%</h1>
          <p class="text-xs font-normal pl-4 text-gray-900 px-2">
            of the world's child they suffer from various, our company
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="pl-4 lg:pl-96 px-80">
    <hr class="border-gray-700 opacity-90 h-[0.5px] pb-5" />
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/main.css';

// import required modules
import { Keyboard, Navigation, Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Pagination, Navigation],
    };
  },
};
</script>

<style>
.single-card-first:hover img {
  display: block;
}
@media (max-width: 640px) {
  .mySwiper {
    slidesperview: '2';
    spacebetween: '30';
  }

  .mySwiper .swiper-slide {
    width: 50% !important;
    margin-right: 10px !important;
  }
}

.single-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
}
.swiper-button-next {
  opacity: 0;
}
.swiper-button-prev {
  opacity: 0;
}

.single-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
