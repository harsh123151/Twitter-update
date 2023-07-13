import { BsFillImageFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import { AiOutlineFileGif } from 'react-icons/ai'
import Avatar from '@mui/material/Avatar'
import { useEffect, useState } from 'react'
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useGlobalContext } from '../context'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { serverTimestamp } from 'firebase/firestore'
const Tweetbox = () => {
  const { userinfo, setUser } = useGlobalContext()
  const [tweetmsg, settweet] = useState('')
  const [imgurl, setimgurl] = useState(false)
  const [img, setimg] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        setUser(false)
      }
    })
  }, [])
  const settweetmsg = (e) => {
    settweet(e.target.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    setimgurl(false)
  }
  const sendmsg = () => {
    if (tweetmsg !== '') {
      addDoc(collection(db, 'posts'), {
        displayName: userinfo.displayName,
        userName: userinfo.displayName.toLowerCase().replace(/ +/g, ''),
        tweet: tweetmsg,
        imgUrl: img,
        verified: userinfo.emailVerified,
        Avatar: userinfo.photoURL,
        created: serverTimestamp(),
        comments: [],
        likes: [],
      })
    }
    settweet('')
    setimg('')
  }
  return (
    <div className='tweet-box'>
      <Avatar
        src={userinfo.photoURL}
        alt='default name'
        className='tweet-avatar'
        onClick={() => {
          signOut(auth)
        }}
      />
      <div className='tweet-text'>
        <textarea
          maxLength='150'
          type='text'
          className='tweet-text-input'
          placeholder="What's happening?"
          value={tweetmsg}
          onChange={(e) => {
            settweetmsg(e)
          }}
        ></textarea>
        {imgurl && (
          <form
            className='imgform'
            onSubmit={(e) => {
              handlesubmit(e)
            }}
          >
            <input
              type='text'
              className='imgurl'
              value={img}
              onChange={(e) => {
                setimg(e.target.value)
              }}
              placeholder='Enter image url'
            />
            <input type='submit' className='imgbtn' value='click' />
          </form>
        )}
      </div>
      <div className='tweet-box-button'>
        <div className='add-btn'>
          <div className='addphoto' onClick={() => setimgurl(true)}>
            <BsFillImageFill className='tweet-smbtn' />
          </div>
          <div className='addgif'>
            <AiOutlineFileGif className='tweet-smbtn' />
          </div>
          <div className='addemoji'>
            <BsFillEmojiSmileFill className='tweet-smbtn' />
          </div>
        </div>

        <div className='tweet-box-tweet' onClick={() => sendmsg()}>
          Tweet
        </div>
      </div>
    </div>
  )
}

export default Tweetbox
