import Head from "next/head";
import styles from "./ReserveToken.module.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../components/Context";
import { useTranslation } from "react-i18next";
export default function ReserveToken() {
  const [loadImage, setLoadImage] = useState(true);
  const { setAvailableModal, loginModal, setLoginModal } =
    useContext(DataContext);
  function NotAvailableModal() {
    setAvailableModal(true);
  }
  useEffect(() => {
    setTimeout(() => setLoadImage(false), 1000);
  }, []);
  const { t,i18n } = useTranslation("fr", { useSuspense: false });
  function openModal() {
    setLoginModal(1);
  }

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
        <title>{"Ozacoin (OZA) - Le jeton utilitaire Ozalentour"}</title>
        <meta
          name="description"
          content="Ozacoin est un actif numérique corrélé à notre solution Ozalentour et adossé sur 3 cryptos-actifs tels que : BTC, BNB et ETH. Stockable etéchangeable par des applications tierces."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Ozacoin, OZA, Jeton de soutien, Jeton de réservce, Crypto, Token de soutien, Token de réserve"
        />
        <meta property="og:url" content="https://fr.ozalentour.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ozacoin (OZA) - Le Jeton de soutien"
        />
        <meta
          property="og:description"
          content="Ozacoin est un actif numérique corrélé à notre solution Ozalentour et adossé sur 3 cryptos-actifs tels que : BTC, BNB et ETH. Stockable etéchangeable par des applications tierces."
        />
        <meta property="og:site_name" content="Ozalentour®" />
        <meta
          property="og:image"
          content="https://fr.ozalentour.com/public/ozacoin.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://fr.ozalentour.com/public/ozacoin.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:alt" content="Le Jeton de soutien" />
        <meta property="fb:app_id" content="2500591266698535" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Ozalentourfr/"
        />
        <meta name="twitter:site" content="@ozalentour" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Ozacoin (OZA) - Le Jeton de soutien"
        />
        <meta
          name="twitter:description"
          content="Ozacoin est un actif numérique corrélé à notre solution Ozalentour et adossé sur 3 cryptos-actifs tels que : BTC, BNB et ETH. Stockable etéchangeable par des applications tierces."
        />
        <meta
          name="twitter:image"
          content="https://fr.ozalentour.com/public/ozacoin.jpg"
        />
        <meta name="twitter:image:alt" content="Le Jeton de soutien" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>

      {/* {loginModal === 0 ? ( */}
      <div className={styles.pressAreaContainer}>
        <div className={styles.banner}>
          <div className={styles.pageTitleContent}>
            <h1 className={styles.pageTitleContent.h1}>{t("utilityToken")}</h1>
            <p className={styles.pageTitleContent.p}>{t("ozacoinText")}</p>
          </div>
        </div>
        <div className={styles.siteContent}>
          <div className={styles.featuresInner}>
            <div className={styles.container}>
              <div className={styles.featuresItem}>
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img
                      src="liberty-token.png"
                      alt="jeton libre et décentralisé"
                    />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>
                <div className={styles.featuresInfo}>
                  <h3>
                    <span>{t("becomeOwnerToken")}</span>
                    {t("unique")}
                  </h3>
                  <p>{t("availableOn")}</p>
                  <br />
                  <a
                    onClick={openModal}
                    className={styles.pointerLink}
                    /*target="_blank" href="https://www.pinksale.finance/"*/ class="Participer à l'ICO"
                    title="Devenir membre Ozacoin"
                  >
                    t{"joinOza2"}
                  </a>
                </div>
              </div>
              <div className={styles.featuresItem}>
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img
                      src="transaction-crypto.png"
                      alt="Transfert d'argent en cryptomonnaie"
                    />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>
                <div className={styles.featuresInfo}>
                  <h3>
                    {t("lowsecureTrans")}
                    <span>{t("ultrafast")}</span>
                  </h3>
                  <p>{t("availableOn2")}</p>
                  <br />
                  <a
                    target="_blank"
                    href="https://accounts.binance.com/register?ref=BW2ISB63"
                    class="more"
                    title="Acheter des cryptos de Binance"
                  >
                    {t("buyBNB")}
                  </a>
                </div>
              </div>
              <div className={styles.featuresItem}>
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img src="jeton-garanti.png" alt="Token garanti" />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>
                <div className={styles.featuresInfo}>
                  <h3>
                    {t("guaranteedToken")}
                    <span>{t("withoutDetention")}</span>{" "}
                  </h3>
                  <p>{t("goalOzaCoin")}</p>
                  <br />
                  <a
                    target="_blank"
                    href="https://mathwallet.org/fr-fr/"
                    class="more"
                    title="Ouvrir un portefeuille Ozacoin"
                  >
                    {t("downloadMathWallet")}
                  </a>
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
