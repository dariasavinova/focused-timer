import React from 'react'
import TextInput from '@/components/TextInput/TextInput.tsx'
import Button from '@/components/Button/Button.tsx'

const NewTaskCreation: React.FC = () => {
  return (
    <div>
      <TextInput />
      <Button>+</Button>
    </div>
  )
}

export default NewTaskCreation