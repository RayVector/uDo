<template>
  <img :src=getImgUrl alt="" class="icon" @click="animate">
</template>

<script>

  export default {
    name: "btn-animate",
    props: ['btnName', 'animationStyle'],
    computed: {
      getImgUrl() {
        let images = require.context('@/assets/img/UI/', false, /\.svg$/);
        return images('./' + this.btnName + ".svg")
      }
    },
    methods: {
      animate(e) {
        const icon = e.target;
        icon.classList.toggle(this.animationStyle.toString());
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
