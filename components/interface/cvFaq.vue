<template>
  <div class="faq width-full dir-rtl" v-auto-animate>
    <div
      class="faq-top"
      :style="show ? 'background-color: #D6D3D1' : ''"
      @click="show = !show"
    >
      <strong class="font-sm-res persian-font">{{
        `${index + 1}.${item.title}`
      }}</strong>
      <Icon :name="show ? 'mdi:minus' : 'mdi:plus'" size="28" />
    </div>
    <div class="faq-description persian-font font-sm-res" v-if="show">
      {{ item.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
type faq = {
  title: string;
  description: string;
};
interface FAQProps {
  item: faq;
  index: number;
}
const show = ref(false);
const props = defineProps<FAQProps>();
</script>

<style lang="scss" scoped>
@import url("../../assets/main.scss");
.faq {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  &-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 5px 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #d6d3d1;
    }
    &:focus {
      background-color: #d6d3d1;
    }
  }
  &-description {
    padding: 10px 20px;
  }
}
</style>
