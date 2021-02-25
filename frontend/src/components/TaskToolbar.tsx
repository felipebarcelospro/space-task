import { Button, Input, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { FiPlusSquare } from 'react-icons/fi'
import { create } from '../lib/task'

const TaskToolbar = () => {
  const toast = useToast()
  const [input, setInput] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!input) {
      toast({
        title: 'Ops! Algo deu errado',
        description: 'O nome da tarefa não pode estar vazio',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
      return
    }

    create(input)
    setInput('')
  }

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <Input
        type="text"
        size="lg"
        placeholder="Nome da tarefa"
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInput(event.target.value)
        }
        borderRadius="4px"
      />
      <Button
        type="submit"
        colorScheme="blue"
        size="lg"
        leftIcon={<FiPlusSquare />}
        marginLeft="6"
        paddingX="12"
        boxShadow="base"
        borderRadius="4px"
      >
        Adicionar
      </Button>
    </form>
  )
}

export default TaskToolbar
