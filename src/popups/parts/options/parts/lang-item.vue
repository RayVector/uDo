<template>
  <div class="lang-item _small-part">
    {{item.langName}}
  </div>
</template>

<script>
  export default {
    name: "lang-item",
    props: ['item']
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

  .lang-item:hover {
    border: 1px solid #ccc;
  }
</style>