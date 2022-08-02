import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../redux/posts/action";
import "./Post.scss";


const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const likes = post.likes || []
  
  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (<i className="fa-solid fa-heart like"> </i> ) 
        : (<i className="fa-solid fa-heart"> </i>)
      }
    return <i className="fa-solid fa-heart"></i>;
  };

  const deleteBtn = (id) => {
    if(user?.result?.googleId || user?.result?._id){
      dispatch(deletePost(id))

    }else{
      alert('You Need Sign in');
    }
  };
  
  const likeBtn = (id) => {
    if(user?.result?.googleId || user?.result?._id){
      dispatch(likePost(id))

    }else{
      alert('You Need Sign in');
    }
  };
  
  return (
    <div className="post-item">
      <div className="post-inner">
        <div className="post-top">
          <div className="post-update">
            <div className="bg-title"></div>
            <h1>{post.name}</h1>
            <p>{moment(post.createdAt).fromNow()}</p>
            <button onClick={() => setCurrentId(post._id)}><i className="fa-solid fa-ellipsis"></i></button>
          </div>
          <img src={post.selectedFile} alt={post.title} />
        </div>
        <div className="post-bottom">
          <h2>{post.tags.map((tag) => `#${tag} `)}</h2>
          <h1>{post.title}</h1>
          <p>{post.message}</p>
        </div>
        <div className="post-btn">
          <button onClick={() => likeBtn(post._id)} >
           Like <span>{likes.length}</span>
          </button>
            <Likes/>
          <button 
           onClick={() => deleteBtn(post._id)} >
            <i className="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
