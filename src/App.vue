<template>
  <div id="app" class="mainApp">
    <install-prompt></install-prompt>
    <todoListWrap></todoListWrap>
  </div>
</template>

<script>
  import todoListWrap from './components/TodoListWrap.vue';
  import InstallPrompt from './components/InstallPrompt';

  export default {
    name: 'app',
    components: {
      todoListWrap,
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
    width: unset;
    flex-direction: column;
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
