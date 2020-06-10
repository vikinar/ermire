import React, {useRef, useLayoutEffect} from "react";
import {ReactComponent as Logo} from '../../../../static/layout/e-logo.svg'
import style from './style'

const Header = (props, ref) => {
    const logo = 'logo'
    return (
        <section className="header">
            <div className="col-1"></div>
            <section className='flex'>
                <div className="logo-container">
                    <Logo className={logo} width='100' height='100'/>
                    <div className='header__container--inner'>
                        <h1>
                            ERMIRE
                        </h1>
                        <p className='logo-desc'>vikinar™</p>
                    </div>
                </div>
            </section>
            <style jsx>{style}</style>
            <div className="col-1"></div>
        </section>
    )
}

export default Header
