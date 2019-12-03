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

  export default {
    name: "todoItem",
    components: {ThreeDotsIcon, SmartItemMenu},
    props: ['item', 'index'],
    computed: {
      itemName() {
        return this.item.txt
      },
      itemDesc() {
        return this.item.desc
      },
    },
    data() {
      return {
        name: '',
        desc: '',
        isMenuShow: false,
        isPreview: false,
        isEditable: false,
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
      }
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

  .item-completed {
    opacity: .6;
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
