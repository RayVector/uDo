<template>
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
      <div
        class="defTabWrap"
        v-show="!isTabMenuShow"
      >
        <svg
          class="tabSettingBtn" fill="none" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
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
        class="defTabWrap"
        v-show="isTabMenuShow"
      >
        <svg
          class="tabSettingBtn"
          width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 6C9.34315 6 8 4.65685 8 3V3C8 1.34315 9.34315 0 11 0V0C12.6569 0 14 1.34315 14 3V3C14 4.65685 12.6569 6 11 6V6Z"
            fill="#494949"></path>
          <path
            d="M3 6C1.34315 6 0 4.65685 0 3V3C0 1.34315 1.34315 0 3 0V0C4.65685 0 6 1.34315 6 3V3C6 4.65685 4.65685 6 3 6V6Z"
            fill="#494949"></path>
          <path
            d="M19 6C17.3431 6 16 4.65685 16 3V3C16 1.34315 17.3431 0 19 0V0C20.6569 0 22 1.34315 22 3V3C22 4.65685 20.6569 6 19 6V6Z"
            fill="#494949"></path>
        </svg>
      </div>
    </div>
    <transition-group
      name="tabFade"
      tag="ul"
      class="fadeTabList"
    >
      <tab-item
        v-for="(item, index) in getTabList"
        :index="index"
        :item="item"
        :key="item.id"
        :isTabMenuShow="isTabMenuShow"
      ></tab-item>
    </transition-group>
  </div>
</template>

<script>
  import TabItem from "./parts/tabItem";
  export default {
    name: "tabs",
    components: {TabItem},
    data() {
      return {
        isTabMenuShow: false,
      }
    },
    computed: {
      getTabList() {
        return this.$store.state.tabs;
      }
    },
    methods: {
      addNewTab() {
        this.$store.dispatch("addTab");
        // ANIMATION ICON:
        const icon = document.querySelector('.addNewTabIcon');
        icon.classList.toggle('swipeIcon');
      },
      showTabsList() {
        const icon = document.querySelector('.deleteCompletedBtnItem');
        icon.classList.add('increaseIcon');

        setTimeout(() => {
          icon.classList.remove('increaseIcon');
        }, 400);

        this.isTabMenuShow = !this.isTabMenuShow;
      }
    },
  }
</script>

<style lang="scss" scoped>
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

  .fadeTabList {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    display: flex;
    width: 100%;
    transition: all .3s ease-in-out;
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

  .menuOpen .defTab:nth-child(2) {
    margin-bottom: 1rem;
    box-shadow: 0 10px 13px 0 rgba(50, 50, 50, 0.27);
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

  .menuOpen .fadeTabList {
    flex-direction: column;
  }

  /*animation:*/
  .tabFade-move {
    transition: .3s;
  }

  .tabFade-enter-active, .tabFade-leave-active {
    transition: .6s;
    transform: translateX(0);
  }

  .tabFade-enter, .tabFade-leave-to {
    transform: translateX(2rem);
    opacity: 0;
  }

</style>