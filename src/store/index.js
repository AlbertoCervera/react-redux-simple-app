import { configureStore } from '@reduxjs/toolkit'
import TaskListReducer  from '../reducers/tasklist/index'

export default configureStore({
  reducer: {
    tasks: TaskListReducer,
  },
})