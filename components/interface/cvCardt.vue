<template>
    <div class="cardWrapper d-flex flex-column gap-4 text-center">
        <img :src="url" alt="">
        <p class="font-sm-res persian-font">{{ content }}</p>
    </div>
</template>

<script setup lang="ts">
type cardProps = {
    url:string,
    content:string
}
const props = defineProps<cardProps>()
</script>

<style lang="scss" scoped>
.cardWrapper{
    width: 100%;
    max-width: 400px;
    background-color: $white;
    border-radius: 20px;
    overflow: hidden;
    p{
        margin-bottom: 20px
    }
}
</style>