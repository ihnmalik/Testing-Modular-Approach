import { Types } from "./types"

const initialState = {
    count: 0
}

export default (state = initialState, action: any ) => {
    switch(action.type) {
        case Types.INC_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case Types.DEC_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case Types.RESET_COUNT:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}