import React, { useState } from 'react';
import PostList from './components/PostList';

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

    const [posts2, setPosts2] = useState([
        { id: 1, title: "python", body: "desctiption", },
        { id: 2, title: "python", body: "desctiption", },
        { id: 3, title: "python", body: "desctiption", },
        { id: 4, title: "python", body: "desctiption", },
        { id: 5, title: "python", body: "desctiption", },
        { id: 6, title: "python", body: "desctiption", },
    ]);


    return (
        <div className="App">
            <PostList posts={posts} title={"posts about javasctipt"}></PostList>
            <PostList posts={posts2} title={"posts about python"}></PostList>
        </div >
    );
}

export default App;
