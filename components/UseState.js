import React, { useState } from 'react';

function HookCounter() {
  const [ count, setCounter ] = useState(0)
  return (
    <div>
      <button onClick={ () => setCounter(count - 1) }> - </button> { count }
      <button onClick={ () => setCounter(count + 1) }> + </button>
    </div>
  )
}
export default HookCounter;