<template>

  <ul class="todoWrap">


    <p class="todoTitle">
      To Do:
      <button
        class="todoClearBtn"
        @click='clearCashe'

      >
        &#9851;
      </button>
    </p>

    <div class="userMenu">
      <button class="todoBtn" @click='addNewTask'>
        &#9998;
      </button>
      <input
        type="text"
        class="addTaskField"
        placeholder="Task name..."
        v-model="val"
        maxlength="100"
        required
      >
    </div>
    <draggable
      tag="ul"
      class="todoItemsList"
      v-model="todoList"
      handle=".handle"
      @start="drag=true"
      @end="moveItem"
      :options="{delay:600, chosenClass: 'chosen'}"
    >
      <todoListItem
        v-for="(item, index) in getList"
        :item="item"
        :key="index"
        @delete="delTaskItem(item)"
        @update="updateItem"
        @completed="completeItem"
      ></todoListItem>
    </draggable>
  </ul>

</template>

<script>
  import draggable from 'vuedraggable'
  import todoListItem from './TodoListItems/TodoListItem.vue'

  export default {
    name: 'TodoListWrap',
    data() {
      return {
        val: '',
        todoList: [],
      }
    },
    computed: {
      getList() {
        return this.todoList
      }
    },
    methods: {
      addNewTask() {
        if (this.val !== '') {
          let newIndex = this.todoList.length > 0 ? (Math.max(...this.todoList.map(e => e.id)) + 1) : 0;
          this.todoList.push({txt: this.val, id: newIndex, checked: false});
        }
        this.val = '';
      },
      delTaskItem(deletedItem) {
        const item = this.todoList.findIndex(i => i.id === deletedItem.id);
        this.todoList.splice(item, 1);
      },
      updateItem(updatedItem) {
        const item = this.todoList.find(i => i.id === updatedItem.id);
        item.txt = updatedItem.txt
      },
      completeItem(completedItem) {
        const item = this.todoList.find(i => i.id === completedItem.id);
        item.checked = completedItem.checked
      },
      moveItem() {
        localStorage.todoList = JSON.stringify(this.todoList);
      },
      clearCashe() {
        if (localStorage.getItem('todoList') !== '') {
          let isAccept = confirm('Do You want to clear ALL notes?');
          if (isAccept) {
            this.todoList = [];
            localStorage.clear();
          }
        }
      },
    },
    components: {
      draggable,
      todoListItem,
    },
    beforeMount() {
      if (localStorage.todoList) {
        this.todoList = JSON.parse(localStorage.todoList);
      }
    },
    created() {
      window.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          if (this.val !== '') {
            this.addNewTask()
          }
        }
      })
    },
    watch: {
      todoList: {
        handler: function (newTodoList) {
          localStorage.todoList = JSON.stringify(newTodoList);
        },
        deep: true,
      }
    },
  }
</script>



<style scoped lang="scss">
  .chosen {
    transition: .2s;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .todoWrap {
    position: relative;
    height: 75%;
  }

  .todoClearBtn {
    margin-left: auto;
    position: absolute;
    right: 0;
    width: 3rem;
    padding: 0.1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: rgba(255, 255, 255, 0.8);
    border: none;
    cursor: pointer;
    user-select: none;
    backface-visibility: hidden;
    font-size: 1.5rem;
    transition: .3s;
    line-height: 2rem;
  }

  .todoClearBtn:hover {
    color: rgba(255, 5, 5, 0.8);
  }

  .todoTitle {
    margin-bottom: 1rem;
    padding: 1rem;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.5);
    font-size: 2rem;
  }

  .userMenu {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .todoBtn {
    flex-grow: 0.5;
    margin-right: 1rem;
    padding: 0.1rem;
    height: 1.875rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: rgba(255, 255, 255, .8);
    border: none;
    cursor: pointer;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
    font-size: 1rem;
  }

  .todoBtn:hover {
    color: rgba(255, 255, 255, 1);
  }

  .addTaskField {
    flex-grow: 2;
    padding-bottom: 1rem;
    background: transparent;
    border: none;
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    transition: .3s;
    font-size: 0.8rem;
  }
  .addTaskField {
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

  .addTaskField:hover {
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 1);
  }

  .addTaskField:focus {
    outline: none;
  }

  .todoItemsList {
    padding-right: 5px;
    width: 100%;
    height: 95%;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 16.125rem;
  }
</style>
