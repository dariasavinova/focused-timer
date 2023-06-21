import { configureStore } from '@reduxjs/toolkit'
import taskSlice from '@/store/slices/taskSlice.ts'

export const store = configureStore({
  reducer: {
    taskSlice
  }
})