import React, { useState } from 'react';
import {connect} from 'react-redux';

import {buyBook, buyPens} from '../redux/actions';

const BookContainer = (props) => {
    //console.log(props);
    const [numberOfBooks, setNumberOfBook] = useState(1)
    return(
        <div>
            <label>Book Container</label>
            <h1>Number of books - {props.numberOfBooks} and pens {props.numberOfPens} Available</h1>
            <input type="text" value={numberOfBooks} onChange={evt => setNumberOfBook(evt.target.value)} />
            <button onClick={() => props.buyBook(numberOfBooks)}>Buy {numberOfBooks} Book</button>
            <button onClick={props.buyPens}>Buy Pens</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        numberOfBooks: state.book.numberOfBooks,
        numberOfPens: state.pen.numberOfPens
    }
}

/*
{buyBook} = worked same as below code :
const mapDispatchToProps = (dispatch) => {
    return {
        buyBook: function(numberOfBooks){
            dispatch(buyBook(numberOfBooks));
        }
    }
}
*/

export default connect(mapStateToProps, {buyBook, buyPens})(BookContainer);