<template>
  <li class="theme-item _small-part">
    <div class="preview-box forest"
         :style="{backgroundImage: 'url('+require('../../../../assets/img/'+getThemeName+'.jpg')+')'}"
    ></div>
    <p class="desc">{{item.themeName}}</p>
  </li>
</template>

<script>
  export default {
    name: "theme-item",
    props: ['item', 'index'],
    computed: {
      getThemeName() {
        return this.$store.state.themes.themesList[this.index].themeName;
      },
    }
  }
</script>

<style scoped lang="scss">
  .theme-item {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    width: 25%;
    height: 110px;
  }

  .preview-box {
    margin: 0 auto 10px;
    width: 100%;
    height: 70%;
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .desc {
    padding-top: 10px;
    border-top: 1px solid #ccc;
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
  }
</style>