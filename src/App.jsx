import React, { useState } from 'react';
import FirstComponent from './FirstComponent';

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <FirstComponent />
      <p>count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;


