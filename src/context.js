import { useContext, createContext, useState } from 'react'
import data from './Data/Navbardata'
const AppContext = createContext()

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [navdata, setnavdata] = useState(data)
  const [index, setindex] = useState(1)
  const [user, setUser] = useState(false)
  const [userinfo, setuserinfo] = useState({})
  const [comment, setcomment] = useState(false)
  const [commentId, setcommentId] = useState('')
  const [postComment, setPostComment] = useState({})
  return (
    <AppContext.Provider
      value={{
        loading,
        navdata,
        setLoading,
        index,
        setindex,
        user,
        setUser,
        userinfo,
        setuserinfo,
        comment,
        setcomment,
        commentId,
        setcommentId,
        postComment,
        setPostComment,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { Context, useGlobalContext }
