import React, {useState} from 'react';
import './MediaQuries.css'
import { Modal, Button } from 'antd';
const ModalComponent = ({ sendStatus ,modalOpen, setModalOpen, status, setStatus }) => {
  const Photo = localStorage.getItem('PHOTO');
  const User = localStorage.getItem('USER');
  const [loading, setLoading] = useState(false);
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpen(false);
    }, 1000);
    sendStatus();
    setStatus("")
  };
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        width={600}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button disabled={status.length > 0 ? false : true} key="submit" type="primary" loading={loading} onClick={handleOk}>
            Post
          </Button>,
        ]}
      >
        <div className="profile-modal">
          <div className="image">
            <img src={Photo} alt="" />
          </div>
          <div className="name">
            <p>{User}</p>
          </div>
        </div>
        <div className="modal-input-container">
          <textarea className="modal-input" onChange={(event) => setStatus(event.target.value)} value={status} placeholder="Write your Post" cols="75" rows="10"></textarea>
        </div>
      </Modal>
    </>
  );
};
export default ModalComponent;