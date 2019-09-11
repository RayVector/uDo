<template>
  <div class="workspace"
  >
    <div class="userMenu">

      <label class="addTaskFieldWrap">
        <input
          class="addTaskField"
          maxlength="100"
          placeholder="Task name..."
          required
          type="text"
          v-model="val"
        >
      </label>
      <button @click='addNewTask' class="todoBtn">
        <svg class="addNewTaskIcon" fill="none" height="24" viewBox="0 0 28 31" width="24"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.5837" cy="26.2265" fill="#494949" r="3" transform="rotate(40 4.5837 26.2265)"></circle>
          <rect fill="#494949" height="26" rx="3" transform="rotate(40 22.212 0)" width="6" x="22.212"></rect>
        </svg>
      </button>
    </div>
    <draggable
      :delay="400"
      chosenClass="chosen"
      class="todoItemsList"
      handle=".handle"
      tag="div"
      v-model="newList"
      @end="moveItem"

      v-for="(dragItem, index) in getTabList"
      v-show="index === $store.state.activeTab"
      :dragItem="dragItem"
      :key="index"
    >
      <transition-group
        name="itemFade"
        tag="ul"
        class="fadeList"
      >
        <todoListItem
          v-for="item in getList"
          :item="item"
          :key="item.id"
        ></todoListItem>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import todoListItem from './TodoListItems/TodoListItem.vue'

  export default {
    name: "page",
    components: {
      draggable,
      todoListItem,
    },
    data() {
      return {
        val: '',
      }
    },
    computed: {
      getTabList() {
        return this.$store.state.tabs;
      },
      getList() {
        /*!!!MAIN!!! return this.$store.getters.sortedToDoList.todoItems;*/
        return this.$store.state.tabs[this.getActiveTab].todoItems
      },
      getActiveTab() {
        return this.$store.state.activeTab
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
        if (this.val !== '') {
          this.$store.dispatch("addTask", this.val);
          // ICON ANIMATION:
          const icon = document.querySelector('.addNewTaskIcon');
          icon.classList.toggle('swipeIcon');
        }
        this.val = '';
      },
      moveItem() {
        this.$store.dispatch("sortTasksList");
      },

    },
  }
</script>

<style lang="scss" scoped>
  .userMenu {
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
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
  }

  .todoBtn:hover {
    color: rgba(0, 0, 0, .6);
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
    color: rgb(84, 84, 84);
    border: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    -webkit-border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    border-right: 0;
    border-right: 0;
    border-top: 0;
    -webkit-border-top: 0;
    -webkit-border-left: 0;
    -webkit-border-left: 0;
    -webkit-appearance: none;
  }

  .addNewTaskIcon {
    display: inline-block;
    transition: all .3s ease;
  }

  .chosen {
    transform: scale(1.05, 1.05);
    transition: .2s;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  .todoItemsList {
    padding-right: 0.3125rem;
    width: 100%;
  }

  .fadeList {
    width: 100%;
    transition: all .3s ease-in-out;
  }

  .addTaskField:focus {
    outline: none;
  }

  /*animation:*/
  .itemFade-move {
    transition: .3s;
  }

  .itemFade-enter-active, .itemFade-leave-active {
    transition: .6s;
    transform: translateX(0);
  }

  .itemFade-enter, .itemFade-leave-to {
    transform: translateX(2rem);
    opacity: 0;
  }
</style>