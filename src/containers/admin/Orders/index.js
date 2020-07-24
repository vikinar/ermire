import {useEffect} from "react"
import {style} from './style'
import {PhoneIphone, PersonOutline, Assignment} from '@material-ui/icons';

const Orders = ({Order}) => {

    return (
        <main>
            <section className='container'>
                <h1>Ստացված պատվերներ</h1>
                <section className='container__card'>
                {[...Order].reverse().map(item => (
                    <section key={item.id} className="card">
                        <h2 className='card__title'> {item.desc.name} </h2>
                        <ul>
                            <li>
                                <span className='icon'><PhoneIphone  fontSize = "large"/></span>
                                <strong>Հեռ`</strong> {item.desc.phone}</li>
                            <li>
                                <span className='icon'><PersonOutline fontSize = "large"/></span>
                                <strong>Էլ. հասցե`</strong> {item.desc.email}</li>
                            <li>
                                <span className='icon'><Assignment fontSize = "large"/></span>
                                <strong>Առաջադրանք`</strong> {item.desc.task ? item.desc.task : 'Lրացված չէ'} </li>
                        </ul>
                    </section>
                ))}
                </section>
            </section>
            <style jsx>{style}</style>
        </main>
    )
}

Orders.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/api/order-form')
    const Order = await response.json()
    console.log(Order)
    return {Order}
}

export default Orders
