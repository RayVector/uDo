<template>
  <div class="menu bg-theme">
    <button
      class="closeAppBtn"
      type="button"
      @click="closeMenu">
      <svg
        class="closeMenuIcon"
        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.75722 21.4757C6.69222 22.745 4.79995 22.9105 3.53072 21.8455V21.8455C2.2615 20.7805 2.09595 18.8882 3.16095 17.619L5.31883 15.0473C6.38384 13.7781 8.27611 13.6126 9.54533 14.6776V14.6776C10.8146 15.7426 10.9801 17.6348 9.9151 18.9041L7.75722 21.4757Z"
          fill="white" fill-opacity="0.8"></path>
        <path
          d="M18.7977 8.31814C17.7327 9.58736 15.8405 9.75291 14.5713 8.68791V8.68791C13.302 7.6229 13.1365 5.73064 14.2015 4.46141L16.0167 2.2981C17.0817 1.02887 18.974 0.863323 20.2432 1.92833V1.92833C21.5124 2.99333 21.678 4.8856 20.613 6.15482L18.7977 8.31814Z"
          fill="white" fill-opacity="0.8"></path>
        <rect x="23.7739" y="17.9451" width="6" height="26" rx="3" transform="rotate(130 23.7739 17.9451)" fill="white"
              fill-opacity="0.8"></rect>
      </svg>

    </button>
    <button
      class="deleteCompletedBtn"
      @click="clearAllCompleted"
    >
      <svg
        class="deleteCompletedBtnItem"
        width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
              fill="white" fill-opacity="0.8"></path>
        <path
          d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
          fill="white" fill-opacity="0.8"></path>
        <path
          d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
          fill="white" fill-opacity="0.8"></path>
        <path
          d="M7.03405 17.7292C6.42109 17.189 6.33761 16.2336 6.84758 15.5953V15.5953C7.35755 14.957 8.26787 14.8774 8.88083 15.4176L10.2143 16.5928C10.8273 17.133 10.9107 18.0884 10.4008 18.7267V18.7267C9.89079 19.3651 8.98048 19.4446 8.36752 18.9044L7.03405 17.7292Z"
          fill="#494949"></path>
        <rect width="2.93363" height="12.8211" rx="1.46682"
              transform="matrix(-0.75023 -0.661177 0.624181 -0.78128 12.6444 22.7391)" fill="#494949"></rect>
      </svg>

    </button>
    <button
      class="clearCacheBtn"
      @click="clearCache"
    >
      <svg
        class="clearCacheBtnItem"
        width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
              fill="white" fill-opacity="0.8"></path>
        <path
          d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
          fill="white" fill-opacity="0.8"></path>
        <path
          d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
          fill="white" fill-opacity="0.8"></path>
        <rect x="6" y="13" width="14" height="2" rx="0.5" fill="#494949"></rect>
        <rect x="6" y="16" width="14" height="2" rx="0.5" fill="#494949"></rect>
        <rect x="6" y="19" width="14" height="2" rx="0.5" fill="#494949"></rect>
      </svg>
    </button>
    <button
      class="helpBtn"
      @click="getHelp"
    >
      <svg
        class="helpBtnIcon"
        width="7" height="27" viewBox="0 0 7 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.26087 6.52167C1.45994 6.52167 0 5.06173 0 3.2608V3.2608C0 1.45987 1.45994 -7.15256e-05 3.26087 -7.15256e-05H3.73913C5.54006 -7.15256e-05 7 1.45987 7 3.2608V3.2608C7 5.06173 5.54006 6.52167 3.73913 6.52167H3.26087Z"
          fill="white" fill-opacity="0.8"></path>
        <rect y="9.6087" width="7" height="17.3913" rx="3" fill="white" fill-opacity="0.8"></rect>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: "appMenu",
    computed: {
      getList() {
        /*!!!MAIN!!! return this.$store.getters.sortedToDoList.todoItems;*/
        return this.$store.state.tabs[this.getActiveTab].todoItems
      },
      getActiveTab() {
        return this.$store.state.activeTab
      },
    },
    methods: {
      getHelp() {
        // ANIMATION ICON:
        const item = document.querySelector('.helpBtnIcon');
        item.classList.toggle('swipeIcon');

        alert("To delete ALL complete notes, press the button (2). " +
          "To clear ALL notes on the page, press the button (3). " +
          "Swipe the note to the left, and press the button to edit this note. " +
          "To move items hold the Refresh button. " +
          "To manage the tabs, click the list button (the first button in the tab menu). " +
          "To change the name of a tab or note, tap the name.");
      },
      closeMenu() {
        // ANIMATION ICON:
        const icon = document.querySelector('.closeMenuIcon');
        icon.classList.toggle('swipeIcon');

        this.$emit('closeMenu');
      },
      clearAllCompleted() {

        if (this.getList.filter(item => item.checked !== false).length > 0) {
          let isAccept = confirm('Do You want to delete all completed notes?');
          if (isAccept) {
            // ANIMATION ICON:
            const icon = document.querySelector('.deleteCompletedBtnItem');
            icon.classList.add('increaseIcon');
            setTimeout(() => {
              icon.classList.remove('increaseIcon');
            }, 400);
            this.$store.dispatch("clearCompleted");
          }
        } else {
          alert('Nothing completed');
        }
      },
      clearCache() {

        if (this.getList.length > 0) {
          let isAccept = confirm('Do You want to clear ALL notes in this tab?');
          if (isAccept) {
            // ANIMATION ICON:
            const icon = document.querySelector('.clearCacheBtnItem');
            icon.classList.toggle('swipeIcon');
            this.$store.dispatch("clearPage");
          }
        } else {
          alert('Nothing to delete.');
        }
      },
    },
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
    transition: .3s;
    font-size: 2rem;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }

  .closeMenuIcon {
    transition: .3s;
    width: 1.5rem;
    height: 1.5rem;
  }

  .clearCacheBtn {
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

  .clearCacheBtnItem {
    transition: .3s;
    height: 1.5rem;
    width: 1.5rem;
  }

  .clearCacheBtnItem {
    transition: .3s;
    fill: rgba(0, 0, 0, 0.7);
  }

  .deleteCompletedBtn {
    font-size: 1.4rem;
    cursor: pointer;
  }

  .deleteCompletedBtnItem {
    transition: .3s;
    height: 1.5rem;
    width: 1.5rem;
  }

  .blackPathBtn {
    fill: rgba(0, 0, 0, 0.7);
  }

  .helpBtn {
    cursor: pointer;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }

  .helpBtnIcon {
    transition: .3s;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>