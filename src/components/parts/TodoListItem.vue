<template>

  <li
    class="todoItemWrap"
    :class="{completed: item.checked, editableMod:isEditable}"
    @blur="isEditable = false"
  >
    <div class="todoItemInner">
      <label class="todoItemNameDivider" v-show="isEditable">
        <input
          type="checkbox"
          class="completeTask"
          v-model="checked"
          @change="completeTask"
        >
      </label>
      <div class="todoItem">
        <div class="todoItemWrapName">
          <label v-show="isEditable && isEditableText">
            <input
              type="text"
              class="todoItemNameEdit"
              :value="itemName"
              :disabled="!isEditable"
              @input="name = $event.target.value"
              @keyup.enter="update"
              @blur="$event.target.value = itemName"
            >
          </label>
          <p
            v-show="!isEditableText"
            @click="descEdit"
            class="todoItemName"
          >
            {{itemName}}
          </p>
        </div>
        <div class="todoItemTextWrap">
          <div class="todoItemText"
               v-show="isEditable && !isEditableText"
               @click="descEdit"
          >
            <p class="todoItemTextInfo">Info:</p>
            {{itemDesc}}
          </div>
          <div class="todoItemTextArea" v-show="isEditable && isEditableText">
            <label class="todoItemTextWrapLabel">
                <textarea
                  autocomplete="off"
                  class="todoItemTextInput"
                  cols="25"

                  :disabled="!isEditable"
                  @blur="$event.target.value = itemDesc"
                  :value="itemDesc"
                  @input="desc = $event.target.value"
                  placeholder="Description"
                ></textarea>
            </label>
          </div>


        </div>
      </div>
      <button v-show="!isEditable" class="manageItemBtns" @click="changeItemName">
        <svg class="settingsItemBtn" width="32" height="26" viewBox="0 0 32 26" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <rect y="3" width="16" height="6" rx="2" fill="#494949"></rect>
          <circle cx="24" cy="6" r="6" fill="#494949"></circle>
          <rect x="16" y="17" width="16" height="6" rx="2" fill="#494949"></rect>
          <circle cx="7" cy="20" r="6" fill="#494949"></circle>
        </svg>
      </button>
      <div class="todoItemMenu" v-show="isEditable">
        <button
          class="manageItemBtns deleteTodoItem"
          @click="deleteItem"
        >
          <svg
            class="deleteTodoItemIcon"
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0168 2.29813C17.0818 1.02891 18.974 0.863357 20.2433 1.92836V1.92836C21.5125 2.99337 21.678 4.88563 20.613 6.15486L18.4552 8.72652C17.3901 9.99575 15.4979 10.1613 14.2287 9.09629V9.09629C12.9594 8.03129 12.7939 6.13902 13.8589 4.8698L16.0168 2.29813Z"
              fill="#494949"></path>
            <path
              d="M4.97624 15.4557C6.04124 14.1865 7.93351 14.021 9.20274 15.086V15.086C10.472 16.151 10.6375 18.0432 9.57251 19.3125L7.75727 21.4758C6.69226 22.745 4.8 22.9105 3.53077 21.8455V21.8455C2.26155 20.7805 2.096 18.8883 3.161 17.619L4.97624 15.4557Z"
              fill="#494949"></path>
            <rect y="5.8288" width="6" height="26" rx="3" transform="rotate(-50 0 5.8288)" fill="#494949"></rect>
          </svg>
        </button>
        <button
          class="manageItemBtns saveTodoItem" @click="updateItem">
          <svg width="34" height="30" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.3566 14.8563C1.08738 13.7913 0.921829 11.899 1.98683 10.6298V10.6298C3.05184 9.36056 4.94411 9.19501 6.21333 10.26L8.37664 12.0752C9.64587 13.1403 9.81142 15.0325 8.74642 16.3017V16.3017C7.68141 17.571 5.78914 17.7365 4.51992 16.6715L2.3566 14.8563Z"
              fill="#494949"></path>
            <rect x="12.8288" y="23.7739" width="6" height="26" rx="3" transform="rotate(-140 12.8288 23.7739)"
                  fill="#494949"></rect>
          </svg>
        </button>
        <button
          class="manageItemBtns dragHandle handle">
          <svg
            class="dragHandleIcon"
            width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.4553 0.353796C15.7866 0.138633 16.2134 0.138633 16.5447 0.353796L27.0257 7.16137C27.8606 7.70368 27.4766 9 26.4809 9H5.51905C4.52344 9 4.1394 7.70368 4.97435 7.16137L15.4553 0.353796Z"
              fill="#494949"></path>
            <path
              d="M16.5447 21.6462C16.2134 21.8614 15.7866 21.8614 15.4553 21.6462L4.97435 14.8386C4.1394 14.2963 4.52344 13 5.51905 13L26.481 13C27.4766 13 27.8606 14.2963 27.0257 14.8386L16.5447 21.6462Z"
              fill="#494949"></path>
          </svg>
        </button>
      </div>
    </div>
  </li>

