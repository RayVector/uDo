<template>
  <div class="menu bg-theme">
    <close-btn-icon @click.native="closeMenu"></close-btn-icon>

    <button
      type="button"
      @click="openOptionsPopup">
      <options-icon></options-icon>
    </button>

    <button
      class="deleteCompletedBtn"
      @click="clearAllCompleted"
    >
      <delete-completed-icon></delete-completed-icon>
    </button>
    <button
      class="clearCacheBtn"
      @click="clearCache"
    >
      <clear-cache-icon></clear-cache-icon>
    </button>
    <button
      class="helpBtn"
      @click="getHelp"
    >
      <help-icon></help-icon>
    </button>
  </div>
</template>

<script>
  import CloseBtnIcon from "../components/UI/close-btn-icon";
  import DeleteCompletedIcon from "../components/UI/delete-completed-icon";
  import ClearCacheIcon from "../components/UI/clear-cache-icon";
  import OptionsIcon from "../components/UI/options-icon";
  import HelpIcon from "../components/UI/help-icon";
  export default {
    name: "appMenu",
    components: {HelpIcon, OptionsIcon, ClearCacheIcon, DeleteCompletedIcon, CloseBtnIcon},
    computed: {
      getList() {
        /*!!!MAIN!!! return this.$store.getters.sortedToDoList.todoItems;*/
        return this.$store.state.tabs[this.getActiveTab].todoItems
      },
      getActiveTab() {
        return this.$store.state.tabs.activeTab
      },
    },
    methods: {
      getHelp() {
        this.$emit('closeMenu');
        /**
         * second parameter is popup type
         */
        this.$store.dispatch("openPopup", "PopupHelpPart");
      },
      closeMenu() {
        this.$emit('closeMenu');
      },
      openOptionsPopup() {
        this.$emit('closeMenu');
        /**
         * second parameter is popup type
         */
        this.$store.dispatch("openPopup", "PopupOptions");
      },
      clearAllCompleted() {
        if (this.getList.filter(item => item.checked !== false).length > 0) {
          let isAccept = confirm('Do You want to delete all completed notes?');
          if (isAccept) {
            // ANIMATION ICON:
            const icon = document.querySelector('.deleteCompletedBtnItem');
            icon.classList.add('increaseIcon');
            setTimeout(() => {
              icon.classList.remove('increaseIcon');
            }, 400);
            this.$store.dispatch("clearCompleted");
          }
        } else {
          alert('Nothing completed');
        }
      },
      clearCache() {

        if (this.getList.length > 0) {
          let isAccept = confirm('Do You want to clear ALL notes in this tab?');
          if (isAccept) {
            this.$store.dispatch("clearPage");
          }
        } else {
          alert('Nothing to delete.');
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    z-index: 99;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 1rem;
    background-color: #e7e7e7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.45);
    -moz-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.45);
    box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.45);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, .2);
    transition: .3s;
  }

  .menu .close-btn {
    width: 1.5rem;
    height: 1.5rem;
    transition: .3s;
    fill: rgba(255, 255, 255, .8)
  }

  .menu-icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: .3s;
    fill: rgba(255, 255, 255, .8)
  }



  .clearCacheBtn {
    width: 3rem;
    padding: 0.1rem;
    border: none;
    user-select: none;
    backface-visibility: hidden;
    font-size: 2rem;
    transition: .3s;
    line-height: 2rem;
  }


  .deleteCompletedBtn {
    font-size: 1.4rem;
  }

  .blackPathBtn {
    fill: rgba(0, 0, 0, 0.7);
  }

  .helpBtn {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }


  @media screen and (min-width: 1000px) {
    .menu {
      max-width: 20%;
      width: 100%;
      right: 0;
      left: auto;
      border-radius: 10px;
      border: 1px solid #797979;
    }
  }
</style>