<template>
    <Layout>
        <Container type="fluid" class="pt-40">
            <center>
                <h1>{{title}}</h1>
            </center>
        </Container>
    </Layout>
</template>

<script>
    import config from '../../config';
    import Layout from '../../containers/Layout';
    import Container from '../../components/UI/Container';

    export default {
        name: 'Home',
        components: {
            Layout,
            Container
        },
        data() {
            return {
                title: `Home - ${config.site.title}`
            }
        }
    }
</script>

<style scoped>

</style>