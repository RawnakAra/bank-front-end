import React from "react"

const Home = ({data})=>{

    const [select, setSelect] = React.useState('')
    const [chosenId, setChosenId] = React.useState('')

    const clientData = (e) => {
        setSelect(e.target.value)
    }

    const getSelectId = () => {
        if (select !== 'select user') {
          if( /^\d+$/.test(select)){
            setChosenId(data.filter(d => {
                return d._id === select
            }))
            
          }
          else{
            let first =data[0]
            setChosenId(first._id)
        }
          console.log(chosenId)
        }
       
    }
    return(
        <>
         <div className='selecting' style={{width : '200px'}}>
                <form>
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
                            First Name :{chosenId[0].name}  <br />
                            Id : {chosenId[0]._id} <br />
                            Cash : {chosenId[0].cash} <br />
                            Credit : {chosenId[0].credit}  <br />
                            PassportId : {chosenId[0].passportId}  <br />
                            Email : {chosenId[0].email}  <br />
                        </div> : <ul>
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
                                }) : 'Loding.... The API in Heavin'
                            }
                        </ul>
                       
                    }
                </form>
            </div>
        </>
    )
}
export default Home