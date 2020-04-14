<template>
    <Container type="fluid" class="pt-50">
        <center>
            <h1>{{title}}</h1>
        </center>
    </Container>
</template>

<script>
    // import Layout from '../../containers/Layout';
    import Container from '../../components/UI/Container';

    export default {
        name: 'NotFound',
        components: {
            // Layout,
            Container
        },
        data() {
            return {
                title: 'Página no encontrada - 404'
            }
        }
    }
</script>