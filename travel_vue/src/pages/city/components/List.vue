<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.city }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-bottom">{{ key }}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{ innerItem.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hot: Array,
        letter: String
    },
    methods: {
        handleCityClick(city) {
            // this.$store.dispatch('changeCity', city)
            // this.$store.commit('changeCity', city);
            this.changeCity(city)
            this.$router.push({ path: '/' });
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter() {
            const IS = this,
                data = IS.letter;
            if (data) {
                const element = this.$refs[data][0];
                this.scroll.scrollToElement(element);
            }
        }
    },
    computed:{
        ...mapState(['city'])
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    }
};
</script>

<style lang="stylus" scoped>
@import '~^css/varibles.styl'
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #ccc

.list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
        line-height: .54rem
        background-color: #eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
    .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
            float: left
            width: 33.33%
            .button
                margin: .1rem
                padding: .1rem 0
                text-align: center
                border: .02rem solid #ccc;
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            color: #666
            padding-left: .2rem
</style>
