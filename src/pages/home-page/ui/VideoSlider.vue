<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { getCurrentInstance, ref } from 'vue';

interface Slide {
  id: number;
  video: string;
  title: string;
  description: string;
}

const props = defineProps<{
    videos: Slide[]
}>()

const instance = getCurrentInstance();
const uniqueId = ref(instance?.uid); 

const isVideoPlaying = ref(Array(props.videos.length).fill(false));

const videos = ref<HTMLVideoElement[]>([]);

const stopAllVideos = () => {
  videos.value.forEach(video => {
    video.pause();
  });
};
</script>

<template>
    <swiper 
      :navigation="{ nextEl: '.custom-next-'+uniqueId, prevEl: '.custom-prev-'+uniqueId }" 
      :modules="[Navigation]" :loop="props.videos.length > 1 ? true : false" 
      class="mySwiper" 
      @slide-change="stopAllVideos">
        <swiper-slide v-for="video in props.videos" style="background: url('/video-border.png') center center / cover no-repeat;" :key="video.id">
            <video controls @play="isVideoPlaying[video.id] = true" @pause="isVideoPlaying[video.id] = false" ref="videos">
                <source :src="video.video" type="video/mp4">
                <source :src="video.video" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="video-info" :style="{ opacity: isVideoPlaying[video.id] ? '0' : '1' }">
              <span>{{ video.title }}</span>
              <p>{{ video.description }}</p>
            </div>
        </swiper-slide>
    </swiper>
    <div class="custom-navigation">
      <button :class="'custom-prev custom-prev-' + uniqueId">ПРЕДЫДУЩЕЕ</button>
      <button :class="'custom-next custom-next-' + uniqueId">СЛЕДУЮЩЕЕ</button>
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
  position: relative;

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

.video-info {
  position: absolute;
  bottom: 150rem;
  left: 100rem;
  color: white;
  width: 1120rem;
  padding: 40rem 100rem;
  text-align: left;
  transition: all 0.3s ease;

  span{
    font-size: 64rem;
    line-height: 70.4rem;
    font-family: var(--font-durik);
  }
  p{
    font-size: 19rem;
    line-height: 21.78rem;
  }
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
  