<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :navList="iStyleList"  />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :navList="bedHotel" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :navList="movies" />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import MMenu from '../components/index/menu.vue';
import MLife from '../components/index/life.vue';
import Container from '../components/index/container.vue';
export default {
    components: {
        MMenu,
        MLife,
        Container,
    },
    data() {
        return {
            iStyleList: {
                class: 'iStyle',
                title: '有格调',
                list: [
                    {
                        text: '全部',
                        tab: 'all',
                    },
                    {
                        text: '约会聚餐',
                        tab: 'food',
                    },
                    {
                        text: '丽人SPA',
                        tab: 'spa',
                    },
                    {
                        text: '电影演出',
                        tab: 'movie',
                    },
                    {
                        text: '品质出游',
                        tab: 'travel',
                    },
                ],
            },
            bedHotel: {
                class: 'bedHotel',
                title: '推荐民宿',
                list:  [
                    {
                        text: '全部',
                        tab: 'all',
                    },
                    {
                        text: '北京',
                        tab: 'beijing',
                    },
                    {
                        text: '天津',
                        tab: 'tianjing',
                    },
                    {
                        text: '青岛',
                        tab: 'qingdao',
                    },
                    {
                        text: '济南',
                        tab: 'jinan',
                    },
                ],
            },
            movies: {
                class: 'moviesList',
                title: '猫眼电影',
                list: [
                    {
                        text: '全部',
                        tab: 'all',
                    },
                    {
                        text: '正在热映',
                        tab: 'now',
                    },
                    {
                        text: '即将上映',
                        tab: 'soon',
                    }
                ],
            },
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/index/index.scss';
    // @import '@/assets/css/index/life.scss';
</style>