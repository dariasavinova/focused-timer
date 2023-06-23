import React from 'react'
import { useAppSelector } from '@/hooks/storeDefaultHooks.ts'
import Title from '@/components/Title/Title.tsx'
import TaskItem from '@/components/TasksComponents/TaskItem/TaskItem.tsx'

const TasksList: React.FC = () => {
  const tasks = useAppSelector(state => state.taskSlice.tasks)

  return (
    <>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <TaskItem key={task.id} taskId={task.id} taskName={task.taskName} />
          ))}
        </ul>
      ) : (
        <Title level={4}>Пока что вы не создали ни одной задачи.</Title>
      )}
    </>
  )
}

export default TasksList