import React, {useRef} from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat'

import style from '../../styles/styles'
import {Navigation} from '../Navigation'
import {layout} from './style'
import {PageTransition} from "next-page-transitions";
const TIMEOUT = 1000
import {Provider} from "react-redux";
import Header from "./Header";
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <section className='Layout'>
            <Header />
            <PageTransition
                timeout={TIMEOUT}
                classNames="page-transition"
                loadingDelay={100}
                loadingTimeout={{
                    enter: TIMEOUT,
                    exit: 0,
                }}
                loadingClassNames="loading-indicator"
                style = {{width: '100%'}}
            >
                {children}
            </PageTransition>
            <Footer/>
            <Navigation/>
            <style jsx>{layout}</style>
            <style global jsx>{style}</style>
            <MessengerCustomerChat
                pageId="648952291831850"
                appId="823244408197472"
            />
            <style jsx global>{`
        .page-transition-enter {
        width: 100%;
          opacity: 0;
          transform: translate3d(0, 20px, 0) scale(.9);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms !important;
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms !important;
        }
        .page-transition-exit {
          opacity: 1;
        }
        
        .page-transition-enter-done{
          width: 100%
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
        </section>
    )
};

export default Layout
