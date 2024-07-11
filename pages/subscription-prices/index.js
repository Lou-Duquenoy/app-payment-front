import Head from "next/head";
import styles from "./SubscriptionPrices.module.css";
import { DataContext } from "../../components/Context";
import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
export default function SubscriptionPrices() {
  const { loginModal, setLoginModal } = useContext(DataContext);
  const [showDetail, setShowDetails] = useState(0);

  function openModal() {
    setLoginModal(1);
  }
  const [loadImage, setLoadImage] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoadImage(false), 1000);
  }, []);
  const { t, i18n } = useTranslation("fr", { useSuspense: false });
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
        <title>{"Ozalentour - Explications en vidéo et fonctionnement"}</title>
        <meta
          name="description"
          content="Découvrez ici tout ce que vous devez savoir pour une bonne utilisation de notre super application Ozalentour : Compte social sans banque, explorateur et réseau social de proximité..."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Explication Ozalentour, Comment ça marche Ozalentour,"
        />
        <meta property="og:url" content="https://fr.ozalentour.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Comment ça marche Ozalentour ? - Explications"
        />
        <meta
          property="og:description"
          content="Découvrez ici tout ce que vous devez savoir pour une bonne utilisation de notre super application Ozalentour : Compte social sans banque, explorateur et réseau social de proximité..."
        />
        <meta property="og:site_name" content="Ozalentour®" />
        <meta
          property="og:image"
          content="https://fr.ozalentour.com/public/explications.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://fr.ozalentour.com/public/explications.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta
          property="og:image:alt"
          content="Comment ça marche Ozalentour ?"
        />
        <meta property="fb:app_id" content="2500591266698535" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Ozalentourfr/"
        />
        <meta name="twitter:site" content="@ozalentour" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Explications et fonctionnement - Ozalentour"
        />
        <meta
          name="twitter:description"
          content="Découvrez ici tout ce que vous devez savoir pour une bonne utilisation de notre super application Ozalentour : Compte social sans banque, explorateur et réseau social de proximité...
