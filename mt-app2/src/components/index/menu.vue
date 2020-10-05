<template>
    <div class="m-menu">
        <dl class="nav"  @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                {{ item.name }}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail.items">
                <h4 :key="index">{{ item.title }}</h4>
                <span v-for="(v, i) in item.items" :key="i + '_' + v">{{ v }}</span>
            </template>
        </div>
    </div>
</template>
<script>
import api from '@/api/index.js';
export default {
    data() {
        return {
            curDetail: null,
            menuList: [],
            timer: null,
        }
    },
    methods: {
        menuEnter(item) {
            // this.curDetail = {};
            this.curDetail = item;
        },
        menuLeave() {
             var self = this;
             this.timer = setTimeout(function () {
                self.curDetail = null;
            }, 200)
            //  this.curDetail = null;
        },
        detailEnter() {
            clearTimeout(this.timer);
        },
        detailLeave() {
            this.curDetail = null;
        }
    },
    created() {
        api.getNav().then(res => {
            // console.log(res.data.data);
            this.menuList = res.data.data;
        })
    }
}
</script>

<style lang="scss">
    // @import '@/assets/css/index/index.scss';
</style>