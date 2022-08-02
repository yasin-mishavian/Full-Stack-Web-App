import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./redux/posts/action";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="posts">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="form">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
};

export default App;
