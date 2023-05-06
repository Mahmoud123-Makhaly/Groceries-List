import React from 'react'
import ContentList from './ContentList'

const Content = ({setErrorMsg,IsLoaded,allItems , setAllItems,errorMsg}) => {
  return (
    <main className='content'>
    <ContentList setErrorMsg={setErrorMsg} errorMsg = {errorMsg} allItems = {allItems} setAllItems={setAllItems} IsLoaded={IsLoaded}/>
    </main>
  )
}

export default Content