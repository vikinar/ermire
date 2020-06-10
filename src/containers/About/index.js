import React from 'react'
// import {connect} from 'react-redux'
import Head from "next/head"
import Layout from "../../components/Layout";
import style from './style'

export const About = () => (
    <Layout>
    <section className="about">
    <Head>

    </Head>
        <div className="container">
            <h1>About</h1>
        </div>
        <style jsx> {style}</style>
    </section>
    </Layout>
)
