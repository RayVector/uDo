<template>
  <div class="workspace _scrollBar"
  >
    <div class="userMenu">

      <label class="addTaskFieldWrap">
        <input
            class="addTaskField _theme-input _theme-addTaskField"
            maxlength="100"
            :placeholder="$t('page.newTodoItem')"
            required
            type="text"
            v-model="val"
            @keypress.enter="addNewTask"
        >
      </label>
      <button class="todoBtn" @click="addNewTask">
        <svg
            class="todo-pen-icon"
            width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.4977" cy="26.2265" r="3" transform="rotate(40 4.4977 26.2265)" fill="white"
                  class="_pen-icon-add-task"
                  fill-opacity="0.8"></circle>
          <rect x="22.126" width="6" height="26" rx="3" transform="rotate(40 22.126 0)" fill="white"
                class="_pen-icon-add-task"
                fill-opacity="0.8"></rect>
        </svg>
      </button>
    </div>
    <draggable
        :delay="400"
        chosenClass="drag-chosen"
        class="todoItemsList"
        handle=".handleTodoItem"
        tag="div"
        :sort="true"
        v-model="newList"
    >
      <transition-group name="itemFade" class="todoItemsList">
        <todo-item
            v-for="(item, index) in getList"
            :item="item"
            :index="index"
            :key="index"
        ></todo-item>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import TodoItem from "./parts/todoItem";

  export default {
    name: "page",
    components: {
      TodoItem,
      draggable,
    },
    data() {
      return {
        val: '',
        activeTask: 0,
      }
    },
    computed: {
      getTabList() {
        return this.$store.state.tabs.tabsList;
      },
      getList() {
        /*!!!MAIN!!! need return from Store Getters*/
        if (this.$store.state.tabs.tabsList.length > 0) {
          return this.$store.state.tabs.tabsList[this.getActiveTab].todoItems;
        } else {
          return [];
        }
      },
      getActiveTab() {
        return this.$store.state.tabs.activeTab
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
      addNewTask() {
        if (this.getTabList.length > 0) {
          if (this.val !== '') {
            // ANIMATION:
            const icon = document.querySelector('._pen-icon-add-task');
            icon.classList.toggle('_iconRotate');

            this.$store.dispatch("addTask", this.val);
          } else {
            this.$store.dispatch("openSnackbar", this.$t('page.emptyField'));
          }
          this.val = '';
        } else {
          this.$store.dispatch("openSnackbar", this.$t('page.noneTabs'));
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .workspace {
    height: 79%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .userMenu {
    margin-bottom: .5rem;
    padding: .5rem 1rem;
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
    width: 2.5rem;
    height: 2.5rem;
  }

  .todoBtn:hover {
    color: rgba(0, 0, 0, .6);
  }

  .todo-pen-icon {
    transition: all .3s ease;
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
    border: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    border-right: 0;
    border-right: 0;
    border-top: 0;
    -webkit-appearance: none;
  }

  .addTaskField::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .addNewTaskIcon {
    display: inline-block;
    transition: all .3s ease;
  }

  .drag-chosen {
    opacity: .5;
  }

  .todoItemsList {
    padding-right: 0.3125rem;
    width: 100%;
    transition: all .3s ease;
    opacity: 1;
  }

  .fadeList {
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    /*height: 100%;*/
    /*border-top: 0.0325rem solid rgba(0, 0, 0, 0.5);*/
  }


  .addTaskField:focus {
    outline: none;
  }

  /*animation:*/
  .itemFade-move {
    transition: all .3s ease;
  }

  @media screen and (min-width: 1000px) {
    .workspace {
      padding: 20px;
    }

    .userMenu {
      max-width: 20%;
      padding-left: 0;
    }

    .todoItemsList {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

  }
</style>
