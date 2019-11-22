<template>
  <svg
    class="delete-completed-icon"
    width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
          fill="white" fill-opacity="0.8"></path>
    <path
      d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
      fill="white" fill-opacity="0.8"></path>
    <path
      d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
      fill="white" fill-opacity="0.8"></path>
    <path
      d="M7.03405 17.7292C6.42109 17.189 6.33761 16.2336 6.84758 15.5953V15.5953C7.35755 14.957 8.26787 14.8774 8.88083 15.4176L10.2143 16.5928C10.8273 17.133 10.9107 18.0884 10.4008 18.7267V18.7267C9.89079 19.3651 8.98048 19.4446 8.36752 18.9044L7.03405 17.7292Z"
      fill="#494949"></path>
    <rect width="2.93363" height="12.8211" rx="1.46682"
          transform="matrix(-0.75023 -0.661177 0.624181 -0.78128 12.6444 22.7391)" fill="#494949"></rect>
  </svg>
</template>

<script>
  export default {
    name: "delete-completed-icon"
  }
</script>

<style scoped lang="scss">
  .delete-completed-icon {
    transition: .3s;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>