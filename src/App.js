import './App.css';
import Category from './Components/Category/Category.jsx';
import Home from './Body.jsx';
// import Next from './Components/Next Page/Next.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/category' element ={<Category></Category>}></Route>
      <Route path='/homePage' element ={<HomePage></HomePage>}></Route>
    </Routes>
  );
}

export default App;
