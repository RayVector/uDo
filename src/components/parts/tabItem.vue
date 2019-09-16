<template>
  <div class="tab"
       :class="{activeTab: index === getActiveTab}"
  >
    <div class="manageTabMenu">
      <button
        @click="deleteTab(index)"
        class="manageTab deleteTabBtn"
        v-show="isTabMenuShow"
      >
        <svg class="deleteTabIcon" fill="none" height="24" viewBox="0 0 24 24" width="24"
             xmlns="http://www.w3.org/2000/svg">
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
        @click="updateTab(index)"
      >
        <svg
          class="renameTabIcon"
          width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.572 3.16496C8.96542 2.05838 11.4224 0.732275 14.4895 0.211601C17.5565 -0.309073 20.7095 0.136729 23.512 1.48728C26.3145 2.83783 28.6277 5.0263 30.1314 7.74967C31.6351 10.473 32.2548 13.5966 31.9048 16.6877C31.5548 19.7789 30.2523 22.6847 28.1777 25.0029C26.1032 27.3211 23.3592 28.937 20.3257 29.6267C17.2922 30.3164 14.1193 30.0459 11.2464 28.8526C8.37341 27.6594 4.99999 24.4665 5 23C5.00001 21.5335 6.89804 19.8917 8.5 21C10.102 22.1083 11.1615 23.5679 13.1059 24.3756C15.0504 25.1832 17.1978 25.3662 19.2509 24.8994C21.3039 24.4326 23.1611 23.339 24.5652 21.77C25.9692 20.2011 26.8507 18.2344 27.0876 16.1423C27.3245 14.0501 26.9051 11.9361 25.8874 10.0929C24.8697 8.24975 23.3041 6.76858 21.4074 5.85452C19.5106 4.94046 17.3766 4.63874 15.3009 4.99113C13.2251 5.34353 13.5 5.5 12 6.59296C10.5 7.68592 8.17859 4.27155 8.572 3.16496Z"
            fill="#494949"></path>
          <circle cx="4" cy="10" r="4" fill="#494949"></circle>
        </svg>

      </button>
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
    <p class="tabTasksAmount">{{getTasksList}}</p>
    <button
      class="dragHandle handle">
      <svg
        class="dragHandleIcon"
        width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.4553 0.353796C15.7866 0.138633 16.2134 0.138633 16.5447 0.353796L27.0257 7.16137C27.8606 7.70368 27.4766 9 26.4809 9H5.51905C4.52344 9 4.1394 7.70368 4.97435 7.16137L15.4553 0.353796Z"
          fill="#494949"></path>
        <path
          d="M16.5447 21.6462C16.2134 21.8614 15.7866 21.8614 15.4553 21.6462L4.97435 14.8386C4.1394 14.2963 4.52344 13 5.51905 13L26.481 13C27.4766 13 27.8606 14.2963 27.0257 14.8386L16.5447 21.6462Z"
          fill="#494949"></path>
      </svg>
    </button>
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
        // ANIMATION SWAP:
        const page = document.querySelector('.todoItemsList');
        page.classList.add('swipePage');
        setTimeout(() => {
          page.classList.remove('swipePage');
        }, 600);
        this.$store.dispatch("swapTab", index);

      },
      deleteTab(index) {
        const icons = document.querySelectorAll('.deleteTabIcon');
        icons[index].classList.toggle('swipeIcon');

        this.$store.dispatch("deleteTab", index);
      },
      updateTab(index) {
        // ANIMATION ICON:

        const icons = document.querySelectorAll('.renameTabIcon');
        icons[index].classList.toggle('swipeIcon');

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
    font-size: 1rem !important;
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
    color: rgba(0, 0, 0, .4);
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
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
    width: 2rem;
    height: 2rem;
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

  .manageTab:nth-child(2) {
    margin-right: .5rem;
  }

  .manageTabMenu {
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

  .menuOpen .dragHandle {
    display: inline-block;
    cursor: e-resize;
  }

  .menuOpen .dragHandleIcon {
    width: 1.4rem;
    height: 1.4rem;
  }

  /*.tabName {
    display: inline-block;
  }

  .tabName:hover {
    animation: marquee 15s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-80%, 0);
    }
  }

  .menuOpen .tabName {
    display: flex;
    animation-play-state: paused
  }*/


</style>