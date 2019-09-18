<template>
  <div id="app" class="mainApp" :class="mainColor">
    <install-prompt></install-prompt>
    <main-page></main-page>
  </div>
</template>

<script>
  import mainPage from './components/mainPage.vue';
  import InstallPrompt from './components/InstallPrompt';

  export default {
    name: 'app',
    data() {
      return {
        mainColor: ''
      }
    },
    components: {
      mainPage,
      InstallPrompt,
    },
    beforeMount() {
      this.mainColor = 'blue'
    }

  }

</script>


<style lang="scss">
 * {
    color: rgba(255, 255, 255, 0.7) !important;
  }

  #app {
    margin: unset;
    color: rgba(255, 255, 255, 0.7)
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
  }



  @media screen and (min-width: 1920px) {

    #app {
      margin: 1.25rem;
    }
    .mainApp {
      width: 18.75rem;
      height: 26.875rem;
    }
  }
</style>
