import {BUY_BOOK} from '../actions/types';

const INTIALBOOKS_STATE = {
    numberOfBooks : 10
}

export default (state = INTIALBOOKS_STATE, action) => {
    switch(action.type){
        case BUY_BOOK:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks - action.payload
            }
        default : return state;
    }
}