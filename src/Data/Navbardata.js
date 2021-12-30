import { BiHomeCircle } from 'react-icons/bi'
import { CgHashtag, CgProfile, CgMoreO } from 'react-icons/cg'
import { BsBell } from 'react-icons/bs'
import { MdForwardToInbox, MdOutlineBookmarks } from 'react-icons/md'
import { VscListSelection } from 'react-icons/vsc'
const Navbardata = [
  { id: 1, text: 'home', icon: <BiHomeCircle className='icons' /> },
  { id: 2, text: 'explore', icon: <CgHashtag className='icons' /> },
  { id: 3, text: 'notification', icon: <BsBell className='icons' /> },
  { id: 4, text: 'messages', icon: <MdForwardToInbox className='icons' /> },
  { id: 5, text: 'bookmarks', icon: <MdOutlineBookmarks className='icons' /> },
  { id: 6, text: 'lists', icon: <VscListSelection className='icons' /> },
  { id: 7, text: 'profile', icon: <CgProfile className='icons' /> },
  { id: 8, text: 'More', icon: <CgMoreO className='icons' /> },
]

export default Navbardata
