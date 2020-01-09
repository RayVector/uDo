<template>
  <div class="menu _theme-appMenu">
    <button class="nav-btn" @click="closeMenu">
      <btn-animate btn-name="crossIcon" animation-style="_iconRotate"></btn-animate>
    </button>
    <button class="nav-btn" @click="openOptionsPopup">
      <btn-animate btn-name="gearIcon" animation-style="_iconRotate"></btn-animate>
    </button>
    <button class="nav-btn" @click="getHelp">
      <btn-animate btn-name="infoIcon" animation-style="_iconRotate"></btn-animate>
    </button>
  </div>
</template>

<script>
  import BtnAnimate from "../components/UI/temp/btn-animate";

  export default {
    name: "appMenu",
    components: {BtnAnimate},
    methods: {
      getHelp() {
        this.$emit('closeMenu');
        //second parameter is popup type
        this.$store.dispatch("openPopup", "PopupHelpPart");
      },
      closeMenu() {
        this.$emit('closeMenu');
      },
      openOptionsPopup() {
        this.$emit('closeMenu');
        //second parameter is popup type
        this.$store.dispatch("openPopup", "PopupOptions");
      },
    },

  }
</script>

<style lang="scss" scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    z-index: 99;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 1rem;
    background-color: #e7e7e7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.45);
    -moz-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.45);
    box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.45);
    border-bottom: 0.0625rem solid rgba(0, 0, 0, .2);
    transition: .3s;
  }

  .nav-btn {
    width: 1.5rem;
    height: 1.5rem;
  }


  @media screen and (min-width: 1000px) {
    .menu {
      max-width: 20%;
      width: 100%;
      right: 0;
      left: auto;
      border-radius: 10px;
      border: 1px solid #797979;
    }
  }
</style>
