<script setup lang='ts'>
import { ContainerCfg, InputCfg } from '@/components/CardReversal/types';

let isReversal = $ref(false)
const goLoginUp = () => {
    isReversal = true
}
const goLogin = () => {
    isReversal = false
}
const inputCfg: InputCfg = {
    width: '40px'
}
const containerCfg: ContainerCfg = {
    width: '400px',
    height: '400px',
    left: 'unset',
    top: 'unset',
}
</script>
<template>
    <CardReversal :isReversal="isReversal" :goLoginUp="goLoginUp" :goLogin="goLogin" :inputCfg="inputCfg"
        :containerCfg="containerCfg">
    </CardReversal>
</template>
<style scoped>

</style>