<template>
  <div
    class="mt-5"
    style="padding: 10px 20px"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-easing="ease"
  >
    <h1 class="font-md-res text-center text-black persian-font">
      ویژگی‌های رزومه‌ساز
    </h1>
    <p class="font-sm-res text-center text-black persian-font">
      سرویس مدیریت رزومه‌ی ما با ویژگی‌های متمایزکننده فرآیند رزومه‌سازی را
      آسان‌تر کرده است.
    </p>
    <div class="width-full d-flex flex-center mt-5">
      <div
        class="card-wrapper max-width-1200"
        :data-aos="$viewport.isGreaterThan('mobile') ? 'zoom-in' : ''"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        <CvSpecialCards v-for="item in 6" :key="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
</style>
