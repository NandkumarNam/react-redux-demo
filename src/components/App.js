import React from 'react';

import BookContainer from './BookContainer';
import HookBookContainer from './hookBookContainer';

const App = () => {
    return (
        <div>
            <label>App Component</label>
            <BookContainer/>
            <hr/>
            <HookBookContainer/>
        </div>
    );
}

export default App;