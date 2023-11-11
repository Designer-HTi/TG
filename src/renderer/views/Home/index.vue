<template>
  <div class="content">
    <div class="img"></div>
    <div>暂无无监测方案，<a @click="show"> 请点我添加</a>监测方案</div>
  </div>
</template>

<script setup lang="ts">
import { ADD_DIALOG } from '@/components/dialog'
import About from '../About/index.vue'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const addDialog = inject(ADD_DIALOG)!

const show = () => {
  addDialog({
    title: 'title',
    width: '500px',
    component: shallowRef(About),
    props: {
      type: 1
    },
    callBack: (v) => {
      console.log(v)
    }
  })
}
</script>

<style scoped lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: 800px;
    height: 600px;

    background: url(../../assets/img/kong.png) no-repeat center;
  }

  div {
    font-weight: normal !important;
  }
  a {
    color: @primary;
    display: inline-block;
  }
}
</style>
