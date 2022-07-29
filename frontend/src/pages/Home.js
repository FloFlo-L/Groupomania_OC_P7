import React, { useContext } from 'react';
import AddPost from '../components/Post/AddPost';
import Post from '../components/Post/Post';
import { UserIdContext } from '../context/AppContext';

export default function Home() {
  const userId = useContext(UserIdContext);
  return (
    <div>
      {userId ? <AddPost /> : null}
      <Post />
    </div>
  );
}

