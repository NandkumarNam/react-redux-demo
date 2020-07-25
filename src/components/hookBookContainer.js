import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {buyBook, buyPens} from '../redux/actions';

const HookBookContainer = () => {
    const  numberOfBooks = useSelector(
        state => state.book.numberOfBooks
    );
    const  numberOfPens = useSelector(
        state => state.pen.numberOfPens
    );

    const dispatch = useDispatch();

    return(
        <div>
            <label>Hook's Book Container</label>
            <h1>Number of books - {numberOfBooks} and pens {numberOfPens}  Available</h1>
            <button onClick={() => dispatch(buyBook())}>Buy Book</button>
            <button onClick={() => dispatch(buyPens())}>Buy Pens</button>
        </div>
    );
}

export default HookBookContainer;