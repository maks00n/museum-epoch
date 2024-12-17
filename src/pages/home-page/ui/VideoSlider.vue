<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const props = defineProps<{
    videos: string[]
}>()
</script>

<template>
    <swiper :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" :modules="[Navigation]" :loop="true" class="mySwiper">
        <swiper-slide v-for="video in props.videos" style="background: url('/video-border.png') center center / cover no-repeat;">
            <video controls>
                <source type="video/mp4">
                <source type="video/webm">
                Your browser does not support the video tag.
            </video>
        </swiper-slide>
    </swiper>
    <div class="custom-navigation">
      <button class="custom-prev">ПРЕДЫДУЩЕЕ</button>
      <button class="custom-next">СЛЕДУЮЩЕЕ</button>
    </div>
</template>

<style scoped>
.swiper {
  width: 1797rem;
  height: 1198rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  padding: 10px;

  /* Center slide text vertically */
  background: url('/video-border.png') center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide video {
  display: block;
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50rem;
}

.custom-navigation {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    font-size: 32rem;

    .custom-prev {
        background-color: var(--orange);
        font-family: var(--font-durik);
        clip-path: polygon(0 0,100% 0,100% 0, calc(100% - 60rem) 100%,0 100%,0 5rem);
        padding: 36rem 154rem 31rem 102rem;
        color: white;
    }

    .custom-next {
        background-color: var(--orange);
        font-family: var(--font-durik);
        clip-path: polygon(100% 0, 0 0, 0 0, 60rem 100%, 100% 100%, 100% 5rem);
        padding: 36rem 97rem 31rem 180rem;
        color: white;
    }
}
</style>
  