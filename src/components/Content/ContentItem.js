import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import Swal from 'sweetalert2';
import ApiReq from './../../ApiReq';
const ContentItem = ({item,allItems ,setAllItems,setErrorMsg}) => {
  const API_URL = "http://localhost:3500/items"
    ///handleChange function to change state of checkbox from false to true
  const handleChange = (id)=>{
const newAllItems = allItems.map((val)=>{
return(
val.id===id?{...val , checked:!val.checked}:val
)
});
setAllItems(newAllItems)
  }
  //Delete Function
  const handleDelete = (item)=>{
    Swal.fire({
      title: 'Are you sure to delete item ' + item.id +"?",
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
     if (result.isConfirmed) {
      //   fetch(`http://localhost:3500/items/${item.id}` , {
      //     method:"DELETE"
      // }).then((res)=>res.json()).then((data)=>console.log(data))
      // }
      const URL = `${API_URL}/${item.id}`;
      const optionsObject = {
        method:"DELETE"
      }
      const result = ApiReq(URL , optionsObject);
      if(result) setErrorMsg(result)
    }})

  }
  return (
    <div className='content-item'>
<div className='content-item-title'>
<input  type='checkbox' checked = {item.checked} onClick={()=>handleChange(item.id)}/>
<p onDoubleClick={()=>handleChange(item.id)} style={item.checked?{textDecoration:"line-through"}:{textDecoration:"underline"}}>{item.title}</p>
</div>

<div className='content-item-delete'>
<AiFillDelete onClick={()=>handleDelete(item)}/>
</div>
    </div>
  )
}

export default ContentItem