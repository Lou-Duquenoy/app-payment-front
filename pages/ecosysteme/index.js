import Head from "next/head";
import styles from "./EcoSysteme.module.css";

import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function EcoSysteme() {
	 const [loadImage, setLoadImage] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoadImage(false), 1000);
  }, []);
  const { t,i18n } = useTranslation("fr", { useSuspense: false });
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
  <title>{"La Super App du Quotidien offrant du temps et de l'argent !"}</title>
  <meta name="description" content="Tous les besoins de votre quotidien en une seule super app de paiement : Un portemonnaie évolutif, une markeplace innovante pour votre entreprise ainsi qu'un réseau social complété d'une messagerie de proximité !"/>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="keywords" content="Ecosystème Ozalentour"/>
  <meta property="og:url" content="https://fr.ozalentour.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="La Super App du Quotidien offrant du temps et de l'argent : Ozalentour" />
  <meta property="og:description" content="Tous les besoins de votre quotidien en une seule super app de paiement : Un portemonnaie évolutif, une markeplace innovante pour votre entreprise ainsi qu'un réseau social complété d'une messagerie de proximité !" />
  <meta property="og:site_name" content="Ozalentour®" />
  <meta property="og:image" content="https://fr.ozalentour.com/public/ozacoin.jpg"/>
  <meta property="og:image:secure_url" content="https://fr.ozalentour.com/public/ozacoin.jpg"/>
  <meta property="og:image:type" content="image/jpg" />
  <meta property="og:image:alt" content="Le système Ozalentour" />
  <meta property="fb:app_id" content="2500591266698535" />
  <meta property="article:publisher" content="https://www.facebook.com/Ozalentourfr/" />
  <meta name="twitter:site" content="@ozalentour"/>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="La Super App du Quotidien offrant du temps et de l'argent : Ozalentour" />
  <meta name="twitter:description" content="Tous les besoins de votre quotidien en une seule super app de paiement : Un portemonnaie évolutif, une markeplace innovante pour votre entreprise ainsi qu'un réseau social complété d'une messagerie de proximité !" />
  <meta name="twitter:image" content="https://fr.ozalentour.com/public/ozacoin.jpg"/>
  <meta name="twitter:image:alt" content="Le système Ozalentour"/>
  <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>   

      {/* {loginModal === 0 ? ( */}
      <div className={styles.pressAreaContainer}>
        <div className={styles.banner}>
          
          <div className={styles.pageTitleContent}>
            <h1 className={styles.pageTitleContent.h1}>
              {t("whyApp")}
            </h1>
            <p className={styles.pageTitleContent.p}>
            {t("theOnly")}
            </p>
          </div>
        </div>
        <div className={styles.siteContent}>
            <div className={styles.featuresInner}>
                <div className={styles.container}>
                    <div  id="account"  className={styles.featuresItem}>
                        <div className={styles.featuresThumb}>
							 {loadImage === false ? (
                       <img src="register.png" alt="Ouvrir un compte Ozalentour"/>
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>
                           
                        <div className={styles.featuresInfo}>
                            <h3><span>{t("accountWithout")}</span>{t("facilitating")}</h3>
                            <p>{t("new")}</p>
                        </div>
                    </div>
                    <div id="plans" className={styles.featuresItem}>
                        <div className={styles.featuresThumb}>
							 {loadImage === false ? (
                   <img src="shop.png" alt="Trouver des Bons Plans Ozalentour"/>
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                           
                    </div>
                        <div className={styles.featuresInfo}>
                            <h3><span>{t("market")}</span>{t("rewarding")}</h3>
                            <p>{t("goodPlans")}</p>
                        </div>
                    </div>
                    <div id="news-feed" className={styles.featuresItem}>
                        <div className={styles.featuresThumb}>
							 {loadImage === false ? (
                  <img src="news-feeds.png" alt="Devenir Populaire"/>
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                         
                        </div>
                        <div className={styles.featuresInfo}>
                            <h3><span>{t("community")}</span>{t("supportive")}</h3>
                            <p>{t("viaOza")}</p>
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