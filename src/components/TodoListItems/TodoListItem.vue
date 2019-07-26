<template>
  <li class="todoItemWrap">
    <label class="todoItemNameDivider">
      <input type="checkbox" >
    </label>
    <div class="todoItem">
      <label class="todoItemNameWrap">
        <input
          class="todoItemName"
          v-model="itemName"
          @blur="update"
          v-show="isEditable"
        >
        <label
          class="todoItemName itemLabel"
          v-show="!isEditable"
          @dblclick="isEditable = true"
        >{{itemName}}</label>
        <div class="deleteTodoItem" @click="$emit('delete')" >&#10006;</div>
      </label>
    </div>
  </li>
</template>

<script>

export default {
  name: 'TodoListItem',
  data() {
    return {
      itemName: this.name,
      isEditable: false,
    }
  },
  props: ['name'],
  methods: {
    update() {
      this.isEditable = false;
      this.$emit('update', this.itemName)
    }
  },



}
</script>

<style scoped lang="scss">

.todoItemWrap{
  margin-bottom: 1rem;
  padding: 0.4rem;
  border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.todoItemNameDivider{
  margin-right: 1rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
}
.todoItemNameWrap {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.todoItem {
  width: 100%;
}
.todoItemName{
  width: 100%;
  background-color: unset;
  border: unset;
  font-weight: bold;
  font-size: 1.3rem;
}
.itemLabel {
  font-weight: bold;
  font-size: 1.3rem;
}
.deleteTodoItem{
  z-index: 9999;
  position: absolute;
  right: 0;
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
