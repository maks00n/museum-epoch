<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    photo: string,
    name: string,
    description: string,
    isCompact: boolean
}>();

const isModalVisible = ref(false);

const showModal = () => {
    isModalVisible.value = true;
};

const closeModal = () => {
    isModalVisible.value = false;
};
</script>

<template>
    <div>
        <div class="main-slider-card" @click="showModal">
            <img :src="props.photo" alt="photo" :style="isCompact ? { height: '279rem' } : {height: '486rem'}">
            <h3>{{ props.name }}</h3>
            <p>{{ props.description }}</p>
        </div>

        <Teleport to="body">
        <div v-if="isModalVisible" class="modal" @click="closeModal">
            <div class="modal-content" @click.stop>
                <img :src="props.photo" alt="photo" class="modal-image" :style="isCompact ? { width: '80%' } : {width: '50%'}">
                <h3>{{ props.name }}</h3>
                <p>{{ props.description }}</p>
                <button class="close-button" @click="closeModal">Закрыть</button>
            </div>
        </div>
        </Teleport>
    </div>
</template>

<style scoped>
.main-slider-card {
    width: 406rem;
    cursor: pointer; /* Указатель на карточке */
}

img {
    width: 100%;
}

h3 {
    margin-top: 32rem;
    font-family: var(--font-durik);
    font-size: 32rem;
    line-height: 35.3rem;
    text-transform: uppercase;
}

p {
    margin-top: 12rem;
    font-size: 18rem;
    line-height: 21.78rem;
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
    width: 100vw;
    height: 100vh;
}

.modal-content {
    overflow: scroll;
    background: white;
    padding: 50rem;
    border-radius: 8rem;
    text-align: center;
    max-width: 90vw;
    max-height: 90vh;
    
    h3 {
        font-size: 128rem;
        line-height: 144rem;
    }

    p {
        font-size: 44rem;
        line-height: 52rem;
    }
    button{
        font-size: 46rem;
        background-color: var(--orange);
        color: white;
        font-family: var(--font-durik);
        margin-top: 40rem;
        padding: 20rem 40rem;
    }
}
.modal-image {
    max-width: 40vw;
}

.close-button {
    margin-top: 20rem;
    padding: 10rem 20rem;
    font-size: 16rem;
    cursor: pointer;
}
</style>