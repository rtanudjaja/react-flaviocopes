import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = (increment: number) => {
    setCount(count + increment)
  }
  return (
    <div>
      <Button increment={1} add={handleAdd} />
      <Button increment={10} add={handleAdd} />
      <Button increment={100} add={handleAdd} />
      <Button increment={1000} add={handleAdd} />
      <span>{count}</span>
    </div>
  );
}

export default App;
