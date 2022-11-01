<script setup lang='ts'>
import { boxDt, liDt, love1Dt, love2Dt, love3Dt, love4Dt, love5Dt, liColorDt, animationDelayDt } from './default'
import { BoxCfg, LiCfg, LoveCfg } from './types';
const {
    boxCfg = boxDt,
    liCfg = liDt,
    animationTime = '4s',
    love1Cfg = love1Dt,
    love2Cfg = love2Dt,
    love3Cfg = love3Dt,
    love4Cfg = love4Dt,
    love5Cfg = love5Dt,
    liColorCfg = liColorDt,
    animationDelayCfg = animationDelayDt
} = defineProps<{
    boxCfg?: BoxCfg,
    liCfg?: LiCfg,
    animationTime?: string,
    love1Cfg?: LoveCfg,
    love2Cfg?: LoveCfg,
    love3Cfg?: LoveCfg,
    love4Cfg?: LoveCfg,
    love5Cfg?: LoveCfg,
    liColorCfg?: string[],
    animationDelayCfg?: string[]
}>()
</script>
<template>
    <div id="box">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<style scoped>
#box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: v-bind('boxCfg.height');
    background-color: v-bind('boxCfg.backgroundColor');
}

ul {
    height: 200px;
    list-style: none;
}

li {
    float: left;
    width: v-bind('liCfg.width');
    height: v-bind('liCfg.height');
    border-radius: v-bind('liCfg.borderRadius');
    margin: v-bind('liCfg.margin');
    background-color: v-bind('liCfg.backgroundColor');
}

li:nth-child(1) {
    background-color: v-bind('liColorCfg[0]');
    animation: love1 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[0]');
}

li:nth-child(2) {
    background-color: v-bind('liColorCfg[1]');
    animation: love2 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[1]');
}

li:nth-child(3) {
    background-color: v-bind('liColorCfg[2]');
    animation: love3 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[2]');
}

li:nth-child(4) {
    background-color: v-bind('liColorCfg[3]');
    animation: love4 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[3]');
}

li:nth-child(5) {
    background-color: v-bind('liColorCfg[4]');
    animation: love5 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[4]');
}

li:nth-child(6) {
    background-color: v-bind('liColorCfg[5]');
    animation: love4 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[5]');
}

li:nth-child(7) {
    background-color: v-bind('liColorCfg[6]');
    animation: love3 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[6]');
}

li:nth-child(8) {
    background-color: v-bind('liColorCfg[7]');
    animation: love2 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[7]');
}

li:nth-child(9) {
    background-color: v-bind('liColorCfg[8]');
    animation: love1 v-bind('animationTime') infinite;
    animation-delay: v-bind('animationDelayCfg[8]');
}

@keyframes love1 {

    30%,
    50% {
        height: v-bind('love1Cfg.start.height');
        transform: v-bind('love1Cfg.start.transform');
    }

    75%,
    100% {
        height: v-bind('love1Cfg.end.height');
        transform: v-bind('love1Cfg.end.transform');
    }
}

@keyframes love2 {

    30%,
    50% {
        height: v-bind('love2Cfg.start.height');
        transform: v-bind('love2Cfg.start.transform');
    }

    75%,
    100% {
        height: v-bind('love2Cfg.end.height');
        transform: v-bind('love2Cfg.end.transform');
    }
}

@keyframes love3 {

    30%,
    50% {
        height: v-bind('love3Cfg.start.height');
        transform: v-bind('love3Cfg.start.transform');
    }

    75%,
    100% {
        height: v-bind('love3Cfg.end.height');
        transform: v-bind('love3Cfg.end.transform');
    }
}

@keyframes love4 {

    30%,
    50% {
        height: v-bind('love4Cfg.start.height');
        transform: v-bind('love4Cfg.start.transform');
    }

    75%,
    100% {
        height: v-bind('love4Cfg.end.height');
        transform: v-bind('love4Cfg.end.transform');
    }
}

@keyframes love5 {

    30%,
    50% {
        height: v-bind('love5Cfg.start.height');
        transform: v-bind('love5Cfg.start.transform');
    }

    75%,
    100% {
        height: v-bind('love5Cfg.end.height');
        transform: v-bind('love5Cfg.end.transform');
    }
}
</style>