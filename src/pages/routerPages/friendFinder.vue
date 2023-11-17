<template>
    <div class="app">
    <div class="w100P h100P fl" style="position:fixed">
        <panel2 v-show="isVisible" @close="closeThis"></panel2>
       <div class="UBheader w100P fl" style="height:60px; background:white;"></div>
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 135px); flex-direction: column;">
            <div class="spacer" style="height: 300px"></div>
            <img style="width:300px; height:300px;" src="../../assets/images/friendFinder/unib_sticker_7.png">
            <div class="w100P fl flexCenter" style="height: 100px; font-family: Josefin Sans;  margin-top: 12vh; font-size: 25px;">Find your uniBuddy!</div>
            <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; font-family: Josefin Sans; font-size: 17px; height: 30vh;">
                <button type="button" class="btn flexCenter" @click="showNext" style="margin-top: 3vh; height: 60px; color: #2FB2E7; width: 200px; border: solid #2FB2E7 4px; border-radius: 25px; font-weight:bolder;">Get Started</button>
            </div>
        </div>
        <div class="UBFooter w100P menuRoundedCorners" style="height: 80px; border-radius: 25px; background:#FFFBF6; overflow: hidden;"></div>
    </div>
</div>
</template>
<script>
import panel2 from '@/components/pageComponents/friendFinder/panel2.vue'
export default {
  /*eslint-disable*/
  data () {
    return {
      isVisible: false,
      mSelectedInfo: {}
    }
  },
  methods: {
        showNext() {
            this.isVisible = true;
        },
        closeThis() {
            this.isVisible = false;
        }
    },
  components: {
    panel2
  }
}
</script>
