import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import FileBase from 'react-file-base64';
import './Form.scss';

import { createPost, updatePost } from '../../redux/posts/action';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({...postData, name: user?.result?.name}));
      clear();
    } else {
      dispatch(updatePost(currentId,{ ...postData, name: user?.result?.name}));
      clear();
    }
  };

  return (
    <>
      {!user?.result?.name ? (        
        <div title='Plase Sign In' className='add-form'>
          <div className='lockIcon'><i className="fa-solid fa-lock"></i></div>
          <h3>
            Please Sign In to create your own memories and like other's memories.
          </h3>
        </div>
      ) : (
        <div className='add-form'>
          <div className='git-icon'>
            <a href='https://github.com/yasin-mishavian'> <i className="fa-brands fa-github "></i> </a>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-control' >
              <label>Title </label>
              <input type='text' name='title' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            </div>
            <div className='form-control' >
              <label>Message </label>
              <input type='text' name='message' value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
            </div>
            <div className='form-control' >
              <label>Tags </label>
              <input name='tags' value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
            </div>
            <div className='file-Input'>
              <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
            </div>
            <button type="submit" >Submit</button>
          </form>
          <button onClick={clear} >Clear</button>
        </div>
      )}
    </>
  );
};

export default Form;
