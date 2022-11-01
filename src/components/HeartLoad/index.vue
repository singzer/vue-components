<script setup lang='ts'>
import { boxDt } from './default'
import { BoxCfg } from './types';
const { boxCfg = boxDt } = defineProps<{
    boxCfg?: BoxCfg
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
    width: 20px;
    height: 20px;
    border-radius: 20px;
    margin-right: 10px;
    background-color: white;
}

li:nth-child(1) {
    background-color: #f62e74;
    animation: love1 4s infinite;
}

li:nth-child(2) {
    background-color: #2ef63f;
    animation: love2 4s infinite;
    animation-delay: 0.15s;
}

li:nth-child(3) {
    background-color: #e2f62e;
    animation: love3 4s infinite;
    animation-delay: 0.30s;
}

li:nth-child(4) {
    background-color: #4e0fb4;
    animation: love4 4s infinite;
    animation-delay: 0.45s;
}

li:nth-child(5) {
    background-color: #77cadf;
    animation: love5 4s infinite;
    animation-delay: 0.60s;
}

li:nth-child(6) {
    background-color: #e2c0e2;
    animation: love4 4s infinite;
    animation-delay: 0.75s;
}

li:nth-child(7) {
    background-color: #a83609a1;
    animation: love3 4s infinite;
    animation-delay: 0.90s;
}

li:nth-child(8) {
    background-color: #750863;
    animation: love2 4s infinite;
    animation-delay: 1.05s;
}

li:nth-child(9) {
    background-color: #e70f0f;
    animation: love1 4s infinite;
    animation-delay: 1.20s;
}

@keyframes love1 {

    30%,
    50% {
        height: 60px;
        transform: translateY(-30px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}

@keyframes love2 {

    30%,
    50% {
        height: 125px;
        transform: translateY(-62.5px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}

@keyframes love3 {

    30%,
    50% {
        height: 160px;
        transform: translateY(-75px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}

@keyframes love4 {

    30%,
    50% {
        height: 180px;
        transform: translateY(-60px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}

@keyframes love5 {

    30%,
    50% {
        height: 190px;
        transform: translateY(-45px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}
</style>