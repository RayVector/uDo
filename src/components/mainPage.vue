<template>
  <div class="appWrap">
    <v-touch
      v-on:swipeup="swapMenu(false)"
      tag="div"
      class="topMenu"
    >
      <transition name="appMenuFade">
        <app-menu
          v-show="isMenuShow"
          @closeMenu="swapMenu(false)"
        ></app-menu>
      </transition>
    </v-touch>
    <div class="todoWrap">
      <main-header
        @swapMenu="swapMenu"
      ></main-header>
      <tabs></tabs>
      <page></page>
    </div>
  </div>
</template>

<script>

  import AppMenu from "../popups/appMenu";
  import Page from "./page";
  import MainHeader from "./mainHeader";
  import Tabs from "./tabs";

  export default {
    name: 'mainPage',
    components: {
      Tabs,
      MainHeader,
      Page,
      AppMenu
    },
    data() {
      return {
        isMenuShow: false,
      }
    },
    methods: {
      swapMenu(value) {
        this.isMenuShow = value
      }
    },
    created() {
      window.onscroll = () => {
        this.isMenuShow = false
      }
    },
  }
</script>


<style lang="scss" scoped>
  .appWrap {
    height: 100%;
  }


  .todoWrap {
    position: relative;
    height: 100%;
  }


  /*animation:*/
  .appMenuFade-enter-active, .appMenuFade-leave-active {
    transition: all .3s ease .1s;
  }

  .appMenuFade-enter, .appMenuFade-leave-to {
    transform: translateY(-5rem);
  }


</style>
