import React , {useEffect ,useState} from 'react'
import "./addResturant.css"
import Sidebar from '../../Component/Sidebar/Sidebar.jsx'
import Nav from '../../Component/Nav1/Nav1.jsx'
import LoadingButton from "../../Component/button";
import NavbarMobile from '../../Component/navbarMobile/navbarMobile';
import swal from "sweetalert";
import {ADDRESTURANT , ADDCURRENY , ADDEXPERIECE , ADDGOOD , CREATEADMIN} from "../../GraphQl/graphql";
import { useMutation } from "@apollo/client";
import { useTranslation } from 'react-i18next'


const AddResturant = () => {
  
  const [t , i18n] = useTranslation();
  const [addrest, {loading: loadingA, error: errorA}] = useMutation(ADDRESTURANT);
  const [addcurreny, {cloading: loadingB, error: errorB}] = useMutation(ADDCURRENY);
  const [addexperiece, {cloading: loadingC, error: errorC}] = useMutation(ADDEXPERIECE);
  const [addgood, {cloading: loadingD, error: errorD}] = useMutation(ADDGOOD);
  const [createadmin, {cloading: loadingE, error: errorE}] = useMutation(CREATEADMIN);
  const [load, setLoading] = useState();
  const [passwordType, setPasswordType] = useState("password");

  const [formData, setformData] = useState({
    address: "",
    name: "",
    
    code:"",
    nameEn:"",
    nameAn:"",
    precentValue: null,
    
    year: null,
    benifit: null,
    vacation: null,
    
    goodEn:"",
    goodAr:"",
    
    email: "",
    password: "",
  });
  const [errors, seterrors] = useState({
    address: "",
    name: "",
    
    code:"",
    nameEn:"",
    nameAn:"",
    precentValue:"",
    
    year:"",
    benifit:"",
    vacation:"",
    
    goodEn:"",
    goodAr:"",
    
    email: "",
    password: "",
  });


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
  if (false) {
    setLoading(LoadingButton);
  } else {
    setLoading(<button className="button">{t('send')}</button>);
  } },[loadingA ,loadingB])


  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors({
      address: "",
      name: "",
      
      code:"",
      nameEn:"",
      nameAn:"",
      precentValue:"",
      
      year:"",
      benifit:"",
      vacation:"",
      
      goodEn:"",
      goodAr:"",
      
      email: "",
      password: "",
    });
    addrest({
      variables: {
        address: formData.address,
        name: formData.name,
      },
    }).then((res) => {
      swal({
        title: "Success!",
        text: res.data.addresturant.message,
        icon: "success",
        button: "OK",
      });
    }).catch((err) => {
      if (err.graphQLErrors[0].extensions.validation.address) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            address: err.graphQLErrors[0].extensions.validation.address,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.name) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            name: err.graphQLErrors[0].extensions.validation.name,
          };
        });
      }
    });

    addcurreny({
      variables: {
        code: formData.code, 
        name_en: formData.nameEn, 
        name_ar: formData.nameEn, 
        precent_value_in_dular: parseFloat(formData.precentValue)
      },
    }).then((res) => {
      swal({
        title: "Success!",
        text: res.data.addcurreny.message,
        icon: "success",
        button: "OK",
      });
    }).catch((err) => {
      console.log(err)
      if (err.graphQLErrors[0].extensions.validation.code) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            code: err.graphQLErrors[0].extensions.validation.code,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.name_en) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            nameEn: err.graphQLErrors[0].extensions.validation.name_en,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.name_ar) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            nameAn: err.graphQLErrors[0].extensions.validation.name_ar,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.precent_value_in_dular) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            precentValue: err.graphQLErrors[0].extensions.validation.precent_value_in_dular,
          };
        });
      }
    });

    addexperiece({
      variables: {
        year: parseInt(formData.year),
        benifit: parseInt(formData.benifit),
        vacation: parseInt(formData.vacation),
      },
    }).then((res) => {
      swal({
        title: "Success!",
        text: res.data.addexperiece.message,
        icon: "success",
        button: "OK",
      });
      console.log("success"+ res);
    }).catch((err) => {
      console.log("errorexperiece    "+err);
      if (err.graphQLErrors[0].extensions.validation.year) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            year: err.graphQLErrors[0].extensions.validation.year,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.benifit) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            benifit: err.graphQLErrors[0].extensions.validation.benifit,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.vacation) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            vacation: err.graphQLErrors[0].extensions.validation.vacation,
          };
        });
      }
    });
    
    addgood({
      variables: {
        name_en: formData.goodEn,
        name_ar: formData.goodAr,
      },
    }).then((res) => {
      swal({
        title: "Success!",
        text: res.data.addgood.message,
        icon: "success",
        button: "OK",
      });
    }).catch((err) => {
      if (err.graphQLErrors[0].extensions.validation.name_en) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            goodEn: err.graphQLErrors[0].extensions.validation.name_en,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.name_ar) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            goodAr: err.graphQLErrors[0].extensions.validation.name_ar,
          };
        });
      }
    });

    createadmin({
      variables: {
        email: formData.email,
        password: formData.password,
        role_id: 1,
        employee_id: 2,
      },
    }).then((res) => {
      swal({
        title: "Success!",
        text: res.data.createadmin.message,
        icon: "success",
        button: "OK",
      });
    }).catch((err) => {
      if (err.graphQLErrors[0].extensions.validation.email) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            email: err.graphQLErrors[0].extensions.validation.email,
          };
        });
      }
      if (err.graphQLErrors[0].extensions.validation.password) {
        seterrors((prevValue) => {
          return {
            ...prevValue,
            password: err.graphQLErrors[0].extensions.validation.password,
          };
        });
      }
    });

  }
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>  
      <NavbarMobile/>
        <div className='add-resturant'>
            <div className='left-a'>
                <Sidebar />
            </div>
            <div className='right-a'>
              <Nav/>
              <div className='form-add-res'>
                <form onSubmit={handleSubmit}>
                  <span className="welcome">{t("add-resturant")}</span>
                  <label>{t("address")}</label>
                  <input
                    id="address"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        address: e.target.value,
                      });
                    }}
                    placeholder={t("address")}
                  />
                  <span className="error">{errors.address}</span>
                  <label>{t("name")}</label>
                  <input
                    id="name"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        name: e.target.value,
                      });
                    }}
                    placeholder={t("name")}
                  />
                  <span className="error">{errors.name}</span>
                  {load}
                </form>
              </div>

              <div className='form-add-res'>
                <form onSubmit={handleSubmit}>
                  <span className="welcome">{t("add-currency")}</span>
                  <label>{t("code")}</label>
                  <input
                    id="code"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        code: e.target.value,
                      });
                    }}
                    placeholder={t("code")}
                  />
                  <span className="error">{errors.code}</span>
                  <label>{t("name-en")}</label>
                  <input
                    id="name-en"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        nameEn: e.target.value,
                      });
                    }}
                    placeholder={t("name-en")}
                  />
                  <span className="error">{errors.nameEn}</span>
                  <label>{t("name-ar")}</label>
                  <input
                    id="name-ar"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        nameAr: e.target.value,
                      });
                    }}
                    placeholder={t("name-ar")}
                  />
                  <span className="error">{errors.nameAr}</span>
                  <label>{t("precent-value")}</label>
                  <input
                    id="name-ar"
                    type="number"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        precentValue: parseFloat(e.target.value),
                      });
                    }}
                    placeholder={t("precent-value")}
                  />
                  <span className="error">{errors.precentValue}</span>
                  {load}
                </form> 
              </div>

              <div className='form-add-res'>
                <form onSubmit={handleSubmit}>
                  <span className="welcome">{t("add-experince-employee")}</span>
                  <label>{t("year")}</label>
                  <input
                    id="year"
                    type="number"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        year: parseInt(e.target.value),
                      }); 
                    }}
                    placeholder={t("year")}
                  />
                  <span className="error">{errors.year}</span>
                  <label>{t("benifit")}</label>
                  <input
                    id="benifit"
                    type="number"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        benifit: parseInt(e.target.value),
                      });
                    }}
                    placeholder={t("benifit")}
                  />
                  <span className="error">{errors.benifit}</span>
                  <label>{t("vacation")}</label>
                  <input
                    id="vacation"
                    type="number"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        vacation: parseInt(e.target.value),
                      });
                    }}
                    placeholder={t("vacation")}
                  />
                  <span className="error">{errors.vacation}</span>
                  {load}
                </form>
              </div>

              <div className='form-add-res'>
                <form onSubmit={handleSubmit}>
                  <span className="welcome">{t("add-good")}</span>
                  <label>{t("name-en")}</label>
                  <input
                    id="name-en"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        goodEn: e.target.value,
                      });
                    }}
                    placeholder={t("name-en")}
                  />
                  <span className="error">{errors.goodEn}</span>
                  <label>{t("name-ar")}</label>
                  <input
                    id="name-ar"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        goodAr: e.target.value,
                      });
                    }}
                    placeholder={t("name-ar")}
                  />
                  <span className="error">{errors.goodAr}</span>
                  {load}
                </form>
              </div>

              {/* <div className='form-add-res'>
                <form onSubmit={handleSubmit}>
                  <span className="welcome">{t("add-admin")}</span>
                  <label>{t('email')}</label>
                  <input
                    id="email"
                    type="text"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        email: e.target.value,
                      });
                    }}
                    placeholder={t('email')}
                  />
                  <span className="error">{errors.email}</span>
                  <label>{t('password')}</label>
                  <div className="password-eye">
                    <input
                      id="password"
                      type={passwordType}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          password: e.target.value,
                        });
                      }}
                      placeholder={t('password')}
                    />
                    <button className="btneye" onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <img
                          src="/icons/eye-crossed.png"
                          className="eye"
                          alt="Phone"
                        />
                      ) : (
                        <img
                          src="/icons/eye.png"
                          className="eye"
                          alt="Phone"
                          style={{ width: "20px" }}
                        />
                      )}
                    </button>
                  </div>
                  <span className="error">{errors.password}</span>
                  {load}
                </form>
              </div> */}

            </div>
        </div>
    </>
  )
}

export default AddResturant;