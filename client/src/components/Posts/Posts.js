import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import "./Posts.scss";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  let renderPost = !posts.length
    ? <h3 className="loading">Loading</h3>
    : posts.map((post) => (
        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
      ));

  return (
    <>
      <div className="post-container">
        {renderPost}
      </div>
    </>
  );
};

export default Posts;
