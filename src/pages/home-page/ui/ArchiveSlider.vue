<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { ref } from 'vue';

const modules = [EffectCoverflow, Pagination];

const props = defineProps<{
    slides: string[]
}>();

const isModalOpen = ref(false);
const currentImage = ref('');

const openModal = (image: string) => {
    currentImage.value = image;
    isModalOpen.value = true;
};

const closeModal = (event: Event) => {
    const targetElement = event.target as HTMLElement;
    const classes = targetElement?.classList;

    if (classes?.contains('modal')) {
        isModalOpen.value = false;
    }
};
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
    <swiper-slide v-for="slide in props.slides" :key="slide">
        <img :src="slide" alt="moment" @click="openModal(slide)" />
    </swiper-slide>
    </swiper>

    <div v-if="isModalOpen" class="modal" @click="closeModal($event)">
        <img :src="currentImage" alt="Full screen image" class="modal-image" />
    </div>
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
  cursor: pointer; /* Указатель при наведении на изображение */
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Убедитесь, что модальное окно поверх всего */
}

.modal-image {
  width: 70vw;
  max-height: 90vh;
  max-width: 90vw;
}
</style>