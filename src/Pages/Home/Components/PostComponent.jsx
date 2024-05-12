import React, { useState, useMemo } from 'react'
import './Post-Modal.css'
import PostCard from './Post-Card';
import './MediaQuries.css'
import { PostStatus, getPosts } from '../../../Firebase/FireStoreAPI';
import ModalComponent from './Modal';
import { getCurrenetTimeStamp } from './UseMoment'
export default function PostComponent() {
  const Photo = localStorage.getItem("PHOTO");
  const User = localStorage.getItem("USER");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [allStatuses, setAllStatuses] = useState([])
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrenetTimeStamp('lll'),
      imageUser: Photo,
      userName: User
    }
    await PostStatus(object)
    console.log(getCurrenetTimeStamp('lll'));
  }

  useMemo(() => {
    getPosts(setAllStatuses);
  }, []);
  return (
    <>
      <div className="post-editor-container">
        <div className="nav-post-container">
          <div className="height-element">
          </div>
          <div className="nav-post">
            <div className="for-you">
              <h3>For you</h3>
            </div>
            <div className="following">
              <h3>Following</h3>
            </div>
          </div>
        </div>
        <div className="post-editor">
          <div className="profile-image">
            <div className="image">
              <img src={Photo}/>
            </div>
          </div>
          <div className="input-button">
            <div className="button">
              <button onClick={() => setModalOpen(true)}>
                Write a Post
              </button>
            </div>
          </div>
          <ModalComponent sendStatus={sendStatus} setStatus={setStatus} status={status} modalOpen={modalOpen} setModalOpen={setModalOpen}>

          </ModalComponent>
        </div>
        <div className="post-card">
          {allStatuses.map((posts) => {
            return <PostCard posts={posts}/>
          })}
        </div>

      </div>
    </>
  )
}
