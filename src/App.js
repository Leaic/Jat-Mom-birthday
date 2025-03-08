import './App.css';
import Header from './Component/Page/Header';
import { Footer } from './Component/Page/Footer';
import { Body } from './Component/Page/Body';
import { useState } from 'react';

function App() {
  const [headerItem, setHeaderItem] = useState("photo");
  const [closeHeader, setCloseHeader] = useState(true)

  console.log("Close header ================= ", closeHeader)

  return (
    <div className='flex flex-col gap-2'>
      {closeHeader === false ? <Header headerItem = {headerItem}  setHeaderItem = {setHeaderItem} setCloseHeader = {setCloseHeader} /> : <div className='flex flex-row justify-end' onClick={() => setCloseHeader(false)}><button>➕</button></div>}
      <h1 className='text-center text-lg font-bold'>Joyeux Anniversaire PASCALINE 🎉🎉</h1>
      <Body headerItem = {headerItem}  setHeaderItem = {setHeaderItem}/>
      <Footer />
    </div>
    
  );
}

export default App;
