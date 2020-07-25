import {BUY_PENS} from '../actions/types';

const INTIALPENS_STATE = {
    numberOfPens: 20
}

export default (state = INTIALPENS_STATE, action ) => {
    switch (action.type){
        case BUY_PENS:
            return {
                ...state,
                numberOfPens: state.numberOfPens - 2
            }
        default: return state;
    }
}