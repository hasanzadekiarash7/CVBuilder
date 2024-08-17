<template>
  <div class="navbar">
    <div class="d-flex flex-space-between">
      <div class="navbar-content">
        <img src="../assets/images/cvlogo.svg" alt="" />
        <ul
          class="navbar-content-list"
          v-if="$viewport.isGreaterOrEquals('tablet')"
        >
          <li class="cv-link">resume</li>
          <li class="cv-link">
            resume
            <Icon name="mdi:chevron-down" size="20" />
          </li>
          <li class="cv-link">resume</li>
          <li class="cv-link">resume</li>
          <li class="cv-link">
            resume
            <Icon name="mdi:chevron-down" size="20" />
          </li>
        </ul>
      </div>
      <div class="navbar-buttons">
        <button class="btn cv-btn" v-if="$viewport.isGreaterThan('mobile')">
          sign in | login
        </button>
        <!-- <button class="btn cv-btn">
          user panel
          <Icon name="mdi:account" size="24" />
        </button> -->
        <Icon
          name="mdi:translate"
          size="28"
          v-if="$viewport.isGreaterThan('mobile')"
          class="cursor-pointer"
        />
        <Icon
          name="mdi:menu"
          size="30"
          class="cursor-pointer"
          v-if="$viewport.isLessThan('tablet')"
          @click="showSideBar = !showSideBar"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const showSideBar = ref(false);
</script>

<style lang="scss" scoped>
@import url("../assets/interfaces/navbar.scss");
</style>
