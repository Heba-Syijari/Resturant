import React , {useState} from 'react'


const Darkmode = () => {
  const [theme, settheme] = useState(localStorage.getItem("mode") || false);
  const handleDark=()=>{
    if(theme){
      document.body.classList.toggle("dark-theme")
      localStorage.setItem("mode", "")
      settheme(false)
    }
    else{
      document.body.classList.toggle("dark-theme")
      settheme(true)
      localStorage.setItem("mode", "dark-theme")
    }
  }
  return (
    <button
     className={theme ? "": "dark-theme" }
     id = "darkMode" 
     onClick={handleDark}>dark.....</button>
  )
}

export default Darkmode;