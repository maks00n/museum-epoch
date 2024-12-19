<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { ref } from 'vue';

const modules = [EffectCoverflow, Pagination];

interface Slide {
  id: number;
  title: string;
  image: string;
}

const props = defineProps<{
    slides: Slide[]
}>();

const isModalOpen = ref(false);
const currentItem = ref({
    image: '',
    title: '',
    id: 0
});

const openModal = (id: number) => {
    currentItem.value = props.slides.find((slide) => slide.id === id) as Slide;
    isModalOpen.value = true;
    document.body.classList.add('lock');
};

const closeModal = (event: Event) => {
    const targetElement = event.target as HTMLElement;
    const classes = targetElement?.classList;

    if (classes?.contains('modal')) {
        isModalOpen.value = false;
    }

    document.body.classList.remove('lock');
};
</script>

<template>
    <swiper
      v-if="props.slides.length > 0"
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
    <swiper-slide v-for="slide in props.slides" :key="slide.id">
        <img :src="slide.image" alt="moment" @click="openModal(slide.id)" />
    </swiper-slide>
    </swiper>

    <div v-if="isModalOpen" class="modal" @click="closeModal($event)">
        <img :src="currentItem.image" alt="Full screen image" class="modal-image" />
        <span class="modal-title">{{ currentItem.title }}</span>
    </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 119rem;
  padding-bottom: 208rem;
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
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.modal-image {
  width: 70vw;
  max-height: 90vh;
  max-width: 90vw;
}

.modal-title {
  color: #fff;
  font-size: 44rem;
  text-align: center;
  z-index: 1001;
  margin-top: 24rem;
}
</style>