<template>
    <div class="weekend">
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="weekend-item  border-bottom" v-for="item of list" :key="item.id">
                <div class="weekend-item-imgwrapper"><img class="weekend-item-img" :src="item.imgUrl" /></div>
                <div class="weekend-item-info">
                    <p class="weekend-item-title">{{ item.title }}</p>
                    <p class="weekend-item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
};
</script>

<style lang="stylus" scoped>
@import '~^css/mixins.styl'
.weekend-title
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
.weekend-item-imgwrapper
    height: 0
    overflow: hidden
    padding-bottom: 37.09%
.weekend-item-img
    width: 100%
.weekend-item-info
    padding: .1rem
    .weekend-item-title
        ellipsis()
        line-height: .54rem
        font-size: .32rem
    .weekend-item-desc
        ellipsis()
        line-height: .4rem
        color: #ccc
    
</style>
