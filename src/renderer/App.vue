<script setup lang="ts">
import Layout from '@/views/Layout/index.vue'
import DialogProvide from '@/components/dialog/index.vue'
import { getAllGroupKeyword } from './utils'
import useMonitoringData from '@/store/common/monitoringData'
import Socket from './utils/websocket'
import { MonitoringData } from './store/types/interface'
import { v4 as uuidv4 } from 'uuid'

const wbSocket = new Socket<null, string>({ url: 'ws://172.208.105.151/websocket' })
wbSocket.onmessage((data: MonitoringData) => {
  console.log('server data:', { ...data, id: uuidv4() })
  useMonitoringData().pushMonitoringData({ ...data, id: uuidv4() })
})

onMounted(() => {
  getAllGroupKeyword()

  // let i = 0
  // setInterval(() => {
  //   const obj = {
  //     id: i.toString(),
  //     chatId: `chatId${i}`,
  //     groupId: `groupId${i}`,
  //     groupName: `groupName${i}`,
  //     createTime: new Date().getTime().toString(),
  //     keyWords: ['111', '222'],
  //     userName: `userName${i}`,
  //     userId: `userId${i}`,
  //     message: `y做单看我 签名 in 海外同胞交流群 111招人进微信群发广告，发一个222群给你30块${i++}`
  //   }
  //   obj.keyWords.forEach((v) => {
  //     obj.message = obj.message.replaceAll(v, `<b style="color: #eb5757">${v}</b>`)
  //   })
  //   useMonitoringData().pushMonitoringData(obj)
  // }, 2000)
})
</script>

<template>
  <DialogProvide>
    <Layout />
  </DialogProvide>
</template>

<style lang="less"></style>
