import { useEffect, useState } from 'react';
import axios from 'axios';

import CardComponent from './Components/CardComponent';
import ButtonComponent from './Components/ButtonComponent';

import './Styles/Styles.css';

function App() {
  const [adviceData, setAdviceData] = useState();

  const generateQuote = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => setAdviceData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div className='App'>
      <CardComponent>
        <h4 className='text-neon-green'>
          ADVICE #{adviceData && adviceData.slip.id}
        </h4>
        <h1 className='quote-text text-light-cyan'>
          "{adviceData && adviceData.slip.advice}"
        </h1>
        <div className='rule'>
          <hr />
          <div className='quote-mark'></div>
          <div className='quote-mark'></div>
          <hr />
        </div>
        <ButtonComponent generateQuote={generateQuote} />
      </CardComponent>
    </div>
  );
}

export default App;
