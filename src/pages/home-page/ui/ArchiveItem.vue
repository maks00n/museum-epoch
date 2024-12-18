<script setup lang="ts">
    import ArchiveSlider from './ArchiveSlider.vue';
    import VideoSlider from './VideoSlider.vue';

    const archiveData = ['/temp-moment.png', '/temp-moment.png', '/temp-moment.png', '/temp-moment.png']
    const videoData = ['1', '2', '3', '1']
</script>

<template>
    <div class="archive-item">
        <div class="title-wrapper title-wrapper-1">
            <h2>АРХИВНЫЕ КАДРЫ</h2>
            <span class="shadow shadow-1">АРХИВНЫЕ КАДРЫ</span>
            <span class="shadow shadow-2">АРХИВНЫЕ КАДРЫ</span>
        </div>
        <div class="title-wrapper title-wrapper-2">
            <h2>МОМЕНТЫ ИСТОРИИ</h2>
            <span class="shadow shadow-1">МОМЕНТЫ ИСТОРИИ</span>
            <span class="shadow shadow-2">МОМЕНТЫ ИСТОРИИ</span>
        </div>
        <ArchiveSlider :slides="archiveData"/>
        <VideoSlider :videos="videoData"/>
    </div>
</template>

<style lang="scss" scoped>

.archive-item {
    padding-top: 80rem;
    margin-bottom: 100rem;
    .title-wrapper {
        font-family: var(--font-durik);
        line-height: 70.4rem;

        h2{
            display: inline;
            font-size: 64rem;
        }
        
        span{
            display: inline;
            font-size: 64rem;
        }

        .shadow{
            color: rgba(0, 0, 0, 0);
        }
        .shadow-1{
            -webkit-text-stroke: 1rem rgba(0, 0, 0, 0.404);
        }
        .shadow-2{
            -webkit-text-stroke: 1rem rgba(0, 0, 0, 0.151);
        }
    }

    .title-wrapper-1{
        margin-left: 100rem;
        .shadow-1{
            margin-left: -80rem;
        }
        .shadow-2{
            margin-left: -220rem;
        }
    }
    .title-wrapper-2{
        margin-left: 246rem;
        .shadow-1{
            margin-left: -150rem;
        }
        .shadow-2{
            margin-left: -290rem;
        }
    }
}
</style>