<template>
  <li class="options-item options-app">
    <div class="item-body" @click="isPartOpen = !isPartOpen">
      <svg
        class="options-app-icon"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.38 145.28">
        <g>
          <rect x="2.5" y="2.5" width="75.38" height="140.28" rx="12"
                style="fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:5px"/>
          <path
            d="M59,68.23H57.29a2.6,2.6,0,0,1-2.54-2.6,2.43,2.43,0,0,1,.84-1.84l1.09-1.07a2.74,2.74,0,0,0,0-3.89l-2.49-2.46a2.79,2.79,0,0,0-1.95-.78,2.84,2.84,0,0,0-2,.78l-1,1.05a2.54,2.54,0,0,1-1.9.86,2.6,2.6,0,0,1-2.61-2.53V54A2.79,2.79,0,0,0,42,51.25H38.62A2.76,2.76,0,0,0,35.9,54v1.7a2.6,2.6,0,0,1-2.62,2.52,2.51,2.51,0,0,1-1.85-.82l-1.08-1.07a2.74,2.74,0,0,0-2-.78,2.84,2.84,0,0,0-1.95.78L24,58.82a2.75,2.75,0,0,0,0,3.88l1,1a2.51,2.51,0,0,1,.87,1.88,2.59,2.59,0,0,1-2.54,2.6H21.63a2.77,2.77,0,0,0-2.81,2.71v3.39A2.77,2.77,0,0,0,21.63,77h1.69a2.6,2.6,0,0,1,2.54,2.6A2.53,2.53,0,0,1,25,81.53l-1,1a2.75,2.75,0,0,0,0,3.88l2.48,2.47a2.76,2.76,0,0,0,1.95.78,2.8,2.8,0,0,0,1.95-.78l1.08-1.07A2.49,2.49,0,0,1,33.26,87a2.61,2.61,0,0,1,2.62,2.53v1.69A2.78,2.78,0,0,0,38.61,94H42a2.77,2.77,0,0,0,2.72-2.8V89.55A2.61,2.61,0,0,1,47.33,87a2.57,2.57,0,0,1,1.89.86l1.05,1a2.83,2.83,0,0,0,3.9,0l2.49-2.47a2.78,2.78,0,0,0,0-3.89l-1.1-1.07a2.46,2.46,0,0,1-.83-1.84,2.6,2.6,0,0,1,2.54-2.6H59a2.6,2.6,0,0,0,2.6-2.71v-3.4A2.57,2.57,0,0,0,59,68.23Zm-9.77,4.41h0a8.91,8.91,0,0,1-17.82,0h0a8.91,8.91,0,1,1,17.82,0Z"
            style="fill:#ccc"/>
          <rect x="21.79" y="2.5" width="36.8" height="6.17" rx="3.08" style="fill:#ccc"/>
        </g>
      </svg>
      <p class="options-app-name">
        {{$t('popups.options.app.title')}}
      </p>
      <svg
        class="options-app-icon arrow-icon" :class="{rotateIcon: isPartOpen}"
        height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
        width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
      ><path d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z"/></svg>
    </div>
    <transition name="fadeExpandItem">
      <ul class="expanded-item" v-show="isPartOpen">
        <app-item
          v-for="(item, index) in appOptionsList"
          :item="item"
          :index="index"
          :key="index"
        ></app-item>
      </ul>
    </transition>
  </li>
</template>

<script>
  import AppItem from "./app-item";

  export default {
    name: "options-app",
    components: {AppItem},
    data() {
      return {
        isPartOpen: false,
        appOptionsList: [
          /**
           * action is dispatch prop
           */
          {action: "clearData"},
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .item-body {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .options-app-icon {
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

  .options-app-name {
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