<template>
  <div class="menu">
    <button
      class="closeAppBtn"
      type="button"
      @click="$emit('closeMenu')">
      &#x292B;
    </button>

    <button
      class="deleteCompletedBtn"
      @click="$emit('clearAllCompleted')"
    >
      <svg
        class="deleteCompletedBtnItem"
        width="2rem" height="2rem" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="blackPathBtn" d="M25.5 5.33333V0H7.5V5.33333H0V8H33V5.33333H25.5ZM22.5 5.33333H10.5V2.66667H22.5V5.33333Z" fill="black"></path>
        <rect class="blackPathBtn" x="5" y="10" width="24" height="22" fill="black"></rect>
        <path d="M23.786 14L15.654 22.132L11.414 17.891L10 19.305L15.654 24.96L25.2 15.414L23.786 14Z" fill="white"></path>
      </svg>
    </button>

    <button
      class="todoClearBtn"
      @click="$emit('clearCache')"
    >
      <svg
        class="todoClearBtnItem"
        height="2rem" width="2rem" viewBox="0 0 1792 1792"  xmlns="http://www.w3.org/2000/svg">
        <path
          d="M836 1169l-15 368-2 22-420-29q-36-3-67-31.5t-47-65.5q-11-27-14.5-55t4-65 12-55 21.5-64 19-53q78 12 509 28zm-387-586l180 379-147-92q-63 72-111.5 144.5t-72.5 125-39.5 94.5-18.5 63l-4 21-190-357q-17-26-18-56t6-47l8-18q35-63 114-188l-140-86zm1231 517l-188 359q-12 29-36.5 46.5t-43.5 20.5l-18 4q-71 7-219 12l8 164-230-367 211-362 7 173q170 16 283 5t170-33zm-785-924q-47 63-265 435l-317-187-19-12 225-356q20-31 60-45t80-10q24 2 48.5 12t42 21 41.5 33 36 34.5 36 39.5 32 35zm655 307l212 363q18 37 12.5 76t-27.5 74q-13 20-33 37t-38 28-48.5 22-47 16-51.5 14-46 12q-34-72-265-436l313-195zm-143-226l142-83-220 373-419-20 151-86q-34-89-75-166t-75.5-123.5-64.5-80-47-46.5l-17-13 405 1q31-3 58 10.5t39 28.5l11 15q39 61 112 190z"></path>
      </svg>
    </button>

    <button
      class="helpBtn"
      @click="getHelp"
    >
      ?
    </button>
  </div>
</template>

<script>
  export default {
    name: "appMenu",
    methods: {
      getHelp() {
        alert("To delete ALL notes click recycle button, swipe note name left to edit note, swipe right to delete note.");
      },
    }
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
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.5);
    transition: .3s;
  }

  .closeAppBtn {
    font-size: 2rem;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
  .todoClearBtn {
    width: 3rem;
    padding: 0.1rem;
    color: rgba(0, 0, 0, 0.7);
    border: none;
    cursor: pointer;
    user-select: none;
    backface-visibility: hidden;
    font-size: 2rem;
    transition: .3s;
    line-height: 2rem;
  }
  .todoClearBtnItem {
    width: 1.5rem;
    height: 1.5rem;
  }
  .todoClearBtnItem{
    fill: rgba(0, 0, 0, 0.7);
  }
  .deleteCompletedBtn {
    font-size: 1.4rem;
    cursor: pointer;
  }
  .deleteCompletedBtnItem {
    height: 1.5rem;
    width: 1.5rem;

  }
  .blackPathBtn {
    fill: rgba(0, 0, 0, 0.7);
  }
  .helpBtn {
    cursor: pointer;
    font-size: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
  }
</style>