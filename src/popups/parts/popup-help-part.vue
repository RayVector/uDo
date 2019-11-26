<template>
  <div class="popup-help-part">
    <div class="header">
      <div class="title">
        {{$t('popups.help.title')}}
      </div>
      <button @click="closePopup">
        <close-btn-icon></close-btn-icon>
      </button>
    </div>

    <ul class="body">
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem1')}}</p>
        <delete-completed></delete-completed>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem2')}}</p>
        <clear-cache-icon></clear-cache-icon>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem3')}}</p>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem4')}}</p>
        <three-dots-icon></three-dots-icon>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem5')}}</p>
        <tabs-setting-icon></tabs-setting-icon>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem6')}}</p>
        <add-new-tab-icon></add-new-tab-icon>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem7')}}</p>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem8')}}</p>
        <trash-icon></trash-icon>
      </li>
      <li class="help-item">
        <p class="help-item-text">{{$t('popups.help.helpItem9')}}</p>
        <three-dots-icon></three-dots-icon>
      </li>
    </ul>
  </div>
</template>

<script>
  import CloseBtnIcon from "../../components/UI/close-btn-icon";
  import DeleteCompleted from "../../components/UI/delete-completed-icon";
  import ClearCacheIcon from "../../components/UI/clear-cache-icon";
  import TabsSettingIcon from "../../components/UI/tabs-setting-icon";
  import AddNewTabIcon from "../../components/UI/add-newTab-icon";
  import ThreeDotsIcon from "../../components/UI/three-dots-icon";
  import TrashIcon from "../../components/UI/trash-icon";

  export default {
    name: "popup-help-part",
    components: {TrashIcon, ThreeDotsIcon, AddNewTabIcon, TabsSettingIcon, ClearCacheIcon, DeleteCompleted, CloseBtnIcon},
    methods: {
      closePopup() {
        this.$store.dispatch('closePopup');
      }
    }
  }
</script>

<style scoped lang="scss">
  .popup-help-part {
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

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .help-item {
    margin-bottom: 20px;
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid rgba(204, 204, 204, .5);
  }

  .help-item-text {
    margin-right: 15px;
    font-size: 1.2rem;
    width: 80%;
  }

</style>