</template>

<script>

  export default {
    name: 'TodoListItem',
    data() {
      return {
        name: '',
        desc: '',
        isEditable: false,
        isEditableText: false,
        checked: this.item.checked,

      }
    },
    computed: {
      itemName() {
        return this.item.txt
      },
      itemDesc() {
        return this.item.desc
      }
    },
    props: ['item', 'index'],
    methods: {
      completeTask() {
        this.isEditable = false;
        this.$store.dispatch("completeTask", {item: this.item, value: this.checked});
      },
      deleteItem() {
        this.isEditable = false;
        // ANIMATION ICON:
        const items = document.querySelectorAll('.deleteTodoItemIcon');
        items[this.index].classList.toggle('swipeIcon');

        this.$store.dispatch("delTask", this.item);
      },
      updateItem() {
        this.isEditable = false;
        this.isEditableText = false;
        if (this.name !== '') {
          this.$store.dispatch("updateTask", {txt: this.name, id: this.item.id, desc: this.item.desc});
        }
        if (this.desc !== '') {
          this.$store.dispatch("updateTask", {txt: this.item.txt, id: this.item.id, desc: this.desc});
        }
      },
      descEdit() {
        if (this.isEditable == true) {
          this.isEditableText = true;
          this.$nextTick(() => {
            this.$el.querySelector('textarea').focus()
          });
        }
      },
      changeItemName() {
        console.log("Clicked")
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
    overflow-y: hidden;
    overflow-x: auto;
  }

  .todoItemWrap::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: unset;
  }

  .todoItemInner {
    width: 120%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .todoItem {
    width: 95%;
    height: 100%;
  }

  .todoItemNameWrap {
    width: 90%;
    /*height: 100%;*/
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }


  .todoItemName {
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .todoItemNameEdit {
    width: 80%;
    color: darkred;
    border: none;
    background-color: unset;
    font-size: 1.2rem;
  }


  .editableMod {
    /*height: 10rem;*/
    display: flex;
    align-items: flex-start;
    border-top: 0.0325rem solid rgba(0, 0, 0, 0.5);
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

  .todoItemTextWrap {
    margin-top: .5rem;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .todoItemTextWrapLabel {
    width: 100%;
    height: 100%;
  }

  .todoItemTextArea {
    width: 100%;
    height: 10rem;
  }

  .todoItemTextInput {
    width: 100%;
    height: 100%;
    border: none;
    background-color: unset;
    resize: none;
  }

  .todoItemText {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    word-break: break-word;
  }

  .todoItemTextInfo {
    margin-bottom: .5rem;
    color: rgba(0, 0, 0, 0.47);
  }

  .itemLabel {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .todoItemMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
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

  .deleteTodoItem {
    transition: .3s;
  }

  .deleteTodoItemIcon {
    transition: .3s;
  }

  .deleteTodoItem .deleteTodoItemIcon {
    width: 80%;
    height: 80%;
  }

  .deleteTodoItem:hover {
    text-shadow: 0 0.5625rem 0.625rem rgba(150, 150, 150, 1);
    color: rgba(255, 5, 5, 0.8);
  }

  .settingsItemBtn {
    width: 80%;
    height: 80%;
  }

  .saveTodoItem svg {
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

  .dragHandle {
    cursor: e-resize;
  }

  .dragHandleIcon {
    width: 1.4rem;
    height: 1.4rem;
  }

  /*animation:*/
  .fadeEditItemBtn-enter-active, .fadeEditItemBtn-leave-active {
    transition: .3s;
  }

  .fadeEditItemBtn-enter, .fadeEditItemBtn-leave-to {
    opacity: 0;
  }
</style>
