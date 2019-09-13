<template>
  <div id="app" class="mainApp">
    <install-prompt></install-prompt>
    <main-page></main-page>
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

  }

</script>


<style lang="scss">

  #app {
    margin: unset;
    color: rgba(0, 0, 0, 0.8)
  }


  body, .mainApp {
    background-color: #f0f0f0;
   /* background-color: #0077C5;*/
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
    overflow-x: hidden;
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
