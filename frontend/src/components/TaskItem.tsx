import {
  Box,
  Checkbox,
  Flex,
  IconButton,
  Text,
  useToast
} from '@chakra-ui/react'
import { FiTrash } from 'react-icons/fi'

import { remove, Task, update } from '../lib/task'

interface Props {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  const toast = useToast()

  const handleDelete = () => {
    remove(task.id)

    toast({
      title: 'Tarefa deletada',
      description: 'A tarefa selecionada foi excluída com sucesso',
      status: 'info',
      duration: 5000,
      isClosable: true
    })
  }

  const handleDoneChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await update(task.id, event.target.checked)
  }

  return (
    <Box
      width="100%"
      paddingX="6"
      paddingY="4"
      background="gray.700"
      boxShadow="base"
      marginBottom="6"
      borderRadius="4px"
    >
      <Flex justifyContent="space-between">
        <Checkbox
          onChange={handleDoneChange}
          defaultChecked={task.done}
          isChecked={task.done}
        >
          <Text textDecoration={task.done ? 'line-through' : ''}>
            {task.name}
          </Text>
        </Checkbox>
        <IconButton
          aria-label="Excluir tarefa"
          icon={<FiTrash />}
          onClick={handleDelete}
        />
      </Flex>
    </Box>
  )
}

export default TaskItem
