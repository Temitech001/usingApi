// import './App.css'
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [quote, setQuote] = useState('');
  const getQoute = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex justify-center">
        <button
          className="flex justify-center bg-slate-900 blue text-center"
          onClick={getQoute}
        >
          Get Qoute
        </button>
        {quote ? <p>{quote}</p> : null}
      </div>
    </>
  );
}

export default App;
