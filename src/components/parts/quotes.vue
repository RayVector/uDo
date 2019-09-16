<template>
  <div class="quoteBlock">
    <span class="row">{{quote}}</span>
  </div>
</template>

<script>
  import quotesBookEN from '@/assets/quotes/quotesBookEN.json'

  export default {
    name: "quotes",
    data() {
      return {
        quote: ''
      }
    },
    mounted() {
      const max = Object.keys(quotesBookEN).length;
      let randomNumber = Math.floor(Math.random() * Math.floor(max));
      this.quote = quotesBookEN[randomNumber];
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