<template>
    <div class="vh100 vw100 fl" style="background:white">
    <panel6 v-show="isVisible6" @close="close6"></panel6>
        <div class="UBheader w100P fl" style="height:50px; background:white;">
            <!-- remove close and go button -->
            <div type="button" class="close" @click="close">
                <img src="@/assets/images/friendFinder/arrow-back.svg" style="width: 5%; height:auto; float: left;">
            </div>
        </div>
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column; position: relative;">
            <img class="singleMusic flexCenter" src="@/assets/images/friendFinder/single_music.svg">
        <img class="rightMusic flexCenter" src="@/assets/images/friendFinder/right_music.svg">
        <div class="loader"></div>
        <img class="uniB" src="@/assets/images/friendFinder/uniB_image.png" alt="UniB">
        <img class="leftMusic flexCenter" src="@/assets/images/friendFinder/left_music.svg">
        <h2 style="margin-top: 20px">Finding your match...</h2>
        <button type="button" class="btn flexCenter roundedCorners" @click="show6" style="height: 75px; width: 200px">Go</button>
</div>
    </div>
  </template>

<script>
/* eslint-disable */
import panel6 from  '@/components/pageComponents/friendFinder/panel6.vue'
export default {
    name: "PanelFive",
    data() {
        return {
            isVisible6: false
        }
    },
    props: {
      msg: String
    },
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
    },
    components: {
        panel6
    }
  }
  </script>
  
  <style>  
      .loader {
      border: 10px solid #f3f3f3; /* Light grey */
      border-top: 10px solid #4badee; /* Blue */
      border-radius: 50%;
      width: 65vw;
      height: 65vw;
      margin-top: 10vh;
      animation: spin 1.75s ease-in-out infinite;
      animation: name duration timing-function delay iteration-count direction fill-mode;
      }
  
      @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
      }
  
      .singleMusic {
          width: 5vw;
          position:absolute;
          margin-left: 25vw;
          margin-top: -20vh;
      }
      .rightMusic {
          /* margin-bottom: -20vh; */
          width: 7vw;
          margin-top: -17vh;
          margin-right: 30vw;
          position:absolute;
        }
  
      .uniB {
          margin-top: 3vh;
          width: 27vw;
          height: auto;
          position: absolute;
      }
      h2 {
          font-family: Josefin Sans;
      }
  
      .leftMusic {
          /* margin-top: -18vh;
          margin-left: -37vh; */
          width: 7vw;
          margin-top: 4vh;
          margin-right: -40vw;
          position:absolute;
      }
  </style>
