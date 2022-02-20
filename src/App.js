import './App.css';
import CrudPage from './Components/Crud-Componts';
import LoginRegister from './Components/LoginRegister-Componets';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { isUserLogedIn } from './action';
function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLogedIn())
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginRegister />} /> 
        <Route exact path='/Crud' element={<CrudPage />} />
      </Routes>
    </Router>
  );
}

export default App;
