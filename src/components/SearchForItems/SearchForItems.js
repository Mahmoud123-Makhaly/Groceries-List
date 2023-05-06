import React, { useState } from 'react'

const SearchForItems = ({allItems , setAllItems,getAllFunction}) => {
    const [Search , setSearch] = useState("")
    const handleChange = (e)=>{
        setSearch(e.target.value)
    const newItems = allItems.filter((item)=>{
    return(
      (item.title).toLowerCase().includes(Search.toLowerCase())
    )
    });
    setAllItems(newItems);
    if(Search===""){
        getAllFunction()
    }
    }
  return (
    <div className='search'>
    <form onSubmit={(e)=>e.preventDefault()}>
    <input defaultValue={Search} onChange={handleChange} type="text" class="form-control" placeholder='Search For Items'/>

    </form>
    </div>
  )
}

export default SearchForItems