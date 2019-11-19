<template>
  <div class="menu bg-theme">
    <close-btn @click.native="closeMenu"></close-btn>

    <button
      type="button"
      @click="openOptionsPopup">
      <svg
        class="menu-icon" version="1.1" viewBox="0 0 24 24" xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"><g/>
        <g><path d="M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"/></g></svg>
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
  import CloseBtn from "../components/UI/close-btn";
  export default {
    name: "appMenu",
    components: {CloseBtn},
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
        this.$emit('closeMenu');
      },
      openOptionsPopup() {
        this.$emit('closeMenu');
        /**
         * second parameter is popup type
         */
        this.$store.dispatch("openPopup", "PopupOptions");
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
            icon.classList.add('increaseIcon');
            setTimeout(() => {
              icon.classList.remove('increaseIcon');
            }, 400);
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
    border-bottom: 0.0625rem solid rgba(0, 0, 0, .2);
    transition: .3s;
  }

  .menu .close-btn {
    width: 1.5rem;
    height: 1.5rem;
    transition: .3s;
    fill: rgba(255, 255, 255, .8)
  }

  .menu-icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: .3s;
    fill: rgba(255, 255, 255, .8)
  }



  .clearCacheBtn {
    width: 3rem;
    padding: 0.1rem;
    border: none;
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
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }

  .helpBtnIcon {
    transition: .3s;
    height: 1.5rem;
    width: 1.5rem;
  }

  @media screen and (min-width: 1000px) {
    .menu {
      max-width: 20%;
      width: 100%;
      right: 0;
      left: auto;
      border-radius: 10px;
      border: 1px solid #797979;
    }
  }
</style>