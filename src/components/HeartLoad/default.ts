import { BoxCfg, LiCfg, LoveCfg } from "./types";

export const boxDt: BoxCfg = {
    height: "100vh",
    backgroundColor: "#232e6d",
}

export const liDt: LiCfg = {
    width: "20px",
    height: "20px",
    borderRadius: "20px",
    margin: "0 10px 0 0",
    backgroundColor: "white",
}

export const love1Dt: LoveCfg = {
    start: {
        height: "60px",
        transform: "translateY(-30px)"
    },
    end: {
        height: "20px",
        transform: "translateY(0)"
    }
}

export const love2Dt: LoveCfg = {
    start: {
        height: "125px",
        transform: "translateY(-62.5px)"
    },
    end: {
        height: "20px",
        transform: "translateY(0)"
    }
}

export const love3Dt: LoveCfg = {
    start: {
        height: "160px",
        transform: "translateY(-75px)"
    },
    end: {
        height: "20px",
        transform: "translateY(0)"
    }
}

export const love4Dt: LoveCfg = {
    start: {
        height: "180px",
        transform: "translateY(-60px)"
    },
    end: {
        height: "20px",
        transform: "translateY(0)"
    }
}

export const love5Dt: LoveCfg = {
    start: {
        height: "190px",
        transform: "translateY(-45px)"
    },
    end: {
        height: "20px",
        transform: "translateY(0)"
    }
}

export const liColorDt: string[] = ['#f62e74', '#2ef63f', '#e2f62e', '#4e0fb4', '#77cadf', '#e2c0e2', '#a83609a1', '#750863', '#e70f0f']
export const animationDelayDt: string[] = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s', '0.7s', '0.8s']