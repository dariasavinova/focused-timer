import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

type TaskItem = {
  id: string
  taskName: string
  totalTaskHours: number
}

type TasksType = {
  tasks: TaskItem[]
}

const taskItem: TaskItem = {
  id: '',
  taskName: '',
  totalTaskHours: 0,
}

const initialState: TasksType = {
  tasks: []
}

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    createNewTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ ...taskItem, id: uuidv4(), taskName: action.payload })
    },
    editCurrentTask: (state, action) => {
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id !== action.payload.taskId) return
        state.tasks[i].taskName = action.payload.taskName
      }
    }
  }
})

export const { createNewTask, editCurrentTask } = taskSlice.actions
export default taskSlice.reducer