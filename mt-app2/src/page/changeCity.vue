<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot :title="'热门城市：'" :list="hotList" />
        </el-row>
        <el-row>
            <hot :title="'最近访问：'" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index.js';
import Province from '@/components/changeCity/province.vue';
import hot from '@/components/changeCity/hot.vue';
import Category from '@/components/changeCity/category.vue';
export default {
    components: {
        Province,
        hot,
        Category
    },
    data() {
        return {
            hotList: [],
            rencentList: [],
        }
    },
    created() {
        api.getHotCity().then(res => {
            // console.log(res);
            this.hotList = res.data.data;
        });
        api.getRecentCity().then(res => {
            // console.log(res);
            this.rencentList = res.data.data;
        })
    }
}
</script>
