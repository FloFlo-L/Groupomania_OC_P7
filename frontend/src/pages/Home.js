import React, { useContext } from 'react';
import AddPost from '../components/Post/AddPost';
import Post from '../components/Post/Post';
import { UserIdContext } from '../context/AppContext';
import {Helmet} from "react-helmet";

export default function Home() {
  const userId = useContext(UserIdContext);
  return (
    <div>
      <Helmet>
        <title>Groupomania</title>
        <meta
          description = "Réseau social interne de l'entreprise Groupoania. Faites connaissance, échanger avec vos collègues à travers la publication de posts contenant un message et une image"
        />
      </Helmet>
      {userId ? <AddPost /> : null}
      <Post />
    </div>
  );
}

