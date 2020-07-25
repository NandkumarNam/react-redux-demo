import {BUY_BOOK, BUY_PENS} from './types';

export const buyBook = (number=1) => {
    return {
        type: BUY_BOOK,
        payload: number
    }
}

export const buyPens = () => {
    return {
        type: BUY_PENS
    }
}