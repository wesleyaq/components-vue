<template>
  <div :class="[`container${type? '-' + type: ''}`, (gutter? `px-${gutter}`: ''), 'mx-auto']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: String,
      gutter: String,
    }
  }
</script>