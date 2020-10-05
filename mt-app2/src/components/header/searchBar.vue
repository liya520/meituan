<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img alt="美团" src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList.slice(0, 4)" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item, index) in suggestList" :key="index">{{ item }}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index.js';
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: ['火锅', '火锅自助餐', '重庆火锅'],
      suggestList: [],
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    isSearchList () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 1000)
    },
    input() {
      api.getSearchHotWord().then(res => {
        // console.log(res.data.data);
        this.searchList = res.data.data.list.filter(item => {
          return item.includes(this.searchWord);
        });
        // console.log(this.searchList);
      })
    }
  },
  created() {
    api.getSearchKeyWord().then(res => {
      // console.log(res);
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    })
  },
}
</script>
<style lang="scss">
    @import '@/assets/css/public/header/search.scss';
    // @import '@/assets/css/public/header/index.scss';
</style>
