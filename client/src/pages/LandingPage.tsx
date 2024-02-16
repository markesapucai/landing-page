/*
import React, { useState } from 'react';
import '../assets/style/LandingPage.css';
import NavBar from '../components/NavBar/navBar';

const LandingPage: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlippedProd, setIsFlippedProd] = useState(false);

  const handleIamCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleProductCardFlip = () => {
    setIsFlippedProd(!isFlippedProd);
  };

  return (
    <>
      <NavBar />
      <body>
        <h1>A SaaS about EDUCATION</h1>
        <h3>Hi 👋, I'm Markês Sapucai and this is a MERN experience!</h3>

        <div className='cards'>
          <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleIamCardFlip}>
            <div className='card-inner'>
              <div className='card-front'>
                <div className='agr'></div>
                <h3>Who I am</h3>
              </div>
              <div className='card-back'>
                <h3>Lado Traseiro</h3>
              </div>
            </div>
          </div>

          <div className={`card ${isFlippedProd ? 'flipped' : ''}`} onClick={handleProductCardFlip}>
            <div className='card-inner'>
              <div className='card-front'>
                <div className='imagem'></div>
                <h3>About product</h3>
              </div>
              <div className='card-back'>
                <h3>Lado Traseiro</h3>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default LandingPage;
*/

import '../assets/style/LandingPage.css';
import NavBar from '../components/NavBar/navBar';
import React, { useState } from 'react';

const LandingPage: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlippedProd, setIsFlippedProd] = useState(false);

  const handleIamCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleProductCardFlip = () => {
    setIsFlippedProd(!isFlippedProd);
  };
  return (
    <>
      <NavBar />
      <div className="landing-page-container">
        <h1>A SaaS about EDUCATION</h1>
        <hr />
        <h2>Hi 👋, I'm Markê and this is a [
          <span className="mongo">M</span>
          <span className="express">E</span>
          <span className="react">R</span>
          <span className="node">N</span>
          ] experience!</h2>
        <div className="cards">

          <div className='cardIam'>
            <div className={`card ${isFlipped ? 'flipped' : 'normal'}`} onClick={handleIamCardFlip}>
              <div className='card-inner'>
                <div className='card-front'>
                  <div className='agr'></div>
                  <h3>Who I am?</h3>
                  <h6>click here!👆</h6>
                </div>
                <div className='card-back'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem distinctio illo ullam ab numquam, odio harum exercitationem dolores accusantium, omnis atque eveniet voluptas? Temporibus, maiores repudiandae cum veniam dolor eum.</p>
                  <h3>Lado Traseiro</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='cardProduct'>
            <div className={`card ${isFlippedProd ? 'flipped' : 'normal'}`} onClick={handleProductCardFlip}>
              <div className='card-inner'>
                <div className='card-front'>
                  <div className='imagem'></div>
                  <h3>About product!</h3>
                  <h6>click here!👆</h6>
                </div>
                <div className='card-back'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a provident consequuntur minus dolorum voluptatum perferendis nemo corporis velit itaque doloremque dolores architecto eveniet, obcaecati, reprehenderit veritatis autem eligendi? Voluptatibus.</p>
                  <h3>Lado Traseiro</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default LandingPage;