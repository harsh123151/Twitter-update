import Avatar from '@mui/material/Avatar'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'

import PublishIcon from '@material-ui/icons/Publish'
import { useGlobalContext } from '../context'
import Like from './like'
const Post = ({ post }) => {
  const {
    displayName,
    userName,
    verified,
    tweet,
    imgUrl,
    id,
    comments,
    likes,
  } = post

  const { setcomment, setcommentId, userinfo } = useGlobalContext()

  const commenton = (id) => {
    setcomment(true)
    setcommentId(id)
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
          <div
            className='commentcount'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '38px',
            }}
          >
            <ChatBubbleOutlineIcon
              className='action_btn'
              fontSize='small'
              onClick={() => {
                commenton(id)
              }}
            />
            <span>{comments ? comments.length : ''}</span>
          </div>
          <RepeatIcon className='action_btn' fontSize='small' />
          <Like props={{ id: id, likes: likes }} />
          <PublishIcon className='action_btn' fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
