import React, { useState, useEffect } from 'react';
import DisplayCurrentCount from './DisplayCurrentCount.js';
import MutateCountBtn from './MutateCountBtn.js';
import axios from 'axios';

const Count = (props) => {
  const [count, setCount] = useState(999);
  const [inspiration, setInspiration] = useState('Inspire me Kanye');
  const [clock, setClock] = useState(null);
  // Effect with no Cleanup
  useEffect(() => {
    document.title = props.title
  }
)

  // Effect with no Cleanup and Dependencies
  useEffect(() => {
    axios.get('https://api.kanye.rest')
    .then(response => {
      setInspiration(response.data.quote)
    })
  }, [count])

  const noTick = () => clearInterval(clock);

  // Effect with Cleanup
  useEffect(() => {
    setClock(setInterval(() => console.log('tick'), 1000))
    // set the Cleanup function
    return noTick;
  }, [])



  let subtract = () => setCount(count - 1);

  return (
  <>
  {/* h1 tag with inspirational KANYE \quote */}
  <h1>{inspiration}</h1>
  <DisplayCurrentCount count={count}/>
  <div>
    <MutateCountBtn 
    display= {'+'}
    handleClick= {() => setCount(count + 1)}
    />
    <MutateCountBtn 
    display= {'-'}
    handleClick= {subtract}
    />
  </div>
  </>
  );
}

export default Count