<template>
  <Wrapper>
    <Header v-bind:title="title" />
    <div class="flex" style="min-height:calc(100vh - 5rem)">
      <Row align="stretch" class="w-full">
        <Colm width="64" class="bg-gray-800">
          <MenuVert />
        </Colm>
        <Colm>
          <router-view></router-view>
        </Colm>
      </Row>
    </div>
    <Footer />
  </Wrapper>
</template>

<script>
  import Wrapper from "../../components/UI/Wrapper";
  import Header from '../Header';
	import Footer from '../Footer';
	import MenuVert from "../../components/MenuVert";
  import { Row, Colm } from "../../components/UI/Grid";

  export default {
    name: 'Layout',
    components: {
      Wrapper,
      Header,
			Footer,
      MenuVert,
      Row,
      Colm
    },
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  @import './style.scss';
</style>
