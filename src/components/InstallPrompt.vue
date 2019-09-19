<template>
  <transition name="installAppFade">
    <div class="installAppPup" v-show="showInstallBanner">
      <div class="installAppTxt">
        <a href="#" @click.prevent="install" class="installLink">Install</a>
        <span>this app?</span>
      </div>
      <button type="button" class="close" @click="showInstallBanner = false">
        <svg
          width="24" height="24" viewBox="0 0 24 24" fill="#494949" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.75722 21.4757C6.69222 22.745 4.79995 22.9105 3.53072 21.8455V21.8455C2.2615 20.7805 2.09595 18.8882 3.16095 17.619L5.31883 15.0473C6.38384 13.7781 8.27611 13.6126 9.54533 14.6776V14.6776C10.8146 15.7426 10.9801 17.6348 9.9151 18.9041L7.75722 21.4757Z"
            fill="#494949" fill-opacity="0.8"></path>
          <path
            d="M18.7977 8.31814C17.7327 9.58736 15.8405 9.75291 14.5713 8.68791V8.68791C13.302 7.6229 13.1365 5.73064 14.2015 4.46141L16.0167 2.2981C17.0817 1.02887 18.974 0.863323 20.2432 1.92833V1.92833C21.5124 2.99333 21.678 4.8856 20.613 6.15482L18.7977 8.31814Z"
            fill="#494949" fill-opacity="0.8"></path>
          <rect x="23.7739" y="17.9451" width="6" height="26" rx="3" transform="rotate(130 23.7739 17.9451)"
                fill="#494949"
                fill-opacity="0.8"></rect>
        </svg>
      </button>
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
      }
    }
  };
</script>

<style scoped lang="scss">
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
    font-size: 1.5rem;
  }

  .close {
    margin-left: 2rem;
    cursor: pointer;
  }
  .close svg{
    width: 80%;
    height: 80%;
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
      -webkit-box-shadow: 0 0.625rem 1.8125rem 0 rgba(50, 50, 50, 0.44);
      -moz-box-shadow: 0 0.625rem 1.8125rem 0 rgba(50, 50, 50, 0.44);
      box-shadow: 0 0.625rem 1.8125rem 0 rgba(50, 50, 50, 0.44);
    }

  }
</style>