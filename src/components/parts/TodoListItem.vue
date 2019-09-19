<template>

  <li
    class="todoItemWrap item-theme"
    :class="{completed: item.checked, editableMod:isEditable}"
  >
    <div class="todoItemInner">
      <div class="mainItemArea">
        <label class="todoItemNameDivider" v-show="isEditable && !isEditableText">
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
        </div>
        <div class="todoItemMenu" v-show="isEditable">
          <button
            class="manageItemBtns revertItem" @click="cancelEdit">
            <svg
              class="revertItemIcon"
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.75722 21.4757C6.69222 22.745 4.79995 22.9105 3.53072 21.8455V21.8455C2.2615 20.7805 2.09595 18.8882 3.16095 17.619L5.31883 15.0473C6.38384 13.7781 8.27611 13.6126 9.54533 14.6776V14.6776C10.8146 15.7426 10.9801 17.6348 9.9151 18.9041L7.75722 21.4757Z"
                fill="white" fill-opacity="0.8"></path>
              <path
                d="M18.7977 8.31814C17.7327 9.58736 15.8405 9.75291 14.5713 8.68791V8.68791C13.302 7.6229 13.1365 5.73064 14.2015 4.46141L16.0167 2.2981C17.0817 1.02887 18.974 0.863323 20.2432 1.92833V1.92833C21.5124 2.99333 21.678 4.8856 20.613 6.15482L18.7977 8.31814Z"
                fill="white" fill-opacity="0.8"></path>
              <rect x="23.7739" y="17.9451" width="6" height="26" rx="3" transform="rotate(130 23.7739 17.9451)"
                    fill="white"
                    fill-opacity="0.8"></rect>
            </svg>
          </button>
          <button
            class="manageItemBtns saveTodoItem" @click="updateItem" v-show="!checked">
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.3566 14.8563C1.08738 13.7913 0.921829 11.899 1.98683 10.6298V10.6298C3.05184 9.36056 4.94411 9.19501 6.21333 10.26L8.37664 12.0752C9.64587 13.1403 9.81142 15.0325 8.74642 16.3017V16.3017C7.68141 17.571 5.78914 17.7365 4.51992 16.6715L2.3566 14.8563Z"
                fill="white" fill-opacity="0.8"></path>
              <rect x="12.8287" y="23.7739" width="6" height="26" rx="3" transform="rotate(-140 12.8287 23.7739)"
                    fill="white"
                    fill-opacity="0.8"></rect>
            </svg>
          </button>
          <button
            class="manageItemBtns dragHandle handle">
            <svg
              class="dragHandleIcon"
              width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4553 0.353796C15.7866 0.138633 16.2134 0.138633 16.5447 0.353796L27.0257 7.16137C27.8606 7.70368 27.4766 9 26.4809 9H5.51905C4.52344 9 4.1394 7.70368 4.97435 7.16137L15.4553 0.353796Z"
                fill="white" fill-opacity="0.8"></path>
              <path
                d="M16.5447 21.6462C16.2134 21.8614 15.7866 21.8614 15.4553 21.6462L4.97435 14.8386C4.1394 14.2963 4.52344 13 5.51905 13L26.481 13C27.4766 13 27.8606 14.2963 27.0257 14.8386L16.5447 21.6462Z"
                fill="white" fill-opacity="0.8"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="addItemArea">
        <div class="todoItemTextWrap" v-show="isEditable || isEditableText">
          <p
            class="todoItemTextInfo"
            v-show="itemDesc !== '' || getImgData !== ''"
            @click="descEdit"
          >
            Info:
          </p>
          <div class="todoItemText"
               v-show="isEditable && !isEditableText"
               @click="descEdit"
          >
            {{itemDesc}}
          </div>
          <div class="todoItemTextArea" v-show="isEditable && isEditableText">
            <label class="todoItemTextWrapLabel">
                <textarea
                  autocomplete="off"
                  class="todoItemTextInput"
                  cols="25"
                  :disabled="!isEditable"
                  :value="itemDesc"
                  @change="desc = $event.target.value"
                  placeholder="Description"
                ></textarea>
            </label>
          </div>
          <div class="imgMenu" v-show="isEditable && isEditableText">
            <input class="fileInput" id="taskImg" type="file" @change="uploadImage" accept="image/png, image/jpeg">
            <label class="fileInputWrap" for="taskImg" v-show="imgData === ''">
              <svg
                class="fileInputIcon"
                width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.6267 18.9961C21.2607 19.2903 20.7393 19.2903 20.3733 18.9961L5.02605 6.65428C4.2904 6.0627 4.70871 4.875 5.65272 4.875L36.3473 4.875C37.2913 4.875 37.7096 6.0627 36.974 6.65428L21.6267 18.9961Z"
                  fill="white" fill-opacity="0.8"></path>
                <rect x="3.9375" y="22.75" width="34.125" height="3.25" rx="1" fill="white" fill-opacity="0.8"></rect>
              </svg>
            </label>
          </div>
          <div class="imgArea" v-show="imgData !== ''">
            <img :src="imgData" alt="" class="imgItem" @click="isImgPreview = true">
            <button
              class="manageItemBtns revertItem deleteImg" @click="deleteImage" v-show="!checked">
              <svg
                class="revertItemIcon"
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.75722 21.4757C6.69222 22.745 4.79995 22.9105 3.53072 21.8455V21.8455C2.2615 20.7805 2.09595 18.8882 3.16095 17.619L5.31883 15.0473C6.38384 13.7781 8.27611 13.6126 9.54533 14.6776V14.6776C10.8146 15.7426 10.9801 17.6348 9.9151 18.9041L7.75722 21.4757Z"
                  fill="white" fill-opacity="0.8"></path>
                <path
                  d="M18.7977 8.31814C17.7327 9.58736 15.8405 9.75291 14.5713 8.68791V8.68791C13.302 7.6229 13.1365 5.73064 14.2015 4.46141L16.0167 2.2981C17.0817 1.02887 18.974 0.863323 20.2432 1.92833V1.92833C21.5124 2.99333 21.678 4.8856 20.613 6.15482L18.7977 8.31814Z"
                  fill="white" fill-opacity="0.8"></path>
                <rect x="23.7739" y="17.9451" width="6" height="26" rx="3" transform="rotate(130 23.7739 17.9451)"
                      fill="white"
                      fill-opacity="0.8"></rect>
              </svg>
            </button>
            <div class="imgPreviewShadow" v-show="isImgPreview" @click="isImgPreview = false">
              <transition name="fadeImgPreview">
                <img :src="imgData" alt="" class="imgItem imgPreview" v-show="isImgPreview">
              </transition>
            </div>
          </div>
        </div>
        <button v-show="!isEditable" class="manageItemBtns" @click="editItem">
          <svg
            class="settingsItemBtn"
            width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3" width="16" height="6" rx="2" fill="white" fill-opacity="0.8"></rect>
            <circle cx="24" cy="6" r="6" fill="white" fill-opacity="0.8"></circle>
            <rect x="16" y="17" width="16" height="6" rx="2" fill="white" fill-opacity="0.8"></rect>
            <circle cx="7" cy="20" r="6" fill="white" fill-opacity="0.8"></circle>
          </svg>
        </button>
        <button v-show="!isEditable" class="manageItemBtns" @click="deleteItem">
          <svg
            class="settingsItemBtn"
            width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9H23V21.3913C23 24.1527 20.7614 26.3913 18 26.3913H8C5.23858 26.3913 3 24.1527 3 21.3913L3 9Z"
                  fill="white" fill-opacity="0.8"></path>
            <path
              d="M2 8C0.89543 8 0 7.10457 0 6V6C0 4.89543 0.895431 4 2 4L24 4C25.1046 4 26 4.89543 26 6V6C26 7.10457 25.1046 8 24 8L2 8Z"
              fill="white" fill-opacity="0.8"></path>
            <path
              d="M6.5 3C5.67157 3 5 2.32843 5 1.5V1.5C5 0.671573 5.67157 0 6.5 0L19.5 0C20.3284 0 21 0.671573 21 1.5V1.5C21 2.32843 20.3284 3 19.5 3L6.5 3Z"
              fill="white" fill-opacity="0.8"></path>
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
        imgData: '',
        isEditable: false,
        isEditableText: false,
        isImgPreview: false,
        checked: this.item.checked,
      }
    },
    props: ['item', 'index'],
    computed: {
      itemName() {
        return this.item.txt
      },
      itemDesc() {
        return this.item.desc
      },
      getImgData() {
        return this.item.img
      }
    },
    methods: {
      uploadImage(e) {
        let input = e.target;
        let file = input.files[0];
        let reader = new FileReader();
        reader.onload = () => {
          this.imgData = reader.result;
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      },
      deleteImage() {
        this.imgData = '';
      },
      completeTask() {
        this.isEditable = false;
        this.$store.dispatch("completeTask", {item: this.item, value: this.checked});
      },
      deleteItem() {
        this.isEditable = false;
        // ANIMATION ICON:
        const items = document.querySelectorAll('.revertItemIcon');
        items[this.index].classList.toggle('swipeIcon');

        this.$store.dispatch("delTask", this.item);
      },
      cancelEdit() {
        this.isEditable = false;
        this.isEditableText = false;
        this.name = this.item.txt;
        this.desc = this.item.desc;
        this.imgData = this.item.img;
      },
      updateItem() {
        this.isEditable = false;
        this.isEditableText = false;


        // NAME:
        if (this.name !== '') {
          if (this.name !== ' ') {
            this.$store.dispatch("updateTaskName", {
              id: this.item.id,
              txt: this.name,
            });
          } else {
            alert("Enter a name without a space")
          }
        }

// DESCRIPTION:

        this.$store.dispatch("updateTaskDesc", {
          id: this.item.id,
          desc: this.desc,
        });


// IMG:

        this.$store.dispatch("updateTaskImg", {
          id: this.item.id,
          img: this.imgData
        });


      },
      descEdit() {
        if (!this.checked) {
          if (this.isEditable === true) {
            this.isEditableText = true;
            this.$nextTick(() => {
              this.$el.querySelector('textarea').focus()
            });
          }
        }
      },
      editItem() {
        if (this.isEditable === false) {
          this.isEditable = true;
          this.$nextTick(() => {
            this.$el.querySelector('input[type=text]').focus()
          });
        }
      },
    },
    beforeMount() {
      this.imgData = this.getImgData;
      this.desc = this.itemDesc;
    }

  }
