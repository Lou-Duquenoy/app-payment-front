import styles from "./LoginModal.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "../../Context";
import { setCookies, getCookie, getCookies } from "cookies-next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import variables from "../../../variables.json";
import { useTranslation } from "react-i18next";
export default function LoginModal() {
  const {
    loginModal,
    setLoginModal,
    lostPasswordModal,
    setLostPasswordModal,
    token,
    setToken,
    userData,
    setUserData,
    setWalletId,
    availableModal,
    setAvailableModal,
  } = useContext(DataContext);
  const { t, i18n } = useTranslation("fr", { useSuspense: false });
  useEffect(() => {
    document.body.style.overflow = loginModal ? "hidden" : "scroll";
  }, [loginModal]);

  const recaptchaRef = useRef(null);
  const [formStep, setFormStep] = useState(0);
  const [registerData, setRegisterData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loginPicture, setLoginPicture] = useState(false);
  const [showModal, setShowModal] = useState("login");
  const [emailCode, setEmailCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phone, setPhone] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showCodeMailError, setShowCodeMailError] = useState(false);
  const [showCodePhoneError, setShowCodePhoneError] = useState(false);
  const [showCodeError, setShowCodeError] = useState(false);
  const [typeAccount, setTypeAccount] = useState("");
  const [showText, setShowText] = useState(0);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [finalPart, setFinalPart] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [sucessCodeEmail, setSucessCodeEmail] = useState(false);
  const [sucessCodePhone, setSucessCodePhone] = useState(false);
  const [sucessCodeEmailEntered, setSucessCodeEmailEntered] = useState(false);
  const [sucessCodePhoneEntered, setSucessCodePhoneEntered] = useState(false);
  const [resetClicked, setResetClicked] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [noButtonMail, setNoButtonMail] = useState(false);
  const [noButtonPhone, setNoButtonPhone] = useState(false);
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    setTimeout(() => {
      setShowCodeMailError(false);
    }, 8000);
  }, [showCodeMailError]);

  useEffect(() => {
    setTimeout(() => {
      setShowCodePhoneError(false);
    }, 8000);
  }, [showCodePhoneError]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (noButtonMail && seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        clearInterval(interval);
        // Add your code to execute when the counter reaches 0 here.
        setNoButtonMail(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [noButtonMail, seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (noButtonPhone && seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        clearInterval(interval);
        // Add your code to execute when the counter reaches 0 here.
        setNoButtonPhone(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [noButtonPhone, seconds]);

  // Config for forms using React-hook-form
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const {
    register: registerEmail,
    handleSubmit: handleSubmitRegisterEmail,
    formState: { errors: errorsRegisterEmail },
  } = useForm();

  const {
    register: registerEmailCode,
    handleSubmit: handleSubmitRegisterEmailCode,
    formState: { errors: errorsRegisterEmailCode },
  } = useForm();

  const {
    register: registerPhone,
    handleSubmit: handleSubmitRegisterPhone,
    formState: { errors: errorsRegisterPhone },
  } = useForm();

  const {
    register: registerPhoneCode,
    handleSubmit: handleSubmitRegisterPhoneCode,
    formState: { errors: errorsRegisterPhoneCode },
  } = useForm();

  const {
    register: registerUserInfos,
    handleSubmit: handleSubmitRegisterUserInfos,
    formState: { errors: errorsRegisterUserInfos },
  } = useForm();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitRegisterPassword,
    formState: { errors: errorsRegisterPassword },
    watch,
  } = useForm();
  const {
    register: registerNewPassword,
    handleSubmit: handleSubmitNewPassword,
    formState: { errors: errorsLoginNewPassword },
  } = useForm();
  function NotAvailableModal() {
    setAvailableModal(true);
  }
  const interestText = {
    1: "Portemonnaie multidevises",
    2: "Compte IBAN + CB",
    3: "Portefeuille crypto sans détention",
    4: "Bons Plans & Cashback",
    5: "Gérer / Vendre plus facilement",
    6: "Devenir Ambassadeur",
    7: "Gagner du temps en une seule app",
  };

  const handleInterestClick = (interestNumber) => {
    setSelectedInterest(interestNumber);
    const interest = interestText[interestNumber];
    const test = localStorage.setItem("interest", interest);
    console.log(test);
  };

  // We get user email and password from the login form and perform a request to obtain a json web token
  const onSubmitLogin = (data1) => {
    let data = {
      email: data1.email,
      password: data1.password,
    };

    axios
      .post(
        `${variables.DATA_URL}/login/loginTest`,
        {
          data: data,
        },
        {
          //withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function (resultat) {
        let llogintoken = resultat.data.token;
        let loginToken = setCookies("token", llogintoken);

        axios
          .post(
            `${variables.DATA_URL}/user/getData`,
            {
              token: llogintoken,
            },
            {
              //withCredentials: true,
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          )
          .then(function (response) {
            setCookies("EUR", response.data.EUR.toString());
            setCookies("firstName", response.data.firstName);
            setCookies("lastName", response.data.lastName);
            setCookies("walletId", response.data.walletId);
            setCookies("BSCWallet", response.data.BSCWallet);

            setToken(true);
            setWalletId(response.data.walletId);
            setLoginModal(0);
            setFormStep(0);
          })
          .catch(function (error) {
            setShowCodeError(true);
          });
      })
      .catch(function (error) {
        setShowPasswordError(true);
      });
  };

  // We handle form datas and update the registerData state with it. Then, we change the formStep number to display the next part of the register tunnel

  const onSubmitRegisterEmail = (data1) => {
    let email = data1.registerEmail;

    setRegisterData({ email: email });

    let data = {
      email: email,
      langue: "fr",
    };

    axios
      .post(
        `${variables.DATA_URL}/register/sendRegisterEmail`,
        {
          data: data,
        },
        {
          //withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function (response) {
        let email = localStorage.setItem("email", JSON.stringify(data.email));
        setSucessCodeEmail(true);
        setNoButtonMail(true);
      });
  };
  const handleButtonClick = () => {
    if (typeAccount === "professionel") {
      localStorage.setItem("pro", typeAccount);
      localStorage.removeItem("particular", typeAccount);
      setFormStep(1);
    }
    if (typeAccount === "particulier") {
      localStorage.setItem("particular", typeAccount);
      localStorage.removeItem("pro", typeAccount);
      setFormStep(2);
    }
  };
  const handleButtonClickReturn0 = (e) => {
    setFormStep(0);
  };
  const handleButtonClickReturn = (e) => {
    e.preventDefault();
    if (localStorage.getItem("pro")) {
      setFormStep(1);
    }
    if (localStorage.getItem("particular")) {
      setFormStep(2);
    }
  };
  useEffect(() => {
    if (emailCode) {
      let visitorData = registerData.email;

      let visitorCode = emailCode;
      let data = {
        visitorData,
        visitorCode,
      };
      //console.log(registerData);
      axios
        .post(
          `${variables.DATA_URL}/register/verifyCode`,
          {
            data: data,
          },
          {
            //withCredentials: true,
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
        .then(function (response) {
          setSucessCodeEmailEntered(true);
        });
    }
  }, [emailCode]);
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const onSubmitRegisterPhone = (data1) => {
    let phoneNumber = `+${phone}`;

    let indicatif = phoneNumber.substr(0, 4);
    //console.log(indicatif);
    setRegisterData(() => ({ ...registerData, phoneNumber }));
    if (
      indicatif === "+225" ||
      indicatif === "+234" ||
      indicatif == "+241" ||
      indicatif == "+229"
    ) {
    } else {
      let phone = phoneNumber;

      axios
        .post(
          `${variables.DATA_URL}/register/sendRegisterSMS`,
          {
            phone,
          },
          {
            //withCredentials: true,
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
        .then(function (response) {
          //console.log(response.data);
          let phoneNumber = localStorage.setItem(
            "phoneNumber",
            JSON.stringify(phone)
          );
          setSucessCodePhone(true);
          setNoButtonPhone(true);
        });
    }
  };

  useEffect(() => {
    if (phoneCode) {
      let visitorData = registerData.phoneNumber;
      let visitorCode = phoneCode;
      let data = {
        visitorData,
        visitorCode,
      };
      axios
        .post(
          `${variables.DATA_URL}/register/verifyCode`,
          {
            data: data,
          },
          {
            //withCredentials: true,
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
        .then(function (response) {
          setSucessCodePhoneEntered(true);
          //console.log(response.data);
        });
    }
  });

  const onSubmitRegisterUserInfos = async (infos, e) => {
    e.preventDefault();

    let firstName = infos.firstName;
    let lastName = infos.lastName;
    let postalCode = infos.postalCode;
    let city = infos.city;
    let siret = infos.siret;
    let denomination = infos.denomination;
    let firstAddress = infos.firstAddress;
    let secondAddress = infos.secondAddress;

    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    localStorage.setItem("postalCode", JSON.stringify(postalCode));
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("siret", JSON.stringify(siret));
    localStorage.setItem("denomination", JSON.stringify(denomination));
    localStorage.setItem("firstAddress", JSON.stringify(firstAddress));
    localStorage.setItem("secondAddress", JSON.stringify(secondAddress));

    setFormStep(4);
  };
  const handleButtonClick3 = () => {
    if (sucessCodePhoneEntered === true && sucessCodeEmailEntered === true) {
      setFormStep(5);
    } else {
      console.log("faux");
    }
  };
  const onSubmitPassword = async (infos) => {
    const password = infos.password;
    localStorage.setItem("password", password);
    setFormStep(6);
  };
  const createUser = async (infos) => {
    let firstName = localStorage.getItem("firstName");
    let lastName = localStorage.getItem("lastName");
    let postalCode = localStorage.getItem("postalCode");
    let city = localStorage.getItem("city");
    let siret = localStorage.getItem("siret");
    let denomination = localStorage.getItem("denomination");
    let firstAddress = localStorage.getItem("firstAddress");
    let secondAddress = localStorage.getItem("secondAddress");
    let password = localStorage.getItem("password");
    let email = localStorage.getItem("email");
    let phoneNumber = localStorage.getItem("phoneNumber");
    let interest = localStorage.getItem("interest");

    axios
      .post(
        `${variables.DATA_URL}/register/createUser`,
        {
          firstName: firstName,
          lastName: lastName,
          postalCode: postalCode,
          city: city,
          siret: siret,
          denomination: denomination,
          firstAddress: firstAddress,
          secondAddress: secondAddress,
          password: password,
          email: email,
          phoneNumber: phoneNumber,
          langue: "fr",
          interest: interest,
          typeAccount: typeAccount,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function (response) {
        setRegisterSuccess(true);
        setLoginModal(2);
      })
      .catch(function (error) {});
  };

  const handleSelectChange = (event) => {
    setTypeAccount(event.target.value);
  };

  const handleButtonClickReturn2 = (e) => {
    e.preventDefault();

    setFormStep(2);
  };

  const handleButtonClickReturn3 = (e) => {
    e.preventDefault();

    setFormStep(3);
  };
  const handleButtonClickReturn4 = (e) => {
    setFormStep(4);
  };
  const handleButtonClickReturn6 = (e) => {
    setFormStep(5);
  };
  const handleButtonClickForgot = (e) => {
    setFormStep(7);
  };
  // We get user email and password from the login form and perform a request to obtain a json web token
  const onSubmitNewPassword = (data) => {
    setResetClicked(true);

    axios
      .post(
        `${variables.DATA_URL}/user/resetPasswordLink`,
        {
          email: data.email,
          language: "fr",
        },
        {
          //withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(() => {
        setMailSent(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onlyLettersRegex = /^[A-Za-z]+$/; // regular expression pattern to match only letters
  return (
    <>
      {/* ----------------------------------------------------------------------------------------
    *************************************** LOGIN ************************************************
    ------------------------------------------------------------------------------------------ */}
      {loginModal === 1 ? (
        <div className={styles.modalBackground}>
          {formStep == 0 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Connectez-vous et participez au développement ouvert !</h2>
                  <p>
                    Profitez des premières fonctionnalités Ozapay et gérez vos promotions en quelques clics seulement !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous souhaitez nous rejoindre ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(3);
                    }}
                  >
                    Créer un compte
                  </p>
                </div>
              </div>
              <div
                className={styles["modalLeft"] + " " + styles["modalLeftLogin"]}
              >
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <h2>Se Connecter</h2>
                <p className={styles.toConnect}>
                  Connectez-vous et Profitez en avant première de nos
                  incroyables services !
                </p>
                <form
                  className={styles.formContainer}
                  onSubmit={handleSubmitLogin(onSubmitLogin)}
                >
                  <label>Adresse Email</label>
                  <div>
                    <input
                      className={styles.inputLogin}
                      placeholder={"Entrez votre email"}
                      {...registerLogin("email", {
                        required: true,
                      })}
                    />
                    {errorsLogin.email && (
                      <div className={styles.formErrorsContainer}>
                        <span className={styles.formErrorsLogin}>
                          Merci de renseigner votre adresse email
                        </span>
                      </div>
                    )}
                  </div>
                  <label>Mot de passe</label>
                  <div>
                    <input
                      className={styles.inputLogin}
                      placeholder={"Entrez votre mot de passe"}
                      {...registerLogin("password", {
                        required: true,
                        pattern:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^:;,?µ£¨<>+=&*-\x2D]).{12,}$/, // validation rule to allow only letters
                      })}
                    />
                    {errorsLogin.password && (
                      <div
                        className={
                          styles["formErrorsContainer"] +
                          " " +
                          styles["formErrorsContainerPassword"]
                        }
                      >
                        <span className={styles.formErrorsLogin}>
                          Merci de renseigner votre mot de passe. Celui-ci doit
                          faire au minimum 12 caractères avec une majuscule, une
                          minuscule, un chiffre et un caractère spéciale
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={styles.password}>
                    <p onClick={handleButtonClickForgot}>
                      Mot de passe oublié ?
                    </p>
                  </div>

                  <div className={styles.buttonLogin}>
                    <input type="submit" value="Se Connecter" />
                  </div>
                  {showPasswordError ? (
                    <span className={styles.formErrorsLoginFinal}>
                      L'adresse email ou le mot de passe saisie est incorrect
                    </span>
                  ) : null}
                </form>
              </div>
            </div>
          ) : formStep === 1 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Un Compte, des Bons Plans, Tout Simplement !</h2>
                  <p>
                    Profitez d'un compte multidevises compatible avec les
                    principales cryptomonnaies dont Ozacoin (OZA) !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous souhaitez nous rejoindre ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(3);
                    }}
                  >
                    Créer un compte
                  </p>
                </div>
              </div>
              <div className={styles.modalLeft}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <p className={styles.step}>Étape 2 sur 5</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressSecondStep}></div>
                </div>
                <h2>Informations personnelles</h2>
                <form
                  className={styles.formContainer}
                  onSubmit={handleSubmitRegisterUserInfos(
                    onSubmitRegisterUserInfos
                  )}
                >
                  <div>
                    <p className={styles.pro}>
                      {"J'agis pour le compte d'une entreprise"}
                    </p>
                    <div
                      className={
                        styles["fullInput"] + " " + styles["fullInputSpecial"]
                      }
                    >
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={
                              styles["inputLeft"] +
                              " " +
                              styles["inputUserInfos"]
                            }
                            placeholder={"Dénomination"}
                            {...registerUserInfos("denomination", {
                              required: true,
                            })}
                          />
                          {errorsRegisterUserInfos.denomination && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre dénomination
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>

                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={styles.inputUserInfos}
                            placeholder={"SIRET"}
                            {...registerUserInfos("siret", {
                              required: true,
                            })}
                          />
                          {errorsRegisterUserInfos.siret && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre siret
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.fullInput}>
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={
                              styles["inputLeft"] +
                              " " +
                              styles["inputUserInfos"]
                            }
                            placeholder={"Nom du responsable"}
                            {...registerUserInfos("lastName", {
                              required: true,
                              pattern: onlyLettersRegex, // validation rule to allow only letters
                            })}
                          />
                          {errorsRegisterUserInfos.lastName && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre nom
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>

                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={styles.inputUserInfos}
                            placeholder={"Prénom"}
                            {...registerUserInfos("firstName", {
                              required: true,
                              pattern: onlyLettersRegex, // validation rule to allow only letters
                            })}
                          />
                          {errorsRegisterUserInfos.firstName && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre prénom
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.fullInput}>
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={
                              styles["inputLeft"] +
                              " " +
                              styles["inputUserInfos"]
                            }
                            placeholder={"Adresse"}
                            {...registerUserInfos("firstAddress", {
                              required: true,
                            })}
                          />
                          {errorsRegisterUserInfos.firstAddress && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre adresse
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>

                      <div className={styles.oneInput}>
                        <input
                          className={
                            styles["inputUserInfos"] +
                            " " +
                            styles["inputMargin"]
                          }
                          placeholder={"Adresse 2"}
                          {...registerUserInfos("secondAddress", {})}
                        />
                      </div>
                    </div>
                    <div className={styles.fullInput}>
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={
                              styles["inputLeft"] +
                              " " +
                              styles["inputUserInfos"] +
                              " " +
                              styles["inputMargin"]
                            }
                            placeholder={"Code Postal"}
                            {...registerUserInfos("postalCode", {
                              required: true,
                            })}
                          />
                          {errorsRegisterUserInfos.postalCode && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre code postal
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={styles.inputUserInfos}
                            placeholder={"Ville"}
                            {...registerUserInfos("city", {
                              required: true,
                              pattern: /^[A-Za-z\s]+$/, // validation rule to allow only letters
                            })}
                          />
                          {errorsRegisterUserInfos.city && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre ville
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonRegister}>
                      <input
                        type="button"
                        onClick={handleButtonClickReturn3}
                        className={styles.return}
                        value="Précédent"
                      />

                      <input type="submit" value="Étape suivante" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : formStep === 2 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Un Compte, des Bons Plans, Tout Simplement !</h2>
                  <p>
                    Rejoignez Ozapay et profitez d'un compte crypto évolutif vers un compte RIB accompagné d'une CB !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous avez déjà un compte chez nous ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(0);
                    }}
                  >
                    Se Connecter
                  </p>
                </div>
              </div>
              <div className={styles.modalLeft}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <p className={styles.step}>Étape 2 sur 5</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressSecondStep}></div>
                </div>
                <h2>Informations personnelles</h2>
                <form
                  className={styles.formContainer}
                  onSubmit={handleSubmitRegisterUserInfos(
                    onSubmitRegisterUserInfos
                  )}
                >
                  <div>
                    <p className={styles.pro}>{"Je suis un particulier"}</p>
                    <div className={styles.fullInput}>
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={
                              styles["inputLeft"] +
                              " " +
                              styles["inputUserInfos"]
                            }
                            placeholder={"Nom du responsable"}
                            {...registerUserInfos("lastName", {
                              required: true,
                              pattern: onlyLettersRegex, // validation rule to allow only letters
                            })}
                          />
                          {errorsRegisterUserInfos.lastName && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre nom
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>

                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={styles.inputUserInfos}
                            placeholder={"Prénom"}
                            {...registerUserInfos("firstName", {
                              required: true,
                              pattern: onlyLettersRegex, // validation rule to allow only letters
                            })}
                          />
                          {errorsRegisterUserInfos.firstName && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre prénom
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.fullInput}>
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={
                              styles["inputLeft"] +
                              " " +
                              styles["inputUserInfos"]
                            }
                            placeholder={"Adresse"}
                            {...registerUserInfos("firstAddress", {
                              required: true,
                            })}
                          />
                          {errorsRegisterUserInfos.firstAddress && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre adresse
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>

                      <div className={styles.oneInput}>
                        <input
                          className={
                            styles["inputUserInfos"] +
                            " " +
                            styles["inputMargin"]
                          }
                          placeholder={"Adresse 2"}
                          {...registerUserInfos("secondAddress", {})}
                        />
                      </div>
                    </div>
                    <div className={styles.fullInput}>
                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={
                              styles["inputLeft"] +
                              " " +
                              styles["inputUserInfos"] +
                              " " +
                              styles["inputMargin"]
                            }
                            placeholder={"Code Postal"}
                            {...registerUserInfos("postalCode", {
                              required: true,
                            })}
                          />
                          {errorsRegisterUserInfos.postalCode && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre code postal
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>

                      <div className={styles.oneInput}>
                        <div>
                          <input
                            className={styles.inputUserInfos}
                            placeholder={"Ville"}
                            {...registerUserInfos("city", {
                              required: true,
                              pattern: /^[A-Za-z\s]+$/, // validation rule to allow only letters
                            })}
                          />
                          {errorsRegisterUserInfos.city && (
                            <div className={styles.formErrorsContainer}>
                              <span className={styles.formErrors}>
                                Merci de renseigner votre ville
                              </span>
                            </div>
                          )}
                        </div>
                        <div className={styles.asteriskContainer}>
                          <span className={styles.asterisk}>*</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonRegister}>
                      <input
                        type="button"
                        onClick={handleButtonClickReturn3}
                        className={styles.return}
                        value="Précédent"
                      />

                      <input type="submit" value="Étape suivante" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : formStep === 3 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Inscrivez-vous et devenez un membre exceptionnel !</h2>
                  <p>
                    Ouvrez votre compte Ozapay, faites la promotion de votre activité commerciale et profitez de nos 1ères fonctionnalités !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous avez déjà un compte chez nous ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(0);
                    }}
                  >
                    Se Connecter
                  </p>
                </div>
              </div>
              <div className={styles.modalLeft}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <p className={styles.step}>Étape 1 sur 5</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFirstStep}></div>
                </div>
                <div className={styles.choiceContainer}>
                  <h2>Choisir un type de compte</h2>
                  <div className={styles.selectContainer}>
                    <select
                      name="account_type"
                      id="account_type"
                      onChange={handleSelectChange}
                    >
                      <option value="" disabled selected>
                        Type de compte
                      </option>
                      <option value="professionel">Professionnel</option>
                      <option value="particulier">Particulier</option>
                    </select>
                    <img className={styles.arrow} src="arrow.png" />
                  </div>
                  <div className={styles.buttonRegister}>
                    <input
                      type="button"
                      onClick={handleButtonClickReturn0}
                      className={styles.return}
                      value="Précédent"
                    />
                    <input
                      type="button"
                      value="Étape suivante"
                      onClick={handleButtonClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : formStep === 4 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Un Compte, des Bons Plans, Tout Simplement !</h2>
                  <p>
                    Profitez d'un compte multiservices compatible avec les
                    principales cryptomonnaies !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous avez déjà un compte chez nous ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(0);
                    }}
                  >
                    Se Connecter
                  </p>
                </div>
              </div>
              <div
                className={styles["modalLeft"] + " " + styles["modalLeftCode"]}
              >
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <p className={styles.step}>Étape 3 sur 5</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressThirdStep}></div>
                </div>
                <h2>Vérifications de sécurité</h2>

                <div
                  className={
                    styles["fullInput"] + " " + styles["fullInputCode"]
                  }
                >
                  <form
                    className={styles.formContainer}
                    onSubmit={handleSubmitRegisterEmail(onSubmitRegisterEmail)}
                  >
                    <div className={styles.oneInput}>
                      <div>
                        <input
                          className={
                            styles["inputLeft"] +
                            " " +
                            styles["inputSpecial"] +
                            " " +
                            styles["inputEmail"]
                          }
                          placeholder={"Adresse e-mail"}
                          {...registerEmail("registerEmail", {
                            required: true,
                            pattern:
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        />
                        {errorsRegisterEmail.registerEmail && (
                          <div className={styles.formErrorsContainer}>
                            <span className={styles.formErrors}>
                              Merci de renseigner votre adresse email
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      {noButtonMail ? (
                        <p className={styles.seconds}>{seconds}</p>
                      ) : (
                        <input
                          type="submit"
                          className={styles.send}
                          value="Envoyer"
                        />
                      )}
                      {sucessCodeEmail ? (
                        <div className={styles.formErrorsContainer}>
                          <span className={styles.formErrors}>
                            Le code à bien été envoyé
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </form>
                  <div className={styles.oneInput}>
                    <div>
                      <input
                        onChange={(event) => setEmailCode(event.target.value)}
                        value={emailCode}
                        placeholder={"Code reçu par mail"}
                        className={styles.codeInput}
                      />
                      {sucessCodeEmailEntered ? (
                        <div className={styles.formErrorsContainer}>
                          <span className={styles.formErrors}>Code valide</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div
                  className={
                    styles["fullInput"] + " " + styles["fullInputCode"]
                  }
                >
                  <form
                    className={styles.formContainer}
                    onSubmit={handleSubmitRegisterPhone(onSubmitRegisterPhone)}
                  >
                    <div className={styles.oneInput}>
                      <div>
                        <PhoneInput
                          country={"fr"}
                          value={phone}
                          masks={{ ci: "........." }}
                          onChange={(phone) => setPhone(phone)}
                          containerStyle={{ width: "auto" }}
                          inputStyle={{
                            borderRadius: "35px",
                            paddingLeft: "60px",
                            lineHeight: "16px",
                            backgroundColor: "#FFFFFF",
                            height: "48px",
                            width: "336px",
                            marginRight: "32px",
                            marginBottom: "11.2px !important",
                          }}
                          buttonStyle={{
                            border: "none",
                            background: "none",
                            borderRadius: "35px",
                            marginLeft: "1.4rem",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      {noButtonPhone ? (
                        <p className={styles.seconds}>{seconds}</p>
                      ) : (
                        <input
                          type="submit"
                          className={styles.send}
                          value="Envoyer"
                        />
                      )}
                      {sucessCodePhone ? (
                        <div className={styles.formErrorsContainer}>
                          <span className={styles.formErrors}>
                            Le code à bien été envoyé
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </form>
                  <div className={styles.oneInput}>
                    <div>
                      <input
                        onChange={(event) => setPhoneCode(event.target.value)}
                        value={phoneCode}
                        placeholder={"Code reçu par sms"}
                        className={
                          styles["codeInput"] + " " + styles["codeInputSMS"]
                        }
                      />
                      {sucessCodePhoneEntered ? (
                        <div className={styles.formErrorsContainer}>
                          <span className={styles.formErrors}>Code valide</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className={styles.buttonRegister}>
                  <input
                    type="button"
                    onClick={handleButtonClickReturn}
                    className={styles.return}
                    value="Précédent"
                  />
                  <input
                    type="button"
                    value="Étape suivante"
                    onClick={handleButtonClick3}
                  />
                </div>
              </div>
            </div>
          ) : formStep === 5 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Un Compte, des Bons Plans, Tout Simplement !</h2>
                  <p>
                    Profitez d'un compte multiservices compatible avec les
                    principales cryptomonnaies !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous avez déjà un compte chez nous ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(0);
                    }}
                  >
                    Se Connecter
                  </p>
                </div>
              </div>
              <div className={styles.modalLeft}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <p className={styles.step}>Étape 4 sur 5</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFourStep}></div>
                </div>
                <h2>Création d'un mot de passe</h2>
                <form
                  className={styles.formContainer}
                  onSubmit={handleSubmitRegisterPassword(onSubmitPassword)}
                >
                  <div
                    className={
                      styles["fullInput"] + " " + styles["fullInputCode"]
                    }
                  >
                    <div className={styles.oneInput}>
                      <input
                        className={
                          styles["inputLeft"] + " " + styles["inputPassword"]
                        }
                        placeholder={"Tapez ici votre mot de passe"}
                        {...registerPassword("password", {
                          required: true,
                          pattern:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^:;,?µ£¨<>+=&*-\x2D]).{12,}$/,
                        })}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const isPatternValid =
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^:;,?µ£¨<>+=&*-\x2D]).{12,}$/.test(
                              inputValue
                            );
                          setIsPasswordValid(isPatternValid);
                        }}
                      />
                      {!isPasswordValid && (
                        <span className={styles.formErrorsPassword}>
                          Votre mot de passe doit contenir au moins 12
                          caractères, et au moins un caractère spécial.
                        </span>
                      )}
                    </div>
                    <div
                      className={
                        isPasswordValid
                          ? styles.changeColorGreen
                          : styles.changeColor
                      }
                    >
                      {isPasswordValid ? (
                        <p>Niveau de sécurité approuvé !</p>
                      ) : (
                        <p>En attente du mot de passe</p>
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      styles["fullInput"] + " " + styles["fullInputCode"]
                    }
                  >
                    <div className={styles.oneInput}>
                      <input
                        className={
                          styles["inputLeft"] + " " + styles["inputPassword"]
                        }
                        placeholder={"Confirmez votre mot de passe"}
                        {...registerPassword("verifyPassword", {
                          required: true,
                        })}
                        onChange={(e) => {
                          const isPasswordMatch =
                            e.target.value === watch("password");

                          setIsPasswordMatch(isPasswordMatch);
                        }}
                      />
                      {errorsRegisterPassword.verifyPassword && (
                        <span className={styles.formErrorsPassword}>
                          Les mots de passe ne correspondent pas
                        </span>
                      )}
                    </div>
                    <div
                      className={
                        isPasswordMatch
                          ? styles.changeColorGreen
                          : styles.changeColor
                      }
                    >
                      {isPasswordMatch ? (
                        <p>Correspondance exacte !</p>
                      ) : (
                        <p>En attente du mot de passe</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.buttonRegister}>
                    <input
                      type="button"
                      onClick={handleButtonClickReturn4}
                      className={styles.return}
                      value="Précédent"
                    />

                    <input type="submit" value="Étape suivante" />
                  </div>
                </form>
              </div>
            </div>
          ) : formStep === 6 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Un Compte, des Bons Plans, Tout Simplement !</h2>
                  <p>
                    Profitez d'un compte multiservices compatible avec les
                    principales cryptomonnaies !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous avez déjà un compte chez nous ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(0);
                    }}
                  >
                    Se Connecter
                  </p>
                </div>
              </div>
              <div className={styles.modalLeft}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <p className={styles.step}>Étape 5 sur 5</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFifthStep}></div>
                </div>
                <h2>Centre d'intérêts</h2>
                <div className={styles.boxInterestContainer}>
                  <div>
                    <div className={styles.boxInterest}>
                      <div onClick={() => handleInterestClick(1)}>
                        {selectedInterest == 1 ? (
                          <img src="selected.png" className={styles.selected} />
                        ) : (
                          <div className={styles.notSelected}>
                            <p>-</p>
                          </div>
                        )}
                      </div>
                      <p>Portemonnaie multidevises</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.boxInterest}>
                      <div onClick={() => handleInterestClick(2)}>
                        {selectedInterest == 2 ? (
                          <img src="selected.png" className={styles.selected} />
                        ) : (
                          <div className={styles.notSelected}>
                            <p>-</p>
                          </div>
                        )}
                      </div>
                      <p>Compte IBAN + CB</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.boxInterest}>
                      <div onClick={() => handleInterestClick(3)}>
                        {selectedInterest == 3 ? (
                          <img src="selected.png" className={styles.selected} />
                        ) : (
                          <div className={styles.notSelected}>
                            <p>-</p>
                          </div>
                        )}
                      </div>
                      <p>Portefeuille crypto sans détention</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.boxInterest}>
                      <div onClick={() => handleInterestClick(4)}>
                        {selectedInterest == 4 ? (
                          <img src="selected.png" className={styles.selected} />
                        ) : (
                          <div className={styles.notSelected}>
                            <p>-</p>
                          </div>
                        )}
                      </div>
                      <p>Bons Plans & Cashback</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.boxInterest}>
                      <div onClick={() => handleInterestClick(5)}>
                        {selectedInterest == 5 ? (
                          <img src="selected.png" className={styles.selected} />
                        ) : (
                          <div className={styles.notSelected}>
                            <p>-</p>
                          </div>
                        )}
                      </div>
                      <p>Gérer / Vendre plus facilement</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.boxInterest}>
                      <div onClick={() => handleInterestClick(6)}>
                        {selectedInterest == 6 ? (
                          <img src="selected.png" className={styles.selected} />
                        ) : (
                          <div className={styles.notSelected}>
                            <p>-</p>
                          </div>
                        )}
                      </div>
                      <p>Devenir Ambassadeur</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.boxInterest}>
                      <div onClick={() => handleInterestClick(7)}>
                        {selectedInterest == 7 ? (
                          <img src="selected.png" className={styles.selected} />
                        ) : (
                          <div className={styles.notSelected}>
                            <p>-</p>
                          </div>
                        )}
                      </div>
                      <p>Gagner du temps en une seule app</p>
                    </div>
                  </div>
                </div>

                <div className={styles.buttonRegister}>
                  <input
                    type="button"
                    onClick={handleButtonClickReturn6}
                    className={styles.return}
                    value="Précédent"
                  />
                  <input type="button" onClick={createUser} value="Terminer" />
                </div>
              </div>
            </div>
          ) : formStep === 7 ? (
            <div className={styles.modalContainer}>
              <div className={styles.modalRight}></div>
              <div className={styles.modalRightShadow}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalMobile"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <div className={styles.logoContainer}>
                  <img src="ozaLogo.png" />
                </div>
                <div className={styles.welcome}>
                  <h2>Un Compte, des Bons Plans, Tout Simplement !</h2>
                  <p>
                    Profitez d'un compte multiservices compatible avec les
                    principales cryptomonnaies !
                  </p>
                </div>
                <div className={styles.bottomShadow}>
                  <p>Vous avez déjà un compte chez nous ?</p>
                  <p
                    className={styles.registerText}
                    onClick={() => {
                      setFormStep(0);
                    }}
                  >
                    Se Connecter
                  </p>
                </div>
              </div>
              <div className={styles.modalLeft}>
                <HiX
                  className={
                    styles["closeModal"] + " " + styles["closeModalDesktop"]
                  }
                  onClick={() => {
                    setLoginModal(0), setFormStep(0);
                  }}
                />
                <h2>Réinitialiser le mot de passe</h2>
                <p className={styles.toConnect}>
                  Saisissez l'adresse e-mail associé à votre compte.
                </p>
                <form
                  className={styles.formContainer}
                  onSubmit={handleSubmitNewPassword(onSubmitNewPassword)}
                >
                  <label>Email</label>
                  <div className={styles.oneInput}>
                    <input
                      className={
                        styles["inputLeft"] + " " + styles["inputReset"]
                      }
                      type="email"
                      placeholder="adresse@fai.com"
                      {...registerNewPassword("email", {
                        required: true,
                        pattern:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {resetClicked ? (
                      <>
                        {mailSent ? (
                          <p className={styles.confirmation}>
                            {" "}
                            {"Un email de récupération vous a été envoyé"}
                          </p>
                        ) : (
                          <div className={styles.loader} />
                        )}
                      </>
                    ) : (
                      <div className={styles.buttonLogin}>
                        <input type="submit" value="Étape suivante" />
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      ) : loginModal === 2 ? (
        <div className={styles.modalBackground}>
          <div className={styles.modalSucessContainer}>
            <div className={styles.modalSucess}>
              <div className={styles.validationContainer}>
                <img src="validationTest.png" />
              </div>
              <h2>Incription terminée</h2>
              <p>Bravo, vous venez d'ouvrir votre compte !</p>
              <p>
                Connectez vous dès maintenant pour profiter de toute
                l'expérience Ozalentour.
              </p>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => {
                    setLoginModal(1);
                    setFormStep(0);
                  }}
                >
                  Se Connecter
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
