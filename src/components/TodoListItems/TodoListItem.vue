<template>

  <li
    class="todoItemWrap handle"
    :class="{completed: item.checked, editableMod:isEditable}"
  >
    <label class="todoItemNameDivider">
      <input
        type="checkbox"
        class="completeTask"
        :checked="getCheck"
        :value="getCheck"
        @input="completeTask"
      >
    </label>
    <div class="todoItem">
      <v-touch
        class="todoItemNameWrap"
        tag="label"
        v-on:swipeleft="onSwipeLeft"
        v-on:swiperight="$emit('delete')"
      >
        <label>
          <input
            type="text"
            class="todoItemName"
            :value="itemName"
            :disabled="!isEditable"
            @input="name = $event.target.value"
            @keyup.enter="update"
          >
        </label>
      </v-touch>
    </div>
    <button class="manageItemBtns deleteTodoItem" @click="$emit('delete')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.0168 2.29813C17.0818 1.02891 18.974 0.863357 20.2433 1.92836V1.92836C21.5125 2.99337 21.678 4.88563 20.613 6.15486L18.4552 8.72652C17.3901 9.99575 15.4979 10.1613 14.2287 9.09629V9.09629C12.9594 8.03129 12.7939 6.13902 13.8589 4.8698L16.0168 2.29813Z"
          fill="#494949"></path>
        <path
          d="M4.97624 15.4557C6.04124 14.1865 7.93351 14.021 9.20274 15.086V15.086C10.472 16.151 10.6375 18.0432 9.57251 19.3125L7.75727 21.4758C6.69226 22.745 4.8 22.9105 3.53077 21.8455V21.8455C2.26155 20.7805 2.096 18.8883 3.161 17.619L4.97624 15.4557Z"
          fill="#494949"></path>
        <rect y="5.8288" width="6" height="26" rx="3" transform="rotate(-50 0 5.8288)" fill="#494949"></rect>
      </svg>
    </button>
    <transition name="saveItemBtnFade">
      <button
        v-show="isEditable"
        class="manageItemBtns saveTodoItem" @click="update">
        <svg width="34" height="30" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.3566 14.8563C1.08738 13.7913 0.921829 11.899 1.98683 10.6298V10.6298C3.05184 9.36056 4.94411 9.19501 6.21333 10.26L8.37664 12.0752C9.64587 13.1403 9.81142 15.0325 8.74642 16.3017V16.3017C7.68141 17.571 5.78914 17.7365 4.51992 16.6715L2.3566 14.8563Z"
            fill="#494949"></path>
          <rect x="12.8288" y="23.7739" width="6" height="26" rx="3" transform="rotate(-140 12.8288 23.7739)" fill="#494949"></rect>
        </svg>

      </button>
    </transition>


  </li>
</template>

<script>


  export default {
    name: 'TodoListItem',
    data() {
      return {
        name: '',
        isEditable: false,
        checked: this.item.checked,
      }
    },
    computed: {
      itemName() {
        return this.item.txt
      },
      getCheck() {
        return this.item.checked
      }
    },
    props: ['item'],
    methods: {
      completeTask() {
        this.checked = !this.checked;
        this.$emit('toggle', this.checked);
      },
      update() {
        this.isEditable = false;
        if (this.name !== '') {
          this.$emit('update', {txt: this.name, id: this.item.id});
        }
      },
      onSwipeLeft() {
        if (this.isEditable === false) {
          this.isEditable = true;
          this.$nextTick(() => {
            this.$el.querySelector('input[type=text]').focus()
          });
        }
      },
    },

  }
</script>

<style scoped lang="scss">

  .todoItemWrap {
    padding: 0.8rem 1rem;
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .todoItemNameDivider {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
  }

  .completeTask {
    width: 1rem;
    height: 1rem;
  }

  .todoItemNameWrap {
    width: 90%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .todoItem {
    width: 100%;
  }

  .todoItemName {
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    font-size: 1.3rem;
    border: none;
    background-color: unset;
    color: darkred;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .editableMod {
    -webkit-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.3);
    -moz-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.3);
    box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.3);
  }

  .todoItemName:disabled {
    background-color: unset;
    color: rgb(84, 84, 84);
  }

  .todoItemName:focus {
    -webkit-touch-callout: inherit;
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

  .itemLabel {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .manageItemBtns {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
  }

  .deleteTodoItem svg{
    width: 80%;
    height: 80%;
  }

  .deleteTodoItem:hover {
    text-shadow: 0 0.5625rem 0.625rem rgba(150, 150, 150, 1);
    color: rgba(255, 5, 5, 0.8);
  }

  .saveTodoItem svg{
    width: 100%;
    height: 100%;
  }

  .saveTodoItem:hover {
    text-shadow: 0 0.5625rem 0.625rem rgba(150, 150, 150, 1);
    color: rgba(255, 5, 5, 0.8);
  }

  .completed {
    background-color: #cecece61;
    opacity: .5;
  }

  /*animation:*/
  .saveItemBtnFade-enter-active, .saveItemBtnFade-leave-active {
    transition: .3s;
  }

  .saveItemBtnFade-enter, .saveItemBtnFade-leave-to {
    opacity: 0;
  }
</style>
