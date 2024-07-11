import Head from "next/head";
import styles from "./BecomeAmbassador.module.css";
import { useContext, useState, useEffect } from "react";

export default function BecomeAmbassador() {
  const [loadImage, setLoadImage] = useState(true);
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
        <title>{"Devenir Ambassadeur/Affilié Ozapay"}</title>
        <meta
          name="description"
          content="Devenir ambassadeur Ozapay devient facile ! Contactez nos supports clients et devenez immédiatement apporteur d'affaires pour notre solution Ozapay !"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Devenir ambassadeur Ozapay, devenir ambassadeur"
        />
        <meta property="og:url" content="https://fr.ozalentour.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Devenir Ambassadeur et Gagner du Cash - Ozapay"
        />
        <meta
          property="og:description"
          content="Commencer à gagner de l'argent dès maintenant !"
        />
        <meta property="og:site_name" content="Ozapay®" />
        <meta
          property="og:image"
          content="https://fr.ozapay.me/public/ambassadeur.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://fr.ozapay.me/public/ambassadeur.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:alt" content="Devenir parrain ozalentour" />
        <meta property="fb:app_id" content="2500591266698535" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/ozapay/"
        />
        <meta name="twitter:site" content="@ozapay" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Devenir Ambassadeur et Gagner du Cash - fr.ozapay.me"
        />
        <meta
          name="twitter:description"
          content="Commencer à gagner de l'argent dès maintenant !"
        />
        <meta
          name="twitter:image"
          content="https://fr.ozapay.me/public/ambassadeur.jpg"
        />
        <meta name="twitter:image:alt" content="Devenir parrain Ozapay" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>

      {/* {loginModal === 0 ? ( */}
      <div className={styles.pressAreaContainer}>
        <div className={styles.banner}>
          <div className={styles.pageTitleContent}>
            <h1 className={styles.pageTitleContent.h1}>
              {"Devenir Ambassadeur"}
            </h1>
            <p className={styles.pageTitleContent.p}>
              {"Gagnez un revenu récurrent avec Ozapay !"}
            </p>
          </div>
        </div>
        <div className={styles.siteContent}>
          <div className={styles.featuresInner}>
            <div className={styles.container}>
              <div className={styles.ldTitle}>
                <h2>{"Un seul programme équitable pour tous !"}</h2>
                <p>
                  {
                    "Ajoutez votre lien d'Ambassadeur sur votre site internet et/ou partagez le aux commerçants de votre région. Vous souhaitez aller plus loin avec nous ? Récoltez le fruit de votre travail avec des primes sur l'ensemble de vos relations et par paliers croissants de commissions..."
                  }
                </p>
              </div>
              <div className={styles.featuresItem}>
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img
                      src="devenir-ambassadeur.png"
                      alt="Devenir ambassadeur"
                    />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>

                <div className={styles.featuresInfo}>
                  <h3>{"Devenez Ambassadeur"}</h3>
                  <p>
                    {
                      "Commencez à parler de Ozapay et soyez récompensé en retour ! Inscrivez-vous, participez, et gagnez de l'argent ! C'est aussi simple que cela. Le programme de partenariat est idéal aussi bien pour ceux qui souhaitent promouvoir Ozapay en parallèle de leur emploi que pour ceux qui veulent en faire leur activité principale. En tant que partenaire, vous êtes Apporteur d'Affaires. Vous participez au développement de Ozapay en partageant votre code et/ou lien Ambassadeur. En fonction de votre niveau d'implication, recevez des OZACOINS !"
                    }
                  </p>
                </div>
              </div>

              <div className={styles.featuresItem}>
                <div className={styles.featuresThumb}>
                  {loadImage === false ? (
                    <img src="oneAmbassador.png" alt="Ambassadeur" />
                  ) : (
                    <div className={styles.containerLoader}>
                      <div className={styles.loader} />
                    </div>
                  )}
                </div>

                <div className={styles.featuresInfo}>
                  <h3>{"Nos 3 niveaux d'Ambassadeurs"}</h3>
                  <p>{"Gagnez des primes et de la notoriété !"}</p>
                  <div className={styles.ambassadorBoxesContainer}>
                    <div>
                      <div className={styles.ambassadorBox}>
                        <div className={styles.ambassadorLittleContainer}>
                          <img src="firstPicture.png" />
                          <div>
                            <h2>Ambassadeur niveau 1</h2>
                            <p>de 150 OZA à 500 OZA à gagner ! </p>
                            <p>
                              Actif dès 30̶0̶,̶0̶0̶ OZA 1500,00 OZA de solde*
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.ambassadorBox}>
                        <div className={styles.ambassadorLittleContainer}>
                          <img src="secondPicture.png" />
                          <div>
                            <h2>Ambassadeur niveau 2</h2>
                            <p>2,0% de prime sur les dépôts de vos affiliés !</p>
                            <p>
                              Actif dès  2̶.̶0̶0̶0̶,̶0̶0̶€ 1000,00€ de solde*
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.ambassadorBox}>
                        <div className={styles.ambassadorLittleContainer}>
                          <img src="thirdPicture.png" />
                          <div>
                            <h2>Ambassadeur niveau 3</h2>
                            <p>3,0% de prime sur les dépôts de vos affiliés !</p>
                            <p>
                              Actif dès  3̶.̶0̶0̶0̶,̶0̶0̶€ 2000,00€ de solde*
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>
                        *Valable pour les portefeuilles EUR et OZA souscrits
                        jusqu'au 31 Décembre 2024
                      </p>
                    </div>
                  </div>
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
