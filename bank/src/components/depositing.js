import axios from "axios";
import React from "react";

const Depositing = () => {
    const [updateUser, setUpdateUser] = React.useState({
        cash: '',
        credit: '',
        id: ''
    })
    const [updated, setUpdated] = React.useState(false)

    const textHandler = (e) => {
        console.log(e.target.value);
        setUpdateUser({
            ...updateUser,
            [e.target.name]: e.target.value
        })
    }

    const updateCash = () => {
        axios.put(`https://bank-back-end.herokuapp.com/api/bank/cash/${updateUser.id}`, updateUser)
            .then(res => {
                if (res.status === 200) {
                    setUpdated(true)
                } else {
                    alert('something went wrong')
                }
            })

    }
    const back =()=>{
        setUpdated(false)
    }
    const updateCredit =()=>{
        axios.put(`https://bank-back-end.herokuapp.com/api/bank/credit/${updateUser.id}`, updateUser)
        .then(res => {
            if (res.status === 200) {
                setUpdated(true)
            } else {
                alert('something went wrong')
            }
        })
    }

    return (
        <>
            {
                updated ? <div>
                    <input type='button' value='Make More Depositing' onClick={back} />
                </div> :
                    <div>
                        <h2>Depositing cash to a user </h2>
                        ID: <input type='text' name={'id'} value={updateUser.id} onChange={textHandler} /><br />
                        Cash: <input type='text' name={'cash'} value={updateUser.cash} onChange={textHandler} /><br />
                        <input type='button' value='on your way to become Jeff Bezos' onClick={updateCash} /><br/>
                        Credit: <input type='text' name={'credit'} value={updateUser.credit} onChange={textHandler} /><br />
                        <input type='button' value='on your way to become Jerome Kerviel' onClick={updateCredit} />
                    </div>
            }
        </>
    )
}
export default Depositing