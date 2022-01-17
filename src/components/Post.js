import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'
import { useGlobalContext } from '../context'

const Post = ({ post }) => {
  console.log(post)
  const { displayName, userName, verified, tweet, imgUrl } = post
  const { setcomment } = useGlobalContext()
  const commenton = () => {
    setcomment(true)
  }
  return (
    <div className='post'>
      <div className='post_avatar'>
        <Avatar
          src={post.Avatar}
          alt='default name'
          sx={{ width: '55px', height: '55px' }}
          className='avatar'
        />
      </div>
      <div className='post_header'>
        <div className='name'>
          <h2 className='display_name'>{displayName}</h2>
          {verified && <VerifiedIcon className='verified' />}
          <h3 className='user_name'>@{userName}</h3>
        </div>
        <div className='post_header_text'>{tweet}</div>
        {imgUrl && <img src={imgUrl} className='post_header_img' />}
        <div className='post_header_btn'>
          <ChatBubbleOutlineIcon
            className='action_btn'
            fontSize='small'
            onClick={commenton}
          />
          <RepeatIcon className='action_btn' fontSize='small' />
          <FavoriteBorderIcon className='action_btn like' fontSize='small' />
          <PublishIcon className='action_btn' fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
