import React from 'react'
import "./setting.css"
import Sidebar from '../../Component/Sidebar/Sidebar.jsx'
import Nav from '../../Component/Nav1/Nav1.jsx'
import { useTranslation } from 'react-i18next'

const Setting = () => {
  const [t , i18n] = useTranslation();
  return (
    <>
        <div className='setting'>
            <div className='left-s'>
                <Sidebar />
            </div>
            <div className='right-s'>
                <Nav/>
            </div>
        </div>
    </>
  )
}

export default Setting;