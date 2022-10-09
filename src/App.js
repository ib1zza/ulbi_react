import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import "./css/App.css";
import MyInput from "./UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";

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

  const [modal, setModal] = useState(false);

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
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create!
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

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
