import type { Component } from 'solid-js';

import Topbar from './component/Topbar';
import BackToTop from './component/overlay/BackToTop';
import About_Card from './component/About_Card';

import ServicesL_Card from './component/ServicesL_Card';
import ServicesR_Card from './component/ServicesR_Card';
import Services_Header from './component/Services_Hearder';

import Clients_Header from './component/Clients_Header';
import Clients_Card from './component/Clients_Card';

import Contract_Header from './component/Contract_Header';
import Contract_Card from './component/Contract_Card';

import Footer from './component/Footer';

//New-year
import HNYFirework from './component/overlay/HNYFirework';
import HNYclock from './component/overlay/NHYclock';

//Test-AnimeJS
//import AnimeJS_Testing from './component/overlay/AnimeJS_Testing';

const App: Component = () => {
  return (
    <div>
      <Topbar />
      <HNYclock />
      <br></br>
      <About_Card />
      <br></br>
      <div class='hidden md:block'><br></br></div>
      <Services_Header />
      <div class='hidden md:block'><br></br></div>
      <div class='hidden 2xl:block'><br></br></div>
      <ServicesL_Card />
      <br></br>
      <div class='hidden md:block'><br></br></div>
      <div class='hidden 2xl:block'><br></br></div>
      <ServicesR_Card />
      <br></br>
      <div class='hidden md:block'><br></br></div>
      <div class='hidden 2xl:block'><br></br></div>
      <ServicesL_Card />
      <br></br>
      <br></br>
      <Clients_Header />
      <div class='hidden md:block'><br></br></div>
      <Clients_Card />
      <br></br>
      <div class='hidden md:block'><br></br></div>
      <Contract_Header />
      <Contract_Card />
      <br></br>
      <Footer />
      <BackToTop />
      <HNYFirework />
    </div>
  );

  //Test animeJS
  /*
  return (
    <div>
      <Topbar />
      <br></br>
      <AnimeJS_Testing />
      <br></br>
    </div>
  );*/
};

export default App;
