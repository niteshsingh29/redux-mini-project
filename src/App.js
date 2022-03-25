import React from 'react'
import Navbar from "./components/Navbar";
import Counter from './components/Counter/Counter';
import Display from './components/Counter/Display';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Counter></Counter>
      <Display></Display>
    </>
  );
}

export default App;
