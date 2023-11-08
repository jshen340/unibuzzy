<template>
    <div class="w100P h100P fl" style="background:white">
        <panel5 v-show="isVisible5" @close="close"></panel5>
        <div class="UBheader w100P fl" style="height:50px; background:white;">
          <div type="button" class="close" @click="close">X</div>
        </div>
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
            <div class="w100P fl flexCenter" style="height: 100px;">What are you wearing?<br>Help your buddy find you!</div>
            <img class="image" src="@/assets/images/friendFinder/unib_emoji_7.png" alt="emoji7">
            <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
                <div class="flexCenter" style="height: 100px; width: 80%; background: #cecde2; margin-bottom: 40px; border-radius: 10px;">
                    <input class="text" placeholder="Enter Description" v-model="description">
                    <button class="button" v-on:click="getData()" @click="show5">Ready!</button>
                </div>
            </div>
        </div>
        <div class="UBFooter w100P roundedCorners" style="height: 80px; background: rgb(240, 220, 194); overflow: hidden;"></div>
    </div>
</template>

<script>
/*eslint-disable*/
import panel5 from  '@/components/pageComponents/friendFinder/panel5.vue'
    export default {
        name: "Home-item",
        data() {
            return {
                // character: "src/assets/unib7.png",
                description: null,
                isVisible5: false
            }
        },
        methods: {
            getData() {
                console.warn("values : ", this.character, this.description)
            },
            close() {
                this.$emit('close')
            },
            show5() {
                this.isVisible5 = true;
            },
            close5() {
                this.isVisible5 = false;
            }
        },
        components: {
            panel5
        }
    }
    </script>
    
    <style scoped>
    .description {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 45%;
        padding-top: 10%;
    }
    .button {
        background-color: #0074d9;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    .button:hover {
        background-color: #0056b3;
    }
    h1 {
        color: #2FB2E7
    }
    </style>
