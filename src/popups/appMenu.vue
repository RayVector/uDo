<template>
  <div class="menu">
    <button
      class="closeAppBtn"
      type="button"
      @click="closeMenu">
      <svg
        class="closeMenuIcon"
        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.0168 2.29813C17.0818 1.02891 18.974 0.863357 20.2433 1.92836V1.92836C21.5125 2.99337 21.678 4.88563 20.613 6.15486L18.4552 8.72652C17.3901 9.99575 15.4979 10.1613 14.2287 9.09629V9.09629C12.9594 8.03129 12.7939 6.13902 13.8589 4.8698L16.0168 2.29813Z"
          fill="#494949"></path>
        <path
          d="M4.97624 15.4557C6.04124 14.1865 7.93351 14.021 9.20274 15.086V15.086C10.472 16.151 10.6375 18.0432 9.57251 19.3125L7.75727 21.4758C6.69226 22.745 4.8 22.9105 3.53077 21.8455V21.8455C2.26155 20.7805 2.096 18.8883 3.161 17.619L4.97624 15.4557Z"
          fill="#494949"></path>
        <rect y="5.8288" width="6" height="26" rx="3" transform="rotate(-50 0 5.8288)" fill="#494949"></rect>
      </svg>
    </button>

    <button
      class="deleteCompletedBtn"
      @click="clearAllCompleted"
    >
      <svg
        class="deleteCompletedBtnItem"
        width="36" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
              fill="#494949"></path>
        <path
          d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
          fill="#494949"></path>
        <path
          d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
          fill="#494949"></path>
        <path
          d="M7.03405 17.7292C6.42109 17.189 6.33761 16.2336 6.84758 15.5952V15.5952C7.35755 14.9569 8.26787 14.8774 8.88083 15.4176L10.2143 16.5928C10.8273 17.133 10.9107 18.0883 10.4008 18.7267V18.7267C9.89079 19.365 8.98048 19.4445 8.36752 18.9043L7.03405 17.7292Z"
          fill="white"></path>
        <rect width="2.93363" height="12.8211" rx="1.46682"
              transform="matrix(-0.75023 -0.661177 0.624181 -0.78128 12.6444 22.7391)" fill="white"></rect>
      </svg>
    </button>

    <button
      class="clearCacheBtn"
      @click="clearCache"
    >
      <svg
        class="clearCacheBtnItem"
        width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.33969" cy="21.3398" r="4.5" transform="rotate(-140 7.33969 21.3398)" fill="#494949"></circle>
        <circle cx="7.522" cy="21.5221" r="2.5" transform="rotate(-140 7.522 21.5221)" fill="#D1D1D1"></circle>
        <rect x="15.1888" y="20.453" width="11" height="16.3629" rx="4" transform="rotate(-140 15.1888 20.453)"
              fill="#494949"></rect>
      </svg>
    </button>

    <button
      class="helpBtn"
      @click="getHelp"
    >
      <svg
        class="helpBtnIcon"
        width="7" height="25" viewBox="0 0 7 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.26087 6.52173C1.45994 6.52173 0 5.06179 0 3.26086V3.26086C0 1.45993 1.45994 -1.04904e-05 3.26087 -1.04904e-05H3.73913C5.54006 -1.04904e-05 7 1.45993 7 3.26086V3.26086C7 5.06179 5.54006 6.52173 3.73913 6.52173H3.26087Z"
          fill="#494949"></path>
        <rect y="7.6087" width="7" height="17.3913" rx="3" fill="#494949"></rect>
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

        alert("To delete ALL notes click recycle button, swipe note name left to edit note, swipe right to delete note.");
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
            setTimeout(()=> {
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
    created() {
      /*window.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          if (this.val !== '') {
            this.addNewTask(this.activeTab)
          }
        }
      });*/
      window.onscroll = () => {
        this.isMenuShow = false
      }
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
    position: relative;
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

  .clearCacheBtn:after {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    width: 50%;
    border-bottom: 1.5px solid rgba(73, 73, 73, 0.75);
  }

  .clearCacheBtnItem {
    transition: .3s;
    width: 1.8rem;
    height: 1.8rem;
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