<template>
  <div :class="{menuOpen: isTabMenuShow}" class="tabsArea bg-theme">
    <div class="tabsEditMenu">
      <div @click="isTabMenuShow = !isTabMenuShow" class="tab defTab small-part">
        <button
          class="defTabWrap"
          v-show="!isTabMenuShow"
        >
          <svg
            class="tabSettingBtn"
            width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 6C1.34315 6 0 4.65685 0 3V3C0 1.34315 1.34315 0 3 0V0C4.65685 0 6 1.34315 6 3V3C6 4.65685 4.65685 6 3 6V6Z"
              fill="white" fill-opacity="0.8"></path>
            <rect x="7" y="6" width="6" height="16" rx="3" transform="rotate(-90 7 6)" fill="white"
                  fill-opacity="0.8"></rect>
            <path
              d="M3 14C1.34315 14 0 12.6569 0 11V11C0 9.34315 1.34315 8 3 8V8C4.65685 8 6 9.34315 6 11V11C6 12.6569 4.65685 14 3 14V14Z"
              fill="white" fill-opacity="0.8"></path>
            <rect x="7" y="14" width="6" height="16" rx="3" transform="rotate(-90 7 14)" fill="white"
                  fill-opacity="0.8"></rect>
            <path
              d="M3 22C1.34315 22 0 20.6569 0 19V19C0 17.3431 1.34315 16 3 16V16C4.65685 16 6 17.3431 6 19V19C6 20.6569 4.65685 22 3 22V22Z"
              fill="white" fill-opacity="0.8"></path>
            <rect x="7" y="22" width="6" height="16" rx="3" transform="rotate(-90 7 22)" fill="white"
                  fill-opacity="0.8"></rect>
          </svg>

        </button>
        <button
          class="defTabWrap"
          v-show="isTabMenuShow"
        >
          <svg
            class="tabSettingBtn"
            width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 6C9.34315 6 8 4.65685 8 3V3C8 1.34315 9.34315 0 11 0V0C12.6569 0 14 1.34315 14 3V3C14 4.65685 12.6569 6 11 6V6Z"
              fill="white" fill-opacity="0.8"></path>
            <path
              d="M3 6C1.34315 6 0 4.65685 0 3V3C0 1.34315 1.34315 0 3 0V0C4.65685 0 6 1.34315 6 3V3C6 4.65685 4.65685 6 3 6V6Z"
              fill="white" fill-opacity="0.8"></path>
            <path
              d="M19 6C17.3431 6 16 4.65685 16 3V3C16 1.34315 17.3431 0 19 0V0C20.6569 0 22 1.34315 22 3V3C22 4.65685 20.6569 6 19 6V6Z"
              fill="white" fill-opacity="0.8"></path>
          </svg>
        </button>
      </div>
      <div @click="addNewTab" class="tab defTab small-part" v-show="isTabMenuShow">
        <svg
          class="tabSettingBtn addNewTabIcon"
          width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 16.0001C18.3431 16.0001 17 14.6569 17 13.0001V13.0001C17 11.3432 18.3431 10.0001 20 10.0001H23C24.6569 10.0001 26 11.3432 26 13.0001V13.0001C26 14.6569 24.6569 16.0001 23 16.0001H20Z"
            fill="white" fill-opacity="0.8"></path>
          <path
            d="M3 16.0001C1.34315 16.0001 0 14.6569 0 13.0001V13.0001C0 11.3432 1.34315 10.0001 3 10.0001H6C7.65685 10.0001 9 11.3432 9 13.0001V13.0001C9 14.6569 7.65685 16.0001 6 16.0001H3Z"
            fill="white" fill-opacity="0.8"></path>
          <rect x="10" y="17.0001" width="6" height="9" rx="3" fill="white" fill-opacity="0.8"></rect>
          <rect x="10" y="6.10352e-05" width="6" height="9" rx="3" fill="white" fill-opacity="0.8"></rect>
          <path
            d="M13 16.0001C11.3431 16.0001 10 14.6569 10 13.0001V13.0001C10 11.3432 11.3431 10.0001 13 10.0001V10.0001C14.6569 10.0001 16 11.3432 16 13.0001V13.0001C16 14.6569 14.6569 16.0001 13 16.0001V16.0001Z"
            fill="white" fill-opacity="0.8"></path>
        </svg>
      </div>
    </div>
    <draggable
      :delay="400"
      chosenClass="chosen"
      class="todoTabsList"
      handle=".handle"
      tag="div"
      v-model="newTabList"
      @end="moveItem"
      :sort="true"
    >
      <transition-group
        mode="out-in"
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
    </draggable>
  </div>
