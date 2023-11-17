<template>
    <div class="vh100 vw100 fl" style="background:white">
        <panel5 v-show="isVisible5" @close="close5"></panel5>
        <div class="UBheader w100P fl" style="height:50px; background:white;">
            <div type="button" class="close" @click="close">
                <img src="@/assets/images/friendFinder/arrow-back.svg" style="width: 5%; height:auto; float: left;">
            </div>
        </div>
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
        <div style="width: 100%; height: 40%;">
            <img class="image" src="@/assets/images/friendFinder/unib_emoji_7.png" alt="emoji7" style="width: 40%; height:auto">
            <div class="shadow"></div>
        </div>
            <textarea class="text" placeholder="What are you wearing? Help your buddy find you!" v-model="description" style="font-family: Josefin Sans"></textarea>
            <button class="button" v-on:click="getData()" @click="show5">I'm ready!</button>
        </div>
        <div class="UBFooter w100P roundedCorners" style="height: 80px; background: #FFFBF6; overflow: hidden;"></div>
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
                console.warn("values : ", this.description)
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
    .text {
        width: 70vw;
        height: 20vh;
        margin-top: 3vh;
        margin-bottom: 3vh;
        outline: gray solid 1px;
        border-radius: 10px;
        padding: 6px;
    }

    .shadow {
        border-radius: 50%; background: 
        black;
         width: 45%; opacity: 0.5;
          -webkit-filter: blur(10px); 
          -webkit-transform: scale(1, 0.2);
    }


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
        color: #2FB2E7;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        border: #2FB2E7 solid 2px;
        cursor: pointer;
    }
    .button:hover {
        background-color: #2FB2E7;
        color: white;
    }
    h1 {
        color: #2FB2E7
    }
    </style>
