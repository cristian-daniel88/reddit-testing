
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { HiOutlineSearch } from 'react-icons/hi';


function App() {
  return (
      <>
      <Header/>
      <Main/>
      <Aside/>
        <HiOutlineSearch/>
      </>
  );
}

export default App;
