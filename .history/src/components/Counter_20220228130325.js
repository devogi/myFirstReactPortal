import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {

  const count = useSelector(state => state.value)
  return (
    <div>
      
    </div>
  )
}

export default Counter


