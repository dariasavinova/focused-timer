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
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.taskId) {
          return { ...task, taskName: action.payload.taskName }
        }
        return task
      })
    },
    deleteCurrentTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  }
})

export const { createNewTask, editCurrentTask, deleteCurrentTask } = taskSlice.actions
export default taskSlice.reducer