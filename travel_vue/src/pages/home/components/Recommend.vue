<template>
    <div class="recommend">
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="recommend-item  border-bottom" v-for="item of list" :key="item.id">
                <div class="recommend-item-imgwrapper"><img class="recommend-item-img" :src="item.imgUrl" /></div>
                <div class="recommend-item-info">
                    <p class="recommend-item-title">{{ item.title }}</p>
                    <p class="recommend-item-desc">{{ item.desc }}</p>
                    <button class="recommend-item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
};
</script>

<style lang="stylus" scoped>
@import '~^css/mixins.styl'
.recommend
    padding-top: .2rem
.recommend-title
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
.recommend-item
    overflow: hidden
    display: flex
    height: 1.9rem
    .recommend-item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .recommend-item-info
        min-width: 0
        flex: 1
        padding: .1rem
        .recommend-item-title
            ellipsis()
            line-height: .54rem
            font-size: .32rem
        .recommend-item-desc
            ellipsis()
            line-height: .4rem
            color: #ccc
        .recommend-item-button
            line-height: .44rem
            margin-top: .16rem
            background-color: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #fff
</style>
