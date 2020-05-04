<template>
  <Container type="fluid" class="pt-5 text-center">
    <h1 class="text-3xl font-bold">{{title}}</h1>
  </Container>
</template>

<script>
// import Layout from '../../containers/Layout';
import Container from "../../components/UI/Container";

export default {
  name: "NotFound",
  components: {
    // Layout,
    Container
  },
  data() {
    return {
      title: "Página no encontrada - 404"
    };
  }
};
</script>
