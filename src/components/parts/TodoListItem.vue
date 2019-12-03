<template>

  <li
    class="todoItemWrap _item-theme"
    :class="{completed: item.checked, editableMod: isPreview, chosenTask: isTaskChosen}"
  >
    <div class="todoItemInner" :class="{editTextMod: isEditableTask}">
      <div class="mainItemArea">
        <label class="todoItemNameDivider" v-show="isPreview && !isEditableTask">
          <input
            type="checkbox"
            class="changeTaskStatus"
            v-model="checked"
            @change="changeTaskStatus"
          >

        </label>
        <div class="todoItem" @click="openSmartMenu(item)">
          <div class="todoItemWrapName">
            <label v-show="isPreview && isEditableTask">
              <input
                type="text"
                class="todoItemNameEdit"
                :value="itemName"
                :disabled="!isPreview"
                @input="name = $event.target.value"
                @keypress.enter="updateItem"
              >
            </label>
            <p
              v-show="!isEditableTask"
              @click="descEdit"
              class="todoItemName"
            >
              {{itemName}}
            </p>
          </div>
        </div>
        <div class="editItemMenu" v-show="isPreview">
          <button
            class="manageItemBtns editItemIcon" @click="cancelEdit">
            <svg
              class="revertItemIcon"
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.83098 21.68C6.75585 22.9613 4.84558 23.1284 3.56429 22.0533V22.0533C2.28299 20.9782 2.11586 19.0679 3.191 17.7866L5.36941 15.1905C6.44454 13.9092 8.3548 13.7421 9.6361 14.8172V14.8172C10.9174 15.8923 11.0845 17.8026 10.0094 19.0839L7.83098 21.68Z"
                fill="white" fill-opacity="0.7"></path>
              <path
                d="M18.9765 8.39729C17.9014 9.67859 15.9911 9.84572 14.7098 8.77058V8.77058C13.4285 7.69545 13.2614 5.78519 14.3365 4.50389L16.169 2.32001C17.2441 1.03871 19.1544 0.871583 20.4357 1.94672V1.94672C21.717 3.02185 21.8841 4.93211 20.809 6.21341L18.9765 8.39729Z"
                fill="white" fill-opacity="0.7"></path>
              <rect x="24" y="18.1158" width="6.05707" height="26.2473" rx="3" transform="rotate(130 24 18.1158)"
                    fill="white"
                    fill-opacity="0.7"></rect>
            </svg>

          </button>
          <button
            class="manageItemBtns updateIcon editItemIcon" @click="updateItem" v-show="!checked">
            <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.49034 15.2445C1.27211 14.1579 1.10449 12.2383 2.11593 10.957V10.957C3.12738 9.67575 4.93489 9.5179 6.15312 10.6045L8.16116 12.3955C9.37939 13.4821 9.54702 15.4017 8.53557 16.683V16.683C7.52413 17.9643 5.71662 18.1221 4.49839 17.0355L2.49034 15.2445Z"
                fill="white" fill-opacity="0.7"></path>
              <rect width="5.84918" height="25.6163" rx="2.92459"
                    transform="matrix(-0.746279 -0.665633 0.619605 -0.784913 12.4125 24.2261)" fill="white"
                    fill-opacity="0.7"></rect>
            </svg>

          </button>
          <button
            class="manageItemBtns dragHandle handle editItemIcon">
            <svg
              class="dragHandleIcon"
              width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4219 0.409653C15.7682 0.164233 16.2318 0.164233 16.5781 0.409653L27.2936 8.00225C28.0889 8.56581 27.6902 9.81818 26.7154 9.81818H5.28457C4.30979 9.81818 3.91107 8.56581 4.70642 8.00225L15.4219 0.409653Z"
                fill="white" fill-opacity="0.7"></path>
              <path
                d="M16.5781 23.5903C16.2318 23.8358 15.7682 23.8358 15.4219 23.5903L4.70642 15.9978C3.91107 15.4342 4.30979 14.1818 5.28457 14.1818L26.7154 14.1818C27.6902 14.1818 28.0889 15.4342 27.2936 15.9978L16.5781 23.5903Z"
                fill="white" fill-opacity="0.7"></path>
            </svg>

          </button>
        </div>
      </div>
    </div>
    <div class="addItemArea" v-show="isPreview">
      <div class="todoItemTextWrap" v-show="isPreview || isEditableTask">
        <p
          class="todoItemTextInfo"
          v-show="itemDesc !== '' || getImgData !== ''"
          @click="descEdit"
        >
          Info:
        </p>
        <div class="todoItemText"
             v-show="isPreview && !isEditableTask"
             @click="descEdit"
        >
          {{itemDesc}}
        </div>
        <div class="todoItemTextArea" v-show="isPreview && isEditableTask">
          <label class="todoItemTextWrapLabel">
                <textarea
                  autocomplete="off"
                  class="todoItemTextInput"
                  cols="25"
                  :disabled="!isPreview"
                  :value="itemDesc"
                  @change="desc = $event.target.value"
                  placeholder="Description"
                  @keypress.enter="updateItem"
                ></textarea>
          </label>
        </div>
        <div class="imgMenu" v-show="isPreview && isEditableTask">
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
    </div>
    <div class="smartMenu_shadow" v-show="isMenuShow && !isEditableTask"
         @click="isMenuShow = false; isTaskChosen = false"></div>
    <transition name="fadeSmartMenu">
      <div class="smartMenu todoItemMenu _small-part" v-show="isMenuShow && !isEditableTask">
        <button class="manageItemBtns todoItemMenuBtn" @click="deleteItem">
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
        <button class="manageItemBtns todoItemMenuBtn" @click="editItem">
          <svg
            class="settingsItemBtn"
            width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3" width="16" height="6" rx="2" fill="white" fill-opacity="0.8"></rect>
            <circle cx="24" cy="6" r="6" fill="white" fill-opacity="0.8"></circle>
            <rect x="16" y="17" width="16" height="6" rx="2" fill="white" fill-opacity="0.8"></rect>
            <circle cx="7" cy="20" r="6" fill="white" fill-opacity="0.8"></circle>
          </svg>
        </button>
        <button class="manageItemBtns todoItemMenuBtn" @click="completeTask" v-show="!item.checked">
          <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.49034 15.2445C1.27211 14.1579 1.10449 12.2383 2.11593 10.957V10.957C3.12738 9.67575 4.93489 9.5179 6.15312 10.6045L8.16116 12.3955C9.37939 13.4821 9.54702 15.4017 8.53557 16.683V16.683C7.52413 17.9643 5.71662 18.1221 4.49839 17.0355L2.49034 15.2445Z"
              fill="white" fill-opacity="0.7"></path>
            <rect width="5.84918" height="25.6163" rx="2.92459"
                  transform="matrix(-0.746279 -0.665633 0.619605 -0.784913 12.4125 24.2261)" fill="white"
                  fill-opacity="0.7"></rect>
          </svg>
        </button>
      </div>
    </transition>
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
        isPreview: false,
        isEditableTask: false,
        isImgPreview: false,
        isMenuShow: false,
        isTaskChosen: false,
        checked: this.item.checked,
        delay: 400,
        clicks: 0,
        timer: null
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
      openSmartMenu() {

        this.clicks++;
        if (this.clicks === 1) {
          let self = this;
          this.timer = setTimeout(function () {
            // DO
            self.clicks = 0
          }, this.delay);
        } else {
          clearTimeout(this.timer);

          this.isTaskChosen = true;
          if (this.isPreview === false) {
            this.isMenuShow = true
          }

          this.clicks = 0;
        }


      },
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
      changeTaskStatus() {
        this.isTaskChosen = false;
        this.isPreview = false;
        this.isMenuShow = false;
        this.$store.dispatch("changeTaskStatus", {item: this.item, value: this.checked});
      },
      completeTask() {
        this.isTaskChosen = false;
        this.isPreview = false;
        this.isMenuShow = false;
        this.$store.dispatch("completeTask", {item: this.item, value: true});
      },
      deleteItem() {
        this.isMenuShow = false;
        this.isTaskChosen = false;
        this.isPreview = false;
        // ANIMATION ICON:
        const items = document.querySelectorAll('.revertItemIcon');
        items[this.index].classList.toggle('swipeIcon');

        this.$store.dispatch("delTask", this.item);
      },
      cancelEdit() {
        this.isTaskChosen = false;
        this.isPreview = false;
        this.isEditableTask = false;
        this.isMenuShow = false;
        this.name = this.item.txt;
        this.desc = this.item.desc;
        this.imgData = this.item.img;
      },
      updateItem() {
        this.isTaskChosen = false;
        this.isPreview = false;
        this.isEditableTask = false;
        this.isMenuShow = false;


        // NAME:
        if (this.name !== '') {
          if (this.name !== ' ') {
            this.$store.dispatch("updateTaskName", {
              id: this.item.id,
              txt: this.name,
            });
            this.$nextTick(() => {
              this.$el.querySelector('input[type=text]').blur()
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
        this.isTaskChosen = false;
        this.isMenuShow = false;
        if (!this.checked) {
          if (this.isPreview === true) {
            this.isEditableTask = true;
            this.$nextTick(() => {
              this.$el.querySelector('textarea').focus()
            });
          }
        }
      },
      editItem() {
        this.isTaskChosen = false;
        this.isMenuShow = false;
        if (this.isPreview === false) {
          this.isPreview = true;
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
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .todoItemWrap::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: unset;
  }

  .chosenTask {
    border: .5px solid #e7e7e7;
  }

  .mainItemArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .todoItemInner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }

  .todoItemWrapName {
    width: 100%;
    overflow: hidden;
  }

  .todoItemName {
    width: 100%;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .editableMod .todoItemInner {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .editTextMod.todoItemInner {
    flex-direction: column;
    align-items: flex-start;
  }

  .todoItemNameDivider {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
  }

  .changeTaskStatus {
    width: 1rem;
    height: 1rem;
  }

  .todoItem {
    height: 100%;
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
    /*min-height: 20%;*/
    height: 100%;
    /*max-height: 50%;*/
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

  .editItemMenu {
    display: flex;
    justify-content: space-between;
  }

  .editableMod .smartMenu_shadow {
    display: none;
  }

  .editableMod .smartMenu {
    display: none;
  }

  .addItemArea {
    z-index: 1;
    display: flex;
    width: unset;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .editItemIcon {
    margin-right: .5rem;
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
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .85);
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

  .smartMenu_shadow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
  }

  .todoItemMenu {
    padding: 0 0 0.8rem 0;
    z-index: 2;
    position: absolute;
    bottom: 40%;
    top: 40%;
    right: 0;
    height: 20%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px 0 0 5px;
    transition: .3s;
    opacity: 1;
    transform: translateX(0);

    -webkit-box-shadow: -5px 6px 17px 0px rgba(50, 50, 50, .3);
    -moz-box-shadow: -5px 6px 17px 0px rgba(50, 50, 50, .3);
    box-shadow: -5px 6px 17px 0px rgba(50, 50, 50, .3);
  }

  .todoItemMenuBtn {
    margin-top: 1rem;
  }

  .manageItemBtns {
    height: 2.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: .3s;
    backface-visibility: hidden;
  }

  .manageItemBtns svg {
    width: 30px;
    height: 30px;
  }

  .manageItemBtns.updateIcon {
    height: 2.5rem;
    width: 2rem;
  }

  .manageItemBtns.dragHandle {
    height: 2.5rem;
    width: 2.2rem;
  }


  .settingsItemBtn {
    width: 100%;
    height: 100%;
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

  .fadeImgPreview-enter-active, .fadeImgPreview-leave-active {
    transition: .6s;
  }

  .fadeImgPreview-enter, .fadeImgPreview-leave-to {
    opacity: 0;
  }

  .fadeSmartMenu-enter-active, .fadeSmartMenu-leave-active {
    transition: .3s;

  }

  .fadeSmartMenu-enter, .fadeSmartMenu-leave-to {
    opacity: .8;
    transform: translateX(60px);
  }

  @media screen and (min-width: 1000px) {
    .todoItemWrap {
      max-width: 30%;
      border: 1px solid #797979;
      border-radius: 10px;
      transition: all .3s ease;
      cursor: pointer;
    }

    .todoItemWrap:not(:last-child) {
      margin-bottom: 10px;
      margin-right: 20px;
    }

    .todoItemWrap:hover {
      border: 1px solid #404040;
    }

    .todoItemMenu {
      width: 100%;
      max-width: 70px;
    }
  }


</style>
