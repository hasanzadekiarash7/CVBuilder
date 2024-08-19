<template>
  <div
    style="background-color: #d4d4d4; margin-bottom: 10px;"
    class="width-full d-flex flex-column flex-center gap-4"
  >
    <h1 class="font-md-res text-center text-black persian-font">
      مقالات اصول رزومه نویسی و کاریابی
    </h1>
    <div class="max-width-1200 width-full" style="margin-bottom: 10px;">
      <Swiper
        :modules="modules"
        navigation
        :slides-per-view="$viewport.isGreaterThan('mobile') ? 3 : 1"
        :space-between="10"
      >
        <SwiperSlide>
          <CvCardt :content="cards.content" :url="cards.url" />
        </SwiperSlide>
        <SwiperSlide>
          <CvCardt :content="cards.content" :url="cards.url" />
        </SwiperSlide>
        <SwiperSlide>
          <CvCardt :content="cards.content" :url="cards.url" />
        </SwiperSlide>
        <SwiperSlide>
          <CvCardt :content="cards.content" :url="cards.url" />
        </SwiperSlide>
        <SwiperSlide>
          <CvCardt :content="cards.content" :url="cards.url" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
const modules = [Navigation, Scrollbar, A11y];
const cards = {
  url: "https://cvbuilder.storage.c2.liara.space/Files/Article_Thumbnail/320/job-search-burnout.jpg",
  content: "چگونه از فرسودگی شغلی جلوگیری کنیم",
};
</script>

<style lang="scss" scoped></style>
