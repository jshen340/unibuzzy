<template>
    <div id="panel2">
        <div class="w100P h100P fl" style="background:white">
            <panel3 v-show="isVisible2" @close="closeThis"></panel3>
            <div class="UBheader w100P fl" style="height:50px; background:white;">
                <div type="button" class="close" @click="close">
                    <img src="@/assets/images/friendFinder/arrow-back.svg" style="width: 5%; height:auto; float: left;">
                </div>
            </div>
            <div class="UBbody w100P fl flexCenter" style="font-family: Josefin Sans; font-size: 20px; height: calc(100vh - 120px); flex-direction: column;">
                <div class="w100P fl flexCenter" style="height: 100px; margin-top: 40px; margin-bottom: 5vh;">What are you looking for today?</div>
                <!--button container-->
                <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
                    <div class="btn" @click="showNext" style="color: #78B881; height: 100px; width: 80%; margin-bottom: 40px; border: #78B881 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/comment-dots.svg" style=""/>
                        Quick Chat
                    </div>
                    <div class="btn" @click="showNext" style="color: #EF7458; height: 100px; width: 80%; margin-bottom: 40px; border: #EF7458 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/book.svg" style="height: 40%;"/>
                        Study Buddy
                    </div>
                    <div class="btn" @click="showNext" style="color: #FDC782; height: 100px; width: 80%; margin-bottom: 40px; border: #FDC782 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/restaurant.svg" style="height: 50%;"/>
                        <span style="padding-right: 20px"></span>
                        Get Food
                    </div>
                    <div class="btn" @click="showNext" style="color: #2FB2E7; height: 100px; width: 80%; margin-bottom: 40px; border: #2FB2E7 solid 4px;">
                        <img class="icon" src="@/assets/images/friendFinder/dumbbell.svg" />
                        Gym Buddy
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