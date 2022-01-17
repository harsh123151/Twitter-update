import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import './comment.css'
import { useGlobalContext } from '../context'
import Avatar from '@mui/material/Avatar'
const Comments = () => {
  const { setcomment, userinfo } = useGlobalContext()
  const [addcomment, setaddcomment] = useState('')
  return (
    <div className='comment'>
      <div>
        <MdOutlineCancel
          className='cancelbutton'
          onClick={() => setcomment(false)}
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
        <div className='post-btn'>post</div>
      </div>
    </div>
  )
}

export default Comments
