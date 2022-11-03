<script setup lang='ts'>
let isShow = $ref(true)
// const containerRef = $ref<HTMLElement>(null)
// let backgroundPosition = $ref<string | null>(null)
// const reg = /\d+\.*\d+(?=px)/g
const change = () => {
    // backgroundPosition = window.getComputedStyle(containerRef, null).getPropertyValue('background-position') as string;
    // const [left, top] = backgroundPosition.match(reg)
    // containerRef.setAttribute('style', `background-position: ${left}px ${top}px`)
    isShow = !isShow
}
</script>
<template>
    <div class="cup" :class="{ 'animationscls-stop': !isShow, 'animationscls-start': isShow }" @click.stop="change"
        ref="containerRef"></div>
</template>
<style scoped>
.cup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 180px;
    border: 6px solid #262626;
    border-top: 2px solid transparent;
    border-radius: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: url('@/assets/waterWave/wave.png');
    background-size: auto;
    background-repeat: repeat-x;
    box-shadow: 0 0 0 6px #fff, 0 25px 35px rgba(0, 0, 0, 1);
    animation: animate 10s linear infinite;
}

.animationscls {}

.animationscls-stop {
    animation-play-state: paused;
}

.animationscls-start {
    animation-play-state: running;
}

.cup::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 80px;
    border: 6px solid #fff;
    right: -68px;
    top: 30px;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
}

@keyframes animate {
    0% {
        background-position: 0px 100px;
    }

    10% {
        background-position: 0 50px;
    }

    40% {
        background-position: 500px -70px;
    }

    80% {
        background-position: 1000px -80px;
    }

    100% {
        background-position: 1500px 100px;
    }

}
</style>