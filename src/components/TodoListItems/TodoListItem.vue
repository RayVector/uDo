<template>

  <li
    class="todoItemWrap handle"
    :class="{completed: item.checked, editableMod:isEditable}"
  >
    <label class="todoItemNameDivider">
      <input
        type="checkbox"
        class="completeTask"
        :checked="checked"
        :value="checked"
        @input="$emit('toggle', checked = !checked)"
      >
    </label>
    <div class="todoItem">
      <v-touch
        class="todoItemNameWrap"
        tag="label"
        v-on:swipeleft="onSwipeLeft"
        v-on:swiperight="$emit('delete')"
      >
        <input
          type="text"
          class="todoItemName"
          :value="itemName"
          :disabled="!isEditable"
          @input="name = $event.target.value"
          @keyup.enter="update"
        >
      </v-touch>
    </div>
    <div class="deleteTodoItem" @click="$emit('delete')">&#10006;</div>
    <transition name="saveItemBtnFade">
      <button
        v-show="isEditable"
        class="saveTodoItem" @click="update">
        <svg
          enable-background="new 0 0 26 26"
          version="1.1"
          viewBox="0 0 26 26"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.7802734,5.0820313c-0.2939453-0.2929688-0.7685547-0.2929688-1.0605469,0L9.4921875,19.3265381  l-7.2119141-7.2200928c-0.2919922-0.2919922-0.7666016-0.2939453-1.0605469,0c-0.2929688,0.2919922-0.2929688,0.7675781,0,1.0605469  l7.7421875,7.7509766c0.1464844,0.1464844,0.3378906,0.2197266,0.5302734,0.2197266s0.3837891-0.0732422,0.5302734-0.2197266  L24.7802734,6.1425781C25.0732422,5.8496094,25.0732422,5.3740234,24.7802734,
                5.0820313z"
              fill="#1D1D1B"
            >
            </path>
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
    },
    props: ['item'],
    methods: {
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

  .deleteTodoItem {
    margin-left: auto;
    width: 0.9375rem;
    height: 1.625rem;
    display: inline-block;
    cursor: pointer;
    font-size: 1.3rem;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
  }

  .deleteTodoItem:hover {
    text-shadow: 0 0.5625rem 0.625rem rgba(150, 150, 150, 1);
    color: rgba(255, 5, 5, 0.8);
  }

  .saveTodoItem {
    margin-left: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
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
