import { useState, useEffect } from 'react'
import { GiNorthStarShuriken } from 'react-icons/gi'
import Tweetbox from './tweetbox'
import Post from './Post'
import db from '../firebase.js'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import { useGlobalContext } from '../context'
const Section = () => {
  const [posts, setposts] = useState([])

  const q = query(collection(db, 'posts'), orderBy('created', 'desc'))
  const getPosts = () => {
    onSnapshot(q, (documents) => {
      setposts(
        documents.docs.map((doc) => {
          return doc.data()
        })
      )
    })
  }
  useEffect(() => {
    getPosts()
    return () => {
      getPosts()
    }
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
