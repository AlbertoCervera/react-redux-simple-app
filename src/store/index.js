import { configureStore } from '@reduxjs/toolkit'
import TaskListReducer  from '../reducers/tasklist/index'
import CounterSliceReducer from "../reducers/counter/index"

export default configureStore({
  reducer: {
    tasks: TaskListReducer,
    counter: CounterSliceReducer,
  },
})