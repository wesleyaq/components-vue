<template>
  <footer class="ft text-center pt-5">
    <span class="text fz-14 text-white">{{title}}</span>
  </footer>
</template>

<script>
  import config from '../../config';

  export default {
    name: 'Footer',
    data() {
      return {
        title: `®${config.site.title}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
