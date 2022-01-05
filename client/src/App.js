import { useState } from 'react';
import './App.css';
import FetchTime from './FetchTime';

function App() {
  let [showTemp, setShowTemp] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <p style={{fontSize: "small"}}>[check out the browser's JavaScript console]</p>
        <button
          onClick={() => {
            setShowTemp((currentVal) => !currentVal);
          }}
        >
          {showTemp
            ? 'Unmount (hide) the Component'
            : 'Mount (show) the Component'}
        </button>
        <div style={{ height: '100px' }}>{showTemp && <FetchTime />}</div>
      </header>
    </div>
  );
}

export default App;
