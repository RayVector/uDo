<template>
  <div id="app"
       class="mainApp"
       :class="getThemeName"
       :style="{backgroundImage: 'url('+require('./assets/img/'+getThemeName+'.jpg')+')'}"
  >
    <install-prompt></install-prompt>
    <main-page class="mainPage"></main-page>
    <popup-temp></popup-temp>
  </div>
</template>

<script>
  import mainPage from './components/mainPage.vue';
  import InstallPrompt from './components/InstallPrompt';
  import PopupTemp from "./popups/popup-temp";

  export default {
    name: 'app',
    components: {
      PopupTemp,
      mainPage,
      InstallPrompt,
    },
    computed: {
      getThemeName() {
        return this.$store.state.themes.themesList[this.$store.state.themes.activeTheme].themeName;
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

  .mainApp {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 3;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .warningAlpha {
    display: none;
  }

  .mainPage {
    display: block;
  }


</style>
