import { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

import CardComponent from './Components/CardComponent';
import ButtonComponent from './Components/ButtonComponent';

import './Styles/Styles.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [adviceData, setAdviceData] = useState();

  const generateQuote = () => {
    setIsLoading(true);
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        setAdviceData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generateQuote();
  }, [setIsLoading, setAdviceData]);

  return (
    <div className='App'>
      <CardComponent>
        <h4 className='text-neon-green'>
          ADVICE #{adviceData && adviceData.slip.id}
        </h4>
        <h1 className='quote-text text-light-cyan'>
          {isLoading ? (
            <>
              <ClipLoader color='#fff' size={40} />
            </>
          ) : (
            <>"{adviceData && adviceData.slip.advice}"</>
          )}
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
