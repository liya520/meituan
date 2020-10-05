<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumb />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <div class="mapImg">
                    <img class="csssprite" src="../assets/img/map.png" dn="2">
                </div>
                <dl class="likes">
                    <dt class="like-title">猜你喜欢</dt>
                    <dd>
                        <likes-list />
                        <likes-list />
                        <likes-list />
                    </dd>
                </dl>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Crumb from '@/components/products/crumb.vue';
import Categroy from '@/components/products/categroy.vue';
import List from '@/components/products/list.vue';
import LikesList from '@/components/products/likesList.vue'
export default {
    components: {
        Crumb,
        Categroy,
        List,
        LikesList,
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/products/index.scss';    
    @import '@/assets/css/products/list.scss';
    .mapImg {
        box-sizing: border-box;
        .csssprite{
            padding: 0 10px;
            width: 100%;
        }
    }
    .likes {
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 5px;
        padding: 15px 20px;
        margin-left: 10px;
        .like-title {
            font-size: 20px;
            color: rgb(82, 80, 80);
            padding-bottom: 15px;
        }
    }
</style>