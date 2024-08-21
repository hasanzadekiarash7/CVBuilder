<template>
  <div
    class="width-full d-flex flex-center align-start gap-6"
    style="background-color: #d4d4d4; height: 100%;padding: 20px; min-height: 500px"
  >
    <div class="d-flex flex-center flex-column gap-4 text-center" style="width: 100%; max-width: 150px;">
      <h1 class="font-sm-res persian-font">رزومه ساز آنلاین</h1>
      <p class="text-black persian-font">فقط ده دقیقه</p>
      <div
        class="circle-progress"
        data-inner-circle-color="lightgrey"
        data-percentage="80"
        data-progress-color="crimson"
        data-bg-color="black"
      >
        <div
          class="circle-progress"
          :style="`background:
        radial-gradient(closest-side, #fff 79%, transparent 80% 100%),
        conic-gradient(#16A34A ${percentage}%, #D4D4D4 0);`"
        >
          <progress
            min="0"
            max="100"
            style="visibility: hidden; height: 0; width: 0"
          ></progress>
        </div>
      </div>
    </div>
    <div class="cv-form width-full max-width-1200">
        <Cv-bread-crumb :item="breadItems" />
        <!-- <cv-form /> -->
    </div>
    <div class="d-flex flex-end flex-column gap-4 text-center" style="width: 100%; height: 100%; align-self: flex-end; margin-bottom: 30px; max-width: 150px;">
        <button class="btn rounded-cv-btn persian-font bg-primary">مرحله بعدی</button>
        <button class="btn rounded-cv-btn persian-font bg-secondary" v-if="percentage === 101">دانلود رزومه</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const percentage = ref(1);
const breadItems = ref([
    {
      title:'اطلاعات اولیه',
      active:true  
    },
    {
        title:'تحصیلات',
        active:false 
    },
    {
        title:'سابقه کاری',
        active:false 
    },
    {
        title:'توانایی ها',
        active:false 
    },
    {
        title:'پروژه ها',
        active:false 
    },
    {
        title:'تحقیقات',
        active:false 
    },
    {
        title:'سایر موارد',
        active:false 
    },
])
onMounted(() => {
  setInterval(() => {
    if (percentage.value != 100) {
      percentage.value++;
    } else {
      percentage.value = 0;
    }
  }, 10);
});
</script>

<style lang="scss" scoped>
@import url("../../assets/interfaces/cvForm.scss");
</style>
