<template>
  <v-touch
    v-on:swipedown="$emit('swapMenu', true)"
    v-on:swipeup="$emit('swapMenu', false)"
    class="todoHeaderWrap"
  >
    <div class="todoTitle">
      <h1 @click="getAuthorInfo" class="mainTitle">
        uDo:
      </h1>

      <button @click="openMenu" class="openMenuBtn">
        <svg
          class="openMenuBtnItem"
          width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 13.8975C5 12.7929 5.89543 11.8975 7 11.8975H32C33.1046 11.8975 34 12.7929 34 13.8975V28C34 29.1046 34.106 30 33.0014 30C32.7191 30 32.3877 30 32 30C31.6123 30 31.2809 30 30.9986 30C29.894 30 30 29.1046 30 28V23C30 21.8954 29.1046 21 28 21H27.5H27.0413C25.9207 21 25.0185 21.9194 25.0363 23.0398C25.0785 25.695 25.1273 30 25 30C20.7532 30 11.1405 29.9389 6.98039 29.911C5.88136 29.9036 5 29.0106 5 27.9116V13.8975Z"
            fill="#494949"></path>
          <path
            d="M18.972 0.328302C19.2953 0.127278 19.7047 0.127279 20.028 0.328303L33.4133 8.65077C34.2676 9.18191 33.8912 10.5 32.8853 10.5H6.11471C5.1088 10.5 4.73244 9.18191 5.58669 8.65077L18.972 0.328302Z"
            fill="#494949"></path>
        </svg>
      </button>
    </div>
    <div class="todoQuotes">
      <quotes></quotes>
    </div>
  </v-touch>
</template>

<script>
  import Quotes from "./parts/quotes";

  export default {
    name: "main-header",
    components: {Quotes},
    methods: {
      getAuthorInfo() {
        alert("| created by Ray Vector & Dezl | rayvectorspqr@yahoo.com & demozluk@gmail.com | rayvector.info |");
      },
      openMenu() {
        const icon = document.querySelector('.openMenuBtnItem');
        icon.classList.add('increaseIcon');
        setTimeout(() => {
          icon.classList.remove('increaseIcon');
        }, 400);
        this.$emit('swapMenu', true)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .todoHeaderWrap {
    position: relative;
    padding: 1rem 1rem 1.5rem 1rem;
    border-bottom: .0625rem solid rgba(0, 0, 0, 0.5);
  }

  .todoTitle {
    display: flex;
    align-items: center;
    font-size: 2rem;
  }

  .mainTitle {
    user-select: none;
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: -0.125rem;
    color: rgba(0, 0, 0, 0.7);
  }

  .mainIconBtn {
    margin-right: 1.8rem;
  }

  .mainIcon {
    width: 2rem;
    height: 2rem;
  }

  .openMenuBtn {
    margin-left: auto;
    padding: 0.1rem;
    border: none;
    cursor: pointer;
    user-select: none;
    backface-visibility: hidden;
  }

  .openMenuBtnItem {
    width: 2rem;
    height: 2rem;
    transition: .3s;
  }

  .openMenuBtnItem line {
    stroke: rgba(0, 0, 0, 0.7);
  }

  .todoQuotes {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
  }
</style>