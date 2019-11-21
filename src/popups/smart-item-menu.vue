<template>
  <div class="smart-item-menu">
    <div class="smartMenu_shadow" v-show="isMenuShow" @click="closeMenu"></div>
    <transition name="fadeSmartMenu">
    <div class="smartMenu todoItemMenu _small-part" v-show="isMenuShow">
      <button class="manageItemBtns todoItemMenuBtn" @click="deleteItem">
        <svg
          class="settingsItemBtn"
          width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
                fill="white" fill-opacity="0.8"></path>
          <path
            d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
            fill="white" fill-opacity="0.8"></path>
          <path
            d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
            fill="white" fill-opacity="0.8"></path>
        </svg>
      </button>
    </div>
  </transition>
  </div>

</template>

<script>
  export default {
    name: "smart-item-menu",
    props: ['isMenuShow'],
    methods: {
      closeMenu() {
        this.$emit('closeMenu');
      },
      deleteItem() {
        this.$emit('deleteItem');
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
    position: absolute;
    bottom: 40%;
    top: 40%;
    right: 0;
    height: 100px;
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