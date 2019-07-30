<template>
  <transition name="installAppFade">
    <div class="installAppPup" v-show="showInstallBanner">
      <button type="button" class="close" @click="showInstallBanner = false">&times;</button>
      <div class="installAppTxt">
        <a href="#" @click.prevent="install" class="installLink">Install</a>
        <span>this app?</span>
      </div>
    </div>
  </transition>
</template>

<script>
  let installEvent;
  export default {
    name: 'installPrompt',
    data() {
      return {
        showInstallBanner: false
      };
    },
    created() {
      window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault();
        installEvent = e;
        this.showInstallBanner = true;
      });
    },
    methods: {
      install() {
        this.showInstallBanner = false;
        installEvent.prompt();
        installEvent.userChoice.then(() => {
          installEvent = null;
        });
      },
    }
  };
</script>

<style scoped lang="scss" >
  .installAppPup {
    position: absolute;
    width: 20%;
    padding: 2rem;
    background: #e7e7e7;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .installAppTxt {
    display: flex;
    justify-content: flex-start;
    color: rgb(84, 84, 84);
  }
  .installLink {
    margin-right: 0.5rem;
    color: rgb(84, 84, 84);
  }

  .installAppFade-enter-active, .installAppFade-leave-active {
    transition: opacity .5s;
  }
  .installAppFade-enter, .installAppFade-leave-to {
    opacity: 0;
  }

  @media screen and (max-width: 1125px) {
    .installAppPup {
      z-index: 999;
      bottom: 2rem;
      width: 80%;
      -webkit-box-shadow: 0 10px 29px 0 rgba(50, 50, 50, 0.44);
      -moz-box-shadow:    0 10px 29px 0 rgba(50, 50, 50, 0.44);
      box-shadow:         0 10px 29px 0 rgba(50, 50, 50, 0.44);
    }

  }
</style>