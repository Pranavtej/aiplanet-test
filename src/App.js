
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Index from './components';
import Upload_Form from './components/Upload/upload';
import ViewHack from './components/ViewHack/ViewHack';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Index />} />
      <Route path='/upload'element={<Upload_Form />} />
      <Route path='/view'element={<ViewHack />} />




    </Routes>
    </BrowserRouter>
  );
}

export default App;
