import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import './comment.css'
import { useGlobalContext } from '../context'
import Avatar from '@mui/material/Avatar'
import db from '../firebase'
import { updateDoc, doc, arrayUnion } from 'firebase/firestore'
import RenderComment from './RenderComment'
const Comments = () => {
  const { setcomment, userinfo, setcommentId, commentId } = useGlobalContext()
  const [addcomment, setaddcomment] = useState('')
  const postComment = async () => {
    const docRef = doc(db, 'posts', commentId)
    await updateDoc(docRef, {
      comments: arrayUnion({ comment: addcomment, name: userinfo.displayName }),
    })
  }
  const handleSubmit = async () => {
    if (addcomment === '') {
      console.log('provide some comment for post ' + commentId)
    } else if (addcomment.length < 10) {
      console.log('comment length should be greater than 10')
    } else {
      postComment()
      setaddcomment('')
    }
  }
  return (
    <div className='comment'>
      <div class='cancel'>
        <MdOutlineCancel
          className='cancelbutton'
          onClick={() => {
            setcomment(false)
            setcommentId('')
            setaddcomment('')
          }}
        />
      </div>
      <div className='comment-box'>
        <Avatar
          src={userinfo.photoURL}
          alt='default name'
          className='comment-avatar'
        />
        <div className='comment-text'>
          <textarea
            maxLength='100'
            type='text'
            className='comment-text-input'
            placeholder='Add a Comment!'
            value={addcomment}
            onChange={(e) => {
              setaddcomment(e.target.value)
            }}
          ></textarea>
        </div>
        <div
          className='post-btn'
          onClick={() => {
            handleSubmit()
          }}
        >
          post
        </div>
      </div>
      <div class='allcomment'>
        <RenderComment />
      </div>
    </div>
  )
}

export default Comments
