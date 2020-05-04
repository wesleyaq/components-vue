<template>
	<Container type="fluid" class="pt-5	 text-center">
		<h1 class="text-3xl font-bold">{{title}}</h1>
	</Container>
</template>

<script>
	import Container from '../../../components/UI/Container';

	export default {
		name: 'ContTypography',
		components: {
			Container,
		},
		data() {
			return {
				title: 'Contenido Tipografía',
				collapsed: false
			};
		}
	};
</script>

<style>
</style>
