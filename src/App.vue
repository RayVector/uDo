<template>

  <div id="app" class="mainApp">
    <install-prompt></install-prompt>
    <div class="menu">
      <button
        class="closeAppBtn"
        type="button"
        onclick="window.close();">
        &#x292B;
      </button>
      <button
        class="helpBtn"
        @click="getHelp"
      >
        ?
      </button>
    </div>
    <todoListWrap></todoListWrap>
  </div>

</template>

<script>
  import todoListWrap from './components/TodoListWrap.vue'
  import InstallPrompt from './components/InstallPrompt';

  export default {

    name: 'app',
    components: {
      todoListWrap,
      InstallPrompt
    },
    methods: {
      getHelp() {
        alert("To delete ALL notes click recycle button, swipe left to edit note, swipe right to delete note.");
      },

    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    outline: none;
  }

  #app {
    margin: unset;
    color: rgba(0, 0, 0, 0.8)
  }

  body {
    height: 100vh;
  }

  #app > * {
    transition: .3s;
  }

  .mainApp {
    display: flex;
    padding: 1rem;
    width: unset;
    height: 100%;
    flex-direction: column;
    background-color: #e7e7e7;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, .5);
    padding-bottom: .5rem;
  }

  .closeAppBtn {
    font-size: 2rem;
    cursor: pointer;
  }

  .helpBtn {
    cursor: pointer;
    font-size: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
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
