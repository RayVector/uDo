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
      <options-langs></options-langs>
    </ul>
  </aside>
</template>

<script>

  import OptionsThemes from "./options/parts/options-themes";
  import CloseBtn from "../../components/UI/close-btn";
  import OptionsLangs from "./options/parts/options-langs";

  export default {
    name: "popup-options-part",
    components: {OptionsLangs, CloseBtn, OptionsThemes},
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
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title {
    font-size: 2rem;
  }

  .body {
    overflow: auto;
    height: 80%;
  }

  .body .options-item {
    margin-bottom: 30px;
  }

</style>