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
    import Layout from '../../../containers/Layout';
    import Container from '../../../components/UI/Container';

    export default {
        name: 'dashboardNotFound',
        components: {
            Layout,
            Container
        },
        data() {
            return {
                title: 'Página no encontrada - 404'
            }
        }
    }
</script>