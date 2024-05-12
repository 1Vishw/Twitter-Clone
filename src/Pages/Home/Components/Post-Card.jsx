import React from 'react'
import './PostCard.css'
import './MediaQuries.css'
export default function PostCard({ posts }) {
  return (
    <>
        <div className="post-card">
            <div className="post">
                <div className="time-stamp">
                    <span>
                        {posts.timeStamp}
                    </span>
                </div>
                <div className="profile">
                    <div className="profile-image">
                        <img src={posts.imageUser} alt="" />
                    </div>
                    <div className="user-name">
                        <span>
                            {posts.userName}
                        </span>
                    </div>
                </div>
                <div className="text-post">
                    <p>{posts.status}</p>
                </div>
            </div>
        </div>
    </>
  )
}
