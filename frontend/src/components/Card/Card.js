/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import '../../style/components/Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import LikeBtn from './LikeBtn';
import { UserIdContext } from '../../context/AppContext';

export default function Card({ post }) {
  const userId = useContext(UserIdContext);
  console.log('letestTODAY',userId)
  console.log(post)

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(post.message);
  const [namePost, setNamePost] = useState(post.namePost);

  const [isUpdated, setIsUpdated] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState(post.namePost);
  const [textUpdate, setTextUpdate] = useState(post.message);

  const [file, setFile] = useState();

  /*Loading spinner*/
  useEffect(() => {
    if ({ post }) {
      setIsLoading(false);
    }
  }, [isLoading, post]);

  /*Fonction supprimer modifier un post*/
  function updatePost() {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('message', textUpdate);
    formData.append('namePost', titleUpdate);
    const requestModify = {
      method: 'PUT',
      body: formData,
    };
    fetch(`http://localhost:5000/api/post/${post._id}`, requestModify);
    window.location = '';
  }

  fetch(`http://localhost:5000/api/post/${post._id}`)
    .then((res) => res.json())
    .then((res2) => {
      setMessage(res2.message);
      setNamePost(res2.namePost);
    });

  function deletePost() {
    const requestDelete = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`http://localhost:5000/api/post/${post._id}`, requestDelete).then(
      (res) => {
        if (res.status === 200) {
          window.location = '/';
        }
      }
    );
  }

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
            {userId === post.posterId && (
              <a onClick={deletePost} class="btn-floating btn-medium BtnDelete">
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </a>
            )}
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
