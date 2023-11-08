<template>
    <div id="panel2">
        <div class="w100P h100P fl" style="background:white">
            <panel3 v-show="isVisible2" @close="closeThis"></panel3>
            <div class="UBheader w100P fl" style="height:50px; background:white;">
                <div type="button" class="close" @click="close">X</div>
            </div>
            <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
                <div class="w100P fl flexCenter" style="height: 100px;">Find your uniBuddy!<br>What are you looking for today?</div>
                <!--button container-->
                <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
                    <div class="flexCenter" @click="showNext" v-for="(btn, i) in mBtnList" :key="i" style="height: 100px; width: 80%; background: #cecde2; margin-bottom: 40px; border-radius: 10px;">
                        <img style="width: 50px; height: 50px;" :src="btn.imgLink" class="fl" />
                        <p class="fl">{{ btn.name }}</p>
                    </div>
                </div>
            </div>
            <div class="UBFooter w100P roundedCorners" style="height: 80px; background: #FFFBF6; overflow: hidden;"></div>
        </div>
    </div>
</template>

<script>
import panel3 from '@/components/pageComponents/friendFinder/panel3.vue'

export default {
  /* eslint-disable */
   name: 'modal',
   props: {
    pSelectedInfo: {}
   },
    data() {
        return {
            mBtnList: [
        { id: 0, name: 'Study Buddy', imgLink: "@/assets/images/friendFinder/unib_sticker_1.png" },
        { id: 1, name: 'Gym Buddy', imgLink: '@/assets/images/friendFinder/unib_sticker_2.png' },
        { id: 2, name: 'Dining Buddy', imgLink: '@/assets/images/friendFinder/unib_sticker_3.png' },
        { id: 3, name: 'Coffee Buddy', imgLink: '@/assets/images/friendFinder/unib_sticker_1.png' }
      ],
      isVisible2: false,
      mSelectedInfo: {}
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },

        showNext() {
            this.isVisible2 = true;
        },

        closeThis() {
            this.isVisible2 = false;
        }
    },
    components: {
        panel3
    }
}
</script>