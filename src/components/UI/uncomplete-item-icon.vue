<template>
  <svg
    class="uncomplete-item-icon"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.19 35.63">
    <path d="M18.08,5.73H3A1.12,1.12,0,0,0,2,7V36.13a1.13,1.13,0,0,0,1,1.23H17.83" transform="translate(0.01 -3.73)"
          style="fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:4px"/>
    <path d="M17.34,37.36H32.17a1.13,1.13,0,0,0,1-1.23V7a1.12,1.12,0,0,0-1-1.24H17.08" transform="translate(0.01 -3.73)"
          style="fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:4px"/>
    <line x1="3.01" y1="33.63" x2="17.84" y2="33.63" style="fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:4px"/>
  </svg>
</template>

<script>
  export default {
    name: "uncomplete-item-icon"
  }
</script>

<style scoped lang="scss">
  .uncomplete-item-icon {
    transition: all .3s ease;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>