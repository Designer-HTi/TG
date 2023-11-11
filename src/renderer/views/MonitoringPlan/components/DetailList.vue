<template>
  <div>
    <div class="flex justify-between">
      <p>占位文本</p>
      <p>看板一</p>
      <el-button>
        <i class="incon font_family icon-guolv"></i>
        过滤
      </el-button>
    </div>
    <ul style="overflow: auto">
      <li class="infinite-list-item">
        <el-form-item label="命中词" label-width="60"> 命中词 </el-form-item>
        <el-form-item label="群名" label-width="60"> 群名 </el-form-item>
        <el-form-item label="名称ID" label-width="60"> 名称ID </el-form-item>
        <hr />
        <p>言论</p>
        <div>言论</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
