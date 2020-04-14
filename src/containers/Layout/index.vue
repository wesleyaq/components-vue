<template>
  <div id="wrapper">
    <Header v-bind:title="title" />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
  import Header from '../Header';
  import Footer from '../Footer';

  export default {
    name: 'Layout',
    components: {
      Header,
      Footer
    },
    props: {
      title: String
    }
  }
</script>
