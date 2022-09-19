import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

import './css/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "javascript", body: "desctiption", },
        { id: 2, title: "javascript", body: "desctiption", },
        { id: 3, title: "javascript", body: "desctiption", },
        { id: 4, title: "javascript", body: "desctiption", },
        { id: 5, title: "javascript", body: "desctiption", },
        { id: 6, title: "javascript", body: "desctiption", },
    ]);

    return (
        <div className="App">
            <form action="">
                <MyInput type="text" placeholder='Name of the post' />
                <MyInput type="text" placeholder='Description of the post' />
                <MyButton>Click!</MyButton>
            </form>
            <PostList posts={posts} title={"posts about javasctipt"}></PostList>
        </div >
    );
}

export default App;
