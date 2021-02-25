import { Flex, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      borderTop="1px solid rgba(0, 0, 0, 0.3)"
      paddingY="6"
      justifySelf="flex-end"
      width="100%"
    >
      <Text>
        Created with <span style={{ color: 'red' }}>❤</span> by
        @felipebarcelospro
      </Text>
    </Flex>
  )
}
