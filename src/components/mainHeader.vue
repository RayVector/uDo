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
          <rect x="5" y="11.8975" width="29" height="18" rx="2" fill="#494949"></rect>
          <path d="M25 23C25 21.8954 25.8954 21 27 21H28C29.1046 21 30 21.8954 30 23V30H25V23Z" fill="white"></path>
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
  import Quotes from "./quotes";

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