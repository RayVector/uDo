<template>
  <button class="app-item _small-part" @click="optionSet">
    {{$t('popups.options.app.item' + (index+1))}}
  </button>
</template>

<script>
  export default {
    name: "app-item",
    props: ['item', 'index'],
    methods: {
      optionSet() {
        this.$store.dispatch(this.item.action);
      }
    }
  }
</script>

<style scoped lang="scss">

  .app-item {
    margin-bottom: 10px;
    max-width: 70%;
    width: 100%;
    border: 1px solid rgba(204, 204, 204, .4);
    border-radius: 10px;
    padding: 8px;

    color: rgba(255, 255, 255, .8);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 5px;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1000px) {
    .app-item:hover {
      border: 1px solid #ccc;
    }
  }


</style>