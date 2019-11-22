<template>
  <li class="options-item options-langs">
    <div class="item-body" @click="isOpen = !isOpen">
      <svg
        class="options-langs-icon"
        width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.3384 8.5H25.9991C26.8301 8.5 27.4991 9.169 27.4991 10V24C27.4991 24.831 26.8301 25.5 25.9991 25.5H16.4991L15.8184 22.6069"
          stroke="white" stroke-opacity="0.8" stroke-miterlimit="4.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.5 22.5H6.00002C5.16901 22.5 4.5 21.831 4.5 21V7C4.5 6.169 5.16901 5.5 6.00002 5.5H15.5L19.5 22.5Z"
              stroke="white" stroke-opacity="0.8" stroke-miterlimit="4.1" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M16.5059 25.4948L19.4958 22.5049" stroke="white" stroke-opacity="0.8" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path
          d="M23.252 21.24H22.0939V14.4665H23.252V21.24ZM22 12.6698C22 12.482 22.0563 12.3234 22.169 12.1941C22.2859 12.0647 22.457 12 22.6824 12C22.9077 12 23.0788 12.0647 23.1957 12.1941C23.3125 12.3234 23.371 12.482 23.371 12.6698C23.371 12.8576 23.3125 13.0141 23.1957 13.1393C23.0788 13.2646 22.9077 13.3272 22.6824 13.3272C22.457 13.3272 22.2859 13.2646 22.169 13.1393C22.0563 13.0141 22 12.8576 22 12.6698Z"
          fill="white" fill-opacity="0.8"/>
        <path
          d="M13.1763 16.5879H9.3042L8.43457 19H7.17773L10.707 9.75781H11.7734L15.3091 19H14.0586L13.1763 16.5879ZM9.67236 15.585H12.8145L11.2402 11.2622L9.67236 15.585Z"
          fill="white" fill-opacity="0.8"/>
      </svg>

      <p class="options-langs-name">Langs</p>
      <svg
        class="options-langs-icon arrow-icon" :class="{rotateIcon: isOpen}"
        height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
        width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
      ><path d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z"/></svg>
    </div>
    <transition name="fadeExpandItem">
      <ul class="expanded-item" v-show="isOpen">
        <lang-item
          v-for="(item, index) in langsList"
          :item="item"
          :index="index"
          :key="index"
          @setLang="setLang(index)"
        ></lang-item>
      </ul>
    </transition>
  </li>
</template>

<script>
  import LangItem from "./lang-item";


  export default {
    name: "options-langs",
    components: {LangItem},
    data() {
      return {
        isOpen: false,
        activeLang: 0,
        langsList: [
          {
            langName: "English",
            langCode: "EN"
          },
          {
            langName: "Russian",
            langCode: "RU"
          },
          {
            langName: "Spanish",
            langCode: "ES"
          },
          {
            langName: "Chinese",
            langCode: "ZH"
          },
        ]
      }
    },
    methods: {
      setLang(index) {
        this.isOpen = false;
        this.activeLang = index;
        localStorage.setItem('lang', this.langsList[index].langCode);
        location.reload();
      },
    },
    mounted() {
      let storageLang = localStorage.getItem('lang');
      let currentLang = this.langsList.find(item => item.langCode === storageLang);
      this.activeLang = this.langsList.indexOf(currentLang);
    },
  }
</script>

<style scoped lang="scss">
  .item-body {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .options-langs-icon {
    margin-right: 20px;
    width: 3rem;
    height: 3rem;
  }

  .arrow-icon {
    margin-left: auto;
    transition: .3s ease;
    fill: rgba(255, 255, 255, .8);
  }

  .rotateIcon {
    transform: rotate(-90deg);
  }

  .options-langs-name {
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .expanded-item {
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
