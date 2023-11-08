<template>
    <div class="app">
    <div class="w100P h100P fl" style="position:fixed">
        <modal v-show="isVisible" @close="closeThis"></modal>
       <div class="UBheader w100P fl" style="height:60px; background:white;"></div>
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
            <div class="spacer" style="height: 300px"></div>
            <img style="width:300px; height:300px;" src="../../assets/images/friendFinder/unib_sticker_7.png">
            <div class="w100P fl flexCenter" style="height: 100px;">Find your uniBuddy!</div>
            <!--button container-->
            <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 120px);">
                <button type="button" class="btn flexCenter roundedCorners" @click="showNext" style="height: 75px; width: 200px">Get Started</button>
            </div>
        </div>
        <div class="UBFooter w100P menuRoundedCorners" style="height: 80px; background: rgb(240, 220, 194); overflow: hidden;"></div>
    </div>
</div>
</template>
<script>
import modal from '@/components/pageComponents/friendFinder/panel2.vue'
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
    modal
  }
}
</script>
