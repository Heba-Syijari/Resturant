import React from 'react'
import './style.css'
import { useTranslation } from 'react-i18next';
const LoadingButton = () => {
  const [t , i18n] = useTranslation();
  return (
    <button className="loading">{t("wait")}</button>
  )
}

export default LoadingButton;