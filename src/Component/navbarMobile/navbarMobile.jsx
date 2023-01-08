import React ,{useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navbarMobile.css";

export default function Navbar() {
  const [isClose, setIsClose] = useState(false);
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
    <nav className="navbar-mobile">
      <img src='/icons/chef.png' alt="" className="logo"/>

      <ul className={isClose ? "nav-links-open" : "nav-links"} onClick={
            ()=> setIsClose(false)}>
        <li><NavLink to="/home">
            <img src='/icons/icons8-statistics-60.png' alt="" className="i"/>
            <span >{t("statistics")}</span>
          </NavLink></li>

          <li><NavLink to="/add-resturant">
            <img src='/icons/icons8-add-user-male-50.png' alt="" className="i"/>
            <span >{t("add-resturant")}</span>
          </NavLink></li>

          <li><NavLink to="/setting">
          <img src='/icons/icons8-setting-48.png' alt="" className="i"/>
            <span >{t("setting")}</span>
          </NavLink></li>

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
      <span className="mobile-mene-icon" onClick={()=> setIsClose(!isClose)}>
            {isClose ? <img src='/icons/x-48.png' alt="_" />:<img src='/icons/menu-48.png' alt="_" />}
      </span>
    </nav>
  );
}
