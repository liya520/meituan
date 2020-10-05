<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="navList.class">
      <dt>{{navList.title}}</dt>
      <dd 
      v-for="(item, index) in navList.list" 
      :class="{active: kind === item.tab}" 
      :data-type= item.tab 
      :key="'navList' + index">{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultData[kind]" :key="'container' + index">
        <el-card shadow="never">
          <img
            class="image"
            :src="item.image"
          />
          <div class="cbody">
            <p class="title">{{ item.title }}</p>
            <p class="sub-title">
              <span>{{ item.subTitle }}</span>
            </p>
            <p class="price-info">
              <span class="price-icon">￥</span>{{ item.price}}
            </p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
    props: {
        navList: {
            type: Object,
        }
    },
    data() {
        return {
            kind: 'all',
            list: [
                {
                    img: 'https://img.meituan.net/phoenix/9569b8d3887acec09585b3791163683e2722538.jpg@740w_416h_1e_1c',
                    title: '龙湖·紫云台LOFT海景海蓝民宿店',
                    sub_title: '整套1居室·可住2人 | 龙湖葡醍商业街',
                    price_info: 188,
                },
                {
                    img: 'https://img.meituan.net/phoenix/0aa5f1dfcbc190f7d7bca9bf621fe2781123897.jpg@740w_416h_1e_1c',
                    title: '南大街 小时 弘阳 银都 万达近南大街 大海阳 文化路 近火车站 大悦城 万达 毓璜顶医院 密码锁自助入住',
                    sub_title: '整套1居室·可住2人 | 南大街',
                    price_info: 158,
                },
                {
                    img: 'https://img.meituan.net/phoenix/83d9d4962b0487ac1ce59ae51fb444e44636539.jpg@740w_416h_1e_1c',
                    title: '相遇  北欧ins风落地窗 可停车做饭 乳胶床垫/可月租一居  /南大街/火车站/大悦城/专车接送/外卖帮买管家服务',
                    sub_title: '整套1居室·可住2人 | 青年路',
                    price_info: 180,
                },
                {
                    img: 'https://img.meituan.net/phoenix/83d9d4962b0487ac1ce59ae51fb444e44636539.jpg@740w_416h_1e_1c',
                    title: '相遇  北欧ins风落地窗 可停车做饭 乳胶床垫/可月租一居  /南大街/火车站/大悦城/专车接送/外卖帮买管家服务',
                    sub_title: '整套1居室·可住2人 | 青年路',
                    price_info: 180,
                }
            ],
            resultData: {},
        }
    },
    methods: {
        over(e) {
            if(e.target.tagName === 'DD'){
                this.kind = e.target.getAttribute('data-type');
            }
            //动态获取ajax请求
        },
    },
    created() {
      api.getResultProducts().then(res => {
        // console.log(res);
        this.resultData = res.data.data;
      })
    }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
