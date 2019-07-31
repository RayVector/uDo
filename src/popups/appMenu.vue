<template>
  <div class="menu">
    <button
      class="closeAppBtn"
      type="button"
      @click="$emit('closeMenu')">
      &#x292B;
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
  .helpBtn {
    cursor: pointer;
    font-size: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>