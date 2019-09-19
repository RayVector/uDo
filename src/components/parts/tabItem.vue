<template>
  <div class="tab small-part"
       :class="{activeTab: index === getActiveTab}"
  >
    <div class="tabInfo">
      <p class="tabTasksAmount">{{getTasksList}}</p>
    </div>
    <div
      class="tabName"
      @click="swapTab(index)"
      v-show="!isTabMenuShow"
    >
      {{item.title}}
    </div>
    <label class="tabNameWrap">
      <input
        type="text"
        class="tabName tabNameInput"
        :placeholder="item.title"
        v-show="isTabMenuShow"
        :value="tabNewName"
        :disabled="!isTabMenuShow"
        @input="tabName = $event.target.value"
        @blur="$event.target.value = tabNewName"
      >
    </label>
    <div class="editTabMenu">
      <button
        @click="deleteTab(index)"
        class="manageTab deleteTabBtn"
        v-show="isTabMenuShow"
      >
        <svg
          class="deleteTabIcon"
          width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
                fill="white" fill-opacity="0.8"></path>
          <path
            d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
            fill="white" fill-opacity="0.8"></path>
          <path
            d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
            fill="white" fill-opacity="0.8"></path>
        </svg>
      </button>
      <button
        class="manageTab renameTabBtn"
        v-show="isTabMenuShow"
        @click="updateTab(index)"
      >
        <svg
          class="renameTabIcon"
          width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.3566 14.8563C1.08738 13.7913 0.921829 11.899 1.98683 10.6298V10.6298C3.05184 9.36056 4.94411 9.19501 6.21333 10.26L8.37664 12.0752C9.64587 13.1403 9.81142 15.0325 8.74642 16.3017V16.3017C7.68141 17.571 5.78914 17.7365 4.51992 16.6715L2.3566 14.8563Z"
            fill="white" fill-opacity="0.8"></path>
          <rect x="12.8287" y="23.7739" width="6" height="26" rx="3" transform="rotate(-140 12.8287 23.7739)"
                fill="white"
                fill-opacity="0.8"></rect>
        </svg>
      </button>
      <button
        v-show="isTabMenuShow"
        class="manageTab dragTabHandle handle">
        <svg
          class="dragTabHandleIcon"
          width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4553 0.353796C15.7866 0.138633 16.2134 0.138633 16.5447 0.353796L27.0257 7.16137C27.8606 7.70368 27.4766 9 26.4809 9H5.51905C4.52344 9 4.1394 7.70368 4.97435 7.16137L15.4553 0.353796Z"
            fill="white" fill-opacity="0.8"></path>
          <path
            d="M16.5447 21.6462C16.2134 21.8614 15.7866 21.8614 15.4553 21.6462L4.97435 14.8386C4.1394 14.2963 4.52344 13 5.51905 13L26.481 13C27.4766 13 27.8606 14.2963 27.0257 14.8386L16.5447 21.6462Z"
            fill="white" fill-opacity="0.8"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabItem",
    props: ["isTabMenuShow", "index", "item"],
    data() {
      return {
        tabName: '',
      }
    },
    computed: {
      getActiveTab() {
        return this.$store.state.activeTab
      },
      tabNewName() {
        return this.item.title
      },
      getTasksList() {
        return this.$store.state.tabs[this.index].todoItems.length
      }
    },
    methods: {
      swapTab(index) {
        if (index !== this.getActiveTab) {
          // ANIMATION SWAP:
          const page = document.querySelector('.todoItemsList');
          page.classList.add('swipePage');
          setTimeout(() => {
            page.classList.remove('swipePage');
          }, 600);
          this.$store.dispatch("swapTab", index);
        }
      },
      deleteTab(index) {
        const icons = document.querySelectorAll('.deleteTabIcon');
        icons[index].classList.toggle('increaseIcon');
        setTimeout(() => {
          icons[index].classList.remove('increaseIcon');
        }, 400);
        this.$store.dispatch("deleteTab", index);
      },
      updateTab(index) {
        // ANIMATION ICON:
        const icons = document.querySelectorAll('.renameTabIcon');
        icons[index].classList.toggle('increaseIcon');
        setTimeout(() => {
          icons[index].classList.remove('increaseIcon');
        }, 400);

        if (this.tabName !== '') {
          this.$store.dispatch("updateTab", {title: this.tabName, id: this.item.id});
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tabNameWrap {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  .tabName {
    background-color: unset;
    border: unset;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.8);
  }

  .tabSettingBtn {
    width: 1.2rem;
    height: 1.2rem;
  }

  .addNewTabIcon {
    display: inline-block;
    transition: all .3s ease;
  }

  .tabTasksAmount {
    display: none;
  }

  .menuOpen {
    z-index: 9;
    position: absolute;
    right: 0;
    left: 0;
    padding-bottom: 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 80vh;
    background-color: #f0f0f0;
    border: 1px solid silver;
    -webkit-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.4);
    -moz-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.4);
    box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.4);
    overflow: hidden;
  }

  .menuOpen .tabTasksAmount {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem !important;
    user-select: none;
  }

  .menuOpen .tab {
    min-height: 1.5rem;
    height: 100%;
    max-height: 1.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 91%;
    border-radius: 0;
    border-right: 0;
  }

  .menuOpen .tabName {
    display: inline-block;
    padding-bottom: 1.9rem;
    width: 100%;
    max-width: 75%;
    background-color: unset;
    border: unset;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .manageTab {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
    width: 1.8rem;
    height: 1.8rem;
    margin-right: .5rem;
  }


  .manageTab svg {
    height: 70%;
    width: 70%;
  }

  .deleteTabIcon {
    transition: .3s;
  }

  .renameTabIcon {
    transition: .3s;
  }

  .tabInfo {
    display: flex;
    margin-right: .8rem;
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.5);
  }

  .dragHandle {
    display: none;
  }

  .menuOpen .tabNameInput {
    padding-bottom: 0;
    font-size: 1.5rem;
  }

  .menuOpen .dragTabHandle {
    width: 2rem;
    height: 2rem;
    display: inline-block;
    cursor: e-resize;
  }


  .menuOpen .dragTabHandleIcon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .editTabMenu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }


</style>