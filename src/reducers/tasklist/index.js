import { createSlice } from "@reduxjs/toolkit";

export const TaskListSlice = createSlice({
    name:"tasklist",
    initialState:{
        value: []
    },
    reducers:{
        createTask: (state,action) => {
            state.value.push(action.payload)
        }
    }
})

export const {createTask} = TaskListSlice.actions

export default TaskListSlice.reducer