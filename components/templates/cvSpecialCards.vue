<template>
  <div class="special-card" :data-aos="$viewport.isLessThan('tablet') ? 'fade-in' : ''">
    <img
      src="https://cvbuilder.me/images/features/resume-templates.png"
      alt=""
    />
    <h1 class="font-sm-res persian-font text-center">قالب‌های متنوع رزومه</h1>
    <p class="text-justify persian-font">
      شما قابلیت انتخاب از بین 30 قالب رزومه را دارید. هر قالب امکان تغییر فونت،
      رنگ و چینش بخش‌های رزومه را دارد. قالب‌های رزومه به دسته‌های گرافیکی،
      ساده، تک‌ستونه و دوستونه تقسیم می‌شوند.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import url('../../assets/interfaces/special-cards.scss');
</style>
