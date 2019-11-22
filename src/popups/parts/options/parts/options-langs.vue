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
              stroke="white" stroke-opacity="0.8" stroke-miterlimit="4.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5059 25.4948L19.4958 22.5049" stroke="white" stroke-opacity="0.8" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path
          d="M13.1763 16.5879H9.3042L8.43457 19H7.17773L10.707 9.75781H11.7734L15.3091 19H14.0586L13.1763 16.5879ZM9.67236 15.585H12.8145L11.2402 11.2622L9.67236 15.585Z"
          fill="white" fill-opacity="0.8"/>
        <path
          d="M24.9775 13.2589H23.8056V12.4731H24.9775V13.2589ZM24.9775 14.5017H23.8056V13.6999H24.9775V14.5017ZM22.1618 13.6999H23.2865V14.5017H22.1618V13.6999ZM22.1618 12.4731H23.2865V13.2589H22.1618V12.4731ZM25.5202 12H21.6506V14.9668H25.5202V12ZM20.5337 12.9381V16.1775H19.5112V12.9381H20.5337ZM21.0449 12.3849H19V17.4204H19.5112V16.7308H21.0449V12.3849ZM25.4022 16.386C25.127 16.6186 24.6944 16.9313 24.3247 17.1558C24.1281 16.8511 23.9629 16.5063 23.8449 16.1294H25.9213V15.6002H21.2494V16.1294H21.9258V18.2383C21.6427 18.2864 21.3831 18.3265 21.1551 18.3585L21.2966 18.8958C22.0438 18.7675 23.0427 18.5911 24.0022 18.4066L23.9708 17.8935C23.4674 17.9817 22.9562 18.0699 22.4843 18.1501V16.1294H23.3258C23.7191 17.4845 24.4742 18.5189 25.6382 19C25.7169 18.8557 25.8742 18.6392 26 18.5269C25.4337 18.3265 24.9697 17.9817 24.5921 17.5326C24.9697 17.3242 25.418 17.0515 25.764 16.7709L25.4022 16.386Z"
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
        langsList: [
          {
            langName: "English"
          },
          {
            langName: "Russian"
          },
          {
            langName: "Spanish"
          },
          {
            langName: "Chinese"
          },
        ]
      }
    },
    methods: {
      chooseLang() {
        this.isOpen = false;
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
