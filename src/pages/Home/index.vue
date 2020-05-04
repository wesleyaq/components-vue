<template>
	<Container type="fluid" class="pt-5 text-center">
		<h1 class="text-3xl font-bold">{{title}}</h1>
	</Container>
</template>

<script>
	// import config from "../../config";
	import Container from '../../components/UI/Container';

	export default {
		name: 'Home',
		components: {
			Container,
		},
		data() {
			return {
				title: 'Home', //${config.site.title}
				collapsed: false
			};
		}
	};
</script>

<style>
</style>
