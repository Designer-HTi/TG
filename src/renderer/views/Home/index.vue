<template>
  <div @click="show">Home</div>
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

<style scoped></style>
