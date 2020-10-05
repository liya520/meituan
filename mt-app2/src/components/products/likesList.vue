<template>
    <div>
        <div v-for="(item, index) in likesList" :key="index">
            <div class="image">
                <img class="image" src="//p0.meituan.net/mogu/c90fda9e4bbefee41e99eaa304929d6c109781.jpg@233w_130h_1e_1c">
            </div>
            <div class="img-des">
                <p class="title">{{item.title}}</p>
                <p class="comment">
                    <el-rate class="el-rate" v-model="item.score" disabled text-color="#fff9900"></el-rate>
                    <span>{{item.commentNum}}评价</span>
                </p>
                <p class="address">{{item.areaName}}</p>
                <p class="price">￥<span>{{item.lowPrice}}</span>起</p>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/index.js';
export default {
    data() {
        return {
            score: 0,
            likesList: [],
        }
    },
    created() {
        api.getLikesList().then(res => {
            // console.log(res.data.data);
            this.likesList = res.data.data;
            for(var i = 0; i < this.likesList.length; i++) {
                // console.log(parseFloat(this.likesList[i].score));
                this.likesList[i].score = parseInt(this.likesList[i].score);
            }
        })
    },
    // computed: {
    //     score: {
    //         get() {
    //             return this.scoreNum;
    //         },
    //         set(val) {
    //             console.log(val);
    //             this.scoreNum = parseInt(val);
    //             console.log(this.scoreNum);
    //         },
    //     }
    // }
}
</script>
<style lang="scss">
    .image{
    //    border: 1px solid red;
       border-radius: 10px;
       overflow: hidden;
       img{
           width: 100%;
           
       }
    }
    .img-des {
        p{
            margin: 10px 0;
        }
        p.comment {
            .el-rate{
                display: inline-block;
            }
            span {
                font-size: 12px;
                color: rgb(172, 171, 171);
            }
        }
        p.address {
            font-size: 13px;
            color: rgb(172, 171, 171);
        }
        p.price{
            color: rgb(247, 133, 57);
            span{
                font-size: 20px;
                font-weight: bolder;
            }
        }
    }
</style>