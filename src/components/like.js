import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import db from '../firebase'
import { updateDoc, doc, arrayRemove, arrayUnion } from 'firebase/firestore'
import { useGlobalContext } from '../context'
const Like = ({ props }) => {
  const { id, likes } = props
  const { userinfo } = useGlobalContext()
  const userthere = likes.filter((user) => {
    return userinfo.uid == user
  })
  const likeon = async (id) => {
    const docref = doc(db, 'posts', id)
    if (userthere.length > 0) {
      await updateDoc(docref, {
        likes: arrayRemove(userinfo.uid),
      })
    } else {
      await updateDoc(docref, {
        likes: arrayUnion(userinfo.uid),
      })
    }
    console.log(id, userinfo.uid)
  }
  return (
    <div
      className='commentcount'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '38px',
      }}
    >
      {userthere.length > 0 ? (
        <FavoriteBorderIcon
          className='action_btn like'
          fontSize='small'
          onClick={() => {
            likeon(id)
          }}
        />
      ) : (
        <FavoriteBorderIcon
          className='action_btn'
          fontSize='small'
          onClick={() => {
            likeon(id)
          }}
        />
      )}

      <span>{likes.length}</span>
    </div>
  )
}

export default Like
