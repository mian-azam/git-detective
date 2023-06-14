
import Home from './pages/Home'
import User from './pages/User';
import './styles/index.css';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        >
        </Route>
        <Route
          path='/user/:id'
          element={<User />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
