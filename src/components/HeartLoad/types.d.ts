export interface BoxCfg {
    height?: string
    backgroundColor?: string
}


export interface LiCfg {
    width?: string
    height?: string
    borderRadius?: string
    margin?: string
    backgroundColor?: string
}

/**
 * height: 60px;
        transform: translateY(-30px);

        height: 20px;
        transform: translateY(0);
 */
export interface LoveCfg {
    start: {
        height?: string
        transform?: string
    }
    end: {
        height?: string
        transform?: string
    }
}