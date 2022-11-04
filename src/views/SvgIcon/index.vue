<script setup lang='ts'>
import '@/assets/icons/index'

const {
    img = null,
    touchend = () => { },
    click = () => { },
    width = '1em',
    height = '1em',
    color = 'var(--color-primary)'
} = defineProps<{
    img: string | null,
    touchend?: () => void,
    click?: () => void,
    width?: string,
    height?: string,
    color?: string
}>()
const curImg = $computed(() => '#' + img)
</script>
<template>
    <span @touchend="touchend" @click="click">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="curImg"></use>
        </svg>
    </span>
</template>
<style scoped>
/* 设置变量继承root的变量 */
.icon {
    width: v-bind('width');
    height: v-bind('height');
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: v-bind('color');
}
</style>