import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Aside from './Navbar'
import Section from './Section'
import Widget from './Widget'
import { useGlobalContext } from '../context'
const Main = () => {
  const { user } = useGlobalContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user])
  return (
    <main className='main'>
      <Aside />
      <Section />
      <Widget />
    </main>
  )
}

export default Main
