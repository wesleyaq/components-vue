<template>
  <header class="bg-red-600">
    <Container type="fluid" gutter="4">
      <Row gutter="4" align="center" class="h-12">
        <Colm gutter="4">
          <router-link :to="{name: 'home'}">
            <span class="text-base text-white">{{title}}</span>
          </router-link>
        </Colm>
        <Colm gutter="4" width="1/3" class="text-right">
          <span class="text-base text-white">Opciones</span>
        </Colm>
      </Row>
    </Container>
  </header>
</template>

<script>
  import config from '../../config';
  import Container from '../../components/UI/Container';
  import { Row, Colm } from '../../components/UI/Grid';

  export default {
    name: 'Header',
    components: {
      Container,
      Row,
      Colm,
    },
    data() {
      return {
        title: config.site.title
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
