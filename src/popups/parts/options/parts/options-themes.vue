<template>
  <li class="options-item options-themes">
    <div class="item-body" @click="isPartOpen = !isPartOpen">
      <svg
        class="options-themes-icon"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.63 94.15">
        <g>
          <rect x="1.5" y="1.5" width="135.63" height="91.15" rx="12"
                style="fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:3px"/>
          <circle cx="27.23" cy="24.97" r="7.29" style="fill:#ccc"/>
          <path
            d="M24.32,83h93.19a3.34,3.34,0,0,0,2.7-5.31L87.06,32.26s-3.29-5.39-7.6,0L58.22,61.53a3.34,3.34,0,0,1-5.33.11L44.64,51.17s-1.52-2.88-3.89,0L21.12,76.51A4,4,0,0,0,24.32,83Z"
            style="fill:#ccc"/>
        </g>
      </svg>
      <p class="options-themes-name">
        {{$t('popups.options.themes')}}
      </p>
      <svg
        class="options-themes-icon arrow-icon" :class="{rotateIcon: isPartOpen}"
        height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
        width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
      ><path d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z"/></svg>
    </div>
    <transition name="fadeExpandItem">
      <ul class="expanded-item" v-show="isPartOpen">
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
      },
      getActiveTheme() {
        return this.$store.state.themes.activeTheme
      }
    },
    data() {
      return {
        isPartOpen: false,
      }
    },
    methods: {
      chooseTheme(index) {
        if (index !== this.getActiveTheme) {
          this.isPartOpen = false;
          this.$store.dispatch('chooseTheme', index)
        }
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
    margin-right: 0;
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
    flex-wrap: wrap;
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