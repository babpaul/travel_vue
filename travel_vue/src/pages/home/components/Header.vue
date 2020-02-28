<template>
    <div class="header">
        <div class="header-left"><div class="iconfont  back-icon">&#xe624;</div></div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市游玩主题
        </div>
        <router-link to="/city.html">
            <div class="header-right">
                {{ this.city }}
                <span class="iconfont  arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }
};
</script>

<style lang="stylus" scoped>
@import '~^css/varibles.styl'
.header
    touch-action: pan-y
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    width: 100%
    color: #ffffff
    background-color: $bgColor

    .header-left
        width: $headerHeight
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 1
        background-color: #fff
        color: #ccc
        line-height: .64rem
        height: .64rem
        padding-left: .2rem
        box-sizing: border-box
        margin-top: .1rem
        border-radius: .1rem
    .header-right
        color: #fff
        min-width: 1.04rem
        padding: 0 .1rem
        float: right
        text-align: center
        .arrow-icon
            font-size: .24rem
            margin-left: -.04rem
</style>
