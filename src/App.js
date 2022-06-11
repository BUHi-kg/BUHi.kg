import React from 'react';
import Header from './components/BlockFirst/Header/Header';
import Footer from './components/BlockFooter/Footer/Footer';
import FormFSC from './components/BlockFirst/FormFSC/FormFSC';
import 'antd/dist/antd.css'
import Faq from './components/FAQ/Faq';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Questions from './components/Questions/Questions';
import Tariffs from './components/Tariffs/Tariffs';
import FormInput from './components/BlockFirst/FormFSC/FormInput/FormInput';


function App() {
  return (
    <div className="App">
          <Header/>
          <Tariffs/>
          <HowItWorks/>
          <Faq/>
          <Questions/>
          
          <Footer/>
          <FormInput/>     
    </div>
  );
}

export default App;
