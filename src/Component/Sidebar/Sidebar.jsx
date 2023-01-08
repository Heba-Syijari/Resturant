import React from "react";
import {useState,useEffect} from "react";
import  "./Sidebar.css";
import { useTranslation } from 'react-i18next';
import {NavLink} from "react-router-dom";
const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [t , i18n] = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("mode"))
      document.body.classList.add(localStorage.getItem("mode"));
    if (localStorage.getItem("lng") === "en"){
      i18n.changeLanguage('en');
      document.body.dir = i18n.dir('en-US');
    }else {
      i18n.changeLanguage('ar');
      document.body.dir = i18n.dir('ar');
    }  
  },[]);
  return (
  <> 
    <div  className={isOpen ? "sidebar active" : "sidebar"} >
      <div className="logo_content">
          <img src='/icons/chef.png' alt="" className="logo"/>
          <img src='/icons/menu-48.png' alt="" className="list" onClick={
      ()=> setIsOpen(!isOpen)
    }/>
      </div>

      <ul className="nav_list">
          <li><NavLink to="/home">
            <img src='/icons/icons8-statistics-60.png' alt="" className="i"/>
            <span >{t("statistics")}</span>
          </NavLink></li>

          <li><NavLink to="/add-resturant">
            <img src='/icons/icons8-add-user-male-50.png' alt="" className="i"/>
            <span >{t("add-resturant")}</span>
          </NavLink></li>

          <li><NavLink to=" ">
            <img src='/icons/icons8-setting-48.png' alt="" className="i"/>
            <span >{t("setting")}</span>
          </NavLink>
            {/* <ul>
              <li><NavLink to=" ">
                    <img src='/icons/icons8-setting-48.png' alt="" className="i"/>
                    <span >{t("setting")}</span></NavLink>
              </li>
              <li><NavLink to=" ">
                    <img src='/icons/icons8-setting-48.png' alt="" className="i"/>
                    <span >{t("setting")}</span></NavLink>
              </li>
            </ul> */}
          </li>

          <li><NavLink to="/">
            <img src='/icons/icons8-statistics-60.png' alt="" className="i"/>
            <span >....</span>
          </NavLink></li>

          <li><NavLink to="/">
            <img src='/icons/icons8-statistics-60.png' alt="" className="i"/>
            <span >....</span>
          </NavLink></li>

          <li><NavLink to="/">
            <img src='/icons/icons8-statistics-60.png' alt="" className="i"/>
            <span >.....</span>
          </NavLink></li>

      </ul>
    </div>
    </>
  );
}

export default Sidebar;