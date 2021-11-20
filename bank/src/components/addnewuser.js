import axios from "axios";
import React from "react";


const AddingNew = ()=>{
    const [newUser ,setNewuser] = React.useState({
        name :'',
        cash :'',
        credit :'',
        passportId :'',
        email :''
    })
    const [masg ,setMasg] = React.useState(false)
    const [getUsersData , setGetUsersData] = React.useState([])

    React.useEffect(()=>{
     getData()
    },[])
    
    const getData = ()=>{
        axios.get('https://bank-back-end.herokuapp.com/api/bank')
        .then(res=>{
          console.log(res.data);
          setGetUsersData(res.data)
        })
      }

const addUser =()=>{
   if(newUser.name  && newUser.cash && newUser.credit && newUser.passportId && newUser.email){
       axios.post('https://bank-back-end.herokuapp.com/api/bank/',newUser)
       .then(res=>{
           console.log(res)
           if(res.status === 200){
               console.log(res.data);
               setGetUsersData([...getUsersData , res.data]) 
               setMasg(true)
           }
       }).catch(err=>{
           console.log(err);
       })
   } 
}

const textHandler =(e)=>{
 setNewuser({
     ...newUser , 
     [e.target.name] : e.target.value
 })
 console.log('newuser: ',newUser)
}

return (
    <>
   First Name: <input type='text' name={'name'} value={newUser.name} onChange={textHandler}/><br/>
   Cash: <input type='text' name={'cash'} value={newUser.cash} onChange={textHandler}/><br/>
   Credit: <input type='text' name={'credit'} value={newUser.credit} onChange={textHandler}/><br/>
   PassportId: <input type='text' name={'passportId'} value={newUser.passportId} onChange={textHandler}/><br/>
   Email: <input type='email' name={'email'} value={newUser.email} onChange={textHandler}/><br/>
    <input type='button' value='Add' onClick={addUser}/>
    {
        masg? <div>Welcome to the Club</div>:''
    }
    </>
)
}

export default AddingNew