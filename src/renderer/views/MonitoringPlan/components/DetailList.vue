<template>
  <section>
    <div class="head">
      <div class="left"></div>
      <div class="title">看板{{ count }}</div>
      <div class="right">
        <el-button class="font_family icon-filter" @click="showDrawer = true">过滤</el-button>
      </div>
    </div>
    <div class="list">
      <transition-group name="el-zoom-in-center">
        <div
          v-for="item in monitoringData.filter((v) => Number(v.id) % count === 0)"
          :key="item.id"
          class="descriptions"
        >
          <div class="descriptions__cell_group">
            <div class="descriptions__cell">
              <div class="descriptions_label">命中词</div>
              <div class="descriptions_content">{{ item.keyWords.join('，') }}</div>
            </div>
            <div class="time">{{ item.createTime }}</div>
          </div>
          <div class="descriptions__cell">
            <div class="descriptions_label">群名</div>
            <div class="descriptions_content">{{ item.groupName }}</div>
          </div>
          <div class="descriptions__cell">
            <div class="descriptions_label">发言人ID</div>
            <div class="descriptions_content">{{ item.userId }}</div>
          </div>
          <hr />
          <div class="descriptions__cell column">
            <div class="descriptions_label">言论</div>
            <div class="descriptions_content box" v-html="item.message"></div>
          </div>
          <div class="button">
            <el-button class="font_family icon-Frame">复制举证 </el-button>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
  <el-drawer
    ref="drawerRef"
    v-model="showDrawer"
    title="看板过滤"
    :with-header="false"
    size="300"
    append-to-body
  >
    <el-tabs v-model="activeName" type="card" class="demo-tabs">
      <el-tab-pane label="群过滤" name="group">
        <el-checkbox-group v-model="selectGroupList" class="listbox">
          <el-checkbox v-for="item in groupList" :key="item.id" :label="item.id" border>
            {{ item.channelName }}
          </el-checkbox>
        </el-checkbox-group>
      </el-tab-pane>
      <!-- <el-tab-pane label="关键词过滤" name="keyword">
        <el-checkbox-group v-model="selectKeywordsList" class="listbox">
          <el-checkbox v-for="v in keywordsList" :key="v" :label="v" border />
        </el-checkbox-group>
      </el-tab-pane> -->
    </el-tabs>
    <div class="footer">
      <el-button class="font_family icon-filter" @click="onClose">保存</el-button>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ElDrawer } from 'element-plus'
import useMonitoringData from '@/store/common/monitoringData'
import { updatePlan } from '@/apis'

defineProps<{
  count: number
}>()

const route = useRoute()
onMounted(() => {
  console.log(route.query)
})

const monitoringData = computed(() => useMonitoringData().$state.monitoringData)
const groupList = computed(() => useMonitoringData().$state.groupList)
// const keywordsList = computed(() => useMonitoringData().$state.keywordsList)

const activeName = ref('group')

const selectGroupList = ref<string[]>([])
const selectKeywordsList = ref<string[]>([])

const showDrawer = ref(false)

const drawerRef = ref<InstanceType<typeof ElDrawer>>()
const onClose = async () => {
  const res = await updatePlan({
    plan_id: '1',
    filters: [
      {
        group: selectGroupList.value,
        keywords: selectKeywordsList.value
      }
    ]
  })
  if (res.code === 'success') {
    ElMessage.success('保存成功')
    // drawerRef.value?.close()
  }
}
</script>

<style scoped lang="less">
section {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 24px 0;
  justify-content: flex-start;

  &:hover {
    background-color: @bg-card;

    .head {
      background-color: @bg-card;
      display: flex;
      justify-content: space-between;

      .left,
      .right {
        width: 88px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .head {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    font-size: 20px;

    .left,
    .right {
      width: 88px;
      display: none;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex: 1;
    padding: 0 24px;
    gap: 12px;
    .descriptions {
      position: relative;

      &:hover {
        box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.2);
        .button {
          display: flex;
        }
      }
      .button {
        position: absolute;
        display: none;
        flex-direction: column;
        width: 92px;
        right: 16px;
        top: 48px;
      }
      font-size: 14px;
      line-height: 100%;
      background-color: @bg-color-2;
      padding: 16px;
      border-radius: 8px;
      border: 0.5px solid @border-hr;
      display: flex;
      gap: 10px;
      flex-direction: column;
      .descriptions__cell_group {
        display: flex;
        justify-content: space-between;
      }
      hr {
        border: 0.5px solid @border-hr;
      }
      .descriptions__cell {
        display: flex;
        gap: 16px;

        &.column {
          flex-direction: column;
        }
      }
      .descriptions_label {
        color: @Secondary-text;
      }
      .descriptions_content {
        color: @primary-text;
        &.box {
          padding: 8px;
          background-color: @bg-color-1;
          border-radius: 4px;
          box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset;
          .tag {
            font-weight: normal;
            color: @Danger;
          }
        }
      }
    }
  }
}
.listbox {
  display: flex;
  flex-direction: column;
  margin-top: 1px;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 52px;
  &::before {
    content: '';
    position: absolute;
    bottom: 52px;
    left: -24px;
    width: 300px;
    height: 1px;
    border-bottom: 1px solid @border-hr;
  }
}
</style>
