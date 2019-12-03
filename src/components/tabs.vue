<template>
  <div
    :class="{menuOpen: isTabMenuShow}"
    class="tabsArea"
    :style="{backgroundImage: 'url('+require('../assets/img/'+getThemeName+'.jpg')+')'}"
  >

    <draggable
      :delay="400"
      chosenClass="drag-chosen"
      class="todoTabsList _scrollBar"
      handle=".handle"
      tag="div"
      :sort="true"
      v-model="newTabList"
    >

      <tab-item
        v-for="(item, index) in getTabList"
        :index="index"
        :item="item"
        :key="item.id"
        :isTabMenuShow="isTabMenuShow"
      ></tab-item>
    </draggable>
    <div class="tabsEditMenu">
      <div @click="isTabMenuShow = !isTabMenuShow" class="tab defTab _small-part">
        <button
          class="defTabWrap"
          v-show="!isTabMenuShow"
        >
          <tabs-setting-icon></tabs-setting-icon>
        </button>
        <button class="defTabWrap" v-show="isTabMenuShow">
          <btn-rotate btn-type="crossIcon"></btn-rotate>
        </button>
      </div>
      <div @click="addNewTab" class="tab defTab _small-part" v-show="isTabMenuShow">
        <btn-rotate btn-type="plusIcon"></btn-rotate>
      </div>
    </div>
  </div>
</template>

<script>
  import TabItem from "./parts/tabItem";
  import draggable from 'vuedraggable'
  import TabsSettingIcon from "./UI/tabs-setting-icon";
  import AddNewTabIcon from "./UI/add-newTab-icon";
  import BtnRotate from "./UI/temp/btn-rotate";

  export default {
    name: "tabs",
    components: {BtnRotate, AddNewTabIcon, TabsSettingIcon, draggable, TabItem},
    data() {
      return {
        isTabMenuShow: false,
      }
    },
    computed: {
      getThemeName() {
        return this.$store.state.themes.themesList[this.$store.state.themes.activeTheme].themeName;
      },
      getTabList() {
        return this.$store.state.tabs.tabsList;
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
      addNewTab() {
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
    background-size: 0;
    border-top: .0625rem solid rgba(0, 0, 0, .3);
    padding-top: .0625rem;
  }

  .tabsEditMenu {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .tab-item-wrap {
    position: relative;
    display: flex;
    min-width: 25%;
    max-width: 50%;
    min-height: 1.2rem;
    height: 100%;
  }

  .tab {
    padding: .8rem .4rem .4rem .4rem;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    font-weight: normal;
    overflow: hidden;
  }

  .todoTabsList {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
  }

  ._scrollBar::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  ._scrollBar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
  }

  ._scrollBar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #A0A0A0;
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
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: 0;
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
    z-index: 2;
    position: absolute;
    right: 0;
    padding-bottom: 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 75%;
    background-color: #f0f0f0;
    -webkit-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, .4);
    -moz-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, .4);
    box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 1);
    overflow: hidden;
  }

  .menuOpen.tabsArea {
    border-top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column-reverse;
  }

  .menuOpen .todoTabsList {
    display: block;
  }


  .menuOpen .tabsEditMenu {
    margin-bottom: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .menuOpen .defTab {
    width: 20%;
  }

  .menuOpen .defTab:first-child {
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: 0;
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

  @media screen and (min-width: 1000px) {
    .tabsEditMenu {
      width: unset;
      cursor: pointer;
    }

    .menuOpen .tabsEditMenu {
      flex-direction: row-reverse;
    }

    .menuOpen .defTab {
      border-bottom-right-radius: .5rem;
      border-bottom-left-radius: 0;
    }

    .menuOpen .defTab:first-child {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: .5rem;
    }

    .tab-item-wrap {
      min-width: 10%;
      max-width: 15%;
      cursor: pointer;
    }

    .defTab {
      min-width: unset;
      max-width: unset;
    }

    .menuOpen.tabsArea {
      max-width: 400px;
      max-height: 500px;
      border: 1px solid #797979;
      border-radius: 10px;
    }
  }

</style>
