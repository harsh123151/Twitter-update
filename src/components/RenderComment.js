import React from 'react'
import { useGlobalContext } from '../context'
import './rendercomment.css'

const RenderComment = () => {
  const { postComment } = useGlobalContext()
  return (
    <ul>
      {postComment[0] && postComment[0].comments
        ? postComment[0].comments.map((comment, index) => {
            return <li key={index}>{comment}</li>
          })
        : ''}
    </ul>
  )
}

export default RenderComment
