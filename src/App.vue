<template>

<div id="app">
  <todoListWrap></todoListWrap>
</div>

</template>

<script>
import todoListWrap from './components/TodoListWrap.vue'


export default {
  name: 'app',
  components : {
    todoListWrap
  },
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  outline: none;

}
#app{
  padding: 1.25rem;
  color: rgba(0,0,0,0.8)
}
#app > *{
  transition: .3s;
}
</style>
