<template>
  <div class="smart-item-menu">
    <div class="smartMenu_shadow" v-show="isMenuShow" @click="closeMenu"></div>
    <transition name="fadeSmartMenu">
      <div class="smartMenu todoItemMenu _small-part" v-show="isMenuShow">
        <button class="manageItemBtns" @click="$emit('completeItem')" v-show="!getIsTaskComplete">
          <complete-icon></complete-icon>
        </button>
        <button class="manageItemBtns" @click="$emit('uncompleteItem')" v-show="getIsTaskComplete">
          <uncomplete-item-icon></uncomplete-item-icon>
        </button>
        <button @click="isTabsListShow = !isTabsListShow" v-show="getTabsList.length > 1">
          <span class="current-tab-name">
            {{getActiveTabName}}
          </span>
        </button>
        <transition name="fadeTabsListInMenu">
          <span class="smenu-tabs-list _small-part _scrollBar" v-show="isTabsListShow">
            <span class="tab-item"
                  v-for="tab in getTabsList"
                  :key="tab.id"
                  @click="tabChoice(tab)"
            >
              {{getActiveTabID !== tab.id ? tab.title : ''}}
            </span>
          </span>
        </transition>
        <button class="manageItemBtns" @click="$emit('deleteItem')">
          <trash-icon></trash-icon>
        </button>
      </div>
    </transition>
  </div>

</template>

<script>
  import CompleteIcon from "../components/UI/complete-icon";
  import TrashIcon from "../components/UI/trash-icon";
  import UncompleteItemIcon from "../components/UI/uncomplete-item-icon";

  export default {
    name: "smart-item-menu",
    components: {UncompleteItemIcon, TrashIcon, CompleteIcon},
    props: ['isMenuShow', 'isTaskComplete'],
    computed: {
      getIsTaskComplete() {
        return this.isTaskComplete
      },
      getTabsList() {
        return this.$store.state.tabs.tabsList
      },
      getActiveTabName() {
        return this.$store.state.tabs.tabsList[this.$store.state.tabs.activeTab].title
      },
      getActiveTabID() {
        return this.$store.state.tabs.tabsList[this.$store.state.tabs.activeTab].id
      }
    },
    data() {
      return {
        isTabsListShow: false
      }
    },
    methods: {
      closeMenu() {
        this.$emit('closeMenu');
        this.isTabsListShow = false;
      },
      tabChoice(tab) {
        this.isTabsListShow = false;
        this.$emit('moveItem', tab)
      }

    }
  }
</script>

<style scoped lang="scss">
  .smartMenu_shadow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
  }

  .todoItemMenu {
    padding: 0.5rem;
    z-index: 2;
    position: fixed;
    bottom: 40%;
    top: 40%;
    right: 0;
    min-height: 130px;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px 0 0 5px;
    transition: .3s;
    opacity: 1;
    transform: translateX(0);

    -webkit-box-shadow: -5px 6px 17px 0 rgba(50, 50, 50, .3);
    -moz-box-shadow: -5px 6px 17px 0 rgba(50, 50, 50, .3);
    box-shadow: -5px 6px 17px 0 rgba(50, 50, 50, .3);
  }

  .manageItemBtns {
    height: 2.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
  }

  .manageItemBtns svg {
    width: 30px;
    height: 30px;
  }

  .current-tab-name {
    color: rgba(255, 255, 255, .8);
    font-weight: bold;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .smenu-tabs-list {
    z-index: 3;
    position: absolute;
    top: 80px;
    right: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    max-height: 150px;
    border: 1px solid silver;
    overflow: auto;
    background-color: white;
    padding: 0.5rem 1rem;
    -webkit-box-shadow: 0 10px 17px 0 rgba(50, 50, 50, 0.5);
    -moz-box-shadow: 0 10px 17px 0 rgba(50, 50, 50, 0.5);
    box-shadow: 0 10px 17px 0 rgba(50, 50, 50, 0.5);
  }

  .tab-item {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .tab-item:not(:last-child):not(:first-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid silver;
  }


  /*ANIMATIONS:*/

  .fadeSmartMenu-enter-active, .fadeSmartMenu-leave-active {
    transition: .3s;

  }

  .fadeSmartMenu-enter, .fadeSmartMenu-leave-to {
    opacity: .8;
    transform: translateX(60px);
  }

  .fadeTabsListInMenu-enter-active, .fadeTabsListInMenu-leave-active {
    transition: all .3s ease;
  }

  .fadeTabsListInMenu-enter, .fadeTabsListInMenu-leave-to {
    opacity: .8;
    max-height: 0;
  }


  @media screen and (min-width: 1000px) {
    .todoItemMenu {
      width: 100%;
      max-width: 70px;
    }
  }
</style>
