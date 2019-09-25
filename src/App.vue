<template>
  <div id="app"
       class="mainApp"
       :class="getTheme"
       :style="{backgroundImage: 'url('+require('./assets/img/'+getTheme+'.jpg')+')'}"
  >
<!--    :style="{backgroundImage: 'url('+require('./assets/img/'+getTheme+'.jpg')+')'}"-->
    <install-prompt></install-prompt>
    <main-page class="mainPage"></main-page>
    <div class="warningAlpha">
      <p class="notice">Warning: Alpha version.</p>
      <p class="notice">Please install this app in your mobile device (less than 1125 pixels wide).</p>
      <p class="notice">We sorry for the inconvenience.</p>
    </div>
  </div>
</template>

<script>
  import mainPage from './components/mainPage.vue';
  import InstallPrompt from './components/InstallPrompt';

  export default {
    name: 'app',
    components: {
      mainPage,
      InstallPrompt,
    },
    computed: {
      getTheme() {
        return this.$store.state.activeTheme;
      },
    },

  }

</script>


<style lang="scss">

  #app {
    margin: unset;
    color: rgba(255, 255, 255, 0.8);
  }

  .mainApp {
    background-color: #fdfdfd;
  }

  /*ATTENTION >*/

  #app > * {
    transition: .3s;
  }

  .mainApp {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 3;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .warningAlpha {
    display: none;
  }

  .mainPage {
    display: block;
  }

  @media screen and (min-width: 1920px) {

    .mainPage {
      display: none;
    }

    .warningAlpha {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
    }

    .notice {
      margin-bottom: 1rem;
    }
    /*
        #app {
          margin: 1.25rem;
        }
        .mainApp {
          width: 18.75rem;
          height: 26.875rem;
        }*/
  }
</style>
