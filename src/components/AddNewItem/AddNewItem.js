import React, { useState } from 'react'
import ApiReq from '../../ApiReq';

const AddNewItem = ({allItems , setErrorMsg}) => {
  const API_URL = "http://localhost:3500/items"
    const[title , setTitle] = useState("");

    const handleSubmit = async(e)=>{
e.preventDefault();
if(!title) return;

const Data = {
     checked:false,
    title: title
}
// fetch(`http://localhost:3500/items` , {
//     method:"POST" , 
//     headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(Data),
// }).then((res)=>res.json()).then((data)=>console.log(data));
const optionsObject = {
  method:"POST" , 
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data)
}
const result = await ApiReq (API_URL , optionsObject)
if(result)  setErrorMsg(result)
setTitle("")
    }
  return (
    <div className='addNewItem'>
    <form value={title} onChange={(e)=>setTitle(e.target.value)} onSubmit={handleSubmit}>
    <input placeholder='Enter New Item' type="text" class="form-control"    />
    <button type="submit" class="btn btn-primary">Add</button>
 </form>
    </div>
   
  )
}

export default AddNewItem