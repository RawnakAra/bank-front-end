import React from "react"
import axios from "axios"
const Home = ({data})=>{

    const [select, setSelect] = React.useState('')
    const [chosenId, setChosenId] = React.useState('')
    // const [dataForId , setDataForId] = React.useState('')

      const getSelectId = ()=>{
        axios.get(`https://bank-back-end.herokuapp.com/api/bank/${select}`)
        .then(res=>{
          console.log(res.data)
         setChosenId(res.data);
        }).catch(err=>{
          console.log('Error')
        })
      }
    
    const clientData = (e) => {
        console.log(e.target.value)
        setSelect(e.target.value)
    }

    // const getSelectId = () => {
    //     if (select !== 'select user') {
    //      // if( /^\d+$/.test(select)){
    //         setChosenId(data.filter(d => {
    //             console.log(d._id)
    //             return d._id === select
    //         }))
            
    //       }
    //       else{
    //         let first =data[0]
    //         setChosenId(first._id)
    //     }
    //       console.log(chosenId)
    //     }
       
    //}
    return(
        <>
         <div className='selecting' style={{width : '200px'}}>
                    <select onChange={clientData}>
                        <option key='user'>select user</option>
                        {
                            data ? data.map((res, index) => {
                                return (
                                    <option value={res._id} key={index} >{res._id}</option>
                                )
                            }) : 'sleeping.. back later'
                        }
                    </select>
                    <input type={'button'} value={'Filtrate'} onClick={getSelectId} />
                    { 
                   
                        chosenId  ?<div>
                            First Name :{chosenId.name}  <br />
                            Id : {chosenId._id} <br />
                            Cash : {chosenId.cash} <br />
                            Credit : {chosenId.credit}  <br />
                            PassportId : {chosenId.passportId}  <br />
                            Email : {chosenId.email}  <br />
                        </div> : 
                        <ul>  
                            {
                                data ? data.map((user, index) => {
                                    return (
                                        <li key={index}>First Name : {user.name} <br />
                                            Id : {user._id} <br />
                                            Cash : {user.cash} <br />
                                            Credit : {user.credit} <br />
                                            PassportId : {user.passportId} <br />
                                            Email : {user.email} <br />
                                        </li>
                                    )
                                }) : 'Loding....'
                            }
                       </ul>
                       
                    }
                
            </div> 
        </>
    )
}
export default Home