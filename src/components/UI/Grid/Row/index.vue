<template>
  <div :class="['flex', (align? `items-${align}`: ''), (justify? `content-${justify}`: ''), (gutter? `-mx-${gutter}`: '')]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      align: String,
      justify: String,
      gutter: String,
    }
  }
</script>