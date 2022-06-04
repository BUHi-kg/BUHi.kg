import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import Faq from './components/FAQ/Faq';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <HowItWorks/>
      <Faq/>
      <Questions/>
    </div>
  );
}

export default App;
