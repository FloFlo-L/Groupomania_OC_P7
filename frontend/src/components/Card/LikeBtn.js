import React, { useContext, useEffect, useState } from 'react';
import { UserIdContext } from '../../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LikeBtn({ post }) {
  const userId = useContext(UserIdContext);
  const [like, setLike] = useState(false);
  const [nbr, setNbr] = useState(post.usersLiked.length);
  const [PopupListLike, setPopupListLike] = useState(false);
  const [likers, setLikers] = useState([]);

  console.log('likers', likers);

  useEffect(() => {
    if (post.usersLiked.includes(userId)) {
      setLike(true);
    }
  }, [userId, post.usersLiked]);

  function liked() {
    console.log('like');

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
    console.log('unlike');

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

  function ListLike() {
    setPopupListLike(!PopupListLike);
    fetch(`http://localhost:5000/api/post/${post._id}`)
      .then((res) => res.json())
      .then((res2) => {
        setLikers(res2.usersLiked);
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

      <h8 className="h8ListLike" onClick={ListLike}>
        {nbr}
      </h8>
    </>
  );
}
