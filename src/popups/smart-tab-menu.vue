<template>
  <div class="smart-tab-menu">
    <div class="smartMenu_shadow" v-show="isMenuShow" @click="closeMenu"></div>
    <transition name="fadeSmartMenu">
      <div class="smartMenu todoItemMenu _small-part" v-show="isMenuShow">
        <button class="manageItemBtns" @click="deleteCompleted">
          <delete-completed-icon></delete-completed-icon>
        </button>
        <button class="manageItemBtns" @click="deleteAll">
          <delete-notes-in-page-icon></delete-notes-in-page-icon>
        </button>
        <button class="manageItemBtns" @click="deleteItem">
          <trash-icon></trash-icon>
        </button>
      </div>
    </transition>

  </div>

</template>


<script>
  import TrashIcon from "../components/UI/trash-icon";
  import DeleteCompletedIcon from "../components/UI/delete-completed-icon";
  import DeleteNotesInPageIcon from "../components/UI/delete-notes-inPage-icon";
  export default {
    name: "smart-tab-menu",
    components: {DeleteNotesInPageIcon, DeleteCompletedIcon, TrashIcon},
    props: ['isMenuShow'],
    methods: {
      closeMenu() {
        this.$emit('closeMenu');
      },
      deleteItem() {
        this.$emit('deleteItem');
      },
      deleteCompleted() {
        this.$emit('deleteCompleted');
      },
      deleteAll() {
        this.$emit('deleteAll');
      }
    }
  }
</script>

<style scoped lang="scss">
  .smartMenu_shadow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
  }

  .todoItemMenu {
    padding: 0.5rem;
    z-index: 2;
    position: fixed;
    bottom: 40%;
    top: 40%;
    right: 0;
    min-height: 130px;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px 0 0 5px;
    transition: .3s;
    opacity: 1;
    transform: translateX(0);

    -webkit-box-shadow: -5px 6px 17px 0 rgba(50, 50, 50, .3);
    -moz-box-shadow: -5px 6px 17px 0 rgba(50, 50, 50, .3);
    box-shadow: -5px 6px 17px 0 rgba(50, 50, 50, .3);
  }

  .manageItemBtns {
    height: 2.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
  }

  .manageItemBtns:not(:last-child) {
    margin-bottom: 20px;
  }

  .manageItemBtns svg {
    width: 30px;
    height: 30px;
  }

  /*ANIMATIONS:*/

  .fadeSmartMenu-enter-active, .fadeSmartMenu-leave-active {
    transition: .3s;

  }

  .fadeSmartMenu-enter, .fadeSmartMenu-leave-to {
    opacity: .8;
    transform: translateX(60px);
  }

  @media screen and (min-width: 1000px) {
    .todoItemMenu {
      width: 100%;
      max-width: 70px;
    }
  }
</style>