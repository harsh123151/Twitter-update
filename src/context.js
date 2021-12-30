import { useContext, createContext, useState } from 'react'
import data from './Data/Navbardata'
const AppContext = createContext()

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [navdata, setnavdata] = useState(data)
  const [index, setindex] = useState(1)
  const [user, setUser] = useState(false)
  const [userinfo, setuserinfo] = useState({})

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
