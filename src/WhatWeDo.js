import Cut from './images/cut.jpeg';
import Style from './images/style.jpeg';
import Color from './images/color.jpeg';

export default function WhatWeDo() {
    return (
      <div className='title'>
        <h2 id='whatwedo'>What we do</h2>
        <div className="cards">
          <div className="card">
            <h2>CUT</h2>
            <img src={Cut} alt="Hair Style" />
            <p>We are here to find the perfect cut that adapts to your face.</p>
          </div>
          <div className="card">
            <h2>STYLE</h2>
            <img src={Style} alt="Hair Style" />
            <p>We will work to find the perfect style for you, so that you can easily reproduce it even when you are at home!</p>
          </div>
          <div className="card">
            <h2>COLOR</h2>
            <img src={Color} alt="Hair Style" />
            <p>We will help you express yourself by helping you choose from a very wide variety of colors the one that suits you best.</p>
          </div>
        </div>
      </div>
    );
  }