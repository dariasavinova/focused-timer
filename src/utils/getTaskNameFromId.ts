import { TaskItem } from '../store/slices/taskSlice.ts'

export const handleGetTaskNameFromId = (tasks: TaskItem[], activeTaskId: number) => {
  const task = tasks?.find(task => task.id === activeTaskId)
  return task!.taskName
}