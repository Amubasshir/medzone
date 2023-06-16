<template>
  <div class="pl-2 lg:pl-24 mt-2 lg:mt-20">
    <div class="top hidden lg:block px-1 lg:px-20">
      <div class="">
        <header class="">
          <div id="material-tabs">
            <a id="tab1-tab" href="#tab1">A-Z:ALL</a>
            <a id="tab2-tab" href="#tab2" class="active"
              >Therapeutic Area:All</a
            >
            <a id="tab3-tab" href="#tab3">Commonly Prescribed</a>
            <span class="blue-bar"></span>
          </div>
        </header>

        <!-- <div class="tab-content">
          <div id="tab1">
            <p>First tab content</p>
          </div>
          <div id="tab2">
            <p>Second tab content.</p>
          </div>
          <div id="tab3">
            <p>Third tab content.</p>
          </div>
        </div> -->
      </div>
      <!-- end container -->
    </div>
    <div class="middle px-12 lg:px-20">
      <h1 class="flex items-center text-5xl font-light py-10">
        Cancer
        <span
          ><img
            src="../assets/images/home/Minus.svg"
            alt=""
            class="pl-10 minus"
        /></span>
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
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
          <div class="hr-wrapper">
            <hr class="border-gray-500 hr-2px" />
          </div>
        </div>

        <div class="second">
          <img src="../assets/images/home/product_2.png" alt="" />
          <h3 class="text-sm font-semibold py-3">Herceptin</h3>
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
          <div class="hr-wrapper">
            <hr class="border-gray-500 hr-2px" />
          </div>
        </div>
        <div class="third">
          <img src="../assets/images/home/product_3.png" alt="" />
          <h3 class="text-sm font-semibold py-3">Perjeta</h3>
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
          <div class="hr-wrapper">
            <hr class="border-gray-500 hr-2px" />
          </div>
        </div>
        <div class="fourth">
          <img src="../assets/images/home/product_4.png" alt="" />
          <h3 class="text-sm font-semibold py-3">Rozlytrek</h3>
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
          <div class="hr-wrapper">
            <hr class="border-gray-500 hr-2px" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom pt-3 lg:pt-10 px-10 lg:px-20">
      <h1
        class="flex items-center text-4xl lg:text-5xl font-light pb-5 lg:pb-10"
      >
        Cardiovascular
        <span class=""
          ><img
            src="../assets/images/home/Plus.svg"
            alt=""
            class="pl-10 plus cursor-pointer"
        /></span>
      </h1>
      <h1
        class="flex items-center text-4xl lg:text-5xl font-light pb-5 lg:pb-10"
      >
        COVID-19
        <span
          ><img
            src="../assets/images/home/Plus.svg"
            alt=""
            class="pl-10 plus cursor-pointer"
        /></span>
      </h1>
      <h1
        class="flex items-center text-4xl lg:text-5xl font-light pb-5 lg:pb-10"
      >
        Diabetes
        <span
          ><img
            src="../assets/images/home/Plus.svg"
            alt=""
            class="pl-10 plus cursor-pointer"
        /></span>
      </h1>
      <h1
        class="flex items-center text-4xl lg:text-5xl font-light pb-5 lg:pb-10"
      >
        Immunology
        <span
          ><img
            src="../assets/images/home/Plus.svg"
            alt=""
            class="pl-10 plus cursor-pointer"
        /></span>
      </h1>
      <h1
        class="flex items-center text-4xl lg:text-5xl font-light pb-5 lg:pb-10"
      >
        Neurodegeneration
        <span
          ><img
            src="../assets/images/home/Plus.svg"
            alt=""
            class="pl-10 plus cursor-pointer"
        /></span>
      </h1>
    </div>
  </div>
</template>
<style scoped>
.container {
  height: 500px;
  width: 580px;
  margin: 10px;
  border-radius: 5px;
}

header {
  position: relative;
}

.hide {
  display: none;
}

.tab-content {
  padding: 1px;
  display: none;
}
.plus {
  width: 76px;
  height: 76px;
}
.minus {
  width: 76px;
  height: 76px;
}
.hr-2px {
  height: 0;
  border: none;
  border-top: 2px solid #e0e0e0;
}
.hr-wrapper {
  padding-top: 14px;
}

#material-tabs {
  position: relative;
  display: block;
  padding: 0;
  border-bottom: 1px solid #e0e0e0;
}

#material-tabs > a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding: 22px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #424f5a;
  text-align: center;
  outline: ;
}

#material-tabs > a.active {
  font-weight: 700;
  outline: none;
}

#material-tabs > a:not(.active):hover {
  background-color: inherit;
  color: #7c848a;
}

@media only screen and (max-width: 520px) {
  .nav-tabs#material-tabs > li > a {
    font-size: 11px;
  }
}

.blue-bar {
  position: absolute;
  z-index: 10;
  bottom: 0;
  height: 2px;
  background: #0a2d5b;
  display: block;
  left: 0;
  transition: left 0.2s ease;
  -webkit-transition: left 0.2s ease;
}

#tab1-tab.active ~ span.blue-bar {
  left: 0;
  width: 80px;
}
#tab2-tab.active ~ span.blue-bar {
  left: 110px;
  width: 182px;
}
#tab3-tab.active ~ span.blue-bar {
  left: 253px;
  width: 160px;
}
</style>
