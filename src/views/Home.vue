<template>
  <div class="row horizontal">
    <el-col :span="4" class="navigator">
      <h5 class="mb-2">Category</h5>
      <el-menu
        :default-active = index
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="Composables" @click="routerChange('Composables')">
          <el-icon><document/></el-icon>
          <span>Composables</span>
        </el-menu-item>
        <el-menu-item index="Directive" @click="routerChange('Directive')">
          <el-icon><document/></el-icon>
          <span>Directive</span>
        </el-menu-item>
        <el-menu-item index="Final" @click="routerChange('Final')">
          <el-icon><document/></el-icon>
          <span>BinaryTreeMenu</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Document, Menu as IconMenu } from '@element-plus/icons-vue'

const router = useRouter()
let index = computed(()=>{
  return router.currentRoute.value.name
})

const routerChange = (path) => {
  router.push({ name: path })
}

</script>
