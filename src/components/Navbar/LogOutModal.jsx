import React, { useContext } from 'react';
import { DataParentContext } from '../App';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
const LogOutModal = ({setModalBtn}) => {
  const Context = useContext(DataParentContext);
  const guide=()=>{
   Context.setLoginDetails([])
    setModalBtn(false)
  }
  return (
    <div className='logoutClick'>
      <Link className="navlinks" to="/login"><div onClick={guide} className="done"><LogoutIcon className='icon_out'/></div></Link>
    </div>
  )
}
export default LogOutModal