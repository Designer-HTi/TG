<template>
  <div class="flex-col items-center gap-8 !px-20">
    <p class="link">请在下方输入框输入你需要监测的群链接</p>

    <el-input ref="inputRef" v-model="chatUrl" class="w-280px" maxlength="100">
      <template #append>
        <el-button
          link
          class="icon font_family icon-add"
          @click="
            () => {
              chatUrls.push(chatUrl)
              chatUrl = ''
              inputRef?.focus()
            }
          "
        />
      </template>
    </el-input>

    <div class="w-280px urlList">
      <p v-for="v in chatUrls" :key="v">{{ v }}</p>
    </div>
  </div>

  <div class="flex justify-end !py-10px !mt-10">
    <TgButton icon-name="add" class="w-25" :disabled="chatUrls.length <= 0" @handle-btn="handleBtn">
      完成
    </TgButton>
  </div>
</template>

<script setup lang="ts">
import { createChannel } from '@/apis'
import TgButton from '@/components/tgButton/index.vue'
import { SUCCESS_CODE } from '@/constants'
import { getAllGroupKeyword } from '@/utils'

const props = defineProps<{
  chatId: string
}>()

const emit = defineEmits<{
  close: [string]
}>()

onMounted(() => {
  inputRef.value?.focus()
})

const chatUrl = ref('')
const chatUrls = ref<string[]>([])
const inputRef = ref<HTMLElement>()

const handleBtn = async () => {
  if (!props.chatId) {
    ElMessage.warning('请选择TG账户后再新增TG群')
  }
  try {
    const res = await createChannel({
      chatId: props.chatId,
      groupUrls: chatUrls.value
    })

    if (res.code === SUCCESS_CODE) {
      ElMessage.success('新增成功')
      emit('close', 'update')
      getAllGroupKeyword()
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="less">
.link {
  color: @primary;
}
.urlList {
  p {
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid @border-hr;
    color: @Secondary-text;
  }
}
</style>
