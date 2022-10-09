import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import "./css/App.css";
import MyInput from "./UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "desctiption" },
    { id: 2, title: "javascript", body: "desctiption" },
    { id: 3, title: "javascript", body: "desctiption" },
    { id: 4, title: "javascript", body: "desctiption" },
    { id: 5, title: "javascript", body: "desctiption" },
    { id: 6, title: "javascript", body: "desctiption" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  function getSortedPosts() {}

  const sortedPosts = useMemo(() => {
    console.log("get sorted postd worked");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: "15px 0px" }} />
      </div>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"posts about javasctipt"}
      ></PostList>
    </div>
  );
}

export default App;
