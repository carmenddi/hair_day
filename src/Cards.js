import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Owner from './images/owner.png';
import Styling from './images/styling.jpeg';
import Termin from './images/termin.jpeg';

export default function Cards() {
  const location = useLocation();

  useEffect(() => {
    const scrollAmount = window.innerWidth < 1024 ? 850 : 300;

    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <div className="cards">
      <div className="card" id='page'>
        <Link to="/what-we-do">
          <h2>What we do</h2>
          <img src={Styling} alt="Hair Style" />
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </Link>
      </div>
      <div className="card" id='page'>
        <Link to="/who-we-are">
          <h2>Who we are</h2>
          <img src={Owner} alt="The owner at work" />
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </Link>
      </div>
      <div className="card" id='page'>
        <Link to="/book-now">
          <h2>Book now</h2>
          <img src={Termin} alt="Reception area" />
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </Link>
      </div>
    </div>
  );
}