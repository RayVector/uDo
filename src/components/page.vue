<template>
  <div class="workspace" v-for="(space, index) in tabsList" :key="index">
    <div class="userMenu" v-show="index === activeTab">
      <button class="todoBtn" @click='addNewTask(index)'>
        <svg width="24" height="24" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.5837" cy="26.2265" r="3" transform="rotate(40 4.5837 26.2265)" fill="#494949"></circle>
          <rect x="22.212" width="6" height="26" rx="3" transform="rotate(40 22.212 0)" fill="#494949"></rect>
        </svg>
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
      tag="div"
      class="todoItemsList"
      v-model="todoList"
      handle=".handle"
      @start="drag=true"
      @end="moveItem(index)"
      :options="{delay:600, chosenClass: 'chosen'}"
      :key="index"
    >
      <transition-group
        v-show="index === activeTab"
        tag="ul"
        name="itemFade"
      >
        <todoListItem
          v-for="(item, index2 ) in getList"
          :item="item"
          :key="index2"
          @delete="delTaskItem(item, index)"
          @update="updateItem(index)"
          @toggle="completeItem(item, index, $event)"
        ></todoListItem>
      </transition-group>
    </draggable>
  </div>
</template>

<script>


  export default {
    name: "page",
    components: {
      draggable,
      todoListItem,
    },
  }
</script>

<style lang="stylus" scoped>

</style>