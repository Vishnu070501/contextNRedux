import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppContext } from './context/NewContext';
import Navbar from './components/Navbar'
import { decrement, increment } from './redux/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'



function App() {
  const [countNative, setCountNative] = useState(0)
  const {variable,setVariable} = useContext(AppContext)//this is how you access context variables 
  const sliceCount = useSelector((state) => state.counter.value)//this is how you access a react slice variable(so the reducer function and the useSelector functions the first variables passed is the redux state)//The state variable passed to the useSelector hook represents the current state of your Redux store. When you use useSelector, React Redux subscribes your component to the Redux store. Whenever an action is dispatched and the Redux store is updated, React Redux will re-run your selector function with the new state of the store. If the output of your selector function is different from the previous result, React Redux will re-render your component.
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <span>context variable is {variable}</span>
        <Navbar count={countNative}/>
        <button onClick={() => {setCountNative((count) => count + 1);setVariable(countNative)}}>
          countNative is is {countNative}
        </button>
        <button onClick={()=>dispatch(increment(5))}>+The slice count is {sliceCount}</button>
        <button onClick={()=>dispatch(decrement())}>-The slice count is {sliceCount}</button>
      </div>
     
    </>
  )
}

export default App
