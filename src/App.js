import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('string');

    function increment() {
        setLikes(likes + 1);
    }
    function decrement() {
        setLikes(likes - 1);

    }
    return (
        <div className="App">
            likes = {likes};

            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>


            <Counter></Counter>
            <ClassCounter></ClassCounter>
        </div >
    );
}

export default App;
