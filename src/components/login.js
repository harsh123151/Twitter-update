import { useEffect } from 'react'
import { IoLogoTwitter } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'
import './login.css'
import { useGlobalContext } from '../context'
import { auth } from '../firebase'
const Login = () => {
  const { setUser, setuserinfo } = useGlobalContext()
  const navigate = useNavigate()

  const provider = new GoogleAuthProvider()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuserinfo(user)
        setUser(true)
        navigate('/main')
      }
    })
  }, [])
  return (
    <div className='log'>
      <div className='loginimg'>
        <img
          src='https://cdn.cms-twdigitalassets.com/content/dam/careers-twitter/careers-redesign-2021/share/Careers_ShareCard_03.jpg.twimg.768.jpg'
          alt='loginimage'
          className='loginimage'
        />
      </div>
      <div className='login'>
        <div className='loginlogo'>
          <IoLogoTwitter className='loginlogoimg' />
        </div>
        <h1>Sign up to twitter</h1>
        <div
          className='signup'
          onClick={() => {
            signInWithPopup(auth, provider)
          }}
        >
          <FcGoogle className='google-icon' />
          Sign up with google
        </div>
      </div>
    </div>
  )
}
export default Login
