import React, {useState} from 'react'
import Link from "next/link";
import {style} from './style'
import {ReactComponent as Hover} from './hover.svg'

export const Navigation = () => {
    const routes = [
        {
            route: '/',
            title: 'Home'
        },
        {
            route: '/about',
            title: 'About'
        },
        {
            route: '/services',
            title: 'Services'
        },
        {
            route: './hub',
            title: 'Hub'
        },
        {
            route: '/academy',
            title: 'Academy'
        },
        {
            route: '/contact',
            title: 'Contacts'
        }
    ]

    const [menuState, setMenuState] = useState('hide')

    const showMenuBg = () =>{
        setMenuState('show')
    }
    const hideMenuBg = () =>{
        setMenuState('hide')
    }

    return (
        <nav className='nav nav-mobile'>
            <div className={`menu-bg menu-bg--${menuState}`}>
                <section className={`nav__hover nav__hover--${menuState}`}>
                    <Hover width={'100%'}/>
                </section>
            </div>
            <ul>
                {routes.map((item, index) => (
                    <li data-route={item.title}>
                        <Link href = {item.route}>
                            <a data-route={item.title}  onMouseOver={showMenuBg} onMouseOut={hideMenuBg} className="link"  key = {index}>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{style}</style>
        </nav>
    )
}


