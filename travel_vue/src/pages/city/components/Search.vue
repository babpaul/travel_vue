<template>
    <div class="search">
        <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音" />
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex';
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        };
    },
    methods:{
        handleCityClick(city) {
            // this.$store.dispatch('changeCity', city)
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push({ path: '/' })
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        hasNoData() {
            return !this.list.length;
        }
    },
    watch: {
        keyword() {
            if (this.keyword == '') {
                this.list = [];
                return false;
            }
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            }, 100);
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search);
    }
};
</script>

<style lang="stylus" scoped>
@import '~^css/varibles.styl'
.search
    touch-action: pan-y
    height: .72rem
    padding: 0 .1rem
    box-sizing: border-box
    line-height: .72rem
    width: 100%
    background-color: $bgColor

    .search-input
        box-sizing: border-box
        width:100%
        height: .62rem
        padding: 0 .1rem
        text-align: center
        border-radius: .06rem
        line-height: .62rem
        color: #666
.search-content
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background-color: #eee
    z-index: 10
    .search-item
        background-color: #fff
        line-height: .62rem
        padding-left: .2rem
        color: #666
        box-sizing: border-box
</style>
