import React, { useContext, useState } from 'react';

import './../../style/components/AddPost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export default function AddPost() {
  const [titre, setTitre] = useState('');
  const [message, setMessage] = useState('');
  const [picturePost, setPicturePost] = useState(null);

  function picture() {}

  return (
    <div className="AddPostContainer">
      <div className="ContainerPostForm">
        {titre && message && picturePost ? null : (
          <>
            <div className="postForm">
              <h5>Publier un nouveau post</h5>
              <div className="input-field">
                <textarea
                  className="materialize-textarea"
                  name="Titre"
                  onChange={(e) => setTitre(e.target.value)}
                />
                <label>Titre</label>
              </div>

              <div className="input-field">
                <textarea
                  className="materialize-textarea"
                  name="Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label>Message</label>
              </div>
            </div>
            {titre && message ? (
              <div className="ContainerFooterPost">
                <h6>Ajouter une image :</h6>
                <div class="file-field input-field">
                  <a className="btn-floating btn-medium BtnPicture" href="/">
                    <FontAwesomeIcon icon={faImage} size="2x"></FontAwesomeIcon>
                    <input
                      type="file"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => picture(e)}
                    />
                  </a>
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
