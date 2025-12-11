import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Home() {
  const {bgColor} = useContext(AppContext)

  return (
    <div className='container'>
      <h2> Home</h2>
      <h2>test : {bgColor}</h2>
      
      
      
      </div>
  )
}
