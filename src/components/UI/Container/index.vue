<template>
  <div :class="clsType">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: String
    },
    data() {
      return {
        clsType: (`container${this.type? '-' + this.type: ''}`)
      }
    }
  }
</script>