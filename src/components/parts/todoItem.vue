<template>
  <li
    class="item-wrap">
    <div
      class="todoItem item-theme"
      @click="editItem"
      :class="{'preview-item': isPreview}"
    >
      <label class="todoItemName-wrap">
        <input
          type="text"
          class="todoItem-edit-name"
          placeholder="Todo"
          autocomplete="off"
          @input="updateItemName"
          :value="itemName"
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
          ></textarea>
        </label>
      </div>
    </div>
    <div class="item-shadow" v-show="isPreview" @click="isPreview = false"></div>
    <smart-item-menu
      :isMenuShow="isMenuShow"
      @closeMenu="isMenuShow = false"
    ></smart-item-menu>
  </li>
</template>

<script>
  import SmartItemMenu from "../../popups/smart-item-menu";

  export default {
    name: "todoItem",
    components: {SmartItemMenu},
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
        delay: 300,
        clicks: 0,
        timer: null
      }
    },
    methods: {
      editItem() {

        this.clicks++;
        if (this.clicks === 1) {
          let self = this;
          this.isPreview = true;
          this.timer = setTimeout(function () {
            self.clicks = 0
          }, this.delay);
        } else {
          clearTimeout(this.timer);

          this.isMenuShow = true;

          this.clicks = 0;
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
    flex-direction: column;
    align-items: flex-start;
  }

  .preview-item {
    z-index: 2;
    width: 100%;
    position: relative;
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
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8);
    border: none;
    background-color: unset;
    font-size: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .item-body {
    width: 90%;
  }

  .item-desc {
    height: 60px;
    width: 100%;
    padding: 10px 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }

  .item-desc::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 1000px) {
    .todoItem {
      max-width: 30%;
      border: 1px solid #797979;
      border-radius: 10px;
      transition: all .3s ease;
      cursor: pointer;
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