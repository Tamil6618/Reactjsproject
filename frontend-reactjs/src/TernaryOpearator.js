import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
export const TernaryOperator=()=>
{
    const[wish,setWish]=useState("")
    const[result,setResult]=useState("")
    const[changes,setChanges]=useState({color:'red',backgroundColor:'black'})

    const trigger=(temp)=>
    {
        setWish(temp.target.value)
    }
    const ternarysample=()=>
    {
        (wish==="spring")?
        setChanges({color:'green',backgroundColor:'orange'}):
        (wish==="winter")?
        setChanges({color:'violet',backgroundColor:'yellow'}):
        (wish==="rainy")?
        setChanges({color:'blue',backgroundColor:'grey'}):
        (wish==="summer")?
        setChanges({color:'yellow',backgroundColor:'red'}):

        setChanges({color:'pink',backgroundColor:'green'})

        setResult(wish)
    }

    return(
        <>
        <input placeholder="Enter your favoriate season" type="text" onChange={trigger}/>
        <button onClick={ternarysample} className="btn btn-outline-secondary" >Send</button>
        <p style={changes}>
            {result}
        </p>
        </>
    )
}