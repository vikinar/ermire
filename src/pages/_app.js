import React from 'react'
import {Provider} from "react-redux"
import App, {Container} from "next/app"
import withRedux from "next-redux-wrapper"
import {makeStore} from "../init/store"
import style from '../styles/styles'
import Layout from "../components/Layout";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { PageTransition } from 'next-page-transitions'


//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

import Loader from '../components/Loaders'

const TIMEOUT = 200

export default withRedux(makeStore)(class MyApp extends App {



    static async getInitialProps({Component, ctx}) {

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
                <Provider store={store}>


                    <Component {...pageProps} />
                    <style global jsx>{style}</style>
                    <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0) scale(.9);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
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
                </Provider>


        );
    }

});
