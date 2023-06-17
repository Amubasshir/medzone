<template>
  <div class="relative mb-1">
    <input type="checkbox" id="toggle1" class="toggle hidden" />
    <label
      class="title block font-bold bg-white p-4 cursor-pointer"
      for="toggle1"
    >
      <h1 class="flex items-center text-5xl font-light py-10">
        Cancer
        <span @click="toggleImages" v-if="!showMinusImage">
          <img src="../assets/images/home/Plus.svg" alt="" class="pl-10 plus" />
        </span>
        <span @click="toggleImages" v-if="showMinusImage">
          <img
            src="../assets/images/home/Minus.svg"
            alt=""
            class="pl-10 minus"
          />
        </span>
      </h1>
    </label>
    <div
      class="content bg-white overflow-hidden"
      :style="{ maxHeight: contentMaxHeight }"
    >
      <!-- Content -->
      <div class="first">
        <img src="../assets/images/home/Bitmap.png" alt="" />
        <h3 class="text-sm font-semibold py-3">Avastin (bevacizumab)</h3>
        <a href="#" class="flex items-center gap-2 pt-3"
          ><span
            ><img
              src="../assets/images/home/pdf-svgrepo-com.svg"
              alt=""
              class="w-4 h-4"
          /></span>
          <span
            class="text-xs font-normal border-b border-gray-900 inline-block leading-[12px]"
            >Prescribing Information</span
          ></a
        >
        <a href="#" class="flex items-center gap-2 py-3"
          ><span
            ><img
              src="../assets/images/home/pdf-svgrepo-com.svg"
              alt=""
              class="w-4 h-4"
          /></span>
          <span
            class="text-xs font-normal border-b border-gray-900 inline-block leading-[12px]"
            >Patient Product Information</span
          ></a
        >
        <a href="#" class="flex items-center gap-2 pb-3"
          ><span
            ><img
              src="../assets/images/home/pdf-svgrepo-com.svg"
              alt=""
              class="w-4 h-4"
          /></span>
          <span
            class="text-xs font-normal border-b border-gray-900 inline-block leading-[12px]"
            >Product website</span
          ></a
        >
        <a href="#" class="flex items-center">
          <span
            class="mr-3 text-xs font-bold tracking-wider border-b-[1px] border-black inline-block leading-[12px]"
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
        <div class="hr-wrapper pt-4">
          <hr class="border-gray-500 border-[1px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMinusImage: false,
      contentMaxHeight: '0',
    };
  },
  methods: {
    toggleImages() {
      this.showMinusImage = !this.showMinusImage;
      if (this.showMinusImage) {
        this.contentMaxHeight = '500px';
      } else {
        this.contentMaxHeight = '0';
      }
    },
  },
};
</script>

<style scoped>
.plus {
  width: 76px;
  height: 76px;
}
.minus {
  width: 76px;
  height: 76px;
}

.title::after,
.title::before {
}

.title::after {
}

.content {
  max-height: 0;
  transition: max-height 0.2s;
}

.toggle:checked + .title::before {
  transform: rotate(90deg) !important;
}
</style>
