import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TotalTaskHours {
  hours: number
  minutes: number
  seconds: number
}

export type TaskItem = {
  id: number
  taskName: string
  totalTaskHours: TotalTaskHours
}

type TasksType = {
  tasks: TaskItem[]
  activeTask: TaskItem
}

type ActionPayloadSaveTotalTaskHours = {
  id: number
  totalTaskHours: TotalTaskHours
}

const taskItem: TaskItem = {
  id: 0,
  taskName: '',
  totalTaskHours: { hours: 0, minutes: 0, seconds: 0 },
}

const initialState: TasksType = {
  tasks: [],
  activeTask: taskItem
}

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    createNewTask: (state, action: PayloadAction<string>) => {
      state.tasks?.push({ ...taskItem, id: state.tasks.length + 1, taskName: action.payload })
      state.activeTask = state.tasks.at(-1)!
    },
    editCurrentTask: (state, action) => {
      state.tasks = state.tasks?.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, taskName: action.payload.taskName }
        }
        return task
      })
    },
    deleteCurrentTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks?.filter(task => task.id !== action.payload)
      state.activeTask = state.tasks[0]
    },
    changeActiveTask: (state, action: PayloadAction<TaskItem>) => {
      state.activeTask = action.payload
    },
    saveTotalTaskHours: (state, action: PayloadAction<ActionPayloadSaveTotalTaskHours>) => {
      state.tasks = state.tasks?.map(task => {
        const seconds = task.totalTaskHours.seconds + action.payload.totalTaskHours.seconds
        const hours = task.totalTaskHours.hours + action.payload.totalTaskHours.hours
        const minutes = task.totalTaskHours.minutes + action.payload.totalTaskHours.minutes

        if (task.id === action.payload.id) {
          return {
            ...task,
            totalTaskHours: {
              hours: hours + Math.floor(minutes / 60),
              minutes: minutes - (60 * Math.floor(minutes / 60)) + (Math.floor(seconds / 60)),
              seconds: seconds - (60 * Math.floor(seconds / 60))
            }
          }
        }
        return task
      })
    }
  }
})

export const {
  createNewTask,
  editCurrentTask,
  deleteCurrentTask,
  changeActiveTask,
  saveTotalTaskHours
} = taskSlice.actions
export default taskSlice.reducer