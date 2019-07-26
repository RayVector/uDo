<template>

  <div id="app" class="mainApp">
    <div class="menu">
      <button
        class="closeAppBtn"
        type="button"
        onclick="window.open('', '_self', ''); window.close();">
        &#x292B;
      </button>
      <button
        class="installApp"
        @click="callInstallPrompt">
        <svg
          enable-background="new 0 0 48 48"
          height="1rem"
          id="Layer_4"
          version="1.1"
          viewBox="0 0 48 48"
          width="1rem"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg">
        <g>
          <polygon fill="#241F20"
                   points="44,37.984 44,44 4,44 4,37.984 0,37.984 0,44 0,48 4,48 44,48 48,48 48,44 48,37.984  "></polygon>
          <polygon
            fill="#241F20"
            points="29,25 29,0 27,0 21,0 19,0 19,25 13.046,25 24,40 34.954,25  "></polygon>
        </g>
      </svg>
      </button>
    </div>
    <todoListWrap></todoListWrap>
  </div>

</template>

<script>
  import todoListWrap from './components/TodoListWrap.vue'

  let installPromptEvent;


  export default {

    name: 'app',
    components: {
      todoListWrap
    },
    methods: {
      callInstallPrompt() {
        installPromptEvent.prompt();

        installPromptEvent.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('... installation');
            } else {
              console.log('cancel');
            }
            installPromptEvent = null;
          });
      }
    },
    mounted() {
      installPromptEvent.prompt();

      installPromptEvent.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('... installation');
          } else {
            console.log('cancel');
          }
          installPromptEvent = null;
        });
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
    margin: 1.25rem;
    color: rgba(0, 0, 0, 0.8)
  }

  #app > * {
    transition: .3s;
  }

  .mainApp {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    height: 26.875rem;
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
    background-color: unset;
    border: unset;
    font-size: 2rem;
  }
  .installApp {
    background-color: unset;
    border: unset;
  }
  .installApp svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  @media screen and (max-width: 1125px) {
    #app {
      margin: 0;
    }
    .mainApp {
      padding: 1.8rem;
      width: 100%;
      height: 100vh;
      background-color: #e7e7e7;
    }
  }
</style>
