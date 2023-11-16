import { DAT_GHE, DAT_LAI_GHE, HUY_GHE } from "./types";

export const datGheAction = (ghe) => ({
    type: DAT_GHE,
    ghe
})

export const huyGheAction = (ghe) => ({
    type: HUY_GHE,
    ghe
})

export const datLaiGheAction = (ghe) => ({
    type: DAT_LAI_GHE,
    ghe
})


