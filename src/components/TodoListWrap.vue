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
        maxlength="20"
      >
    </div>
    <div class="todoItemsList">
      <todoListItem
        v-for="(item, index) in todoList"
        :name="item"
        :key="index"
        @delete="delTaskItem(index)"
        @update="updateItem($event, index)"
      ></todoListItem>
    </div>
  </ul>

</template>

<script>
  import todoListItem from './TodoListItems/TodoListItem.vue'

  export default {
    name: 'TodoListWrap',
    data() {
      return {
        val: '',
        todoList: [],
      }
    },
    methods: {
      addNewTask() {
        if (this.val !== '') {
          this.todoList.push(this.val);
        }
        this.val = '';
      },
      delTaskItem(id) {
        this.todoList.splice(id, 1);
      },
      updateItem(name, index) {
        console.log( name, index)
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
      todoListItem
    },
    beforeMount() {
      if (localStorage.todoList) {
        this.todoList = localStorage.todoList.split(',');
      }
    },
    mounted() {
      window.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          if (this.val != '') {
            this.addNewTask()
          }
        }
      })
    },
    watch: {
      todoList(newTodoList) {
        localStorage.todoList = newTodoList;
      }
    }
  }
</script>

<style scoped lang="scss">
  .todoWrap {
    position: relative;
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
  }

  .todoClearBtn:hover {
    color: rgba(255, 5, 5, 0.8);
  }

  .todoTitle {
    margin-bottom: 1rem;
    padding: 1.8rem;
    padding-bottom: 1rem;
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
    flex-grow: 1;
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

  .addTaskField:hover {
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 1);
  }

  .addTaskField:focus {
    outline: none;
  }

  .todoItemsList {
    padding-right: 5px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 16.125rem;
  }
</style>
