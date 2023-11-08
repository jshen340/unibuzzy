<template>
  <div class="w100P h100P fl" style="background:white">
        <panel6 v-show="isVisible5" @close="close"></panel6>
        <div class="UBheader w100P fl" style="height:50px; background:white;">
          <div type="button" class="close" @click="close">X</div>
        </div>
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
            <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
                <img class="singleMusic" src="@/assets/images/friendFinder/left_music.svg">
                <img class="rightMusic" src="@/assets/images/friendFinder/right_music.svg">
                <div class="loader"></div>
                <img class="uniB" src="@/assets/images/friendFinder/uniB_image.png" alt="UniB">
                <img class="leftMusic" src="@/assets/images/friendFinder/left_music.svg">
                <h2>Finding your match...</h2>
                <button class="button" v-on:click="getData()" @click="show6">Ready!</button>
            </div>
        </div>
        <div class="UBFooter w100P roundedCorners" style="height: 80px; background: rgb(240, 220, 194); overflow: hidden;"></div>
    </div>
</template>

<script>
/*eslint-disable*/
  export default {
    name: "PanelFive",
    isVisible6: false,

    methods: {
        close() {
                this.$emit('close')
            },
            show6() {
                this.isVisible6 = true;
            },
            close6() {
                this.isVisible6 = false;
            }
    }
  }

  </script>
  
  <style>
      .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      }
  
      .loader {
      border: 10px solid #f3f3f3; /* Light grey */
      border-top: 10px solid #4badee; /* Blue */
      border-radius: 50%;
      width: 30vw;
      height: 30vw;
      animation: spin 1.75s ease-in-out infinite;
      animation: name duration timing-function delay iteration-count direction fill-mode;
      }
  
      @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
      }
  
      .singleMusic {
          width: 1.5vw;
          margin-left: -10vw;
      }
      .rightMusic {
          padding-left: 18vw;
          margin-bottom: -20vh;
          width: 2.5vw;
      }
  
      .uniB {
          margin-top: -42vh;
          width: 17vw;
          height: 35vh;
      }
      h2 {
          padding-top: 28vh;
      }
  
      .leftMusic {
          margin-top: -18vh;
          margin-left: -37vh;
          width: 3vw;
      }
  </style>
  