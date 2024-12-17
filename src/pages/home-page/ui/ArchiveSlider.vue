<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { EffectCoverflow, Pagination } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';

    const modules = [EffectCoverflow, Pagination];

    const props = defineProps<{
        slides: string[]
    }>()
</script>

<template>
    <swiper
      :effect="'coverflow'"
      :initial-slide="props.slides.length > 3 ? 1 : Math.floor(slides.length / 2)"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :spaceBetween="0"
      :loop="props.slides.length > 3 ? true : false"
      :coverflowEffect="{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 0.7,
      }"
      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide v-for="slide in props.slides" :key="slide"><img src="/temp-moment.png" alt="moment" /></swiper-slide>
    </swiper>
  </template>

  <style scoped>
  .swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 844rem;
  height: 629rem;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
  