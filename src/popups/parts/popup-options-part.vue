<template>
  <aside class="popup-options-part">
    <div class="header">
      <h1 class="title">
        Options
      </h1>
      <close-btn @click.native="closePopup"></close-btn>
    </div>

    <ul class="body">
      <options-themes></options-themes>
    </ul>
  </aside>
</template>

<script>

  import OptionsThemes from "./options/parts/options-themes";
  import CloseBtn from "../../components/UI/close-btn";

  export default {
    name: "popup-options-part",
    components: {CloseBtn, OptionsThemes},
    methods: {
      closePopup() {
        this.$store.dispatch('closePopup');
      }
    }
  }
</script>

<style scoped lang="scss">
  .popup-options-part {
    height: 100%;
  }


  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title {
    margin-bottom: 20px;
    font-size: 2rem;

  }

  /*.options-item {
    display: flex;
    flex-direction: column;
  }*/

  .body {
    overflow: auto;
    height: 80%;
  }

</style>