<script setup lang="ts">
import { AppRoutes } from '@/app/providers/index.js'
import ArchiveItem from './ArchiveItem.vue'
import CollectionItem from './CollectionItem.vue';
import MainSlider from './MainSlider.vue';
import BottomItem from './BottomItem.vue';
import ChronologyItem from './ChronologyItem.vue';
import TopItem from './TopItem.vue';
import { onMounted, ref } from 'vue';
import { getCitizens, getHistoryItems } from '@/shared/api';

const epochData = ref<any>([]);
const personData = ref([]);

onMounted(async () => {
	epochData.value = await getHistoryItems();
	personData.value = await getCitizens();
})
</script>

<template>
	<div class="home">
		<div class="container">
			<TopItem />
			<ChronologyItem id="chronology"/>
			<ArchiveItem id="archive"/>
			<CollectionItem id="collection"/>
			<MainSlider title="Быт эпохи" :slides="epochData" :isCompact="true" id="epoch" v-if="epochData.length > 0"/>
			<MainSlider title="Персоналии" :slides="personData" :isCompact="false" id="person" v-if="personData.length > 0"/>
			<BottomItem />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
