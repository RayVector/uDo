<template>
  <div class="modal-temp"
       v-show="isModalShow">
    <transition name="fadeModal">
      <div class="modal-temp-inner _item-theme" v-show="isModalShow">
        <p class="modal-temp-text">
          {{getModalText}}
        </p>
        <button @click="$emit('answer', true)">Yes</button>
        <button @click="closeModal">No</button>
      </div>
    </transition>
    <div class="modal-temp-shadow"></div>
  </div>
</template>

<script>
  export default {
    name: "modal-temp",
    computed: {
      isModalShow() {
        return this.$store.state.modals.isModalShow;
      },
      getModalText() {
        return this.$store.state.modals.modalText;
      }
    },
    methods: {
      closeModal() {
        this.$emit('answer', false);
        this.$store.dispatch("closeModal");
      }
    }
  }
</script>

<style scoped lang="scss">

  .modal-temp {
    z-index: 10;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .modal-temp-inner {
    z-index: 2;
    position: relative;
    right: 0;
    top: 20px;
    left: 0;

    padding: 1rem;
    width: 50%;
    height: 10%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-temp-text {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
  }

  .modal-temp-shadow {
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

  .fadeModal-enter-active, .fadeModal-leave-active {
    transition: all .3s ease;
  }

  .fadeModal-enter, .fadeModal-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }

  @media screen and (min-width: 1000px) {
    .modal-temp-inner {
      width: 20%;
      height: 10%;
    }
  }
</style>
