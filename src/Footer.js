import Logo from './images/logo.png';
import Phone from './images/phone.png';
import Mail from './images/mail.png';
import Instagram from './images/instagram.png';

export default function Footer() {
    return (
        <>
        <hr></hr>
        <footer>
            <div className='contacts'>
                <img src={Logo} alt="logo Hair Day"/>
                <p> Hair Day <br></br>Musterstreet 1 <br></br> 12345 London</p>
            </div>
            <div id='contacts'>
                <a href='mailto:info@hairday.com'><img src={Mail} alt=''/>info@hairday.com</a>
                <a href='tel:+123456789'><img src={Phone} alt=''/>+123456789</a>
                <a href='#instagram'><img src={Instagram} alt=''/>hair_day</a>
            </div>
            <div className='copyright'>
                <p>Copyright Hair Day</p>
            </div>
        </footer>
        </>
    )
}