<template>
    <Container class="pt-70">
        <h1>Login</h1>
    </Container>
</template>

<script>
    import config from '../../config';
    import Container from '../../components/UI/Container';

    export default {
        name: "Login",
        components: {
            Container
        },
        data: () => {
            return {
                title: `Login - ${config.site.title}`
            }
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
                console.log('Login');
            }
        }
    };
</script>

<style lang="scss">
</style>