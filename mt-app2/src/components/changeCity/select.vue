<template>
    <div class="choose-wrap" :class="{disabled: disabled}" @click="showWrapper" v-document-click="documentClick">
        <div class="choose">
            <span>{{ value }}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class="mt-content" :class="{active: isshow}">
                <h2>{{ title }}</h2>
                <div :class="['wrapper', className]">
                    <div class="col" v-for="(listData, index) in renderList" :key="index">
                        <span class="mt-item" :class="{active: item.name === value}" v-for="(item, index) in listData" :key="index" @click="changeValue(item)">{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'list',
        'title',
        'value',
        'isshow',
        'disabled',
        'className',
    ],
    computed: {
        renderList() {
            var col = Math.ceil(this.list.length / 12);
            let resultList = [];
            for(var i = 0; i < col; i ++) {
                let data = this.list.slice(i * 12, i * 12 + 12);
                resultList.push(data);
            }
            return resultList;
        }
    },
    data() {
        return {
            // isshow: false,
        }
    },
    methods: {
        showWrapper(e) {
            //阻止事件冒泡
            e.stopPropagation();
            // this.isshow = true;
            // this.$emit('change_active', true);
            if(!this.disabled){
                this.$emit('change_active', true);
            }
            // this.$emit('change_active', false);
        },
        documentClick() {
            this.$emit('change_active', false);
            // this.isshow = false;
            // console.log('document-click');
        },
        changeValue(value) {
            this.$emit('change', value);
            // this.$emit('change_active', false);
        },
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>