"
        />
        <meta
          name="twitter:image"
          content="https://fr.ozalentour.com/public/explications.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Comment ça marche Ozalentour ?"
        />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>

      {/* {loginModal === 0 ? ( */}
      <div className={styles.teamContainer}>
        <div className={styles.banner}>
          <div className={styles.pageTitleContent}>
            <h1 className={styles.pageTitleContent.h1}>{t("TarifSubsc")}</h1>
            <p className={styles.pageTitleContent.p}>
              {t(
                "Ouvrez votre compte Ozapay et Profitez de services exclusifs !"
              )}
            </p>
          </div>
        </div>

        <div className={styles.companyInfo}>
          <div className={styles.ciContent}>
            <span className={styles.explanationCard}>{t("saveTimeMoney")}</span>
            <h2>{t("whatIsOza")}</h2>
            <div className={styles.tabDesktop}>
              <div className={styles.gridContainer}>
                <div
                  className={
                    styles["gridRow"] +
                    " " +
                    styles["rowGrey"] +
                    " " +
                    styles["gridRowTop"]
                  }
                >
                  <p
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemTitle"] +
                      " " +
                      styles["gridItemRowLeft"]
                    }
                  >
                    Choississez l'offre qui vous convient !
                  </p>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemTopCenter"] +
                      " " +
                      styles["gridItemBlue"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    <p className={styles.formatTop}>LIBERTY</p>
                    <p className={styles.format}>GRATUIT</p>
                    <p className={styles.engagement}>sans engagemement</p>
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemTopCenter"] +
                      " " +
                      styles["gridItemRed"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    <p className={styles.formatTop}>ESSENTIEL</p>
                    <p className={styles.format}>7,5€ /mois</p>
                    <p className={styles.engagement}>engagemement 1an*</p>
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemTopCenter"] +
                      " " +
                      styles["gridItemYellow"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    <p className={styles.formatTop}>PREMIUM</p>
                    <p className={styles.format}>15€ /mois</p>
                    <p className={styles.engagement}>engagemement 1an*</p>
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemTopCenter"] +
                      " " +
                      styles["gridItemBlack"] +
                      " " +
                      styles["gridItemRowRight"] +
                      " " +
                      styles["gridRowTopRight"]
                    }
                  >
                    <p className={styles.formatTop}>BUSINESS</p>
                    <p className={styles.format}>30€ /mois</p>
                    <p className={styles.engagement}>engagemement 1an*</p>
                  </div>
                </div>
                <div className={styles.gridRow}>
                  <p
                    className={
                      styles["gridItem"] + " " + styles["gridItemRowLeft"]
                    }
                  >
                    Un compte IBAN + une CB Visa Virtuelle
                  </p>
                  <p
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemBlueShadow"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    EURO - CRYPTO
                  </p>
                  <p
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemRedShadow"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    EURO - CRYPTO
                  </p>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemYellowShadow"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    €, £, $ - CRYPTO
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemBlackShadow"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    €, £, $ - CRYPTO
                  </div>
                </div>
                <div className={styles["gridRow"] + " " + styles["rowGrey"]}>
                  <p
                    className={
                      styles["gridItem"] + " " + styles["gridItemRowLeft"]
                    }
                  >
                    Payer, Recevoir et Transférer des fonds{" "}
                    <span className={styles.notice}>(1)</span>
                  </p>

                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemBlue"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    0,50€/transaction
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemRed"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    0,25€/transaction
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemYellow"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    sans frais
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemBlack"] +
                      " " +
                      styles["gridItemRowRight"]
                    }
                  >
                    sans frais
                  </div>
                </div>
                <div className={styles.gridRow}>
                  <p
                    className={
                      styles["gridItem"] + " " + styles["gridItemRowLeft"]
                    }
                  >
                    Jusqu'à 70% de cashback par paiement{" "}
                    <span className={styles.notice}>(2)</span>
                  </p>

                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlueShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemRedShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemYellowShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlackShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                </div>
                <div className={styles["gridRow"] + " " + styles["rowGrey"]}>
                  <p
                    className={
                      styles["gridItem"] + " " + styles["gridItemRowLeft"]
                    }
                  >
                    Acheter, Gagner et Convertir des OZA{" "}
                    <span className={styles.notice}>(3)</span>
                  </p>

                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlue"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={styles["gridItem"] + " " + styles["gridItemRed"]}
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemYellow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlack"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                </div>
                <div className={styles.gridRow}>
                  <p
                    className={
                      styles["gridItem"] + " " + styles["gridItemRowLeft"]
                    }
                  >
                    Envoyer et Recevoir des OZA{" "}
                    <span className={styles.notice}>(4)</span>
                  </p>

                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlueShadow"]
                    }
                  ></div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemRedShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemYellowShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlackShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                </div>
                <div className={styles["gridRow"] + " " + styles["rowGrey"]}>
                  <p
                    className={
                      styles["gridItem"] + " " + styles["gridItemRowLeft"]
                    }
                  >
                    Une CB VISA Physique personnalisable{" "}
                    <span className={styles.notice}>(5)</span>
                  </p>

                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlue"]
                    }
                  ></div>
                  <div
                    className={styles["gridItem"] + " " + styles["gridItemRed"]}
                  ></div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemYellow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlack"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                </div>
                <div className={styles.gridRow}>
                  <p
                    className={
                      styles["gridItem"] + " " + styles["gridItemRowLeft"]
                    }
                  >
                    Promouvoir mon Activité et mes Offres
                  </p>

                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlueShadow"]
                    }
                  ></div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemRedShadow"]
                    }
                  ></div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemYellowShadow"]
                    }
                  ></div>
                  <div
                    className={
                      styles["gridItem"] + " " + styles["gridItemBlackShadow"]
                    }
                  >
                    <img src="validationTest.png" />
                  </div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={styles["button"] + " " + styles["buttonBlue"]}
                >
                  DÉMARRER
                </button>
                <button
                  className={styles["button"] + " " + styles["buttonRed"]}
                >
                  S'ABONNER
                </button>
                <button
                  className={styles["button"] + " " + styles["buttonYellow"]}
                >
                  S'ABONNER
                </button>
                <button
                  className={styles["button"] + " " + styles["buttonBlack"]}
                >
                  S'ABONNER
                </button>
              </div>
            </div>
            <div className={styles.tabMobile}>
              <div className={styles.gridContainer}>
                <div className={styles.gridRowTop}>
                  <div>
                    <div
                      className={
                        styles["gridItem"] +
                        " " +
                        styles["gridItemCenter"] +
                        " " +
                        styles["gridItemTopCenter"] +
                        " " +
                        styles["gridItemBlue"] +
                        " " +
                        styles["gridItemRowRight"] +
                        " " +
                        styles["itemMobile"]
                      }
                      onClick={() => {
                        setShowDetails(1);
                      }}
                    >
                      <p className={styles.formatTop}>LIBERTY</p>
                      <p className={styles.format}>GRATUIT</p>
                      <p className={styles.engagement}>sans engagemement</p>
                    </div>
                    <div
                      className={
                        showDetail == 1
                          ? styles.accordionContent
                          : styles.accordionContentHidden
                      }
                    >
                      <div className={styles.borderOptions}>
                        <p>+ CONTENU DE L'OFFRE</p>
                      </div>
                      <div className={styles.borderOptions}>
                        <p>Un compte IBAN + une CB Visa Virtuelle</p>
                        <span>compatible EURO-CRYPTO</span>
                      </div>
                      <div className={styles.borderOptions}>
                        <p>Un compte IBAN + une CB Visa Virtuelle</p>
                        <span>0,50€ / transaction</span>
                      </div>
                      <div className={styles.borderOptions}>
                        <p>Un compte IBAN + une CB Visa Virtuelle</p>
                        <span>sur chaque paiement via l'app</span>
                      </div>
                      <div className={styles.borderOptions}>
                        <p>Un compte IBAN + une CB Visa Virtuelle</p>
                        <span>des jetons OZACOINS (OZA)</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemTopCenter"] +
                      " " +
                      styles["gridItemRed"] +
                      " " +
                      styles["gridItemRowRight"] +
                      " " +
                      styles["itemMobile"]
                    }
                  >
                    <p className={styles.formatTop}>ESSENTIEL</p>
                    <p className={styles.format}>7,5€ /mois</p>
                    <p className={styles.engagement}>engagemement 1an*</p>
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemTopCenter"] +
                      " " +
                      styles["gridItemYellow"] +
                      " " +
                      styles["gridItemRowRight"] +
                      " " +
                      styles["itemMobile"]
                    }
                  >
                    <p className={styles.formatTop}>PREMIUM</p>
                    <p className={styles.format}>15€ /mois</p>
                    <p className={styles.engagement}>engagemement 1an*</p>
                  </div>
                  <div
                    className={
                      styles["gridItem"] +
                      " " +
                      styles["gridItemCenter"] +
                      " " +
                      styles["gridItemTopCenter"] +
                      " " +
                      styles["gridItemBlack"] +
                      " " +
                      styles["gridItemRowRight"] +
                      " " +
                      styles["itemMobile"]
                    }
                  >
                    <p className={styles.formatTop}>BUSINESS</p>
                    <p className={styles.format}>30€ /mois</p>
                    <p className={styles.engagement}>engagemement 1an*</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.conditions}>
              <p>(1) Frais de transaction unique</p>
              <p>
                (2) Cashback calculé selon les offres de membres à partir de 1%
              </p>
              <p>
                (3) Frais de change 1,3%. Remisé pour les ambassadeurs à 0.9%
                
              </p>
              <p>
                (4) Frais de transaction gratuit inclut dans votre abonnement
              </p>
              <p>
                (5) CB VISA personnalisable hors frais de création/livraison
              </p>
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
