import React  from "react";

import {useSelector, useDispatch} from 'react-redux';
import {inc , dec} from './actions/index'
const App = () => {
 const mystate = useSelector((state) => state.changenum);
 const dispatch = useDispatch();
  return (
    <>
    
    <h1>Redux increment and decrement</h1>
    <button type="button" onClick = {() => dispatch(dec())}>-</button>
   <input type="text" value = {mystate}></input>
<button type="button" onClick= {() => dispatch(inc()) }>+</button>


        </>
  )
}
export default App