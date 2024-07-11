import Head from "next/head";
import styles from "./Faq.module.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { set } from "react-hook-form";
import { useTranslation } from "react-i18next";
export default function Faq() {
  const [showText, setShowText] = useState(0);
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
        <title>{"Ozalentour.com - Foire aux Questions (FAQ)"}</title>
        <meta
          name="description"
          content="Ozalentour c'est quoi ? Une super application de paiement incluant un portefeuille, des bons plans et un réseau social innovant ! Inscription gratuite, aucun frais de transaction !"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="keywords" content="Foire aux questions, FAQ," />
        <meta property="og:url" content="https://fr.ozalentour.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Foire aux Questions (FAQ) - Ozalentour"
        />
        <meta
          property="og:description"
          content="Ozalentour c'est quoi ? Une super application de paiement incluant un portefeuille, des bons plans et un réseau social innovant ! Inscription gratuite, aucun frais de transaction !"
        />
        <meta property="og:site_name" content="Ozalentour®" />
        <meta
          property="og:image"
          content="https://fr.ozalentour.com/public/ozacoin.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://fr.ozalentour.com/public/faq.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:alt" content="Foire aux Questions" />
        <meta property="fb:app_id" content="2500591266698535" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Ozalentourfr/"
        />
        <meta name="twitter:site" content="@ozalentour" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Foire aux Questions (FAQ) - Ozalentour"
        />
        <meta
          name="twitter:description"
          content="Ozalentour c'est quoi ? Une super application de paiement incluant un portefeuille, des bons plans et un réseau social innovant ! Inscription gratuite, aucun frais de transaction !"
        />
        <meta
          name="twitter:image"
          content="https://fr.ozalentour.com/public/faq.jpg"
        />
        <meta name="twitter:image:alt" content="Foire aux Questions" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>

      {/* {loginModal === 0 ? ( */}
      <div className={styles.faqContainer}>
        <div className={styles.banner}>
          <div className={styles.pageTitleContent}>
            <h1 className={styles.pageTitleContent.h1}>{t("faq")}</h1>
            <p className={styles.pageTitleContent.p}>{t("find")}</p>
          </div>
        </div>
        <div className={styles.siteContent}>
          <div className={styles.container}>
            <h2 className={styles["title"] + " " + styles["alignCenter"]}>
              {t("help")}
            </h2>
            <ul className={styles["accordion"] + " " + styles["firstOpen"]}>
              <li
                onClick={() => {
                  setShowText(1);
                }}
              >
                <h3 className={styles.accordionTitle}>
                  <a href="#">
                    {t("whyOpen")}
                    <FaPlus className={styles.testsvg} />
                  </a>
                </h3>

                <div
                  className={
                    showText == 1
                      ? styles.accordionContent
                      : styles.accordionContentHidden
                  }
                >
                  <p>{t("ambition")}</p>
                </div>
              </li>
              <li
                onClick={() => {
                  setShowText(2);
                }}
              >
                <h3 className={styles.accordionTitle}>
                  <a href="#">
                    {t("publishPromotion")}
                    <FaPlus className={styles.testsvg} />
                  </a>
                </h3>

                <div
                  className={
                    showText == 2
                      ? styles.accordionContent
                      : styles.accordionContentHidden
                  }
                >
                  <p>
                    {t("promotionSystem")}
                    <br />
                    {t("startCashIn")}
                  </p>
                </div>
              </li>
              <li
                onClick={() => {
                  setShowText(3);
                }}
              >
                <h3 className={styles.accordionTitle}>
                  <a href="#">
                    {t("tpe")}
                    <FaPlus className={styles.testsvg} />
                  </a>
                </h3>

                <div
                  className={
                    showText == 3
                      ? styles.accordionContent
                      : styles.accordionContentHidden
                  }
                >
                  <p>{t("yes")}</p>
                </div>
              </li>
              <li
                onClick={() => {
                  setShowText(4);
                }}
              >
                <h3 className={styles.accordionTitle}>
                  <a href="#">
                    {t("guaranteed")}
                    <FaPlus className={styles.testsvg} />
                  </a>
                </h3>

                <div
                  className={
                    showText == 4
                      ? styles.accordionContent
                      : styles.accordionContentHidden
                  }
                >
                  <p>{t("everyEuro")}</p>
                </div>
              </li>
              <li
                onClick={() => {
                  setShowText(5);
                }}
              >
                <h3 className={styles.accordionTitle}>
                  <a href="#">
                    {t("withdrawAmount")}
                    <FaPlus className={styles.testsvg} />
                  </a>
                </h3>

                <div
                  className={
                    showText == 5
                      ? styles.accordionContent
                      : styles.accordionContentHidden
                  }
                >
                  <p>{t("yes2")}</p>
                </div>
              </li>
              <li
                onClick={() => {
                  setShowText(6);
                }}
              >
                <h3 className={styles.accordionTitle}>
                  <a href="#">
                    {t("whatIsOzacoin")}
                    <FaPlus className={styles.testsvg} />
                  </a>
                </h3>

                <div
                  className={
                    showText == 6
                      ? styles.accordionContent
                      : styles.accordionContentHidden
                  }
                >
                  <p>{t("ozacoinIs")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ) : (
        <LoginModal />
      )} */}
    </>
  );
}
