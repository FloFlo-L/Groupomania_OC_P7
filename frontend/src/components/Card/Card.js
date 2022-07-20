/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import LikeBtn from './LikeBtn';
import '../../style/components/Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { UserIdContext } from '../../context/AppContext';

export default function Card({ post }) {
  const userId = useContext(UserIdContext);

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(post.message);
  const [namePost, setNamePost] = useState(post.namePost);

  const [isUpdated, setIsUpdated] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState(post.namePost);
  const [textUpdate, setTextUpdate] = useState(post.namePost);

  const [file, setFile] = useState();
  console.log('file', file);

  /*Loading spinner*/
  useEffect(() => {
    if ({ post }) {
      setIsLoading(false);
    }
  }, [isLoading, post]);

  function updatePost() {}

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
            {isUpdated === false && (
              <>
                <div className="cardHeader">{post.userId}</div>
                <div className="namePost">{namePost}</div>
                <p>{message}</p>
              </>
            )}

            {isUpdated === true && (
              <>
                <div className="ContainerTitleUpdate">
                  <textarea
                    defaultValue={namePost}
                    onChange={(e) => setTitleUpdate(e.target.value)}
                    className="materialize-textarea"
                  />
                </div>
                <div className="ContainerTextUpdate">
                  <textarea
                    defaultValue={message}
                    onChange={(e) => setTextUpdate(e.target.value)}
                    className="materialize-textarea"
                  />
                </div>
              </>
            )}

            <div className="ContainerImg">
              <img src={post.imageUrl} alt="pic" className="imageCard" />
              {isUpdated === true && (
                <div class="file-field input-field">
                  <a class="btn-floating btn-medium BtnImage">
                    <FontAwesomeIcon icon={faImage} size="2x"></FontAwesomeIcon>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </a>
                </div>
              )}
            </div>

            <div className="containerFooterCard">
              <div className="containerLike">
                <LikeBtn post={post} />
              </div>
              <div className="containerValid">
                {userId === post.posterId && (
                  <>
                    <div className="containerBtn">
                      <div onClick={() => setIsUpdated(!isUpdated)}>
                        <a class="btn-floating btn-medium BtnModif">
                          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                        </a>
                      </div>
                    </div>
                  </>
                )}

                {isUpdated === true && (
                  <div className="containerValidBtn">
                    <button onClick={updatePost} className="btn btnValid">
                      Valider
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </li>
    </div>
  );
}
