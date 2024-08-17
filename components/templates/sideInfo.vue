<template>
  <div
    class="width-full d-flex flex-center flex-column mt-5 gap-8 dir-rtl"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-easing="ease"
    style="padding: 10px"
    :style="infoItem.reverse ? 'background-color: #f5f5f5' : ''"
  >
    <div
      class="max-width-1200 width-full d-flex mt-5 flex-space-between sideInfo"
      :class="infoItem.reverse ? '' : 'flex-row-reverse'"
    >
      <img :src="infoItem.imageLink" alt="" />
      <div class="sideInfo-content">
        <h1 class="persian-font">{{ infoItem.title }}</h1>
        <p class="persian-font text-justify">{{ infoItem.description }}</p>
        <ul
          class="sideInfo-list persian-font"
          v-if="infoItem.listItem != undefined && infoItem.listItem.length > 0"
        >
          <li
            v-for="(item, index) in infoItem.listItem"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-offset="200"
          >
            {{ item }}
          </li>
        </ul>
        <div class="sideInfo-btn" v-if="infoItem.hasAction">
          <hr />
          <cv-btn />
        </div>
      </div>
    </div>
    <cv-btn v-if="infoItem.hasActionOnBottom" style="margin-bottom: 20px;" />
  </div>
</template>

<script setup lang="ts">
import type { SideInfoProps } from "../types/sideInfo.t";

const props = defineProps<SideInfoProps>();
</script>

<style lang="scss" scoped>
@import url("../../assets/interfaces/sideInfo.scss");
</style>
