<template>
  <div class="content">
    <div class="head">看板一</div>
    <div class="list">
      <div class="card">
        <el-descriptions class="w-full" :column="1" :size="size" :style="blockMargin">
          <el-descriptions-item label="Username">
            <!-- <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <user />
                  </el-icon>
                  Username
                </div> </template -->
            >kooriookami</el-descriptions-item
          >
          <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
          <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
          <el-descriptions-item label="Remarks">
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Address"
            >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 24px 0;
  justify-content: flex-start;

  &:hover {
    background-color: @nav-hover;
  }
  .head {
    width: 100%;
    padding: 16px 48px;
    text-align: center;
    font-size: 20px;
  }
  .list {
    flex: 1;
    padding: 0 48px;

    .card {
      display: flex;
      padding: 16px;
      gap: 10px;
    }
  }
}
</style>
