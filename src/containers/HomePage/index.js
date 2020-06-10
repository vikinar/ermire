import React, {useState, useEffect, createRef, useRef} from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import {TimelineMax} from "gsap";
// import {connect} from 'react-redux'
import {ReactComponent as Header} from './poster.svg'
import {ReactComponent as HeaderBg} from './posterBg.svg'
import Head from "next/head"
import { Formik } from 'formik'
import style from './style'
import Layout from "../../components/Layout";
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export const HomePage = () => {
    const logo = 'logo'

    const contact = useRef(null)
    const toContact = () => scrollToRef(contact)
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const data = [
        {
            service: 'Development',
            shortDesc: 'Lorem ipsum'
        },
        {
            service: 'Design & Branding',
            shortDesc: 'Lorem ipsum',
        },
        {
            service: 'Digital Marketing',
            shortDesc: ''
        }
    ]

    return (
        <Layout>
            <div className='home'>
                <Head>
                    <title>Ermire</title>
                    <meta name='title' content='Ermire'/>
                    <meta name='description' content='Coming soon..'/>
                    <meta charSet='utf-8'/>
                    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
                    <meta name='keywords' content='Keywords'/>
                    <link rel="manifest" href="/manifest.json"/>
                    <link href='/favicon.ico' rel='icon' type='image/png' sizes='32x32'/>
                    <link rel="apple-touch-icon" href="./static/e-logo.png"/>
                    <meta name="theme-color" content="#00008b"/>
                    <meta property="og:description" content='Coming soon..'/>
                    <meta property="og:image" content='/static/layout/preview.png'/>
                </Head>
                <ReactFullpage
                    //fullpage options
                    scrollingSpeed = {800} /* Options here */
                    licenseKey = {'70C70063-9BAB4598-B5DB362F-5C9AD179'}
                    onLeave={(origin, destination, direction) => {
                        const section = origin.item

                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <section className="section">

                                    <div className='col-1'>
                                        <div className="scroll-nav">
                                            <p>scroll down</p>
                                        </div>
                                    </div>
                                    <section className='header' onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
                                        <section className='header__content'>
                                            <div className='header-title--cont'>
                                                <h2 className = 'header-title'>
                                                HIGH LEVEL
                                                OF CREATIVITY
                                                +TECHNOLOGY
                                                +SECURITY!
                                                </h2>
                                                <span className='divider'></span>
                                                <p>ERMIRE IS A HIGH-QUALIFIED TEAM OF TALENTED AND CREATIVE DEVELOPERS, DESIGNERS AND MARKETING EXPERTS.
                                                    EVERY PROJECT IS A CHALLENGE TO MAKE BETTER WE'VE EVER DONE!</p>
                                                    {/*<a href='#order'>ORDER NOW</a>*/}
                                                    <div className='header__order' data-text='ORDER NOW' onClick={() => fullpageApi.moveTo(3)}>ORDER NOW</div>
                                            </div>

                                            <div style={{width: "50%", paddingTop: '10rem', alignSelf: 'center'}}
                                                 onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
                                                <animated.div className=""
                                                              style={{transform: props.xy.interpolate(trans2)}}>
                                                    <HeaderBg className='posterBg' width ='100%' />
                                                </animated.div>
                                                <animated.div className="header__poster"
                                                              style={{transform: props.xy.interpolate(trans1)}}>
                                                        <Header className='poster' width ='100%' />
                                                </animated.div>
                                            </div>
                                        </section>
                                    </section>
                                    <div className='col-1'>
                                    </div>
                                </section>
                                <section className="section">
                                    <div className='col-1'>
                                    </div>
                                    <section className='overview'>
                                        <h2 style={{gridColumn: 'span 12'}}>What we do?</h2>
                                        {data.map((item, index) => (
                                            <div classname='item' style={{gridColumn: 'span 4', gridRow: 'span 5', background: 'blue', animation: `animation: fade 3s .5s backwards cubic-bezier(0.2, 0.5, 0.3, 1);`}}>
                                                <h3>{item.service}</h3>
                                                <p>{item.shortDesc}</p>
                                            </div>
                                        ))}
                                    </section>
                                </section>
                                <section className="section" ref={contact}>
                                    <section>
                                        <section className="brief">
                                            <section className="brief-block">
                                                <div className="brief__title">
                                                    <h1>Describe your order. And we'll make the best offer for You.</h1>
                                                </div>
                                                <Formik
                                                    initialValues={{ name: '', email: '', phone: '' }}
                                                    validate={values => {
                                                        const errors = {};
                                                        if (!values.name || !values.email || !values.phone) {
                                                            errors.name = 'Required'
                                                            errors.email = 'Required'
                                                            errors.phone = 'Required'
                                                        } else if (
                                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                        ) {
                                                            errors.email = 'Invalid email address';
                                                        }
                                                        return errors;
                                                    }}
                                                    onSubmit={async values => {
                                                        await new Promise(resolve => setTimeout(resolve, 500));
                                                        alert(JSON.stringify(values, null, 2));
                                                    }}
                                                >
                                                    {props => {
                                                        const {
                                                            values,
                                                            touched,
                                                            errors,
                                                            dirty,
                                                            isSubmitting,
                                                            handleChange,
                                                            handleBlur,
                                                            handleSubmit,
                                                            handleReset
                                                        } = props;
                                                        return (
                                                            <form className='brief__form' onSubmit={handleSubmit}>
                                                                <input
                                                                    type="name"
                                                                    name="name"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.name}
                                                                    className='brief__form__input'
                                                                    placeholder='Name'
                                                                />
                                                                {errors.name && touched.name && errors.name}
                                                                <div className="flex">
                                                                    <input
                                                                        type="email"
                                                                        name="email"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.email}
                                                                        className='brief__form__input'
                                                                        placeholder='Email'
                                                                    />
                                                                    {errors.email && touched.email && errors.email}
                                                                    <input
                                                                        type="tel"
                                                                        name="phone"
                                                                        placeholder='Phone'
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.phone}
                                                                        className='brief__form__input'
                                                                    />
                                                                </div>
                                                                {errors.phone && touched.phone && errors.phone}
                                                                <textarea className='brief__form__input' onChange={handleChange} name="task" id="" cols="30" rows="5" placeholder='Project description(optional)'></textarea>
                                                                <button className='brief__form__submit' type="submit" disabled={isSubmitting}>
                                                                    Order
                                                                </button>
                                                            </form>
                                                        )}}
                                                </Formik>
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
                <style jsx> {style}</style>
            </div>
        </Layout>
    )
}

