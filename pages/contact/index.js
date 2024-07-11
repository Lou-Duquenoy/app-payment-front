import { useCallback, useRef, useState,useEffect, useContext } from "react";
import styles from "./Contact.module.css";
import { DataContext } from "../../components/Context";
import axios from "axios";
import { useForm } from "react-hook-form";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import variables  from "../../variables.json";
import Count from "../../components/Modals/Count/Count";
import { useTranslation } from "react-i18next";

export default function Contact() {
	  const {
    availableModal,
    setAvailableModal,
	showCountModal, 
    setShowCountModal 
    
  } = useContext(DataContext);	
	
      const [mailSent, setMailSent] = useState(false);
	  const [showUsername, setShowUsername] = useState('');
      const [showEmail, setShowEmail] = useState('');
      const [showMessage, setShowMessage] = useState('');
      const [showPhone, setShowPhone] = useState('');
      const [showSubjectType, setShowSubjectType] = useState('');
      const [showSociete, setShowSociete] = useState('');   
     
	
useEffect(() => { 
    setTimeout(() => {
       setMailSent(false)
    }, 8000);
}, [mailSent]);	
  const { t,i18n } = useTranslation("fr", { useSuspense: false });

  const recaptchaRef = useRef(null);
  const username = useRef();
  const wallet = useRef();
  const email = useRef();
  const message = useRef();
  const phone = useRef();
  const subjectType = useRef();
  const societe = useRef();  
  const [notification, setNotification] = useState("");
  
  
const options = [
  {value: '', text: t('invest')},
  {value: t("askQuestion"), text: t("askQuestion")},
  {value: t("sendCV"), text: t("sendCV")},
 
];

const [selected, setSelected] = useState(options[0].value);


 const handleChange = (e) => {
  setSelected(e.target.value);
  setShowSubjectType(e.target.value);
}


const onSubmitLogin = async (e) => {
   e.preventDefault();
   

  if (!showUsername) {
    username.current.style.borderColor = 'red';
	}
  else if(showUsername){
    username.current.style.borderColor = 'black';
  } 
 
  if (!showEmail){
    email.current.style.borderColor = 'red';
  }
  else if(showEmail){
    email.current.style.borderColor = 'black';
  } 
  if (!showPhone){
    phone.current.style.borderColor = 'red';
  }
  else if(showPhone){
    phone.current.style.borderColor = 'black';
  }
  if (!showMessage){
    message.current.style.borderColor = 'red';
  }
  else if(showMessage){
    message.current.style.borderColor = 'black';
  }
  
if(showUsername.trim().length !== 0 && showEmail.trim().length !== 0 && showPhone.trim().length !== 0 && showMessage.trim().length !== 0)  {  
  
  const captchaToken = await recaptchaRef.current.executeAsync();
  recaptchaRef.current.reset();
  
  let langue ="fr";    
  let Username= username.current.value;
  let Email = email.current.value;
  let Societe=societe.current.value;
  let Message=message.current.value;
  let Phone= phone.current.value;
  let Wallet = wallet.current.value;
  let SubjectType= subjectType.current.value;
  console.log(Username,Email,Societe,Message,Phone,Wallet,SubjectType);
 
  
  axios
  .post(
     `${variables.DATA_URL}/contact/sendContact`,
    {
      captchaToken,
      username: Username,
      email : Email,
      societe:Societe,
      message:Message,
      phone: Phone,
      wallet : Wallet,
      subjectType: SubjectType,
      langue:langue,
    },
    {
      //withCredentials: true,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  )
  .then(function (response) {
	  console.log(response);
    setMailSent(true);
		  setNotification(true);

  });

}

}
/*  res.json(true) */

  return (
	   <>
	  <Head>
  <title>{"Contacter et/ou Investir sur Ozalentour"}</title>
  <meta name="description" content="Vous souhaiter prendre contact avec notre entreprise ou investir sur notre jeton OZACOIN (OZA) ? C'est possible ! Laissez-nous votre message ou rejoignez dès maintenant nos groupes de réseaux sociaux ! (Telegram, Facebook...)
"/>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="keywords" content="Contact Ozalentour"/>
  <meta property="og:url" content="https://fr.ozalentour.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Contacter et/ou Investir sur Ozalentour" />
  <meta property="og:description" content="Vous souhaiter prendre contact avec notre entreprise ou investir sur notre jeton OZACOIN (OZA) ? C'est possible ! Laissez-nous votre message ou rejoignez dès maintenant nos groupes de réseaux sociaux ! (Telegram, Facebook...)" />
  <meta property="og:site_name" content="Ozalentour®" />
  <meta property="og:image" content="https://fr.ozalentour.com/public/contacts.jpg"/>
  <meta property="og:image:secure_url" content="https://fr.ozalentour.com/public/contacts.jpg"/>
  <meta property="og:image:type" content="image/jpg" />
  <meta property="og:image:alt" content="Contact Ozalentour" />
  <meta property="fb:app_id" content="2500591266698535" />
  <meta property="article:publisher" content="https://www.facebook.com/Ozalentourfr/" />
  <meta name="twitter:site" content="@ozalentour"/>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Contacter et/ou Investir sur Ozalentour" />
  <meta name="twitter:description" content="Vous souhaiter prendre contact avec notre entreprise ou investir sur notre jeton OZACOIN (OZA) ? C'est possible ! Laissez-nous votre message ou rejoignez dès maintenant nos groupes de réseaux sociaux ! (Telegram, Facebook...)" />
  <meta name="twitter:image" content="https://fr.ozalentour.com/public/contacts.jpg"/>
  <meta name="twitter:image:alt" content="Contact Ozalentour"/>
  <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
    
	  {showCountModal ? <Count/> : null}
    <div className={styles.banner}>
      
      <div className={styles.pageTitleContent}>
        <h1 className={styles.pageTitleContent.h1}>
          {t("contact")}
        </h1>
        <p className={styles.pageTitleContent.p}>
        {t("question")}
        </p>
      </div>
    </div>
  
    
    <div className={styles.Profile}>
          <div>
            <div className={styles.TopTitle}>
              <h2>{t("form")}</h2>
            </div>
            <form onSubmit={onSubmitLogin}>
            <div className={styles.fieldInline}>
                
                  <input ref={societe}  placeholder={t("society")} className={ styles["loginInput"] + " " + styles["loginInputMid"]}></input>
                  
                  <input ref={username} value={showUsername} onChange={  (e) => {setShowUsername(e.target.value)}}  placeholder={t("name")} className={styles["loginInput"] + " " + styles["loginInputMid"]}
                  type="text"
                  
                  />
                <span className={styles["required"] + " " + styles["requiredName"]}></span>
              </div>
              
              <div className={styles.fieldInline}>
              
                  <select className={styles["loginInput"] + " " + styles["loginInputMid"] + " " + styles["selectInput"]} value={selected} ref={subjectType} onChange={handleChange}>
                
                  {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                  ))}
                  
                </select>
                
                <span className={styles["required"] + " " + styles["requiredSelect"]}></span>
                <input className={styles["loginInput"] + " " + styles["loginInputMid"]}
                  type="text"
                  ref={wallet}
                  placeholder={t("wallet")}
                  
                />

              </div>
                
        
              
			  
              <input name={showEmail} className={styles["loginInput"] + " " + styles["loginInputFull"]}
                type="email"
                placeholder={t("email")}
                ref={email}
                onChange={  (e) => {setShowEmail(e.target.value)}}
                value={showEmail}
				        
              />
              <span className={styles["required"] + " " + styles["requiredSimple"]}></span>
                <input className={styles["loginInput"] + " " + styles["loginInputFull"] + " " + styles["inputTypeNumber"]}
                  type="number"
                  placeholder={t("phone")}
                  inputmode="numeric"
                  ref={phone}
                  onChange={  (e) => {setShowPhone(e.target.value)}}
                  value={showPhone}
                />
              <span  className={styles["required"] + " " + styles["requiredSimple"]}></span>
                <input type="textarea" className={styles.textarea} 
                  placeholder={selected == t("support") || selected == t("sendCV") ? t("message") : t("amountWanted")}
                  ref={message}
                  onChange={  (e) => {setShowMessage(e.target.value)}}
                  value={showMessage}
                />
              <span className={styles["required"] + " " + styles["requiredTextarea"]}></span>
              
              <button type="submit" className={styles.loginButton}>
				  {t("send")}
              </button>

              {mailSent ? (
                        <span className={styles.mailPopup}>
                          {t("sucess")}
                        </span>
                      ):null}

              {notification && <p>{notification}</p>}
              <ReCAPTCHA ref={recaptchaRef} size="invisible"  sitekey="6Lcr1lIiAAAAAGHIHCXvEkyR7RkUBzm5Efp6_sOf"/>
            </form>
         
        </div>
        </div>
 
   
    </>
  );
}