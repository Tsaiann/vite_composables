<template>
  <ul class="row horizontal space_between" @click="handleToggle()">
    <li>{{ data.text }}</li>
    <span v-if="hasChildren">{{ isOpen ? '-': '+' }}</span>
  </ul>
  <ul v-if="isOpen && hasChildren">
    <treeMenu v-for="(i, item) in data.children" :key="item.key" v-model="data.children[item]" />
  </ul>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

const data = defineModel()

const hasChildren = computed(()=>{
  return data.value.children && data.value.children.length > 0
})
const isOpen = ref(false)

const handleToggle = () => isOpen.value = !isOpen.value

const test = onMounted(()=>{
  console.log(data.value.children)
})



</script>