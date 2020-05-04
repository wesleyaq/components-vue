<template>
  <div :class="[`w-${width? width: 'full'}`, (gutter? `px-${gutter}`: '')]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      width: String,
      gutter: String,
    },
    data() {
      return {
        //clsType: (`container${this.type? '-' + this.type: ''}`)
      }
    }
  }
</script>