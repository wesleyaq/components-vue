<template>
	<Container type="fluid" class="pt-40 text-center">
		<h1>{{title}}</h1>
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
