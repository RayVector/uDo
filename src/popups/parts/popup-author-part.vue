<template>
  <div class="popup-author-part">

    <div class="header">
      <div class="title">
        {{$t('popups.author.title')}}
      </div>
      <button @click="closePopup">
        <close-btn-icon></close-btn-icon>
      </button>
    </div>

    <div class="body">

      <p class="author">
        {{$t('popups.author.created')}}
      </p>
      <p class="author-name">Ray Vector</p>

      <div class="links">
        <div class="link-item">
          <svg
            class="link-item-icon"
            style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_1"/>
            <g id="icons"><g id="telegram"><path class="st0" d="M21,12.1L13.2,19c-0.1,0.1-0.1,0.2-0.1,0.3l-0.3,2.7c0,0.1-0.1,0.1-0.2,0l-1.2-4c-0.1-0.2,0-0.4,0.2-0.5    l9.1-5.7C21,11.7,21.2,12,21,12.1z"/><path
              class="st0"
              d="M16,2.2c-3.8,0-7.3,1.5-9.8,4c-2.5,2.5-4.1,6-4.1,9.8c0,3.8,1.5,7.3,4.1,9.8c2.5,2.5,6,4,9.8,4    c3.8,0,7.3-1.5,9.8-4c2.5-2.5,4.1-6,4.1-9.8C29.8,8.4,23.6,2.2,16,2.2z M24.2,10.1l-2.8,13.6c-0.1,0.6-0.9,0.9-1.4,0.5l-4.3-3.2    l-2.2,2.2c-0.4,0.4-1,0.2-1.2-0.3l-1.6-5l-4.2-1.3c-0.6-0.2-0.6-0.9,0-1.1l16.7-6.5C23.7,8.9,24.4,9.4,24.2,10.1z"/></g></g></svg>
          <span class="link-item-link">
            @RayVector
          </span>
        </div>
        <div class="link-item">
          <svg
            class="link-item-icon"
            width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8964 27.5403L14.9244 17.2188H34.9131L24.8964 27.5403Z"
                  fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M24.875 3C12.7946 3 3 13.0511 3 25.4478C3 35.3674 9.5625 46.5488 24.875 46.7475C40.1875 46.9462 46.75 35.3619 46.75 25.4478C46.75 13.0511 36.9554 3 24.875 3ZM36.333 14.6667H13.4568C12.1292 14.6667 11.0208 15.7758 11.0208 17.1034V33.3067C11.0208 34.6343 12.1292 35.7427 13.4568 35.7427H36.333C37.6607 35.7427 38.769 34.6343 38.769 33.3067V17.1034C38.769 15.7758 37.6607 14.6667 36.333 14.6667ZM14.9244 17.2188L24.8964 27.5403L34.9131 17.2188H14.9244Z"
                  fill="black"/>
            <path
              d="M25.5493 29.485C25.4642 29.5727 25.3624 29.6425 25.2498 29.6901C25.1372 29.7377 25.0162 29.7621 24.8939 29.762C24.7717 29.7619 24.6507 29.7371 24.5382 29.6893C24.4257 29.6415 24.324 29.5715 24.2391 29.4836L21.9583 27.1225L19.4062 24.4811L13.5729 18.4435V32.3499L14.3021 33.1906H35.4479L36.217 32.3499V18.4927L29.8372 25.0662L28.1562 26.7982L25.5493 29.485Z"
              fill="black"/>
          </svg>
          <span class="link-item-link">rayvectorspqr@yahoo.com</span>
        </div>
        <div class="link-item">
          <svg
            class="link-item-icon"
            height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
            width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <g><path class="st0" d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"/></g></svg>
          <a class="link-item-link" href="https://github.com/RayVector" target="_blank">GitHub</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import CloseBtnIcon from "../../components/UI/close-btn-icon";

  export default {
    name: "popup-author-part",
    components: {CloseBtnIcon},
    methods: {
      closePopup() {
        this.$store.dispatch('closePopup');
      }
    }
  }
</script>

<style scoped lang="scss">
  .popup-author-part {
    height: 100%;
  }

  .header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title {
    font-size: 2rem;
  }

  .body {
    overflow: auto;
    height: 85%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .author {
    font-size: 2rem;
  }

  .author-name {
    margin-bottom: 30px;
    font-style: italic;
    text-decoration: underline;
    font-weight: bold;
    font-size: 2rem;
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .link-item {
    display: flex;
    align-items: center;
    flex-direction: column;

  }

  .link-item:not(:last-child) {
    margin-bottom: 20px;
  }

  .link-item-icon {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
    fill: #000
  }

  .mail-icon {
    width: 47px;
    height: 47px;
  }

  .link-item-link {
    transition: .3s;
    font-size: 1.5rem;
  }

  .link-item-link:hover {
    color: rgba(255, 255, 255, .4);
  }

  @media screen and (min-width: 1000px) {
    .author {
      padding-top: 80px;
    }

    .author-name {
      margin-bottom: 50px;
    }

    .link-item {
      flex-direction: row;
    }

    .link-item:not(:last-child) {
      margin-bottom: 40px;
    }

    .link-item-icon {
      margin-bottom: 0;
      margin-right: 20px;
    }

  }

</style>