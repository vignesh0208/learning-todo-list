import React from 'react';
import { useSelector } from 'react-redux';
import { seletedAllUsers } from '../Slice/usersSlice';

const TodoUsers = ({ userId }) => {
  const users = useSelector(seletedAllUsers);

  const userName = users.find((user) => user.id === userId);

  return <div>by {userName.id ? userName.name : 'Unknown User'}</div>;
};

export default TodoUsers;
