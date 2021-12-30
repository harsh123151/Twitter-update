import { useState, useEffect } from 'react'
import { GiNorthStarShuriken } from 'react-icons/gi'
import Tweetbox from './tweetbox'
import Post from './Post'
import db from '../firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'
const Section = () => {
  const [posts, setposts] = useState([])
  const getPosts = () => {
    onSnapshot(collection(db, 'posts'), (documents) => {
      setposts(
        documents.docs.map((doc) => {
          return doc.data()
        })
      )
    })
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className='feed'>
      <section className='section'>
        <div className='homenav'>
          <h2>Home</h2>
          <GiNorthStarShuriken className='staricon' />
        </div>
        <Tweetbox />
        {posts.map((post, index) => {
          return <Post post={post} key={index} />
        })}
      </section>
    </div>
  )
}
export default Section
