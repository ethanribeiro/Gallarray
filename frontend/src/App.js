import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { ExhibitContext } from './data/ExhibitContext';

function App() {

  const {Provider: ExhibitData} = ExhibitContext;
  const [state, setState] = useState({
    error: "404 not found"
  });

  return (
    <div className="App">
      <ExhibitData value={state}>
        <Header />
        <Main />
        <Footer />
      </ExhibitData>
    </div>
  );
}

export default App;
