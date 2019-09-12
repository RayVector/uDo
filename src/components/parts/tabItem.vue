<template>
  <div class="tab"
       :class="{activeTab: index === getActiveTab}"
  >
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
        class="renameTabIcon" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.3934 4.3934C8.59315 2.19365 11.4224 0.732262 14.4894 0.211588C17.5565 -0.309086 20.7095 0.136716 23.512 1.48727C26.3145 2.83781 28.6277 5.02629 30.1314 7.74966C31.635 10.473 32.2548 13.5965 31.9048 16.6877C31.5547 19.7789 30.2523 22.6847 28.1777 25.0029C26.1032 27.3211 23.3592 28.937 20.3257 29.6267C17.2922 30.3164 14.1193 30.0459 11.2464 28.8526C8.37339 27.6594 5.94252 25.6024 4.29033 22.9664L8.20483 20.5128C9.34816 22.3369 11.0303 23.7604 13.0184 24.5861C15.0065 25.4119 17.2022 25.599 19.3014 25.1218C21.4006 24.6445 23.2995 23.5263 24.7351 21.9221C26.1707 20.3179 27.072 18.307 27.3142 16.1679C27.5564 14.0288 27.1275 11.8673 26.087 9.98272C25.0464 8.09813 23.4457 6.58369 21.5063 5.64911C19.567 4.71452 17.3851 4.40602 15.2627 4.76633C13.1403 5.12664 11.1824 6.13793 9.66017 7.66017L6.3934 4.3934Z"
          fill="#494949"></path>
        <circle cx="4" cy="10" r="4" fill="#494949"></circle>
      </svg>
    </button>
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
    },
    methods: {
      swapTab(index) {
        this.$store.dispatch("swapTab", index);
        // ANIMATION SWAP:
        const page = document.querySelectorAll('.fadeList')[index];
        page.classList.add('swipePage');
        setTimeout(() => {
          page.classList.remove('swipePage');
        }, 100);
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

  .deleteTabIcon {
    transition: .3s;
  }

  .renameTabIcon {
    transition: .3s;
  }

  .manageTab:nth-child(2) {
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.5);
    margin-right: .5rem;
  }


  .menuOpen .tabNameInput {
    padding-bottom: 0;
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