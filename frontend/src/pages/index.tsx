import { Box, Container, Flex, Skeleton, Text, VStack } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import TaskItem from '../components/TaskItem'
import TaskToolbar from '../components/TaskToolbar'
import { findAll } from '../lib/task'

export default function Home() {
  const { data: tasks } = findAll()

  return (
    <Flex flexDirection="column" alignItems="center" minHeight="100vh">
      <Header />

      <Container flex="1" paddingY={{ base: '12', md: '24' }}>
        <TaskToolbar />

        <Box marginTop="12">
          {!tasks && (
            <>
              <Text marginBottom="6" fontWeight="bold" opacity="0.4">
                SUAS TAREFAS
              </Text>
              <VStack>
                <Skeleton height="88px" />
                <Skeleton height="88px" />
                <Skeleton height="88px" />
              </VStack>
            </>
          )}

          {tasks && tasks[0] && (
            <>
              <Text marginBottom="6" fontWeight="bold" opacity="0.4">
                SUAS TAREFAS
              </Text>
              <VStack>
                {tasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </VStack>
            </>
          )}
        </Box>
      </Container>
      <Footer />
    </Flex>
  )
}
