import { Types } from "./types";

const incCounter = () => ({
    type: Types.INC_COUNT
})

const decCounter = () => ({
    type: Types.DEC_COUNT
})

const resetCount = () => ({
    type: Types.RESET_COUNT
})


export default {
    incCounter,
    decCounter,
    resetCount
}