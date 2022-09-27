import React from 'react';
import ReactDOM from 'react-dom/client';

import {Karen} from './Componente/Karen.js';
import { Menu } from './Componente/Menu/Menu.js';
import { Banner } from './Componente/Banner/Banner.js';
import { Sinopsis } from './Componente/Sinopsis/Sinopsis.js';
import { Footer } from './Componente/Footer/Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Menu/>
    <Banner/>
    <Sinopsis/>
    <Footer/>
    
  </React.StrictMode>
);

