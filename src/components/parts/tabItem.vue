<template>
  <div class="tab"
       :class="{activeTab: index === getActiveTab}"
  >
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
      @click="updateTab(index)"
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
        :value="tabNewName"
        @input="tabName = $event.target.value"
        :disabled="!isTabMenuShow"
        v-show="isTabMenuShow"
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
        this.val = '';
        // ANIMATION SWAP:
        const pages = document.querySelectorAll('.fadeList');
        pages[index].classList.add('swipePage');
        setTimeout(() => {
          pages[index].classList.remove('swipePage');
        }, 100);
      },
      deleteTab(index) {
        this.$store.dispatch("deleteTab", index);
      },
      updateTab() {
        if (this.tabName !== '') {
          this.$store.dispatch("updateTab", {title: this.tabName, id: this.item.id});
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
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

  .defTabWrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .manageTab:nth-child(2) {
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.5);
    margin-right: .5rem;
  }

  .swipePage {
    opacity: 0;
  }

  .menuOpen  .tabNameInput {
    padding-bottom: 0;
  }

</style>