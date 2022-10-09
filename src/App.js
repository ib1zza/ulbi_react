import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import "./css/App.css";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "desctiption" },
    { id: 2, title: "javascript", body: "desctiption" },
    { id: 3, title: "javascript", body: "desctiption" },
    { id: 4, title: "javascript", body: "desctiption" },
    { id: 5, title: "javascript", body: "desctiption" },
    { id: 6, title: "javascript", body: "desctiption" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: "15px 0px" }} />
        <MyInput
          placeholder={"Search"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка"}
          options={[
            { value: "title", name: "по названию" },
            { value: "body", name: "по описанию" },
          ]}
        ></MySelect>
      </div>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={posts}
          title={"posts about javasctipt"}
        ></PostList>
      ) : (
        <div>NO post found</div>
      )}
    </div>
  );
}

export default App;
