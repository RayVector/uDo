<template>
  <div class="snackbar-temp"
       v-show="isSnackbarShow">
    <transition name="fadeSnackbar">
      <div class="snackbar-temp-inner item-theme" v-show="isSnackbarShow">
        <p class="snackbar-temp-text">
          {{getSnackbarText}}
        </p>
      </div>
    </transition>
    <div class="snackbar-temp-shadow" @click="closeSnackbar"></div>
  </div>
</template>

<script>
  export default {
    name: "snackbar-temp",
    computed: {
      isSnackbarShow() {
        return this.$store.state.snackbars.isSnackbarShow;
      },
      getSnackbarText() {
        return this.$store.state.snackbars.snackbarText;
      }
    },
    methods: {
      closeSnackbar() {
        this.$store.dispatch('closeSnackbar');
      }
    }
  }
</script>

<style scoped lang="scss">

  .snackbar-temp {
    z-index: 10;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .snackbar-temp-inner {
    z-index: 2;
    position: relative;
    right: 0;
    top: 20px;
    left: 0;

    padding: 1rem;
    width: 50%;
    height: 10%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .snackbar-temp-text {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
  }

  .snackbar-temp-shadow {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
  }

  /*ANIMATIONS:*/

  .fadeSnackbar-enter-active, .fadeSnackbar-leave-active {
    transition: all .3s ease;
  }

  .fadeSnackbar-enter, .fadeSnackbar-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }

  @media screen and (min-width: 1000px) {
    .snackbar-temp-inner {
      width: 20%;
      height: 10%;
    }
  }
</style>