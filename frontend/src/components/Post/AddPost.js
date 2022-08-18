import React, { useContext, useState } from 'react';

import '../../style/components/AddPost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { UserIdContext } from '../../context/AppContext';

export default function AddPost() {
  const [titre, setTitre] = useState('');
  const [message, setMessage] = useState('');
  const [picturePost, setPicturePost] = useState(null);
  const [file, setFile] = useState();

  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');

  const userId = useContext(UserIdContext);

  fetch(`http://localhost:5000/api/user/${userId}`)
    .then((response) => response.json())
    .then((res) => {
      if (res.prenom) {
        setPrenom(res.prenom);
      }
      if (res.nom) {
        setNom(res.nom);
      }
    });

  /*publier post*/
  function post() {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('message', message);
    formData.append('namePost', titre);
    formData.append('posterId', userId);
    formData.append('userId', prenom + ' ' + nom);
    const requestNewPost = {
      method: 'POST',
      body: formData,
    };
    fetch(`http://localhost:5000/api/post`, requestNewPost)
    .then((res) => console.log(res));
    window.location = '/';
  }

  /*Affficher Image - Fichier sélectionné + BDD*/
  function picture(e) {
    setPicturePost(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    console.log('file:', file);
  }

  /*Annuler publication*/
  const cancelPost = () => {
    setTitre('');
    setMessage('');
    setPicturePost('');
  };

  return (
    <>
      {userId === '62e92401a72ea436434e79a0' ? null : (
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
                      <a
                        className="btn-floating btn-medium BtnPicture"
                        href="/"
                      >
                        <FontAwesomeIcon
                          icon={faImage}
                          size="2x"
                        ></FontAwesomeIcon>
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

            {titre && message && picturePost ? (
              <>
                <h5>Prévisualisation de votre Post</h5>
                <div className="namePost">{titre}</div>
                <p>{message}</p>
                <div className="ContainerImg">
                  <img src={picturePost} alt="pic" className="imageCard" />
                </div>
                <div className="containerBtn">
                  <button className="btn btnPost" onClick={post}>
                    Publier
                  </button>
                  <button className="btn btnPost" onClick={cancelPost}>
                    Annuler
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
