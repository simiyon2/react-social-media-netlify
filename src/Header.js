import React, { useContext } from 'react'
import {FaMobileAlt,FaTablet,FaLaptop} from 'react-icons/fa'
import DataContext from './context/DataContext'
const Header = ({title}) => {
  const {width} =useContext(DataContext)
  return (
    <header className='Header'>
      <h2>{title}</h2>
      {width < 768 ? <FaMobileAlt />
      :width < 992 ? <FaTablet />
    :<FaLaptop />}
    </header>
  )
}

export default Header
