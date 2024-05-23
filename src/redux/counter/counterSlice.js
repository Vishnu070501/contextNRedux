import { createSlice } from '@reduxjs/toolkit'

const initialState = {//state object which can be updated any time
  value: 0,
}

export const counterSlice = createSlice({//slice is a modular way to group all the reducers together to update a state object(came with redux toolkit instead of classic redux)
  name: 'counter',//just simple name for this slice which will be used while debugging
  initialState,//state object
  reducers: { //the functions which are used to update the state
    increment: (state,argument) => {//always this argument is passed by default so we have to send the argument from the second when we dispatch this method
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(argument)
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      //In a reducer function, state represents the current state of the slice being managed by that reducer. It's the state that the reducer is responsible for updating.
      // In useSelector, state represents the entire Redux state. You typically use useSelector to extract specific parts of the Redux state managed by various reducers. The state 
    },
    multiply: (state)=>{
        state.value *=2
    }
  },
})

// Action creators are generated for each case reducer functionthese are imported wherever you wanna use
export const { increment, decrement, incrementByAmount, multiply } = counterSlice.actions
// Additionally, you're exporting individual action creators like increment, decrement, etc. These are functions that generate Redux action objects, which are then dispatched to the store. By exporting them individually, other parts of your application can import and use them directly, simplifying the process of dispatching actions.these are different from the one defined inside reducers whatever you pass here as the first parameter gets passed to the reducer function second argument

//these are imported in the store to initialise the slice
export default counterSlice.reducer//this is a function that helps us handle the actions dispatched to the redux sore