import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from './features/counterSlice';
import { increment,decrement } from '../../features/counterSlice';
function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div className='counter_section py-5'>
    <div className='container'>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())} className='btn btn-danger me-2'>-</button>
      <button onClick={() => dispatch(increment())} className='btn btn-success '>+</button>
    </div>
    </div>
  )
}

export default Counter;
