<template>
    <div class="vh100 vw100 fl" style="font-family: Josefin Sans; background:white">
        <div class="UBheader w100P fl" style="height:50px; background:white;">
            <div type="close" class="close" @click="close">
                <img src="@/assets/images/friendFinder/arrow-back.svg" style="width: 5%; height:auto; float: left;">
            </div>
        </div>
            <h2 style="margin-top: 22vh;">You Matched with </h2>
            <h1 style="color: #2FB2E7">name{{ name }}!</h1> <!-- add name variable from their name -->
                <!-- user profile name -->
            <div class="vw100 centeredBox">
                <div class="box">
                    <img class="emoji8" src="@/assets/images/friendFinder/unib_emoji_8.png" alt="profile picture" />
                    <div class="locationIcons">
                        <img class= "locationIcon" src="@/assets/images/friendFinder/location_ping.png">
                        <h4>Location{{Location}}</h4> <!-- add location variable from matched location -->
                    </div>
                    <div class="clothingIcons">
                        <img class="clothingIcon" src="@/assets/images/friendFinder/hanger.png">
                        <h4>Clothing{{Clothing}}</h4> <!-- add clothing variable from clothing -->
                    </div>
                </div>
                <div class="button" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'lightColor'" >Contact</div>
                <div class="button" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'deepColor'" >We've met!</div>
            </div>
    </div>
</template>

<script>
/*eslint-disable*/
    export default {
        name: "Panel_6",
        data() {
            return {
                Location: '',
                Clothing: '',
                name: ''
            }
        },
        methods: {
            close() {
                this.$emit('close')
            }
        }
    }
    
</script>

<style>
    .match {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        margin-top: 40%;
    }
    .centeredBox {
        display: -moz-box;
        -moz-box-orient: vertical;
        margin-left: 23vw;
        justify-content: center;
        align-items: center;
    }
    
    .box {
        width: 50%;
        height: 25vh;
        background-color: #ffffff;
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        margin: 10px;
        padding: 20px;
        margin-bottom: 50px;
        margin-top: 20px;
        text-align: center;
        align-items: center;
        list-style-type: none;
        font-family: 'Josefin Sans', sans-serif;
    }
    .locationIcons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .clothingIcons {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .locationIcon {
        background-repeat: no-repeat;
        width: 8%;
        height: auto;
        margin-right: 20px;
        margin-bottom: 0px;
    }
    .clothingIcon {
        background-repeat: no-repeat;
        width: 8%;
        height: auto;
        margin-right: 20px;
        margin-top: 0px;
    }
    .emoji8{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1vh;
        width: 20vw;
        border: 2px solid #2FB2E7;
        border-radius: 70%;
        padding: 10px;
    }
    .lightColor {
        background-color: #ffffff;
        color: #2FB2E7;
    }
    .deepColor {
        background-color: #2FB2E7;
        color: #FFFFFF;
    }
    .deepLightColor {
        background-color: #ffffff;
        color: #000000;
    }
    .button {
        cursor: pointer;
        border: 3px solid #2FB2E7;
        line-height: 30px;
        border-radius: 20px;
        min-width: 3rem;
        height: 55px;
        padding: 0 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        width: 50%;
        font-size: 17px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
    }
    .centeredButton {
        display: block;
        justify-content: center;
        align-items: center;
    }
</style>
