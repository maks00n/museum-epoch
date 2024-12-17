<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import { getCurrentInstance, ref } from 'vue';


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import MainSliderCard from './MainSliderCard.vue'

interface Slide{
    photo: string,
    name: string,
    description: string
}

const props = defineProps<{
    title: string,
    slides: Slide[],
    isCompact: boolean
}>()

const instance = getCurrentInstance();
const uniqueId = ref(instance?.uid); 
</script>

<template>
  <div class="main-slider">
    <h2 class="title">{{ props.title }}</h2>
    <Swiper
      :navigation="{ nextEl: '.custom-next-'+uniqueId, prevEl: '.custom-prev-'+uniqueId }"
      :modules="[Navigation, Autoplay, Navigation]"
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      class="swiper"
    >
      <swiper-slide v-for="slide in props.slides" :key="slide.name">
        <MainSliderCard :photo="slide.photo" :name="slide.name" :description="slide.description" :isCompact="props.isCompact"/>
      </swiper-slide>
    </Swiper>
    <div class="custom-navigation">
      <button :class="'custom-prev custom-prev-' + uniqueId"><img src="@/app/assets/images/arrow.svg" alt="назад"></button>
      <button :class="'custom-next custom-next-' + uniqueId"><img src="@/app/assets/images/arrow.svg" alt="вперед"></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-slider {
  padding: 100rem 0;

    .title {
        font-family: var(--font-durik);
        font-size: 48rem;
        text-transform: uppercase;
        line-height: 52.8rem;
        color: var(--white);
        background-color: var(--black);
        padding: 47rem 274rem 47rem 100rem;
        width: fit-content;
        clip-path: polygon(0 0,100% 0,100% 0, calc(100% - 60rem) 100%,0 100%,0 5rem);
    }

    .swiper{
        width: 1699.2rem;
        margin: 99rem auto;
        position: relative;
    }

    .custom-navigation{
        width: 466rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        button{
            width: 217rem;
            height: 68.56rem;
            background-color: var(--orange);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .custom-prev {
            clip-path: polygon(100% 0, 0 0, 0 0, 30rem 100%, 100% 100%, 100% 5rem);

            img{
                width: 84rem;
                margin-right: -20rem;
            }
        }

        .custom-next {
            clip-path: polygon(0 0,100% 0,100% 0, calc(100% - 30rem) 100%,0 100%,0 5rem);

            img{
                width: 84rem;
                transform: rotate(180deg);
                margin-right: 20rem;
            }
        }
    }
}
</style>
