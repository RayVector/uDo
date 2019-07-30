<template>

  <div class="todoWrap">


    <p class="todoTitle">
      <svg
        class="mainIcon"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
          <g fill="#929292" id="icon-45-note-list">
            <path
              d="M5,11 L5,25.9991358 C5,27.0983727 5.8927712,28 6.99406028,28 L21,28 L21,21.9981014 C21,20.8867064 21.8980806,20 23.0059191,20 L28,20 L28,11 L5,11 L5,11 Z M5,10 L5,7.00086422 C5,5.89581743 5.90162726,5 7.00086422,5 L25.9991358,5 C27.1041826,5 28,5.89339733 28,6.99188419 L28,10 L5,10 L5,10 Z M22,28 L22,22.0029293 C22,21.4490268 22.4509752,21 22.990778,21 L28,21 L22,28 L22,28 Z M13,18 L13,19 L20,19 L20,18 L13,18 L13,18 Z M8,17 L8,20 L11,20 L11,17 L8,17 L8,17 Z M9,18 L9,19 L10,19 L10,18 L9,18 L9,18 Z M13,14 L13,15 L25,15 L25,14 L13,14 L13,14 Z M8,13 L8,16 L11,16 L11,13 L8,13 L8,13 Z M9,14 L9,15 L10,15 L10,14 L9,14 L9,14 Z M13,22 L13,23 L19,23 L19,22 L13,22 L13,22 Z M8,21 L8,24 L11,24 L11,21 L8,21 L8,21 Z M9,22 L9,23 L10,23 L10,22 L9,22 L9,22 Z"
              id="note-list"></path>
          </g>
        </g>
      </svg>
      <span
        class="mainTitle"
        @click="getAuthorInfo"
      >
        To Do:
      </span>
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
      <label class="addTaskFieldWrap">
        <input
          type="text"
          class="addTaskField"
          placeholder="Task name..."
          v-model="val"
          maxlength="100"
          required
        >
      </label>
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
        :key="item.id"
        @delete="delTaskItem(item)"
        @update="updateItem"
        @completed="completeItem"
      ></todoListItem>
    </draggable>
  </div>

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
          this.todoList.unshift({txt: this.val, id: newIndex, checked: false});
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
        item.checked = completedItem.checked;
        this.todoList.sort( (a, b)=> {
          return a.checked - b.checked
        })
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
      getAuthorInfo() {
        alert("| created by Ray Vector | rayvectorspqr@yahoo.com | rayvector.info |");
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
    transform: scale(1.05,1.05);
    transition: .2s;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
  .todoWrap {
    position: relative;
    height: 75%;
  }
  .mainTitle {
    user-select: none;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: -0.125rem;
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
    -webkit-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
    -moz-box-shadow:    0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
    box-shadow:         0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
  }

  .todoTitle {
    margin-bottom: 1rem;
    padding: 1rem 1rem 1rem 0;
    display: flex;
    align-items: center;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.5);
    font-size: 2rem;
  }
  .mainIcon {
    width: 2rem;
    height: 2rem;
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
    -webkit-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
    -moz-box-shadow:    0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
    box-shadow:         0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
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
  .addTaskField:focus {
    background: rgba(50, 50, 50, 0.1);
    border: 0;
    -webkit-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
    -moz-box-shadow:    0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
    box-shadow:         0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.36);
  }

  .addTaskField:focus {
    outline: none;
  }

  .todoItemsList {
    padding-right: 0.3125rem;
    width: 100%;
    height: 95%;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 16.125rem;
  }
</style>
