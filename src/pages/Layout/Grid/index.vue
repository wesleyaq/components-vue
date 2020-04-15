<template>
	<Container type="fluid" class="pt-40 text-center">
		<h1>{{title}}</h1>
	</Container>
</template>

<script>
	import Container from '../../../components/UI/Container';

	export default {
		name: 'LayoutGrid',
		components: {
			Container,
		},
		data() {
			return {
				title: 'Layout Grid',
				collapsed: false
			};
		}
	};
</script>

<style>
</style>
