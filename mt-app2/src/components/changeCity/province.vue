<template>
    <div>
        <span class="name">按省份选择：</span> 
        <Select :list="provinceList" :title="'省份'" :value="province" :isshow="provinceActive" 
        @change="changePro"
        @change_active="changeProActive" :className="'province'" />
        <Select :list="cityList" :title="'城市'" :value="city" :isshow="cityActive" 
        @change="changeCity"
        @change_active="changeCityActive" :disabled="cityDisabled" :className="'city'" />
        <span>直接搜索：</span>
        <el-select
          v-model="searchword"
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键字"
          :remote-method="remoteMethod"
          :loading="loading"
        >
            <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
    </div>
</template>
<script>
import api from '@/api/index.js';
import Select from './select.vue';
export default {
    components: {
        Select,
    },
    data() {
        return {
            provinceList: [],
            province: '省份',
            city: '城市',
            cityList: ['哈尔滨', '佳木斯', '牡丹江', '鹤岗'],
            provinceActive: false,
            cityActive: false,
            searchList: ['上海', '山东', '浙江', '沈阳', '黑龙江', '四川'],
            searchword: '',
            loading: false,
            cityDisabled: true,
        }
    },
    created() {
        api.getProvinceList().then(res => {
            // console.log(res);
            this.provinceList = res.data.data.map(item => {
                item.name = item.provinceName;
                return item;
            });

        })
    },
    methods: {
        changeProActive(flag) {
            this.provinceActive = flag;
            if(flag) {
                this.cityActive = false;
            }
        },
        changeCityActive(flag) {
            this.cityActive = flag;
            if(flag){
                this.provinceActive = false;
            }
        },
        remoteMethod(e) {
            console.log(e);
            //请求后端接口
        },
        changePro(item) {
            this.province = item.name;
            this.cityDisabled = false;
            this.cityList = item.cityInfoList;
        },
        changeCity(item) {
            this.city = item.name;
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'});
        },
    }
}
</script>
<style lang='scss'>
    @import '@/assets/css/changecity/iselect.scss';
</style>