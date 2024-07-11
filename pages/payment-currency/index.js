import Head from "next/head";
import styles from "./PaymentToken.module.css";

import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function PaymentToken() {
	  const [loadImage, setLoadImage] = useState(true);
	  const { t,i18n } = useTranslation("fr", { useSuspense: false });
  useEffect(() => {
    setTimeout(() => setLoadImage(false), 1000);
  }, []);
  return (
    <>
<Head>
          <script>
          {`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//analytics.ozapay.me/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </script>
  <title>{"Présentation du Compte Ozalentour (IBAN, CB...)"}</title>
  <meta name="description" content="Ouvrez votre compte social sans banque sur Ozalentour, Payez sans contact et Profitez des meilleures fonctionnalités pour suivre et faire fructifier votre argent !"/>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="keywords" content="Ouvrez votre compte social sans banque sur Ozalentour, Payez sans contact et Profitez des meilleures fonctionnalités pour suivre et faire fructifier votre argent !"/>
  <meta property="og:url" content="https://fr.ozalentour.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Présentation du Compte Ozalentour (IBAN, CB...)" />
  <meta property="og:description" content="Ouvrez votre compte social sans banque sur Ozalentour, Payez sans contact et Profitez des meilleures fonctionnalités pour suivre et faire fructifier votre argent !" />
  <meta property="og:site_name" content="Ozalentour®" />
  <meta property="og:image" content="https://fr.ozalentour.com/public/ozaphyre.jpg"/>
  <meta property="og:image:secure_url" content="https://fr.ozalentour.com/public/ozaphyre.jpg"/>
  <meta property="og:image:type" content="image/jpg" />
  <meta property="og:image:alt" content="Présentation du Portemonnaie" />
  <meta property="fb:app_id" content="2500591266698535" />
  <meta property="article:publisher" content="https://www.facebook.com/Ozalentourfr/" />
  <meta name="twitter:site" content="@ozalentour"/>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Ozalentour - Présentation du Portemonnaie" />
  <meta name="twitter:description" content="Ouvrez votre compte social sans banque sur Ozalentour, Payez sans contact et Profitez des meilleures fonctionnalités pour suivre et faire fructifier votre argent !" />
  <meta name="twitter:image" content="https://fr.ozalentour.com/public/ozacoin.jpg"/>
  <meta name="twitter:image:alt" content="Présentation du Portemonnaie"/>
  <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>  

      {/* {loginModal === 0 ? ( */}
      <div className={styles.pressAreaContainer}>
        <div className={styles.banner}>
          
          <div className={styles.pageTitleContent}>
            <h1 className={styles.pageTitleContent.h1}>
              {t("accountPresentation")}
            </h1>
            <p className={styles.pageTitleContent.p}>
            {t("anAccount")}
            </p>
          </div>
        </div>
        <div className={styles.siteContent}>
            <div className={styles.featuresInner}>
                <div className={styles.container}>
                    <div className={styles.featuresItem}>
                        <div className={styles.featuresThumb}>
							 {loadImage === false ? (
                   <img src="cartes_cadeaux_cryptos_euros.png" alt="carte cadeau crypto"/>
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                          
                        </div>
                        <div className={styles.featuresInfo}>
                            <h3><span>{t("rechargeableWallet")}</span>{t("according")}</h3>
							<p>{t("attach")}</p>
                        </div>
                    </div>
                    <div className={styles.featuresItem}>
                        <div className={styles.featuresThumb}>
							 {loadImage === false ? (
                     <img src="tpe_compatible_crypto.png" alt="Boitier de paiement compatible crypto"/>
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                    </div>
                        <div className={styles.featuresInfo}>
                            <h3><span>{t("systemPayment")}</span>{t("compatible")}</h3>
							<p>{t("enjoy2")}</p>
                        </div>
                    </div>
                    <div className={styles.featuresItem}>
                        <div className={styles.featuresThumb}>
							{loadImage === false ? (
                    <img src="envoi_rapide_de_fonds.png" alt="Envoyer rapidement de l'argent"/>
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                          
                        </div>
                        <div className={styles.featuresInfo}>
                            <h3><span>{t("quickTrans")}</span>{t("for")}</h3>
						    <p>{t("fromAccount")}</p>
                        </div>
                    </div>
                </div>
			</div>
		</div>
      </div>
      {/* ) : (
        <LoginModal />
      )} */}
    </>
  );
}