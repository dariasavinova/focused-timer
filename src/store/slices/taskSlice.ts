import { createSlice } from '@reduxjs/toolkit'

type TaskItem = {
  taskName: string
  totalTaskHours: number
}

type TasksType = {
  tasks: TaskItem[]
}

const taskItem: TaskItem = {
  taskName: '',
  totalTaskHours: 0
}

const initialState: TasksType = {
  tasks: [taskItem]
}

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {}
})

export default taskSlice.reducer