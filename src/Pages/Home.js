import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  postData,
  postState,
  postError,
  fetchDataPosts,
  patchTodoData,
  updatePatchData,
} from '../Slice/fetchPostsSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import TodoList from './TodoList';

const Home = () => {
  const dispatch = useDispatch();
  const [seletedId, setSeletedId] = useState(null);
  const [editEnabled, setEditEnabled] = useState(false);
  const [editText, setEditText] = useState('');

  const postDataArray = useSelector(postData);
  const state = useSelector(postState);
  const errMessage = useSelector(postError);

  useEffect(() => {
    if (state === 'idle') {
      dispatch(fetchDataPosts());
    }
  }, [dispatch, state]);

  const handleEditPost = async (seleted) => {
    setSeletedId(seleted.id);
    setEditText(seleted.title);
    setEditEnabled(true);
  };

  const handleEditTitle = (e) => {
    setEditText(e.target.value);
  };

  const handleCloseEdit = () => {
    setSeletedId(null);
    setEditText('');
    setEditEnabled(false);
  };

  const handleUpdateTodo = async (todoData) => {
    try {
      const patchData = {
        seletedId: seletedId,
        patchData: { ...todoData, title: editText },
      };
      const responce = await dispatch(patchTodoData(patchData));
      const data = unwrapResult(responce);
      dispatch(updatePatchData(data));
      setSeletedId(null);
      setEditText('');
      setEditEnabled(false);
    } catch (e) {
      console.error(e);
    }
  };

  let HomeContainer;
  if (state === 'loading') {
    HomeContainer = <p>Loading...</p>;
  } else if (state === 'error') {
    HomeContainer = <p>{errMessage}</p>;
  } else if (state === 'fulfilled') {
    HomeContainer = postDataArray.map((data) => {
      return (
        <TodoList
          key={data.id}
          todoData={data}
          handleEditPost={handleEditPost}
          seletedId={seletedId}
          editEnabled={editEnabled}
          handleEditTitle={handleEditTitle}
          editText={editText}
          handleCloseEdit={handleCloseEdit}
          handleUpdateTodo={handleUpdateTodo}
        />
      );
    });
  }

  return <>{HomeContainer}</>;
};

export default Home;
