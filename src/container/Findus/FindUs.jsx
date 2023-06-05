import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contatti" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Come trovarci</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">00000 Roma - Italia</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Orari di apertura</p>
        <p className="p__opensans">Lun - Ven: 10:00 - 02:00</p>
        <p className="p__opensans">Sab - Dom: 10:00 - 03:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitaci</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;