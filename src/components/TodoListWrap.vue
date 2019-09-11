<template>
  <div class="appWrap">

    <v-touch
      v-on:swipeup="isMenuShow = false"
    >
      <transition name="appMenuFade">
        <app-menu
          @clearAllCompleted="clearAllCompleted"
          @clearCache="clearCashe"
          @closeMenu="isMenuShow = false"
          v-show="isMenuShow"
        ></app-menu>
      </transition>
    </v-touch>


    <div class="todoWrap">
      <v-touch
        v-on:swipedown="isMenuShow = true"
        v-on:swipeup="isMenuShow = false"
      >
        <p class="todoTitle">
          <span @click="getAuthorInfo" class="mainTitle">
            uDo:
          </span>
          <button @click="isMenuShow = true" class="openMenuBtn">
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
        </p>
      </v-touch>
      <div :class="{menuOpen: isTabMenuShow}" class="tabsArea">
        <div @click="addNewTab" class="tab defTab">
          <svg class="tabSettingBtn addNewTabIcon" fill="none" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 16C18.3431 16 17 14.6569 17 13V13C17 11.3431 18.3431 10 20 10H23C24.6569 10 26 11.3431 26 13V13C26 14.6569 24.6569 16 23 16H20Z"
              fill="#494949"></path>
            <path
              d="M3 16C1.34315 16 0 14.6569 0 13V13C0 11.3431 1.34315 10 3 10H6C7.65685 10 9 11.3431 9 13V13C9 14.6569 7.65685 16 6 16H3Z"
              fill="#494949"></path>
            <rect fill="#494949" height="9" rx="3" width="6" x="10" y="17"></rect>
            <rect fill="#494949" height="9" rx="3" width="6" x="10"></rect>
            <path
              d="M13 16C11.3431 16 10 14.6569 10 13V13C10 11.3431 11.3431 10 13 10V10C14.6569 10 16 11.3431 16 13V13C16 14.6569 14.6569 16 13 16V16Z"
              fill="#494949"></path>
          </svg>

        </div>
        <div @click="showTabsList" class="tab defTab">
          <svg class="tabSettingBtn" fill="none" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 6C1.34315 6 0 4.65685 0 3V3C0 1.34315 1.34315 0 3 0V0C4.65685 0 6 1.34315 6 3V3C6 4.65685 4.65685 6 3 6V6Z"
              fill="#494949"></path>
            <rect fill="#494949" height="16" rx="3" transform="rotate(-90 7 6)" width="6" x="7" y="6"></rect>
            <path
              d="M3 14C1.34315 14 0 12.6569 0 11V11C0 9.34315 1.34315 8 3 8V8C4.65685 8 6 9.34315 6 11V11C6 12.6569 4.65685 14 3 14V14Z"
              fill="#494949"></path>
            <rect fill="#494949" height="16" rx="3" transform="rotate(-90 7 14)" width="6" x="7" y="14"></rect>
            <path
              d="M3 22C1.34315 22 0 20.6569 0 19V19C0 17.3431 1.34315 16 3 16V16C4.65685 16 6 17.3431 6 19V19C6 20.6569 4.65685 22 3 22V22Z"
              fill="#494949"></path>
            <rect fill="#494949" height="16" rx="3" transform="rotate(-90 7 22)" width="6" x="7" y="22"></rect>
          </svg>

        </div>

        <div
          v-for="(item, index) in getTabList"
          :class="{activeTab: index === getActiveTab}"
          :item="item"
          :key="index"
          class="tab"
        >
          <!--<label class="tabNameWrap">
            <input
              type="text"
              class="tabName"
              :placeholder="item.title"
              v-model="tabName"
              :disabled="!isTabMenuShow"
              v-show="isTabMenuShow"
            >
          </label>-->
          <button
            @click="deleteTab(index)"
            class="manageTab deleteTabBtn"
            v-show="isTabMenuShow"
          >
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.0168 2.29813C17.0818 1.02891 18.974 0.863357 20.2433 1.92836V1.92836C21.5125 2.99337 21.678 4.88563 20.613 6.15486L18.4552 8.72652C17.3901 9.99575 15.4979 10.1613 14.2287 9.09629V9.09629C12.9594 8.03129 12.7939 6.13902 13.8589 4.8698L16.0168 2.29813Z"
                fill="#494949"></path>
              <path
                d="M4.97624 15.4557C6.04124 14.1865 7.93351 14.021 9.20274 15.086V15.086C10.472 16.151 10.6375 18.0432 9.57251 19.3125L7.75727 21.4758C6.69226 22.745 4.8 22.9105 3.53077 21.8455V21.8455C2.26155 20.7805 2.096 18.8883 3.161 17.619L4.97624 15.4557Z"
                fill="#494949"></path>
              <rect fill="#494949" height="26" rx="3" transform="rotate(-50 0 5.8288)" width="6" y="5.8288"></rect>
            </svg>
          </button>
          <button
            class="manageTab renameTabBtn"
            v-show="isTabMenuShow"
          >
            <svg fill="none" height="24" viewBox="0 0 36 36" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.5 18C25.5 22.1421 22.1421 25.5 18 25.5C13.8579 25.5 10.5 22.1421 10.5 18C10.5 13.8579 13.8579 10.5 18 10.5C22.1421 10.5 25.5 13.8579 25.5 18Z"
                fill="#494949" stroke="#494949"></path>
              <circle cx="17.9309" cy="4.93091" fill="#494949" r="3.5"
                      transform="rotate(40 17.9309 4.93091)"></circle>
              <circle cx="30.9309" cy="17.9309" fill="#494949" r="3.5"
                      transform="rotate(40 30.9309 17.9309)"></circle>
              <circle cx="4.93091" cy="17.9309" fill="#494949" r="3.5"
                      transform="rotate(40 4.93091 17.9309)"></circle>
              <circle cx="8.93091" cy="8.93091" fill="#494949" r="3.5"
                      transform="rotate(40 8.93091 8.93091)"></circle>
              <circle cx="26.9309" cy="26.9309" fill="#494949" r="3.5"
                      transform="rotate(40 26.9309 26.9309)"></circle>
              <circle cx="8.93091" cy="26.9309" fill="#494949" r="3.5"
                      transform="rotate(40 8.93091 26.9309)"></circle>
              <circle cx="26.9309" cy="8.93091" fill="#494949" r="3.5"
                      transform="rotate(40 26.9309 8.93091)"></circle>
              <circle cx="17.9309" cy="30.9309" fill="#494949" r="3.5"
                      transform="rotate(40 17.9309 30.9309)"></circle>
            </svg>
          </button>
          <div class="tabName" @click="swapTab(index)">{{item.title}}</div>

        </div>
      </div>
      <div class="workspace"
      >
        <div class="userMenu">

          <label class="addTaskFieldWrap">
            <input
              class="addTaskField"
              maxlength="100"
              placeholder="Task name..."
              required
              type="text"
              v-model="val"
            >
          </label>
          <button @click='addNewTask' class="todoBtn">
            <svg class="addNewTaskIcon" fill="none" height="24" viewBox="0 0 28 31" width="24"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.5837" cy="26.2265" fill="#494949" r="3" transform="rotate(40 4.5837 26.2265)"></circle>
              <rect fill="#494949" height="26" rx="3" transform="rotate(40 22.212 0)" width="6" x="22.212"></rect>
            </svg>
          </button>
        </div>
        <draggable
          :options="{delay:400, chosenClass: 'chosen'}"
          class="todoItemsList"
          handle=".handle"
          tag="div"
          v-model="newList"
          @end="moveItem"

          v-for="(dragItem, index) in getTabList"
          v-show="index === $store.state.activeTab"
          :dragItem="dragItem"
          :key="index"
        >
          <transition-group
            name="itemFade"
            tag="ul"
          >
            <todoListItem
              v-for="item in getList"
              :item="item"
              :key="item.id"
            ></todoListItem>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import todoListItem from './TodoListItems/TodoListItem.vue'
  import AppMenu from "../popups/appMenu";

  export default {
    name: 'TodoListWrap',
    components: {
      draggable,
      todoListItem,
      AppMenu
    },
    data() {
      return {
        val: '',
        tabName: '',
        isTabMenuShow: false,
        isMenuShow: false
      }
    },
    computed: {
      getList() {
        /*!!!MAIN!!! return this.$store.getters.sortedToDoList.todoItems;*/
        return this.$store.state.tabs[this.getActiveTab].todoItems
      },
      getTabList() {
        return this.$store.state.tabs;
      },
      getActiveTab() {
        return this.$store.state.activeTab
      },
      newList: {
        get() {
          return this.getList
        },
        set(newList) {
          this.$store.dispatch('sortable', newList)
        },
      }
    },
    methods: {
      addNewTab() {
        this.$store.dispatch("addTab");
        // ICON ANIMATION:
        const icon = document.querySelector('.addNewTabIcon');
        icon.classList.toggle('swipeIcon');
      },
      showTabsList() {
        this.isTabMenuShow = !this.isTabMenuShow;
      },
      swapTab(index) {
        this.$store.dispatch("swapTab", index);
        this.val = '';
        // SWAP ANIMATION:
        const pages = document.querySelectorAll('.todoItemsList');
        pages[index].classList.add('swipePage');
        setTimeout(()=> {
          pages[index].classList.remove('swipePage');
        }, 100);
      },
      deleteTab(index) {
        this.$store.dispatch("deleteTab", index);
      },
      addNewTask() {
        if (this.val !== '') {
          this.$store.dispatch("addTask", this.val);
          // ICON ANIMATION:
          const icon = document.querySelector('.addNewTaskIcon');
          icon.classList.toggle('swipeIcon');
        }
        this.val = '';
      },
      moveItem() {
        this.$store.dispatch("sortTasksList");
      },
      clearAllCompleted() {
        /*if (this.todoList[this.activeTab].filter(item => item.checked !== false).length > 0) {
          let isAccept = confirm('Do You want to delete all completed notes?');
          if (isAccept) {
            this.todoList = this.todoList[this.activeTab].filter(item => item.checked !== true);
            this.isMenuShow = false;
          }
        } else {
          alert('Nothing completed');
        }*/
      },
      clearCashe() {
        /*if (JSON.parse(localStorage.todoList).length > 0) {
          let isAccept = confirm('Do You want to clear ALL notes?');
          if (isAccept) {
            this.todoList = [];
            localStorage.clear();
            this.isMenuShow = false;
          }
        } else {
          alert('Nothing to delete.');
        }*/
      },
      getAuthorInfo() {
        alert("| created by Ray Vector & Dezl | rayvectorspqr@yahoo.com & demozluk@gmail.com | rayvector.info |");
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
  .appWrap {
    height: 100%;
  }

  .chosen {
    transform: scale(1.05, 1.05);
    transition: .2s;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  .todoWrap {
    position: relative;
    height: 75%;
  }

  .mainTitle {
    user-select: none;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: -0.125rem;
    color: rgba(0, 0, 0, 0.7);
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

  .todoTitle {
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    border-bottom: .0625rem solid rgba(0, 0, 0, 0.5);
    font-size: 2rem;
  }

  .mainIconBtn {
    margin-right: 1.8rem;
  }

  .mainIcon {
    width: 2rem;
    height: 2rem;
  }

  .tabsArea {
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
  }

  .tab {
    display: inline-block;
    min-width: 15%;
    width: 100%;
    max-width: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-height: 1rem;
    max-height: 1.5rem;
    font-size: 1rem;
    padding: .8rem .4rem .4rem .4rem;
    border-top: 0;
    border-left: 0;
    border-right: 0.0625rem solid rgba(0, 0, 0, .5);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, .5);
    border-bottom-right-radius: .5rem;
    text-align: left;
    font-weight: normal;
  }

  .activeTab {
    font-weight: bold;
    font-size: 1.5rem;
    border-bottom-left-radius: .5rem;
    border-right: 0.15rem solid rgba(0, 0, 0, .5);
    border-bottom: 0.15rem solid rgba(0, 0, 0, .5);
  }

  .tabNameWrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .tabName {
    background-color: unset;
    border: unset;

  }

  .defTab {
    min-width: 10%;
    width: 1rem;
    height: 1.8rem;
    font-size: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem;
  }


  .tabSettingBtn {
    width: 1.2rem;
    height: 1.2rem;
  }

  .addNewTabIcon {
    display: inline-block;
    transition: all .3s ease;
  }

  .addNewTaskIcon {
    display: inline-block;
    transition: all .3s ease;
  }

  .swipeIcon {
    transform: rotate(360deg);
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
  }

  .menuOpen .tab {
    padding: 1rem;
    display: flex;
    width: 100%;
    max-width: 91%;
    border-radius: 0;
  }

  .menuOpen .activeTab {
    border-top: 0;
    border-left: 0;
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.5);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.5);
  }

  .menuOpen .defTab {
    border-top: 0;
    border-left: 0;
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.5);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.5);
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
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .manageTab svg {
    height: 50%;
    width: 50%;
  }

  .manageTab:nth-child(2) {
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.5);
    margin-right: .5rem;
  }

  .todoItemsList {
    transition: all .3s ease-in-out;
  }

  .swipePage {
    opacity: 0;
  }


  .userMenu {
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .todoBtn {
    margin-left: 1rem;
    padding: 0.1rem;
    color: rgba(0, 0, 0, 0.7);
    border: none;
    cursor: pointer;
    user-select: none;
    backface-visibility: hidden;
    font-size: 2rem;
    line-height: 1;
    transition: .3s;
  }

  .todoBtn:hover {
    color: rgba(0, 0, 0, .6);
  }

  .addTaskFieldWrap {
    flex-grow: 2;
  }

  .addTaskField {
    width: 100%;
    padding-bottom: 1rem;
    background: transparent;
    transition: .3s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    font-size: 1rem;
    color: rgb(84, 84, 84);
    border: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    -webkit-border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    border-right: 0;
    border-right: 0;
    border-top: 0;
    -webkit-border-top: 0;
    -webkit-border-left: 0;
    -webkit-border-left: 0;
    -webkit-appearance: none;
  }

  /*
    .addTaskField:focus {
      background: rgba(50, 50, 50, 0.1);
      border: 0;
      -webkit-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
      -moz-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
      box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
    }*/

  .addTaskField:focus {
    outline: none;
  }

  .todoItemsList {
    padding-right: 0.3125rem;
    width: 100%;

  }

  /*animation:*/
  .appMenuFade-enter-active, .appMenuFade-leave-active {
    transition: .3s;
  }

  .appMenuFade-enter, .appMenuFade-leave-to {
    transform: translateY(-5rem);
  }


  /*animation:*/
  .itemFade-move {
    transition: .3s;
  }

  .itemFade-enter-active, .itemFade-leave-active {
    transition: .6s;
    transform: translateX(0);
  }

  .itemFade-enter, .itemFade-leave-to {
    transform: translateX(2rem);
    opacity: 0;
  }
</style>
