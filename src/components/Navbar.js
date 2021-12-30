import { useEffect } from 'react'
import styled from 'styled-components'
import { IoLogoTwitter } from 'react-icons/io'
import { useGlobalContext } from '../context'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
const Aside = () => {
  const { navdata, index, setindex, setUser } = useGlobalContext()
  useEffect(() => {
    console.log('in navbar')
    onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        setUser(false)
      }
    })
  }, [])
  return (
    <Asidebar>
      <TwitterLogo>
        <IoLogoTwitter className='logo' />
      </TwitterLogo>
      {navdata.map((data, i) => {
        const { id, text, icon } = data
        return (
          <NavbarButton
            key={id}
            onClick={() => {
              setindex(id)
            }}
            className={`${index === id && 'active-tab'}`}
          >
            {icon}
            <NavbarButtonText>{text}</NavbarButtonText>
          </NavbarButton>
        )
      })}
      <TweetButton>Tweet</TweetButton>
      <TweetButton
        onClick={() => {
          signOut(auth)
        }}
      >
        Logout
      </TweetButton>
    </Asidebar>
  )
}

const TweetButton = styled.div`
  margin-top: 1rem;
  font-size: 21px;
  display: flex;
  color: white;
  background-color: rgb(29, 155, 240);
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  width: 230px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1420px) {
    display: none;
  }
`
const NavbarButton = styled.div`
  display: flex;
  color: rgba(256, 256, 256, 0.8);
  align-items: center;
  border: none;
  height: 55px;
  padding: 0px 5px 0px 5px;
  &:hover {
    cursor: pointer;
    border:1px solid black
    border-radius: 16px;
  };
  transition: border 2s ease-in;
`

const NavbarButtonText = styled.h2`
  text-transform: capitalize;
  margin-left: 1rem;
  font-size: 22px;
  @media (max-width: 1420px) {
    display: none;
  }
`
const Asidebar = styled.aside`
  flex: 0.2;
  padding-left: 5rem;
  padding-top: 1rem;
  overflow-y: auto;
  padding-right: 3rem;
  @media (max-width: 1420px) {
    flex: 0.1;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 768px) {
    flex: 0.09;
  }
  @media (max-width: 420px) {
    display: none;
  }
`
const TwitterLogo = styled.div``

export default Aside
