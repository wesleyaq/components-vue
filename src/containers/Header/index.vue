<template>
  <header class="hd py-10">
    <Row type="flex" :gutter="30" align="middle">
      <a-col>
        <router-link :to="{name: 'home'}">
          <span class="text fz-20 text-white">{{title}}</span>
          <!--<img src="../../assets/img/logo.png" alt="Componentes" width="197" height="38">-->
        </router-link>
      </a-col>
      <!-- <a-col>
        <MenuMain :countOption="countOption" />
      </a-col>
      <a-col class="text-right ml-auto">
        <MenuOptions />
      </a-col> -->
    </Row>
  </header>
</template>

<script>
  import config from '../../config';
  import { Row } from 'ant-design-vue';
  //import MenuOptions from '../../components/MenuOptions';
  //import MenuMain from '../../components/MenuMain';

  export default {
    name: 'Header',
    components: {
      Row,
      //MenuOptions,
      //MenuMain
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
