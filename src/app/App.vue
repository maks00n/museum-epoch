<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { DefaultLayout } from '@/app/layouts'

const route = useRoute()

const layout = computed(() => route.meta.layout || DefaultLayout)
</script>

<template>
	<component :is="layout">
		<template #default>
			<RouterView v-slot="{ Component }">
				<component :is="Component" :key="route.fullPath"></component>
			</RouterView>
		</template>
	</component>
</template>

<style scoped></style>
