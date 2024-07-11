import Head from "next/head";
import styles from "../styles/Index.module.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../components/Context";
import axios from "axios";
import Rgpd from "../components/Modals/RGPD/Rgpd";
import Count from "../components/Modals/Count/Count";
import { getCookie, setCookies } from "cookies-next";
import Link from "next/link";
import Crisp from "crisp-sdk-web"; // Import the Crisp SDK
import { useTranslation } from "react-i18next";

export default function Home() {
  const {
    loginModal,
    setLoginModal,
    menu,
    rgpd,
    setRgpd,
    availableModal,
    setAvailableModal,
    showCountModal,
    setShowCountModal,
  } = useContext(DataContext);
  const { t, i18n } = useTranslation("fr", { useSuspense: false });
  const [showCountModalTimer, setShowCountModalTimer] = useState(false);
  const [loadImage, setLoadImage] = useState(true);
  const [loadContent, setLoadContent] = useState(true);
  const [rgpdCookie, setRGPDCookie] = useState(false);

  // Determine the current language
  const currentLanguage = i18n.language;
  console.log(currentLanguage);

  // Define the CSS class based on the language
  const h1ClassName =
    currentLanguage === "en"
      ? styles.h1En
      : currentLanguage === "fr"
      ? null
      : "";
  const desktopTextClassName =
    currentLanguage === "en"
      ? styles.desktopTextEn
      : currentLanguage === "fr"
      ? null
      : "";

  function NotAvailableModal() {
    setAvailableModal(true);
  }

  useEffect(() => {
    const getRGPD = async () => {
      let checkRGPD = await getCookie("CookieRgpd");
      checkRGPD ? setRGPDCookie(true) : null;
    };

    setTimeout(() => setLoadImage(false), 1000);
    getRGPD();
  }, [rgpd]);

  useEffect(() => {
    setTimeout(() => setLoadContent(false), 1000);
  }, []);

  function Test() {
    axios
      .get(`https://apin92.ozalentour.com/downloadApplication`)
      .then(function (response) {
        console.log(response);
      });
  }
  function openModalCount() {
    console.log("hello");

    setShowCountModal(true);
    console.log(showCountModal);
  }

  return (
    <>
      <Head>
        <title>{"Ozapay - La Super App de Paiement"}</title>
        <meta
          name="description"
          content="Rejoignez Ozapay et réunissez tous vos besoins en une seule Super App ! Compte EURO, Portefeuille Crypto sans détention, Explorateur de Bons Plans contre cashback, Actualités et Messagerie instantannée !"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Ozapay, Super App de Paiement, Super App, Moteur de Proximité, App de paiement locale, App de paiement sociale"
        />
        <meta
          name="image"
          property="og:image"
          content="https://fr.ozapay.me/public/hotlink-ok/super-app-x.jpg"
        />
        <meta property="og:url" content="https://fr.ozapay.me/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ozapay - La Super App de Paiement"
        />
        <meta
          property="og:description"
          content="Rejoignez Ozapay et réunissez tous vos besoins en une seule Super App ! Compte EURO, Portefeuille Crypto sans détention, Explorateur de Bons Plans contre cashback, Actualités et Messagerie instantannée !"
        />
        <meta property="og:site_name" content="Ozapay®" />
        <meta
          property="og:image"
          content="https://fr.ozapay.me/public/hotlink-ok/super-app-x.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://fr.ozapay.me/public/hotlink-ok/super-app-x.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:alt" content="La Super App de Paiement" />
        <meta property="fb:app_id" content="2500591266698535" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Ozapay/"
        />
        <meta name="twitter:site" content="@ozapay" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Ozapay - La Super App de Paiement"
        />
        <meta
          name="twitter:description"
          content="Rejoignez Ozapay et réunissez tous vos besoins en une seule Super App ! Compte EURO, Portefeuille Crypto sans détention, Explorateur de Bons Plans contre cashback, Actualités et Messagerie instantannée !"
        />
        <meta
          name="twitter:image"
          content="https://fr.ozapay.me/public/hotlink-ok/super-app-x.jpg"
        />
        <meta name="twitter:image:alt" content="La Super App de Paiement" />
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="dbc1fe36-c533-43ca-8bfa-e5df4a7499ac"
        />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      {!rgpdCookie ? <Rgpd /> : null}
      {loadContent === false ? (
        <div className={styles.homeContainer}>
          <div className={styles.presentation}>
            <div className={styles.container}>
              <h1 className={h1ClassName}>{t("firstTitle")}</h1>
              <div className={styles.desktopTextContainer}>
                <p className={desktopTextClassName}>{t("description")}</p>
              </div>

              <div className={styles.storeButtons}>
                <a className={styles.boxSocialMedia} onClick={openModalCount} title="Investir sur OZA">
                  <img src="ozacoinLogo.svg" alt="Investir sur OZA" />
					 <div>
                      <p>{t("investOza")}</p>
                      <p>{t("ozacoinOza")}</p>
                    </div>
                </a>
               
              </div>
            </div>
          </div>
          <img
            className={styles["phonePreview"] + " " + styles["phonePreviewOk"]}
            src="phone.png"
            alt="phone-preview"
          />
          {/*
        <img
          className={styles["ozpIcon"] + " " + styles["ozpFirstIcon"]}
          src="ozacoin.png"
        />
        <img
          className={styles["ozpIcon"] + " " + styles["ozpSecondIcon"]}
          src="ozacoin.png"
        />
        <img
          className={styles["ozpIcon"] + " " + styles["ozpThirdIcon"]}
          src="ozacoin.png"
        />
		*/}
          <div className={styles.howDoesItWork}>
            <div className={styles.container}>
              <div className={styles.ldTitle}>
                <h2> {t("how")}</h2>
                <p>{t("enjoy")}</p>
              </div>
              <div className={styles.explanationCardContainer}>
                <div className={styles.explanationCard}>
                  <img src="join.png" alt="compte social ozalentour" />
                  <h3>{t("joinOza")}</h3>
                  <p>{t("openAccountOza")}</p>
                </div>
                <div className={styles.explanationCard}>
                  <img src="kyckybaml.png" alt="portemonnaie" />
                  <h3>{t("verifyAccountOza")}</h3>
                  <p>{t("goFurther")}</p>
                </div>
                <div className={styles.explanationCard}>
                  <img src="recharger.png" alt="communauté" />
                  <h3>{t("RechargeEnjoy")}</h3>
                  <p>{t("cryptoAccountBenefit")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featuresInner}>
            <div className={styles.container}>
              <div className={styles["ldTitle"] + " " + styles["ldTitleY2"]}>
                <h2> {t("whyChooseOza")}</h2>
                <p>{t("solution")}</p>
              </div>
              <div className={styles.featuresItem}>
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img
                      src="compte-social.png"
                      alt="compte social auto-rémunéré"
                    />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>
                <div className={styles.featuresInfo}>
                  <h3>
                    <span>{t("evolvingWallet")}</span>
                    {t("toward")}
                  </h3>
                  <p>{t("walletFeatures1")}</p>
                  <Link href="/ecosysteme#account">{t("LearnMore")}</Link>
                </div>
              </div>
              <div className={styles.featuresItem}>
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img src="marketplace.png" alt="place de marché" />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>
                <div className={styles.featuresInfo}>
                  <h3>
                    <span>{t("marketplace")}</span>
                    {t("SellBuyEasier")}
                  </h3>
                  <p>{t("walletFeatures2")}</p>
                  <Link href="/ecosysteme#plans">{t("LearnMore")}</Link>
                </div>
              </div>
              <div
                className={
                  styles["featuresItem"] + " " + styles["featuresItemExplore"]
                }
              >
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img src="reseau-social.png" alt="social network" />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>
                <div className={styles.featuresInfo}>
                  <h3>
                    <span>{t("socialMedia")}</span>
                    {t("highlighting")}
                  </h3>
                  <p>{t("promotion")}</p>
                  <div>
                    <Link href="/ecosysteme#news-feed">{t("LearnMore")}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.downloadAppContainer}>
              <div className={styles.container}>
                <h3>{t("downloadApp")}</h3>
                <p>{t("available")}</p>
                <div
                  className={
                    styles["storeButtons"] + " " + styles["storeButtonBottom"]
                  }
                >
                  <a
                    href="https://oza.band/Android"
                    className={styles.boxSocialMedia}
                    download
                  >
                    <img src="googleplay.png" />
                    <div>
                      <p>{t("download")}</p>
                      <p>{t("android")}</p>
                    </div>
                  </a>
                  <a
                    href="https://oza.band/apple"
                    className={styles.boxSocialMedia}
                    download
                  >
                    <img src="applestore.webp" />
                    <div>
                      <p>{t("download")}</p>
                      <p>{t("ios")}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerLoader}>
          <div className={styles.loader} />
        </div>
      )}
      {/* ) : (
        <LoginModal />
      )} */}
    </>
  );
}
