import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {

  const count = useSelector(state => state.coun)
  return (
    <div>
      
    </div>
  )
}

export default Counter


