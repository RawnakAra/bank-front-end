import './App.css';
import Home from './components/home';
import AddingNew from './components/addnewuser'
import Depositing from './components/depositing'
import axios from 'axios'
import React from 'react';
import Transfar from './components/withdraw.transf';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
const [data , setData] = React.useState('')
React.useEffect(()=>{
  getDat()
},[])

  const getDat = ()=>{
    axios.get('https://bank-back-end.herokuapp.com/api/bank/')
    .then(res=>{
      console.log(res.data)
     setData(res.data);
    }).catch(err=>{
      console.log('Error')
    })
  }

  return (
    <div className="App">
      <Router className="App">
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/addnewuser">Add</Link>
            </li>
            <li>
              <Link to="/depositing">Depositing</Link>
            </li>
            <li>
              <Link to="/withdraw.transf">Transfaring</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route  path='/home'  element={ <Home data = {data}/>} />
            <Route  path='/addnewuser' element={ <AddingNew data = {data}/>} />
            <Route  path='/depositing' element={ <Depositing />} />
            <Route  path='/withdraw.transf' element={ <Transfar />} />
          </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
