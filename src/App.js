import { useEffect, useState } from 'react';
import axios from 'axios';

import CardComponent from './Components/CardComponent';

import './Styles/Styles.css';

function App() {
  const [adviceData, setAdviceData] = useState();

  useEffect(() => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => setAdviceData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <CardComponent>
        <h3>Advice #{adviceData && adviceData.slip.id}</h3>
        <h1 className='text-light-cyan'>
          {adviceData && adviceData.slip.advice}
        </h1>
        <div className='rule'>
          <hr />
          ''
          <hr />
        </div>
      </CardComponent>
    </div>
  );
}

export default App;
