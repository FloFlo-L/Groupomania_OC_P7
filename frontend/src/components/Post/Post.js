import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIdContext } from '../../context/AppContext';
import Card from '../Card/Card';

export default function Post() {
  const [post, setPost] = useState([]);
  const userId = useContext(UserIdContext);

  useEffect(() => {
    fetch(`https://groupomania-fl.herokuapp.com/api/post`)
      .then((res) => res.json())
      .then((res2) => {
        setPost(res2);
      });
  }, []);

  return (
    <div>
      {userId ? (
       <div>
       {post.map((info) => (
         <Card post={info} key={info._id} />
       ))}
     </div>
      ) : (
        <div className='card pasConnecte'>
          <h2>Pour accéder aux posts de vos collègues</h2>
          <Link to='/connexion' className='Link'>
            <h2>Connectez-vous</h2>
          </Link>
        </div>
      )}
    </div>
  );
}
