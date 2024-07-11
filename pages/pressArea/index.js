import styles from "./EspacePresse.module.css";
import { useTranslation } from "react-i18next";


export default function EspacePresse() {
	const { t,i18n } = useTranslation("fr", { useSuspense: false });
  return (
    <>
     

      {/* {loginModal === 0 ? ( */}
      <div className={styles.pressAreaContainer}>
        <div className={styles.banner}>
          
          <div className={styles.pageTitleContent}>
            <h1 className={styles.pageTitleContent.h1}>
              {t("pressArea")}
            </h1>
            <p className={styles.pageTitleContent.p}>
            {t("about")}
            </p>
          </div>
        </div>
        <div className={styles.imgBoxInner}>
          <div className={styles.container}>
            <div className={styles.circlebox}>
              <div className={styles.topImagePress} alt="bloc"><p>{t("creation")}</p> </div>
              <div className={styles.topImagePress} alt="bloc"><p>{t("moreThan")}</p></div>
              <div className={styles.topImagePress} alt="bloc"><p>{t("already")}</p></div>
              
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.ldTitle}>
            <h2>{t("aboutOza")}</h2>
          </div>
          <div className={styles.featuresItem}>
            <div className={styles.featuresInfo}>
              <p>{t("companyVision")}</p>
            </div>
            <div className={styles.featuresInfo}>
              <p>{t("ozalentour2023")}</p>
            </div>
          </div>
        </div> 
        <div className={styles.container}>
          <div className={styles.imgBoxInnerPartner}>
            <div className={styles.ldTitle}>
              <h2>{t("partners")}</h2>
            </div>
            <div className={styles.containerPartner}>
              <img src="dogfinance.png"/>
              <img src="vespia.png"/>
              <img src="cresco.png"/>
            </div>
          </div>
        </div>
        <div className={styles.ldTitle}>
          <h2>{t("pressArticle")}</h2>
        </div>
        <div className={styles.newsFeeds}>
          <a className={styles.article}>
            <h3>{t("ozalentourConceptUpdate")}</h3>
            <div className={styles.effet}>{t("shortly")}</div>
          </a>
          <a className={styles.article}>
            <h3>{t("ozalentourPlatform")}</h3>
            <div className={styles.effet}>{t("frenchMorning")}</div>
          </a>
          <a className={styles.article}>
            <h3>{t("supportOza")}</h3>
            <div className={styles.effet}>{t("cryptoNews")}</div>
          </a>
          <a className={styles.article}>
            <h3>{t("adopt")}</h3>
            <div className={styles.effet}>{t("cointribune")}</div>
          </a>
        </div>
      </div>
      {/* ) : (
        <LoginModal />
      )} */}
    </>
  );
}