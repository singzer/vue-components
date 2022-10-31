<script setup lang="ts">
import compts from '@/components/compts.json'
// 动态加载组件
const modules = import.meta.glob('@/views/**/index.vue');
let isShow = $ref(false)
let targetCom = $ref<any>(null)
const openS = (comN: string) => {
  // console.log('modules', modules['/src/components/' + comN + '/index.vue'])
  //动态加载组件modules
  targetCom = defineAsyncComponent(modules['/src/views/' + comN + 'V/index.vue'] as any)
  isShow = true
}
const closeS = () => {
  isShow = false
}
</script>

<template>
  <div @click="openS(item.component)" v-for="(item,index) in compts" :key="index">
    {{ item.name }}
  </div>
  <div v-if="isShow" class="drawer" @click="closeS">
    <component :is="targetCom" />
  </div>
</template>

<style scoped>
.drawer {
  z-index: 999;
  width: 100%;
  height: 100%;
  position: fixed;
  /* 遮罩 */
  background: rgba(0, 0, 0, 0.5);
}
</style>
