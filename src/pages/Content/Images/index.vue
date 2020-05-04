<template>
	<Container type="fluid" class="pt-5 text-center">
		<h1 class="text-3xl font-bold">{{title}}</h1>
	</Container>
</template>

<script>
	import Container from '../../../components/UI/Container';

	export default {
		name: "ContImages",
		components: {
			Container,
		},
		data() {
			return {
				title: 'Contenido Imagenes',
				collapsed: false
			};
		}
	};
</script>

<style>
</style>
