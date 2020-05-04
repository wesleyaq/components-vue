<template>
	<Container type="fluid" class="pt-5 text-center">
		<h1 class="text-3xl font-bold">{{title}}</h1>
	</Container>
</template>

<script>
	import Container from '../../../components/UI/Container';

	export default {
		name: 'LayoutOverview',
		components: {
			Container,
		},
		data() {
			return {
				title: 'Layout Overview',
				collapsed: false
			};
		}
	};
</script>

<style>
</style>
