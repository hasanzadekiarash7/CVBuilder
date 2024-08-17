<template>
  <div
    class="width-full mt-5 d-flex flex-center align-center"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-easing="ease"
    style="padding: 50px 10px; background-color: #eee; direction: rtl"
  >
    <div class="max-width-1200 width-full d-flex info flex-space-between">
      <div>
        <p class="font-sm-res persian-font">
          رزومه خود را در کمتر از 10 دقیقه، آنلاین بسازید
        </p>
      </div>
      <div class="info">
        <p class="text-primary font-sm-res text-center persian-font">
          2,265,795
        </p>
        <p class="text-center persian-font">رزومه‌های ساخته شده</p>
      </div>
      <div class="info">
        <p class="text-primary font-sm-res text-center persian-font">1,728</p>
        <p class="text-center persian-font">وبسایت شخصی‌ ساخته شده</p>
      </div>
      <div class="width-mobile-res">
        <CvBtn />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.info {
  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    .width-mobile-res {
      width: 100%;
    }
  }
}
.text-primary {
  color: $primary;
}
</style>
