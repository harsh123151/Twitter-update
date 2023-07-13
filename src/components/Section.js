import { useState, useEffect } from 'react'
import { GiNorthStarShuriken } from 'react-icons/gi'
import Tweetbox from './tweetbox'
import Post from './Post'
import db from '../firebase.js'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Comments from './Comments'

import { useGlobalContext } from '../context'
const Section = () => {
  const { comment, setPostComment, commentId } = useGlobalContext()
  const [posts, setposts] = useState([])

  const q = query(collection(db, 'posts'), orderBy('created', 'desc'))
  const getPosts = () => {
    onSnapshot(q, (documents) => {
      setposts(
        documents.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
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

  useEffect(() => {
    setPostComment(
      posts.filter((post) => {
        return post.id == commentId
      })
    )
  }, [posts, commentId])

  return (
    <div className='feed'>
      {comment && <Comments />}
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
