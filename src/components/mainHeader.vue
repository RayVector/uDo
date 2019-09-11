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
          viewBox="0 0 24 24" xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg">
              <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" x1="2" x2="22" y1="12"
                    y2="12"></line>
          <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" x1="2" x2="22" y1="6"
                y2="6"></line>
          <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" x1="2" x2="22" y1="18"
                y2="18"></line>
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
        icon.classList.toggle('swipeIcon');
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
    width: 2rem;
    border: none;
    cursor: pointer;
    user-select: none;
    backface-visibility: hidden;
  }

  .openMenuBtnItem {
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