<template>
  <aside class="popup-options-part">
    <div class="header">
      <h1 class="title">
        {{$t('popups.options.title')}}
      </h1>
      <button @click="closePopup">
        <btn-rotate btn-type="crossIcon"></btn-rotate>
      </button>
    </div>
    <ul class="body _scrollBar">
      <options-themes></options-themes>
      <options-langs></options-langs>
      <options-app></options-app>
    </ul>
  </aside>
</template>

<script>

  import OptionsThemes from "./options/parts/options-themes";
  import OptionsLangs from "./options/parts/options-langs";
  import OptionsApp from "./options/parts/options-app";
  import BtnRotate from "../../components/UI/temp/btn-rotate";

  export default {
    name: "popup-options-part",
    components: {BtnRotate, OptionsApp, OptionsLangs, OptionsThemes},
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
    overflow-y: auto;
    overflow-x: hidden;
    height: 80%;
  }


  ._scrollBar::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  ._scrollBar::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  ._scrollBar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #A0A0A0;
  }

  .body .options-item {
    margin-bottom: 30px;
  }

</style>
