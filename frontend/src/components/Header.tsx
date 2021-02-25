import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      paddingY="6"
      width="100%"
      borderBottom="1px solid rgba(0,0,0,0.3)"
    >
      <Image src="/logo.png" width="300" height="80" objectFit="contain" />
    </Box>
  )
}

export default Header
