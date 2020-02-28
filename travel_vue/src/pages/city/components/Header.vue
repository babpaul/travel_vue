<template>
    <div class="header">
        城市选择
        <div class="header-left">
            <router-link to="/"><div class="iconfont  back-icon">&#xe624;</div></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
    
};
</script>

<style lang="stylus" scoped>
    
@import '~^css/varibles.styl'
.header
    position: relative
    overflow: hidden
    touch-action: pan-y
    text-align: center
    height: $headerHeight
    line-height: $headerHeight
    font-size: .32rem
    width: 100%
    color: #ffffff
    background-color: $bgColor

    .header-left
        position: absolute
        width: $headerHeight
        height: $headerHeight
        left: 0
        top: 0
        .back-icon
            color: #fff
            text-align: center
            font-size: .4rem
</style>
