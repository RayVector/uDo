<template>
  <transition name="fadePopup">
    <div class="popup-temp"
         v-show="isPopupShow">
      <div class="popup-temp-inner item-theme">
        <component :is="popupType"></component>
      </div>
      <div class="popup-temp-shadow" @click="closePopup"></div>
    </div>
  </transition>
</template>

<script>
  import PopupOptions from './parts/popup-options-part'
  import PopupAuthorPart from "./parts/popup-author-part";
  import PopupHelpPart from "./parts/popup-help-part";

  export default {
    name: "popup-temp",
    components: {
      PopupHelpPart,
      PopupAuthorPart,
      PopupOptions
    },
    computed: {
      isPopupShow() {
        return this.$store.state.popups.isPopupShow;
      },
      popupType() {
        return this.$store.state.popups.popupType;
      }
    },
    methods: {
      closePopup() {
        this.$store.dispatch('closePopup');
      }
    }
  }
</script>

<style scoped lang="scss">

  .popup-temp {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .popup-temp-inner {
    padding: 1rem;
    position: relative;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 80%;
    height: 80%;
    border-radius: 20px;
  }

  .popup-temp-shadow {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
  }

  /*ANIMATIONS:*/

  .fadePopup-enter-active, .fadePopup-leave-active {
    transition: opacity .3s ease;
  }

  .fadePopup-enter, .fadePopup-leave-to {
    opacity: 0;
  }

  @media screen and (min-width: 1000px) {
    .popup-temp-inner {
      width: 400px;
      height: 600px;
    }
  }
</style>