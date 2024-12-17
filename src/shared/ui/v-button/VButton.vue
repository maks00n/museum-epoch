<script setup lang="ts">
interface Props {
	small?: boolean
	icon?: boolean
}

defineProps<Props>()
</script>

<template>
	<button :class="['btn', { 'btn-small': small, 'btn-icon': icon }]">
		<slot></slot>
	</button>
</template>

<style scoped>
.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 10px 20px;
	font-size: 20px;
	color: var(--dark-green);
	background: var(--white);
	border-radius: 10px;
	transition: all 0.3s linear;
}

.btn-small {
	font-size: 14px;
	padding: 10px;
}

.btn-icon {
	width: 100px;
	height: 100px;
	padding: 10px;
}
</style>
