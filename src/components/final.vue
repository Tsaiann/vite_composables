<template>
  <div class="row vertical">
    <div>
      <el-input style="width: 250px;" />
      <el-button type="info" plain @click="handleSearch()">搜尋</el-button>
      <el-button type="danger" plain @click="onReset()">重置</el-button>
    </div>
    <div class="menu">
      <treeMenu v-for="(i, item) in menuData" :key="item.key" v-model="menuData[item]"/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import treeMenu from './treeMenu.vue'
import data from '../../data.json'

const menuData = ref([])

const getData = onMounted(()=>menuData.value = JSON.parse(JSON.stringify(data)))
const handleSearch = () => {}
const onReset = () => {}

</script>
