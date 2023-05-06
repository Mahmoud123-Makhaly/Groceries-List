import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import AddNewItem from './components/AddNewItem/AddNewItem'
import SearchForItems from './components/SearchForItems/SearchForItems'

const App = () => {
  const [allItems , setAllItems] = useState([]);
  const [errorMsg , setErrorMsg]  =useState(null);
  const [IsLoaded , setIsLoaded] = useState(true)
  //get All Items Function .........
  const getAllFunction =async ()=>{
    try{
const api = await fetch("http://localhost:3500/items");
if(!api.ok) throw new Error ("Didn't Receive Expected Data!")
const res = await api.json();
setAllItems(res);
 
    }
    catch(error){
     setErrorMsg(error)
    }
    finally{
setIsLoaded(false)
    }
  }
useEffect(()=>{
  setTimeout(() => {
    getAllFunction();
  }, 2000);
} , []);
 
  return (
    <div className='app'>
    <Header/>
    <SearchForItems getAllFunction={getAllFunction} allItems={allItems} setAllItems={setAllItems}/>
    <AddNewItem setErrorMsg={setErrorMsg}  allItems={allItems}/>
 
 
    <Content setErrorMsg={setErrorMsg} IsLoaded={IsLoaded} errorMsg = {errorMsg} allItems = {allItems} setAllItems={setAllItems}/>
    
    <Footer allItems={allItems}/>
    </div>
  )
}

export default App