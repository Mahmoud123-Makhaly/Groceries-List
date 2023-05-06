import React from 'react'
import ContentItem from "./ContentItem"
import Loading from './Loading'
const ContentList = ({allItems,setAllItems,errorMsg,IsLoaded,setErrorMsg}) => {
  return (
    <div>
     {
      errorMsg&&<h3 style={{color:"red" , textAlign:"center"}}>{`${errorMsg}`}</h3>
     }
     {
      IsLoaded&&<Loading/>
     }
     {
        allItems.map((item)=>{
return(
    <ContentItem  key={item.id} item = {item} setErrorMsg={setErrorMsg} allItems={allItems} setAllItems={setAllItems}/>
)
        })
    }
    </div>
  )
}

export default ContentList