</template>

<script>
  import TabItem from "./parts/tabItem";
  import draggable from 'vuedraggable'

  export default {
    name: "tabs",
    components: {draggable, TabItem},
    data() {
      return {
        isTabMenuShow: false,
      }
    },
    computed: {
      getTabList() {
        return this.$store.state.tabs;
      },
      newTabList: {
        get() {
          return this.getTabList
        },
        set(newTabList) {
          this.$store.dispatch('newTabList', newTabList)
        },
      }
    },
    methods: {
      moveItem() {
        this.$store.dispatch("sortTabsList");
      },
      addNewTab() {
        // ANIMATION ICON:
        const icon = document.querySelector('.addNewTabIcon');
        icon.classList.toggle('swipeIcon');
        this.$store.dispatch("addTab");
      },
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
  
  .tabsEditMenu {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .tab {
    display: inline-block;
    min-width: 25%;
    max-width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-height: 1.2rem;
    height: 100%;
    max-height: 1.2rem;
    font-size: 1rem;
    padding: .8rem .4rem .4rem .4rem;
    border-top: 0;
    border-left: 0;
    border-right: 0.0625rem solid rgba(0, 0, 0, .5);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, .5);
    border-bottom-right-radius: .5rem;
    text-align: left;
    font-weight: normal;
    overflow: hidden;
  }


  .activeTab {
    min-height: 1.5rem;
    height: 100%;
    max-height: 1.5rem;

    font-weight: bold;
    font-size: 1.5rem;
    border-bottom-left-radius: .5rem;
    border-right: 0.15rem solid rgba(0, 0, 0, .5);
    border-bottom: 0.15rem solid rgba(0, 0, 0, .5);
  }

  .todoTabsList {
    padding-right: 0.3125rem;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .tabNameWrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .defTab {
    min-width: unset;
    width: 100%;
    max-width: unset;
    min-height: 1.5rem;
    height: 100%;
    max-height: 1.5rem;
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
    overflow-y: hidden;
    overflow-x: auto;
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
    height: 75%;
    background-color: #f0f0f0;
    -webkit-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.4);
    -moz-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.4);
    box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.4);
    overflow: hidden;
  }

  .menuOpen .tab {
    min-height: 1.5rem;
    height: 100%;
    max-height: 1.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    width: unset;
    min-width: unset;
    max-width: unset;
    border-radius: 0;
    resize: unset;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .menuOpen .activeTab {
    border-left: 0;
    border-right: 0;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.5);
  }

  .menuOpen .tabsEditMenu {
    width: 100%;
  }

  .menuOpen .defTab {
    width: 50%;
    min-width: unset;
    max-width: unset;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.5);
  }

  .menuOpen .defTab:nth-child(1) {
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.5);
  }


  .menuOpen .tabSettingBtn {
    width: 1.8rem;
    height: 1.8rem;
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

  .menuOpen .chosen {
    transform: scale(1.05, 1.05);
    transition: .2s;
    background-color: rgba(0, 0, 0, .2);
    z-index: 999;
  }

  .menuOpen .todoTabsList {
    padding-top: 2rem;
    padding-right: 0;
  }

  .swipePage {
    opacity: 0;
  }

  .menuOpen .fadeTabList {
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
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