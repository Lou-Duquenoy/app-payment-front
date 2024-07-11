import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import LoginModal from "../components/Modals/LoginModal/LoginModal";
import LostPasswordModal from "../components/Modals/LostPasswordModal/LostPasswordModal";
import ContextProvider from "../components/Context";
import NotAvailableModal from "../components/Modals/NotAvailableModal/NotAvailableModal";
import dynamic from 'next/dynamic';

import { useState, useContext, useEffect } from "react";
import { init } from "@socialgouv/matomo-next";
import i18next from 'i18next'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next
.use(initReactI18next)
.use(Backend)
.init({
  backend: {
    loadPath: '/translations/{{lng}}/translations.json'
  },
  lng: 'fr',
  fallbackLng: 'fr'
})

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const CrispWithNoSSR = dynamic(
  () => import('../components/crisp'),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
	 
	useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
	
  return (
    <ContextProvider>
	  <CrispWithNoSSR /> 
      <LoginModal />
      <LostPasswordModal />
	   <NotAvailableModal />
      <Menu />
      <Header>
        <Footer>
       
          <Component {...pageProps} />
       
        </Footer>
      </Header>
    </ContextProvider>
  );
}

export default MyApp;