<template>
  <div class="text-gray-100">
		<router-link :to="{name: 'home'}" class="block p-3 font-bold">
      <!-- <a-icon type="home" /> --><span>Inicio</span>
    </router-link>

    <div>
      <div class="block p-3 font-bold">
        <!-- <a-icon type="layout" /> --><span>Layout</span>
      </div>
      <div class="bg-gray-700">
        <router-link :to="{name: 'layout.overview'}" class="block p-3 pl-5">Overview</router-link>
				<router-link :to="{name: 'layout.grid'}" class="block p-3 pl-5">Grid</router-link>
			</div>
    </div>

    <div>
      <div class="block p-3 font-bold">
        <!-- <a-icon type="appstore" /> --><span>Componentes</span>
      </div>
      <div class="bg-gray-700">
				<router-link :to="{name: 'com.buttons'}" class="block p-3 pl-5">Botones</router-link>
				<router-link :to="{name: 'com.alerts'}" class="block p-3 pl-5">Alertas</router-link>
			</div>
    </div>

    <div>
      <div class="block p-3 font-bold">
        <!-- <a-icon type="profile" /> --><span>Contenido</span>
      </div>
      <div class="bg-gray-700">
				<router-link :to="{name: 'cont.typography'}" class="block p-3 pl-5">Tipografía</router-link>
				<router-link :to="{name: 'cont.images'}" class="block p-3 pl-5">Imagenes</router-link>
			</div>
    </div>

    <!-- <div class="divide-y divide-gray-600">
      <div class="block p-3 font-bold">
        <a-icon type="tool" /><span>Utilidades</span>
      </div>
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
    </div> -->
  </div>
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
