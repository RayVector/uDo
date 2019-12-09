<template>
  <div class="quoteBlock">
    <span class="row">{{quote}}</span>
  </div>
</template>

<script>

  export default {
    name: "quotes",
    data() {
      return {
        quote: ''
      }
    },
    mounted() {
      const max = Object.keys(this.$t('quotes')).length;
      let randomNumber = Math.floor(Math.random() * Math.floor(max));
      this.quote = this.$t('quotes')[randomNumber];
    }
  }
</script>

<style lang="scss" scoped>
  .quoteBlock {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    font-size: 1.2rem;
    font-style: italic;
  }

  .row {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 15s linear 3 3s;
  }

  .row:hover {
    animation-play-state: paused
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

</style>
