/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import LikeBtn from './LikeBtn'
import '../../style/components/Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Card({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(post.message);
  const [namePost, setNamePost] = useState(post.namePost);

  /*Loading spinner*/
  useEffect(() => {
    if ({ post }) {
      setIsLoading(false);
    }
  }, [isLoading, post]);

  return (
    <div className="test">
      <li className="card CardContainer">
        {isLoading ? (
          <FontAwesomeIcon
            icon={faSpinner}
            size="2x"
            spin
            className="iconSpinner"
          ></FontAwesomeIcon>
        ) : (
          <>
            <div className="cardHeader">{post.userId}</div>
            <div className="namePost">{namePost}</div>
            <p>{message}</p>

            <div className="ContainerImg">
              <img src={post.imageUrl} alt="pic" className="imageCard" />
            </div>

            <div className="containerFooterCard">
              <div className="containerLike">
                <LikeBtn post={post} />
              </div>
              <div className="containerValid"></div>
            </div>
          </>
        )}
      </li>
    </div>
  );
}
