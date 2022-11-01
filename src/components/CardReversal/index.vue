<script setup lang='ts'>
import { ContainerCfg, PicCfg, ImgCfg, LoginContentCfg, InputCfg } from '@/components/CardReversal/types';
import { containerDt, picDt, imgDt, LoginContentDt, inputDt } from '@/components/CardReversal/default';
import img_1 from '@/assets/cardReversal/1.jpg';
import img_2 from '@/assets/cardReversal/2.jpg';

//  卡片翻转 
const {
    containerCfg = containerDt,
    picCfg = picDt,
    imgCfg = imgDt,
    loginContentCfg = LoginContentDt,
    inputCfg = inputDt,
    isReversal = false,
    goLoginUp = () => { },
    goLogin = () => { }
} = defineProps<{
    containerCfg?: ContainerCfg,
    picCfg?: PicCfg,
    imgCfg?: ImgCfg,
    loginContentCfg?: LoginContentCfg,
    inputCfg?: InputCfg,
    isReversal: boolean,
    goLoginUp: () => void,
    goLogin: () => void
}>()

</script>
<template>
    <div class="container">
        <div class="box login" :class="{ 'login-reversal': isReversal }">
            <slot name="login">
                <div class="form-content">
                    <div class="avtar">
                        <div class="pic"><img :src="img_1" alt=""></div>
                    </div>
                    <h1>{{ loginContentCfg.title }}</h1>
                    <form action="#" class="form">
                        <div>
                            <i class="fa fa-user-o"></i>
                            <input type="text" :placeholder="loginContentCfg.inputUsernamePl">
                        </div>
                        <div>
                            <i class="fa fa-key"></i>
                            <input type="password" :placeholder="loginContentCfg.inputPasswordPl">
                        </div>
                        <div class="btn">
                            <button>{{ loginContentCfg.btn }}</button>
                        </div>
                    </form>
                    <p class="btn-something">
                        {{ loginContentCfg.tr_desc }} <span class="signupbtn" @click.stop="goLoginUp">{{
                                loginContentCfg.tr_btn
                        }}</span>
                    </p>
                </div>
            </slot>
        </div>
        <div class="box siginup" :class="{ 'siginup-reversal': isReversal }">
            <slot name="signup">
                <div class="form-content">
                    <div class="avtar">
                        <div class="pic"><img :src="img_2" alt=""></div>
                    </div>
                    <h1>Let's get started</h1>
                    <form action="#" class="form">
                        <div>
                            <i class="fa fa-user-o"></i>
                            <input type="text" placeholder="username">
                        </div>
                        <div>
                            <i class="fa fa-envelope-o"></i>
                            <input type="email" placeholder="email">
                        </div>
                        <div>
                            <i class="fa fa-key"></i>
                            <input type="password" placeholder="password">
                        </div>
                        <div class="btn">
                            <button>signup</button>
                        </div>
                    </form>
                    <p class="btn-something">
                        Already have an account ? <span class="loginbtn" @click.stop="goLogin">login</span>
                    </p>
                </div>
            </slot>
        </div>
    </div>
</template>
<style scoped>
.container {
    /* position: absolute;
    left: v-bind('containerCfg.left');
    top: v-bind('containerCfg.top'); */
    width: v-bind('containerCfg.width');
    height: v-bind('containerCfg.height');
    perspective: v-bind('containerCfg.perspective');
    -webkit-perspective: v-bind('containerCfg.perspective');
    -moz-perspective: v-bind('containerCfg.perspective');
    /* transform: translate(-50%, -50%); */
}

.box {
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    height: 28rem;
    border-radius: 10px;
    backface-visibility: hidden;
    user-select: none;
    transition: all 0.5s;
}


.siginup {
    transform: rotateY(-180deg);
}

.login-reversal {
    transform: rotateY(180deg);
}

.siginup-reversal {
    transform: rotateY(0deg);
}


.container .form-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 0 1px #3399ff;
    border-radius: 30px;
    background-color: #fff;
}

.container .form-content .avtar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.container .form-content .avtar .pic {
    position: relative;
    width: v-bind('picCfg.width');
    height: v-bind('picCfg.height');
    overflow: hidden;
    border-radius: v-bind('picCfg.borderRadius');
    border: v-bind('picCfg.border');
}

.container .form-content .avtar .pic img {
    position: absolute;
    top: v-bind('imgCfg.top');
    left: v-bind('imgCfg.left');
    width: v-bind('imgCfg.width');
    height: v-bind('imgCfg.height');
}

.container .form-content h1 {
    font-size: 1.6rem;
}

.container .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container .form input {
    width: v-bind('inputCfg.width');
    padding: v-bind('inputCfg.padding');
    /* padding-left: 3rem; */
    outline: none;
    border: none;
    border-radius: v-bind('inputCfg.borderRadius');
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    margin: v-bind('inputCfg.margin');
}

.container .form div {
    position: relative;
}

.container .form div .fa {
    position: absolute;
    top: 18px;
    left: 25px;
}

.container .form .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.container .form .btn button {
    text-transform: uppercase;
    padding: 8px;
    border: none;
    outline: none;
    background-color: #0066ff;
    color: #fff;
    width: 12rem;
    border-radius: 30px;
    cursor: pointer;
}

.container .btn-something {
    color: #888;
    font-size: 14px;
}

.container .btn-something span {
    color: #0066ff;
    cursor: pointer;
    font-weight: 500;
}

svg {
    position: absolute;
    bottom: 0;
    z-index: -1;
}

.user {
    position: absolute;
    top: 16rem;
    left: 5rem;
}

.user .fa-user {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #0066ff;
}

.user .head {
    font-size: 1.6rem;
    text-transform: uppercase;
    user-select: none;
    text-shadow: 1px 1px 1px rgba(16, 16, 16, 0.1), 1px 2px 1px rgba(16, 16, 16, 0.1), 1px 3px 1px rgba(16, 16, 16, 0.1), 1px 4px 1px rgba(16, 16, 16, 0.1), 1px 5px 1px rgba(16, 16, 16, 0.1), 1px 6px 1px rgba(16, 16, 16, 0.1), 1px 7px 1px rgba(16, 16, 16, 0.1), 1px 8px 1px rgba(16, 16, 16, 0.1);
}
</style>