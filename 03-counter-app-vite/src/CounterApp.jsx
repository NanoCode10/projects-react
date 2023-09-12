import { useState } from 'react'
import PropTrypes from 'prop-types'

export const CounterApp = ( {value} ) => {

  const [ counter, setCounter ] = useState( value )
  
  const handleAdd = () => {
    setCounter( counter + 1 )
  }
  const handleMin = () => {
    setCounter( counter - 1 )
  }  

  const reset =  () => {
    setCounter ( value )
  }
  return (
    <> 
       <h1>CounterApp</h1>       
       <h2> {value} </h2>
       <h2>{ counter }</h2>
       <button onClick={ handleAdd }> +1 
       </button>  
       <button onClick={ handleMin }>-1 
       </button>  
       <button onClick={ reset }>
        Reset 
       </button>  
    </>


 )
}


CounterApp.PropTrypes = {
    value: PropTrypes.number,
}

CounterApp.defaultProps = {
  value : 0,
}