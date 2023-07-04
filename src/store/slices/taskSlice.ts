import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TaskItem = {
  id: number
  taskName: string
  totalTaskHours: number
}

type TasksType = {
  tasks: TaskItem[]
}

const taskItem: TaskItem = {
  id: 0,
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
      state.tasks?.push({ ...taskItem, id: state.tasks.length + 1, taskName: action.payload })
    },
    editCurrentTask: (state, action) => {
      state.tasks = state.tasks?.map(task => {
        if (task.id === action.payload.taskId) {
          return { ...task, taskName: action.payload.taskName }
        }
        return task
      })
    },
    deleteCurrentTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks?.filter(task => task.id !== action.payload)
    }
  }
})

export const { createNewTask, editCurrentTask, deleteCurrentTask } = taskSlice.actions
export default taskSlice.reducer