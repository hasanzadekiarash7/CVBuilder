<template>
  <div
    class="width-full bg-white d-flex flex-center gap-4"
    style="padding: 5px 10px; overflow-x: auto;"
  >
    <div
      class="d-flex flex-center width-full gap-2"
      v-for="(content, index) in item"
      v-if="$viewport.isGreaterOrEquals('desktop')"
      @click="switchTab(content.title)"
      :key="index"
      :class="currentTab === content.title ? 'active' :''"
    >
      <p class="persian-font cursor-pointer font-sm-res" style="text-wrap: nowrap">{{ content.title }}</p>
      <Icon
        name="ph:triangle-duotone"
        size="20"
        color="primary"
        style="transform: rotate(90deg); color: #f97316"
      ></Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BreadCrumbProps {
  item: Array<{
    title: string;
    active: boolean;
  }>;
}
const props = defineProps<BreadCrumbProps>();
const currentTab = ref(props.item[0].title);
function switchTab(title: string) {
    currentTab.value = title
}
</script>

<style lang="scss" scoped>
.active {
  color: $primary;
}
</style>
