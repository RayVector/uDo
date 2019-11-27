<template>
  <div class="lang-item _small-part"
    @click="$emit('setLang')"
       :class="{'active-lang': activeLang === index}"
  >
    <span class="lang-item-code">{{item.langCode}}</span>
    <span class="lang-item-divider"> | </span>
    <span class="lang-item-name">{{item.langName}}</span>
  </div>
</template>

<script>
  export default {
    name: "lang-item",
    props: ['item', 'activeLang', 'index']
  }
</script>

<style scoped lang="scss">
  .lang-item {
    margin-bottom: 10px;
    max-width: 50%;
    width: 100%;
    border: 1px solid rgba(204, 204, 204, .4);
    border-radius: 10px;
    padding: 8px;

    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 5px;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }



  .lang-item-code {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, .4);
  }
  .lang-item-divider {
    padding: 0 5px;
  }

  .active-lang {
    opacity: .6;
    cursor: default;
  }

  @media screen and  (min-width: 1000px){
    .lang-item:hover {
      border: 1px solid #ccc;
    }
  }
</style>