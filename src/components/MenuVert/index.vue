<template>
  <a-menu theme="dark" :defaultSelectedKeys="['sub1']" mode="inline">
		<a-menu-item key="1">
			<router-link :to="{name: 'home'}" class="menu-item"><a-icon type="home" /><span>Inicio</span></router-link>
		</a-menu-item>
    <a-sub-menu key="lay0">
      <span slot="title"><a-icon type="layout" /><span>Layout</span></span>
      <a-menu-item key="lay1">
        <router-link :to="{name: 'layout.overview'}" class="menu-item">Overview</router-link>
      </a-menu-item>
      <a-menu-item key="lay2">
				<router-link :to="{name: 'layout.grid'}" class="menu-item">Grid</router-link>
			</a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="com0">
      <span slot="title"><a-icon type="appstore" /><span>Componentes</span></span>
      <a-menu-item key="com1">
				<router-link :to="{name: 'com.buttons'}" class="menu-item">Botones</router-link>
			</a-menu-item>
      <a-menu-item key="com2">
				<router-link :to="{name: 'com.alerts'}" class="menu-item">Alertas</router-link>
			</a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="con0">
      <span slot="title"><a-icon type="profile" /><span>Contenido</span></span>
      <a-menu-item key="cont1">
				<router-link :to="{name: 'cont.typography'}" class="menu-item">Tipografía</router-link>
			</a-menu-item>
      <a-menu-item key="cont2">
				<router-link :to="{name: 'cont.images'}" class="menu-item">Imagenes</router-link>
			</a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="uti0">
      <span slot="title"><a-icon type="tool" /><span>Utilidades</span></span>
      <a-menu-item key="uti1">Bordes</a-menu-item>
      <a-menu-item key="uti2">Colores</a-menu-item>
      <a-menu-item key="uti3">Display</a-menu-item>
      <a-menu-item key="uti4">Flex</a-menu-item>
      <a-menu-item key="uti5">Float</a-menu-item>
      <a-menu-item key="uti6">Position</a-menu-item>
      <a-menu-item key="uti7">Sombras</a-menu-item>
      <a-menu-item key="uti8">Sizing</a-menu-item>
      <a-menu-item key="uti9">Spacing</a-menu-item>
      <a-menu-item key="uti10">Textos</a-menu-item>
      <a-menu-item key="uti11">Vertical Align</a-menu-item>
      <a-menu-item key="uti12">Visibility</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
  ///import { Menu } from 'ant-design-vue';

  export default {
    name: 'MenuVert',
    components: {
      //Menu
    },
    props: {
    },
    data() {
      return {
        collapsed: false
      }
    }
  }
</script>
