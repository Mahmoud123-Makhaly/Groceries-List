import React from 'react'

const Footer = ({allItems}) => {
  return (
    <div className='footer'>
    <h3>{allItems.length} List {allItems.length>1?"items":"item"}</h3>
    </div>
  )
}

export default Footer