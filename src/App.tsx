import MainPage from './page/mainPage';
import {BookPage} from './page/bookPage';
import { Route, Routes} from 'react-router-dom';

import './App.css'

function App() {
  return(
    <main>
    <Routes>
      <Route path="/" element={ <MainPage />}></Route>
      <Route path="/book/:id" element={<BookPage />}></Route>
      <Route path="*" element={<MainPage />} />
    </Routes> 
    </main>
  )
 
}

export default App
