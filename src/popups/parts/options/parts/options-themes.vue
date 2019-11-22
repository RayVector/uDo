<template>
  <li class="options-item options-themes">
    <div class="item-body" @click="isOpen = !isOpen">
      <svg
        class="options-themes-icon"
        height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h48v48h-48z" fill="none"/>
        <path
          d="M14 28c-3.31 0-6 2.69-6 6 0 2.62-2.31 4-4 4 1.84 2.44 4.99 4 8 4 4.42 0 8-3.58 8-8 0-3.31-2.69-6-6-6zm27.41-18.74l-2.67-2.67c-.78-.78-2.05-.78-2.83 0l-17.91 17.91 5.5 5.5 17.91-17.91c.79-.79.79-2.05 0-2.83z"/>
      </svg>
      <p class="options-themes-name">Themes</p>
      <svg
        class="options-themes-icon arrow-icon" :class="{rotateIcon: isOpen}"
        height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
        width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
      ><path d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z"/></svg>
    </div>
    <transition name="fadeExpandItem">
      <ul class="expanded-item" v-show="isOpen">
        <theme-item
          v-for="(item, index) in getThemesList"
          :item="item"
          :index="index"
          :key="index"
          @click.native="chooseTheme(index)"
        ></theme-item>

      </ul>
    </transition>
  </li>
</template>

<script>
  import ThemeItem from "./theme-item";

  export default {
    name: "options-themes",
    components: {ThemeItem},
    computed: {
      getThemesList() {
        return this.$store.state.themes.themesList
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      chooseTheme(index) {
        this.isOpen = false;
        this.$store.dispatch('chooseTheme', index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .item-body {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .options-themes-icon {
    margin-right: 20px;
    fill: rgba(255, 255, 255, .8);
    width: 3rem;
    height: 3rem;
  }

  .arrow-icon {
    margin-left: auto;
    transition: .3s ease;
  }

  .rotateIcon {
    transform: rotate(-90deg);
  }

  .options-themes-name {
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .expanded-item {
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-around;
  }


  /*ANIMATIONS:*/

  .fadeExpandItem-enter-active, .fadeExpandItem-leave-active {
    transition: all .3s ease;
  }

  .fadeExpandItem-enter, .fadeExpandItem-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }

</style>