<template>
	<Container type="fluid" class="pt-40 text-center">
		<h1>{{title}}</h1>
	</Container>
</template>

<script>
	import Container from '../../../components/UI/Container';

	export default {
		name: "ComAlerts",
		components: {
			Container,
		},
		data() {
			return {
				title: 'Componentes Alertas',
				collapsed: false
			};
		}
	};
</script>

<style>
</style>
