import axios from "axios";
import React from "react";


const Transfar = () => {
    const [updateUser, setUpdateUser] = React.useState({
        cash: '',
        credit: '',
        id: '',
        // from : '',
        // to: ''
    })
    const [data , setData] = React.useState('')
    const [updated, setUpdated] = React.useState(false)
    const [updated1, setUpdated1] = React.useState(false)
    const [updatedTransfar, setUpdatedTransfar] = React.useState(false)
    const textHandler = (e) => {
        console.log(e.target.value);
        setUpdateUser({
            ...updateUser,
            [e.target.name]: e.target.value
        })
    }
const updateCash = ()=>{
    axios.put(`https://bank-back-end.herokuapp.com/api/bank/withdraw/${updateUser.id}`, updateUser)
    .then(res =>{
        if(res.status === 200){
            console.log(res.data);
            setData(res.data)
            setUpdated(true)
        }else {
            alert('something went wrong')
        }
    })
}
const transfering = ()=>{
    axios.put(`https://bank-back-end.herokuapp.com/api/bank/transfering/${updateUser.from}/${updateUser.to}`, updateUser)
    .then(res =>{
        if(res.status === 200){
            console.log(res.data);
            setUpdatedTransfar(res.data)
            setUpdated1(true)
        }else {
            alert('something went wrong')
        }
    }) 
}
    return (
        <>
            <div>
                <h2>withdrawMoney </h2>
                ID: <input type='text' name={'id'} value={updateUser.id} onChange={textHandler} /><br />
                Cash: <input type='text' name={'cash'} value={updateUser.cash} onChange={textHandler} /><br />
                <input type='button' value='Withdraw Money' onClick={updateCash} /><br />
               {
                   updated ?  <div>
                       Name : {data.name}<br/>
                       New cash on Your Acounte : {data.cash}<br/>
                   </div>:""
               }
            </div>
            <div>
            <h2>Transfaring </h2>
                From: <input type='text' name={'from'} value={updateUser.from} onChange={textHandler} /><br />
                To: <input type='text' name={'to'} value={updateUser.to} onChange={textHandler} /><br />               
                Cash: <input type='text' name={'cash'} value={updateUser.cash} onChange={textHandler} /><br />
                <input type='button' value='Withdraw Money' onClick={transfering} /><br />
                {/* {
                    updated1? <div>
                    Name : {data.name}<br/>
                    New cash on Your Acounte : {data.cash}<br/>
                </div>:""
                } */}
            </div>
        </>
    )
}

export default Transfar