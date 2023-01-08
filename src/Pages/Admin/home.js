import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE, LOGOUT } from '../../GraphQl/graphql';
import { useTranslation } from 'react-i18next';
import Darkmode from "../../Component/Darkmode/Darkmode";

const Home = () => {
  const [t , i18n] = useTranslation();
  const [logoutUser, {client, data, loading, error }] = useMutation(LOGOUT);
  const [deleteUser, { }] = useMutation(DELETE);
  const navigate = useNavigate();

  const deleteRole=()=>{
    deleteUser({
      variables:{
        id:1
      }
    }).then(res=>{
      console.log(res.message)
    }).catch(err=>{
      console.log(err.graphQLErrors[0])
    })

  }
  const logout=()=>{
    logoutUser({
      variables:{
      }
    }).then(res=>{
      console.log(res.data.logout.message)
      console.log(client)
      client.resetStore()
      sessionStorage.clear()
      navigate("/")
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div><h2>{t('home')}</h2>
      <button onClick={logout}>logout</button>
      <button onClick={deleteRole}>delete</button>
      { i18n.language == 'ar' && <button onClick={() => { i18n.changeLanguage('en'); localStorage.setItem("lng", "en"); document.body.dir = i18n.dir('en-US');}}>EN</button>}
      { i18n.language == 'en' && <button onClick={() => { i18n.changeLanguage('ar'); localStorage.setItem("lng", "ar"); document.body.dir = i18n.dir('ar');}}>AR</button>}
      {Darkmode}
    </div>
  )
}
export default Home