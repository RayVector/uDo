<template>
  <img :src=getImgUrl alt="" class="icon" @click="animate">
</template>

<script>

  export default {
    name: "btn-rotate",
    props: ['btnType'],
    computed: {
      getImgUrl() {
        let images = require.context('@/assets/img/UI/', false, /\.svg$/);
        return images('./' + this.btnType + ".svg")
      }
    },
    methods: {
      animate(e) {
        const icon = e.target;
        icon.classList.add('_iconRotate');
        setTimeout(() => {
          icon.classList.remove('_iconRotate');
        }, 300)
      }
    },
  }
</script>

<style scoped lang="scss">
  .icon {
    transition: all .3s ease;
    width: 100%;
    height: 100%;
  }
</style>
