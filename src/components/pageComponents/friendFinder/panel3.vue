<template>
  <div class="w100P h100P fl" style="background:white">
    <panel4 v-show="isVisible4" @close="close4"></panel4>
      <div class="UBheader w100P fl" style="height:50px; background:white;">
        <div type="button" class="close" @click="close">
          <img src="@/assets/images/friendFinder/arrow-back.svg" style="width: 5%; height:auto; float: left;">
        </div>
      </div>
      <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
          <div class="w100P fl flexCenter" style="font-family: Josefin Sans; margin-top: 40px; font-size: 20px; height: 100px;margin-bottom: 5vh;">Find your uniBuddy!<br>Where are you?</div>
          <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
            <div class="btn" @click="show4" style="color: #78B881; height: 100px; width: 80%; margin-bottom: 40px; border: #78B881 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/unib_sticker_1.png" style="margin-right: 6vw;"/>
                        Student Center
                    </div>
                    <div class="btn" @click="show4" style="color: #EF7458; height: 100px; width: 80%; margin-bottom: 40px; border: #EF7458 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/unib_sticker_3.png" style="height: 40%; margin-right: 10vw;"/>
                        CULC/PG
                    </div>
                    <div class="btn" @click="show4" style="color: #FDC782; height: 100px; width: 80%; margin-bottom: 40px; border: #FDC782 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/unib_sticker_2.png" style="height: 50%; margin-right: 6vw;"/>
                        <span style="padding-right: 20px"></span>
                        Crosland
                    </div>
                    <div class="btn" @click="show4" style="color: #2FB2E7 ; height: 100px; width: 80%; margin-bottom: 40px; border: #2FB2E7 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/unib_emoji_7.png" style="margin-right: 17vw; width: 7vw;"/>
                        CRC
                    </div>
          </div>
      </div>
      <div class="UBFooter w100P roundedCorners" style="height: 80px; background: #FFFBF6; overflow: hidden;"></div>
  </div>
</template>

<script>
/*eslint-disable*/
import panel4 from '@/components/pageComponents/friendFinder/panel4.vue'

export default {
props: {
  pSelectedInfo: {},
},
data() {
  return {
    mMyDesc: '',
    isVisible4: false
  }
},
methods: {
  close() {
    this.$emit('close')
  },
  show4() {
    this.isVisible4 = true;
  },
  close4() {
    this.isVisible4 = false;
  }
},
components: {
  panel4
}
}
</script>
<style scoped>
.icon {
    width: 8vw;
    margin-right: 8vw;
    margin-left: 8vw;
    height: auto;
}

.btn {
    font-family: Josefin Sans; 
    font-weight: bold;
    font-size: 25px;
    display: flex;
    border-radius: 30px;
    align-items: center;
    height: 20vh;
}

.txt {
    align-items: center;
    justify-content: center;
}
</style>
