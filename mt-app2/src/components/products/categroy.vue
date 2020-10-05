<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in classicList" :key="index">
                <m-select :name="item.title" :list="item.subList" />
            </dd>
        </dl>
        <dl class="classic">
            <dt>分类</dt>
            <dt>区域</dt>
            <dd v-for="(item, index) in areaList" :key="index">
                <m-select :name="item.title" :list="item.sublList" />
            </dd>
        </dl>
    </div>
</template>
<script>
import api from '@/api/index.js';
import MSelect from './select.vue';
export default {
    components: {
        MSelect,
    },
    data() {
        return {
            classicList: [],
            areaList: [
                {
                    title: '推荐商圈',
                    sub_list: [
                        {
                            name: '望京',
                            id: 120000
                        },
                        {
                            name: '昌平',
                            id: 122222,
                        },
                    ]
                },
                {
                    title: '浦东新区',
                    sub_list: [
                        {
                            name: '世纪公园',
                            id: 133333,
                        },
                        {
                            name: '南汇新城',
                            id: 144444,
                        }
                    ]
                }
            ],
        }
    },
    created() {
        api.getClassify().then(res => {
            // console.log(res.data.data);
            this.classicList = res.data.data;
        });
        // api.getAreaList().then(res => {
        //     // console.log(typeof res.data);
        //     // console.log(eval('(' + res.data + ')'));
        //     const data = JSON.parse(res.data);
        //     // console.log(JSON.stringify(res.data));
        //     // console.log(JSON.parse(res.data));
        //     // this.areaList = res.data;
        //     this.areaList = data;
        // })
    }
}
</script>