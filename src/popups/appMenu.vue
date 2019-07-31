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
      &#9851;
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