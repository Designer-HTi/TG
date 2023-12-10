<script setup lang="ts">
import Layout from '@/views/Layout/index.vue'
import DialogProvide from '@/components/dialog/index.vue'
import { getAllGroupKeyword } from './utils'
import useMonitoringData from '@/store/common/monitoringData'
// import Socket from './utils/websocket'
import { MonitoringData } from './store/types/interface'
// import { v4 as uuidv4 } from 'uuid'
import useConfig from './store/common/config'
import { io } from 'socket.io-client'

const config = useConfig()
onBeforeMount(async () => {
  const data = await window.getConfig()
  config.setUrl(data.url)

  // const wbSocket = new Socket<null, string>({ url: `ws://${config.$state.url}/websocket` })
  // wbSocket.onmessage((data: MonitoringData) => {
  //   useMonitoringData().pushMonitoringData({ ...data, id: uuidv4() })
  // })

  const socket = io('http://43.134.107.71:10002/message')

  socket.connect()

  socket.on('connect', () => {
    console.log('connected')
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })

  socket.on('message', (...args: MonitoringData[]) => {
    const data = args[0]
    data.keyWords.forEach((v) => {
      data.message = data.message.replaceAll(v, `<b style="color: #eb5757">${v}</b>`)
    })
    useMonitoringData().pushMonitoringData(data)
  })

  socket.on('my_response', (...args) => {
    console.log(args)
  })

  getAllGroupKeyword()
})
</script>

<template>
  <DialogProvide>
    <Layout />
  </DialogProvide>
</template>

<style lang="less"></style>
