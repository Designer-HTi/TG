<template>
  <div class="content">
    <section>
      <div class="head">TG账户</div>
      <div class="content">
        <div class="top">
          <div class="navitem icon font_family icon-add">添加TG账户</div>
        </div>
        <div class="listbox">
          <el-checkbox label="Option1" border />
          <el-checkbox label="Option1" border />
          <el-checkbox label="Option1" border />
          <el-checkbox label="Option1" border />
        </div>
      </div>
      <div class="footer">
        <el-button class="font_family icon-filter">删除</el-button>
      </div>
    </section>
    <section>
      <div class="head">TG群列表</div>
      <div class="content">
        <div class="top">
          <div class="navitem icon font_family icon-add">添加群</div>
        </div>
        <div class="listbox">
          <el-checkbox label="Option1" border />
          <el-checkbox label="Option1" border />
          <el-checkbox label="Option1" border />
          <el-checkbox label="Option1" border />
        </div>
      </div>
      <div class="footer">
        <el-button class="font_family icon-filter">删除</el-button>
      </div>
    </section>
    <section>
      <div class="head">TG群列表</div>
      <div class="content">
        <div class="top top3">
          <div class="navitem icon font_family icon-add">关键词</div>
          <div class="navitem icon font_family icon-add">操作</div>
        </div>
        <div class="listbox">
          <el-checkbox label="全部" border />
          <div class="tr">
            <el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable :type="tag.type">
              {{ tag.name }}
            </el-tag>
          </div>
        </div>
      </div>
      <div class="footer footer3">
        <div class="btnbox">
          <el-button class="font_family icon-filter">为所选栏目添加关键词</el-button>
        </div>
        <div class="btnbox">
          <el-button class="font_family icon-filter">删除所选栏目关键词</el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' }
])
</script>

<style scoped lang="less">
.content {
  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    &:first-child {
      width: 260px;
    }
    &:nth-child(2) {
      width: 300px;
      border-left: 1px solid @border-hr;
      border-right: 1px solid @border-hr;
    }
    &:last-child {
      flex: 1;
    }
    .head {
      display: flex;
      padding: 13px 10px;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid @border-hr;
    }
    .content {
      flex: 1;
      display: flex;
      padding: 16px 24px;
      flex-direction: column;
      gap: 10px;

      .top3 {
        display: flex;
        height: 30px;
        background: @nav-hover;

        :first-child {
          flex: 1;
        }
        :last-child {
          width: 160px;
          border-left: 2px solid @bg-color-1;
        }
      }
      .navitem {
        color: @primary-text;
        cursor: pointer;
        display: flex;
        padding: 5px 8px;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;

        &:hover {
          border-radius: 4px;
          background: @nav-hover;
        }
      }
      .listbox {
        display: flex;
        flex-direction: column;
        margin-top: 1px;

        .tr {
          display: flex;
          padding: 8px;
          gap: 16px;
          flex: 1 0 0;
          height: 42px;
          border-radius: 0;
          margin-top: -1px;
          border: 1px solid @border-hr;
          border-left: none;
          border-right: none;
        }
      }
    }

    .footer {
      border-top: 1px solid @border-hr;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 52px;
      padding: 0 16px;
    }

    .footer3 {
      flex-direction: row;
      align-items: center;
      gap: 16px;
      .btnbox {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
