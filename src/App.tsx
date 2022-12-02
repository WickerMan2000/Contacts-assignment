import { Fragment } from 'react';
import './App.css';
import { Contacts } from './components/Contacts/Contacts';
import { Description } from './components/Description/Description';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Description />
      <Contacts />
      <Footer />
    </Fragment>
  );
}

export default App;