</script>

<style scoped lang="scss">

  .todoItemWrap {
    padding: 0.8rem 1rem;
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    border-top: 0.0325rem solid rgba(0, 0, 0, 0.5);
    overflow-y: hidden;
    overflow-x: auto;
    height: 2rem;
  }

  .todoItemWrap::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: unset;
  }

  .mainItemArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 85%;
  }

  .todoItemInner {
    width: 130%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .editableMod .todoItemInner {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  .editableMod .todoItem {
    width: 65%;
  }

  .editableMod .mainItemArea {
    max-width: 100%;
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

  .todoItemWrapName {
    width: 100%;
  }

  .editableMod .todoItem {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
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
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .editableMod .todoItemName {
    max-width: 9.375rem;
  }

  .todoItemNameEdit {
    width: 80%;
    color: rgba(255, 255, 255, 0.8);
    border: none;
    background-color: unset;
    font-size: 1.2rem;
  }


  .editableMod {
    /*min-height: 18rem;
    flex-grow: 3;*/
    height: auto;
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
    flex-direction: column;
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
    min-height: 20%;
    height: 100%;
    max-height: 50%;
    border: none;
    background-color: unset;
    resize: none;
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.8);
  }

  .todoItemTextInput::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  .fileInputWrap {
    font-size: 1.25em;
    font-weight: 700;
    display: inline-block;
  }

  .fileInputIcon {
    width: 2rem;
    height: 2rem;
  }

  .fileInput {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .addItemArea {
    display: flex;
    width: unset;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .editableMod .addItemArea {
    width: 100%;
  }

  .imgArea {
    margin-top: .5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .imgItem {
    border: 1px solid rgba(0, 0, 0, .8);
    max-width: 55%;
    border-radius: 4px;
    /*width: 100%;
    height: 100%;*/
    /*max-height: 55%;*/
  }

  .imgPreviewShadow {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  }

  .imgPreview {
    max-width: 100%;
    z-index: 3;
  }

  /*
    .editableMod .todoItemText {
      min-height: 10rem;
  }*/

  .todoItemText {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    word-break: break-word;
  }

  .todoItemTextInfo {
    margin-bottom: .5rem;
    color: rgba(255, 255, 255, 0.4);
    user-select: none;
  }

  .itemLabel {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .todoItemMenu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
  }

  .manageItemBtns {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
  }

  .revertItem {
    transition: .3s;
  }

  .revertItemIcon {
    transition: .3s;
  }

  .revertItem .revertItemIcon {
    width: 80%;
    height: 80%;
  }

  .revertItem:hover {
    text-shadow: 0 0.5625rem 0.625rem rgba(150, 150, 150, 1);
    color: rgba(255, 5, 5, 0.8);
  }

  .settingsItemBtn {
    width: 100%;
    height: 100%;
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
    opacity: .7;
  }

  .dragHandle {
    cursor: e-resize;
  }

  .dragHandleIcon {
    width: 1.4rem;
    height: 1.4rem;
  }

  .deleteImg {
    margin-left: 1rem;
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

  /*animation:*/
  .fadeImgPreview-enter-active, .fadeImgPreview-leave-active {
    transition: .6s;
  }

  .fadeImgPreview-enter, .fadeImgPreview-leave-to {
    opacity: 0;
  }
</style>
