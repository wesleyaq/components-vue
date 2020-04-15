<template>
  <div id="wrapper">
    <Header v-bind:title="title" />

		<a-layout class="d-flex" style="min-height:calc(100vh - 75px)">
      <a-layout-sider collapsible :model="collapsed1">
        <MenuVert />
      </a-layout-sider>
      <a-layout>
				<router-view></router-view>
        <!-- <slot></slot> -->
      </a-layout>
    </a-layout>

    <Footer />
  </div>
</template>

<script>
  import Header from '../Header';
	import Footer from '../Footer';
	import MenuVert from "../../components/MenuVert";

  export default {
    name: 'Layout',
    components: {
      Header,
			Footer,
			MenuVert
    },
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  @import './style.scss';
</style>
