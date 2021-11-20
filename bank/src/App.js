import './App.css';
import Home from './components/home';
import axios from 'axios'
import React from 'react';
function App() {
const [data , setData] = React.useState('')
React.useEffect(()=>{
  getDat()
},[])

  const getDat = ()=>{
    axios.get('https://bank-back-end.herokuapp.com/api/bank')
    .then(res=>{
     setData(res.data);
    }).catch(err=>{
      console.log('Error')
    })
  }

  return (
    <div className="App">
    <Home data = {data}/>
    </div>
  );
}

export default App;
