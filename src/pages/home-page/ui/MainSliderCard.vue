<script setup lang="ts">

const props = defineProps<{
    photo: string,
    name: string,
    description: string
    isCompact: boolean
}>()
</script>

<template>
    <div class="main-slider-card">
        <img :src="props.photo" alt="photo" :style="isCompact ? { height: '279rem' } : {height: '486rem'}  ">
        <h3>{{ props.name }}</h3>
        <p>{{ props.description }}</p>
    </div>
</template>

<style scoped>
.main-slider-card {
    width: 406rem;

    img{
        width: 100%;
    }

    h3{
        margin-top: 32rem;
        font-family: var(--font-durik);
        font-size: 32rem;
        line-height: 35.3rem;
        text-transform: uppercase;
    }

    p{
        margin-top: 12rem;
        font-size: 18rem;
        line-height: 21.78rem;
    }
}
</style>