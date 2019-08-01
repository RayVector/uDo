<template>

    <li
      class="todoItemWrap handle"
      :class="{completed:completeItem, editableMod:isEditable}"
    >
      <label class="todoItemNameDivider">
        <input
          type="checkbox"
          class="completeTask"
          :checked="completeItem"
          @input="checked = $event.target.checked"
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
            @blur="update"
            @keyup.enter="update"
          >

        </v-touch>
      </div>
      <div class="deleteTodoItem" @click="$emit('delete')">&#10006;</div>

    </li>
</template>

<script>


  export default {
    name: 'TodoListItem',
    data() {
      return {
        name: '',
        isEditable: false,
        checked: Boolean,
      }
    },
    computed: {
      itemName() {
        return this.item.txt
      },
      completeItem() {
        return this.item.checked
      }
    },
    props: ['item'],
    methods: {
      update() {
        this.isEditable = false;
        if (this.name !== '') {
          this.$emit('update', {txt: this.name, id: this.item.id})
        }

      },
      onSwipeLeft() {
        if (this.isEditable === false) {
          this.isEditable = true;
          this.$nextTick(() => {this.$el.querySelector('input[type=text]').focus()})
        }
      },
    },
    watch: {
      checked: {
        handler: function () {
          this.$emit('completed', {id: this.item.id, checked: this.checked})
        },
        deep: true
      }

    }

  }
</script>

<style scoped lang="scss">

  .todoItemWrap {
    padding: 0.8rem 0.5rem;
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
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  .editableMod {
    -webkit-box-shadow: 0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.3);
    -moz-box-shadow:    0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.3);
    box-shadow:         0 0.3125rem 1.875rem 0 rgba(50, 50, 50, 0.3);
  }
  .todoItemName:disabled {
    background-color: unset;
    color: rgb(84, 84, 84);
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
  .completed {
    background-color: #cecece61;
    opacity: .5;
  }

</style>
