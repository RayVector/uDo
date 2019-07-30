<template>
  <v-touch
    tag="li"
    class="todoItemWrap handle"
    v-on:swipeleft="onSwipeLeft"
    v-on:swiperight="$emit('delete')"
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
      <label class="todoItemNameWrap">
        <input
          type="text"
          class="todoItemName"
          :value="itemName"
          :disabled="!isEditable"
          @input="name = $event.target.value"
          @blur="update"
          @keyup.enter="update"
        >

      </label>
    </div>
    <div class="deleteTodoItem" @click="$emit('delete')">&#10006;</div>

  </v-touch>
</template>

<script>


  export default {
    name: 'TodoListItem',
    data() {
      return {
        name: '',
        isEditable: false,
        checked: false,
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
        this.$emit('update', {txt: this.name, id: this.item.id})
      },
      onSwipeLeft() {
        if (this.isEditable === false) {
          this.isEditable = true;
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
    margin-bottom: 1rem;
    padding: 0.4rem;
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
    opacity: 1;
    background-color: unset;
    color: darkred;
  }

  .todoItemName:disabled {
    opacity: .8;
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
    color: rgba(255, 5, 5, 0.8);
  }


</style>
