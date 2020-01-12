<template>
  <div
      :class="{menuOpen: isTabMenuShow}"
      class="tabsArea"
      :style="{backgroundImage: 'url('+require('../assets/img/'+getThemeName+'.jpg')+')'}"
  >

    <draggable
        :delay="400"
        chosenClass="drag-chosen"
        class="todoTabsList-drag scrollBar"
        handle=".handleTab"
        tag="div"
        :sort="true"
        v-model="newTabList"
    >
      <transition-group name="tabFade" tag="div" class="todoTabsList">
        <tab-item
            v-for="(item, index) in getTabList"
            :index="index"
            :item="item"
            :key="item.id"
            :isTabMenuShow="isTabMenuShow"
        ></tab-item>
      </transition-group>
    </draggable>
    <div class="tabsEditMenu">
      <div @click="isTabMenuShow = !isTabMenuShow" class="tab defTab _small-part">
        <button
            class="defTabWrap"
            v-if="!isTabMenuShow"
        >
          <tabs-setting-icon></tabs-setting-icon>
        </button>
        <button class="defTabWrap" v-else>
          <btn-animate btn-name="crossIcon" animation-style="_iconRotate"></btn-animate>
        </button>
      </div>
      <div @click="addNewTab" class="tab defTab _small-part" v-show="isTabMenuShow">
        <btn-animate btn-name="plusIcon" animation-style="_iconRotate"></btn-animate>
      </div>
    </div>
  </div>
</template>

<script>
  import TabItem from "./parts/tabItem";
  import draggable from 'vuedraggable'
  import TabsSettingIcon from "./UI/tabs-setting-icon";
  import BtnAnimate from "./UI/temp/btn-animate";

  export default {
    name: "tabs",
    components: {BtnAnimate, TabsSettingIcon, draggable, TabItem},
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
          return this.$store.state.tabs.tabsList;
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

  .todoTabsList-drag {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .todoTabsList {
    display: flex;
  }

  .tabNameWrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .defTab {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0.0625rem solid rgba(0, 0, 0, 0.3);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.3);
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

  .addNewTabIcon {
    display: inline-block;
    transition: all .3s ease;
  }


  .menuOpen {
    z-index: 2;
    position: absolute;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 85%;
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
    padding-bottom: 2rem;
    display: block;
  }


  .menuOpen .tabsEditMenu {
    margin-bottom: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .menuOpen .defTab:first-child {
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: 0;
  }


  /*SCROLLBAR:*/

  .scrollBar::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: transparent;
  }

  .scrollBar::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  .scrollBar::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: transparent;
  }


  /*animation:*/
  .tabFade-move {
    transition: .3s;
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
      /*max-width: 150px;*/
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

    /*SCROLLBAR:*/

    .scrollBar::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
    }

    .scrollBar::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background-color: transparent;
    }

    .scrollBar::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #A0A0A0;
    }
  }

</style>
