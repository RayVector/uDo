<template>
  <svg
    class="delete-notes-inPage-icon"
    width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
          fill="white" fill-opacity="0.8"></path>
    <path
      d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
      fill="white" fill-opacity="0.8"></path>
    <path
      d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
      fill="white" fill-opacity="0.8"></path>
    <rect x="6" y="13" width="14" height="2" rx="0.5" fill="#494949"></rect>
    <rect x="6" y="16" width="14" height="2" rx="0.5" fill="#494949"></rect>
    <rect x="6" y="19" width="14" height="2" rx="0.5" fill="#494949"></rect>
  </svg>
</template>

<script>
  export default {
    name: "delete-notes-inPage-icon"
  }
</script>

<style scoped lang="scss">
  .delete-notes-inPage-icon {
    height: 1.5rem;
    width: 1.5rem;
    transition: .3s;
    fill: rgba(0, 0, 0, 0.7);
  }
</style>