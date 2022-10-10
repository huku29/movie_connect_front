import { Header } from './Header'
import { Footer } from './Footer'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import RoofingIcon from '@mui/icons-material/Roofing';

const FOOTER_MENU_LIST = [
  {
    label: '送る',
    icon: <SendIcon />,
    nextPage: '/',
  },
  {
    label: 'マイページ',
    icon: < RoofingIcon/>,
    nextPage: '/',
    
  },
  {
    label: '受け取る',
    icon: <EmailIcon />,
    nextPage: '/',
  },
]

export const LoggedInLayout = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      {children}
      <Footer menuList={FOOTER_MENU_LIST}/>
    </>
  )
}