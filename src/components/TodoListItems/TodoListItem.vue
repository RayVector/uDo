<template>
  <li class="todoItemWrap">
    <span class="todoItemNameDivider">-</span>
    <div class="todoItem">
      <span class="todoItemName">{{name}}</span>
    </div>
    <div class="deleteTodoItem" @click='delTaskItem' >&#10006;</div>
  </li>
</template>

<script>

export default {
  name: 'TodoListItem',
  props: {
    name: String
  },
  methods: {
    delTaskItem(){
      this.$emit('clicked');
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
}
.todoItemNameDivider{
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
}
.todoItemName{
  font-weight: bold;
  font-size: 1.3rem;
}
.deleteTodoItem{
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
  transform: scale(1.2, 1.2);
  color: rgba(255, 5, 5, 0.8);
}
</style>
