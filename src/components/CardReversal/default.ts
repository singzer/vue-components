import { ContainerCfg, PicCfg, ImgCfg, LoginContentCfg, InputCfg, LoginForm } from "./types";

export const containerDt: ContainerCfg = {
    left: '50%',
    top: '50%',
    width: '100%',
    height: '100%',
    perspective: '1500px'
}

/**
 * width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #3399ff;
 */
export const picDt: PicCfg = {
    width: '80px',
    height: '80px',
    border: '1px solid #3399ff',
    borderRadius: '50%'
}
/**
 * top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 */
export const imgDt: ImgCfg = {
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
}

export const LoginContentDt: LoginContentCfg = {
    title: 'Welcome back',
    inputUsernamePl: 'Username',
    inputPasswordPl: 'Password',
    btn: 'Login',
    tr_btn: 'Register',
    tr_desc: 'No account?'
}

/**
 * 
 * width: 16rem;
    padding: 0.8rem;
    border-radius: 15px;
    margin: 5px;
 */

export const inputDt: InputCfg = {
    width: '16rem',
    padding: '0.8rem 0.8rem 0.8rem 3rem',
    borderRadius: '15px',
    margin: '5px'
}

export const loginForm: LoginForm = {
    username: '',
    password: ''
}