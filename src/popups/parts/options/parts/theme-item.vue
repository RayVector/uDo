<template>
  <li class="theme-item _small-part" :class="{'active-theme': index === getActiveTheme}">
    <div class="preview-box"
         :style="{backgroundImage: 'url('+require('../../../../assets/img/'+getThemeName+'.jpg')+')' }"
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
      getActiveTheme() {
        return this.$store.state.themes.activeTheme
      }
    }
  }
</script>

<style scoped lang="scss">
  .theme-item {
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    width: 25%;
    height: 120px;
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

  .active-theme {
    opacity: .6;
    cursor: default;
  }
</style>