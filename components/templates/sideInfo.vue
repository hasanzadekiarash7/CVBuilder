<template>
  <div class="width-full d-flex flex-center flex-column gap-4 dir-rtl" style="padding: 10px;">
    <div class="max-width-1200 width-full d-flex flex-space-between sideInfo">
      <img :src="infoItem.imageLink" alt="" />
      <div class="sideInfo-content">
        <h1 class="font-md-res persian-font">{{ infoItem.title }}</h1>
        <p class="persian-font text-justify">{{ infoItem.description }}</p>
        <ul
          class="sideInfo-list"
          v-for="item in infoItem.listItem"
          v-if="infoItem.listItem != undefined && infoItem.listItem.length > 0"
        >
          <li>{{ item }}</li>
        </ul>
        <div class="sideInfo-btn">
          <hr />
          <cv-btn />
        </div>
      </div>
    </div>
    <cv-btn v-if="infoItem.hasActionOnBottom" />
  </div>
</template>

<script setup lang="ts">
type item = {
  title: string;
  imageLink: string;
  description: string;
  reverse?: boolean;
  hasAction?: boolean;
  hasActionOnBottom?: boolean;
  listItem?: Array<string>;
};
interface SideInfoProps {
  infoItem: item;
}
const props = defineProps<SideInfoProps>();
</script>

<style lang="scss" scoped>
@import url('../../assets/interfaces/sideInfo.scss');
</style>
