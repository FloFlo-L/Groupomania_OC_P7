import React, { useContext, useEffect, useState } from 'react';
import { UserIdContext } from '../../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LikeBtn({ post }) {
  const userId = useContext(UserIdContext);
  const [like, setLike] = useState(false);
  const [nbr, setNbr] = useState(post.usersLiked.length);

  useEffect(() => {
    if (post.usersLiked.includes(userId)) {
      setLike(true);
    }
  }, [userId, post.usersLiked]);

  function liked() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        like: 1,
        userId: userId,
      }),
    };

    fetch(`http://localhost:5000/api/post/${post._id}/like`, requestOptions)
      .then((res) => res.json())
      .then((res2) => {
        if (res2.message === 'Post liké !') {
          setLike(true);
          fetch(`http://localhost:5000/api/post/${post._id}`)
            .then((res) => res.json())
            .then((res2) => {
              setNbr(res2.likes);
            });
        }
      });
  }

  function unliked() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        like: 0,
        userId: userId,
      }),
    };

    fetch(`http://localhost:5000/api/post/${post._id}/like`, requestOptions)
      .then((res) => res.json())
      .then((res2) => {
        if (res2.message === 'Like non selectionné') {
          setLike(false);
          fetch(`http://localhost:5000/api/post/${post._id}`)
            .then((res) => res.json())
            .then((res2) => {
              setNbr(res2.likes);
            });
        }
      });
  }

  return (
    <>
      {like === false ? (
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          color="#4e5166"
          onClick={liked}
          className="iconLike"
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          color="#fd2d01"
          onClick={unliked}
          className="iconLike"
        ></FontAwesomeIcon>
      )}

      <h8>{nbr}</h8>
    </>
  );
}
