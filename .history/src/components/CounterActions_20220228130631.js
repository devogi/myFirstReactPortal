import React from 'react'
import { useDispatch } from 'react-redux'

function CounterActions() {

  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decre) } ></button>
    </div>
  )
}

export default CounterActions
