<template>
  <div class="tab-item-wrap">
    <div class="tab _small-part"
         :class="{activeTab: index === getActiveTab}"
         @click="swapTab(index)"
    >
      <div class="tabInfo">
        <p class="tabTasksAmount">{{getTasksList}}</p>
      </div>
      <div
        class="tabName"
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
          :disabled="!isTabMenuShow"

          @input="updateItemName"
          :value="tabNewName"
        >
      </label>
      <div class="editTabMenu">
        <button
          @click="isMenuShow = true"
          v-show="isTabMenuShow"
          class="manageTab dragTabHandle handle">
          <three-dots-icon></three-dots-icon>
        </button>
      </div>
    </div>
    <smart-tab-menu
      :isMenuShow="isMenuShow"
      v-show="isMenuShow"
      @closeMenu="isMenuShow = false"
      @deleteItem="deleteItem"
      @deleteCompleted="deleteCompleted"
      @deleteAll="deleteAll"
    ></smart-tab-menu>
  </div>

</template>

<script>
  import SmartTabMenu from "../../popups/smart-tab-menu";
  import ThreeDotsIcon from "../UI/three-dots-icon";

  export default {
    name: "tabItem",
    components: {ThreeDotsIcon, SmartTabMenu},
    props: ["isTabMenuShow", "index", "item"],
    data() {
      return {
        tabName: '',
        isEditable: false,
        isMenuShow: false,
      }
    },
    computed: {
      getActiveTab() {
        return this.$store.state.tabs.activeTab
      },
      tabNewName() {
        return this.item.title
      },
      getTasksList() {
        return this.$store.state.tabs.tabsList[this.index].todoItems.length
      }
    },
    methods: {
      swapTab(index) {
        if (index !== this.getActiveTab) {
          this.$store.dispatch("swapTab", index);
        }
      },
      updateItemName(e) {
        this.tabName = e.target.value;
        if (this.tabName !== '') {
          this.$store.dispatch("updateTab", {title: this.tabName, id: this.item.id});
        }
      },
      deleteItem() {
        this.$store.dispatch("swapTab", 0);
        this.$store.dispatch("deleteTab", this.index);
        this.$store.dispatch("openSnackbar", this.$t('snackbars.tabDeleted'));
      },
      deleteCompleted() {
        this.isEditable = false;
        this.isMenuShow = false;
        this.$store.dispatch('deleteCompleted', this.index);
      },
      deleteAll() {
        this.isEditable = false;
        this.isMenuShow = false;
        this.$store.dispatch('deleteAll', this.index);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tab {
    width: 100%;
    padding: .8rem .4rem .4rem .4rem;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    font-weight: normal;
    overflow: hidden;

    border-top: 0;
    border-right: 0;
    border-left: 0.0625rem solid rgba(0, 0, 0, .3);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, .3);
    border-bottom-right-radius: .5rem;

    font-size: 1rem;

  }

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

  .activeTab {
    min-height: 1.5rem;
    height: 100%;
    max-height: 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    border-bottom-right-radius: .5rem;
    border-left: 0.15rem solid rgba(0, 0, 0, .4);
    border-bottom: 0.15rem solid rgba(0, 0, 0, .4);
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

  .menuOpen .tab-item-wrap {
    height: unset;
    width: 100%;
    max-width: 100%;
  }

  .menuOpen .tab {
    display: flex;
    max-height: unset;
    border-left: 0;
    border-right: 0;
  }

  .menuOpen .tabName {
    width: 100%;
    font-size: 1.5rem;
  }

  .menuOpen .tabTasksAmount {
    display: block;
  }

  .menuOpen .activeTab {
    min-height: unset;
    height: unset;
    max-height: unset;
    font-weight: bold;
    border-bottom-right-radius: unset;
    border-left: unset;
    border-bottom: 0.15rem solid rgba(0, 0, 0, 0.4);
  }

  .drag-chosen {
    opacity: .5;
  }

  .tabInfo {
    align-items: center;
    padding-right: 1rem;
  }

  .editTabMenu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }


</style>