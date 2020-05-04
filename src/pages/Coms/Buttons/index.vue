<template>
	<Container type="fluid" class="pt-5 text-center">
		<h1 class="text-3xl font-bold">{{title}}</h1>
	</Container>
</template>

<script>
	import Container from '../../../components/UI/Container';

	export default {
		name: "ComButtons",
		components: {
			Container,
		},
		data() {
			return {
				title: 'Componentes Botones',
				collapsed: false
			};
		}
	};
</script>

<style>
</style>
