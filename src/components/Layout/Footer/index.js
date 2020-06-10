import style from './style'

const Footer = () => {
    return (
        <footer>
            <div className="col-1"></div>
            <div className="footer">
            <div className="social">
                <p>Social:</p>
                <a href=""><span>Facebook</span></a>
                <a href=""><span>LinkedIn</span></a>
                <a href=""><span>Telegram</span></a>
            </div>
            <div className="copy">&copy;2020 vikinar™</div>
            </div>
            <div className="col-1"></div>
            <style jsx>{style}</style>
        </footer>
    )
}

export default Footer
