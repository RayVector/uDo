<template>
  <li
    class="item-wrap">
    <div
      class="todoItem _item-theme"
      :class="{'preview-item': isPreview, 'item-completed': item.checked}"
    >
      <div class="todoItem-content" @click="showItem">
        <label class="todoItemName-wrap">
          <input
            type="text"
            class="todoItem-edit-name"
            placeholder="Todo"
            autocomplete="off"
            @input="updateItemName"
            :value="itemName"
            :disabled="!isPreview"
          >
        </label>
        <div class="item-body" v-show="isPreview">
          <label>
            <textarea
              class="item-desc"
              autocomplete="off"
              placeholder="Description"
              @input="updateItemDesc"
              :value="itemDesc"
              :disabled="!isPreview"
            ></textarea>
          </label>
          <div class="img-area">
            <input
              type="file"
              ref="fileInput"
              id="taskImg"
              @change="uploadImg"
              class="item-img-input"

            >
            <label for="taskImg" v-show="img === ''">
              <svg
                class="file-input-icon"
                width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.6267 18.9961C21.2607 19.2903 20.7393 19.2903 20.3733 18.9961L5.02605 6.65428C4.2904 6.0627 4.70871 4.875 5.65272 4.875L36.3473 4.875C37.2913 4.875 37.7096 6.0627 36.974 6.65428L21.6267 18.9961Z"
                  fill="white" fill-opacity="0.8"></path>
                <rect x="3.9375" y="22.75" width="34.125" height="3.25" rx="1" fill="white" fill-opacity="0.8"></rect>
              </svg>
            </label>
            <img :src="img" alt="" class="item-img" @click="isImgPreview = true" v-show="img">
            <button class="item-img-delete-icon" @click="deleteImg">
              <trash-icon v-show="img"></trash-icon>
            </button>
            <div class="img-preview-shadow" v-show="isImgPreview" @click="isImgPreview = false">
              <transition name="fadeImgPreview">
                <img :src="img" alt="" class="item-img item-img-preview" v-show="isImgPreview">
              </transition>
            </div>
          </div>
        </div>
      </div>
      <button class="item-open-menu handle" @click="isMenuShow = true">
        <three-dots-icon></three-dots-icon>
      </button>
    </div>
    <div class="item-shadow" v-show="isPreview" @click="isPreview = false"></div>
    <smart-item-menu
      :isMenuShow="isMenuShow"
      :isTaskComplete="item.checked"
      @closeMenu="isMenuShow = false"
      @deleteItem="deleteItem"
      @completeItem="completeItem"
      @uncompleteItem="uncompleteItem"
    ></smart-item-menu>
  </li>
</template>

<script>
  import SmartItemMenu from "../../popups/smart-item-menu";
  import ThreeDotsIcon from "../UI/three-dots-icon";
  import TrashIcon from "../UI/trash-icon";

  export default {
    name: "todoItem",
    components: {TrashIcon, ThreeDotsIcon, SmartItemMenu},
    props: ['item', 'index'],
    computed: {
      itemName() {
        return this.item.txt
      },
      itemDesc() {
        return this.item.desc
      },
      getImg() {
        return this.item.img
      }
    },
    data() {
      return {
        // name: '',
        // desc: '',
        img: '',
        isMenuShow: false,
        isPreview: false,
        isEditable: false,
        isImgPreview: false,
      }
    },
    methods: {
      showItem() {
        if (!this.isPreview) {
          this.isPreview = true;
        }
      },
      updateItemDesc(e) {
        this.desc = e.target.value;
        this.$store.dispatch("updateTaskDesc", {
          id: this.item.id,
          desc: this.desc,
        });
      },
      updateItemName(e) {
        this.name = e.target.value;
        if (this.name !== '') {
          if (this.name !== ' ') {
            this.$store.dispatch("updateTaskName", {
              id: this.item.id,
              txt: this.name,
            });
          } else {
            /**
             * Crooked user hands
             */
            alert("Enter a name without a space")
          }
        }
      },
      deleteItem() {
        this.isMenuShow = false;
        this.isPreview = false;
        this.$store.dispatch('delTask', this.item);
      },
      completeItem() {
        this.isMenuShow = false;
        this.isPreview = false;
        this.$store.dispatch('updateStatusTask', {item: this.item, value: true});
      },
      uncompleteItem() {
        this.isMenuShow = false;
        this.isPreview = false;
        this.$store.dispatch('updateStatusTask', {item: this.item, value: false});
      },
      uploadImg(e) {
        let input = e.target;
        let file = input.files[0];
        let reader = new FileReader();
        reader.onload = () => {
          this.img = reader.result;
          this.$store.dispatch('uploadImg', {id: this.item.id, img: this.img})
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      },
      deleteImg() {
        this.img = "";
        this.$store.dispatch('deleteImg', this.item)
      }
    },
    beforeMount() {
      this.img = this.getImg;
    }
  }
</script>

<style scoped lang="scss">

  .item-wrap {
    position: relative;
  }

  .item-shadow {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
  }

  .todoItem {
    padding: 0.8rem 1rem;
    border-bottom: 0.0325rem solid rgba(0, 0, 0, 0.5);
    border-top: 0.0325rem solid rgba(0, 0, 0, 0.5);
    min-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .todoItem-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .preview-item {
    z-index: 2;
    position: relative;
    cursor: default;
  }

  .todoItem::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: unset;
  }

  .todoItemName-wrap {
    width: 100%;
    max-width: 90%;
  }

  .todoItem-edit-name {
    width: 100%;
    color: rgba(255, 255, 255, 0.8);
    border: none;
    background-color: unset;
    font-size: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .todoItem-edit-name::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  .todoItem-edit-name:disabled {
    opacity: 1;
  }

  .item-body {
    width: 90%;
    padding-top: 20px;
  }

  .item-desc {
    height: 60px;
    width: 100%;
    padding: 10px 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    resize: none;
  }

  .item-desc::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .img-area {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .item-img-input {
    display: none;
  }

  .file-input-icon {
    width: 2rem;
    height: 2rem;
  }

  .item-img {
    border: 1px solid rgba(0, 0, 0, .8);
    max-width: 55%;
    border-radius: 4px;
  }

  .item-img-delete-icon {
    margin-left: 20px;
  }

  .img-preview-shadow {
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

  .item-img-preview {
    max-width: 100%;
    z-index: 3;
  }

  .item-completed {
    opacity: .6;
  }

  /*ANIMATIONS:*/

  .fadeImgPreview-enter-active, .fadeImgPreview-leave-active {
    transition: .6s;
  }

  .fadeImgPreview-enter, .fadeImgPreview-leave-to {
    opacity: 0;
  }

  @media screen and (min-width: 1000px) {
    .todoItem {
      border: 1px solid #797979;
      border-radius: 10px;
      transition: all .3s ease;
    }

    .todoItem:not(:last-child) {
      margin-bottom: 10px;
      margin-right: 20px;
    }

    .todoItem:hover {
      border: 1px solid #404040;
    }
  }
</style>
