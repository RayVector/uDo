<template>
  <svg
    class="three-dots-icon"
    width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 6C9.34315 6 8 4.65685 8 3V3C8 1.34315 9.34315 0 11 0V0C12.6569 0 14 1.34315 14 3V3C14 4.65685 12.6569 6 11 6V6Z"
      fill="white" fill-opacity="0.8"></path>
    <path
      d="M3 6C1.34315 6 0 4.65685 0 3V3C0 1.34315 1.34315 0 3 0V0C4.65685 0 6 1.34315 6 3V3C6 4.65685 4.65685 6 3 6V6Z"
      fill="white" fill-opacity="0.8"></path>
    <path
      d="M19 6C17.3431 6 16 4.65685 16 3V3C16 1.34315 17.3431 0 19 0V0C20.6569 0 22 1.34315 22 3V3C22 4.65685 20.6569 6 19 6V6Z"
      fill="white" fill-opacity="0.8"></path>
  </svg>
</template>

<script>
  export default {
    name: "three-dots-icon"
  }
</script>

<style scoped lang="scss">
  .three-dots-icon {
    transition: all .3s ease;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>