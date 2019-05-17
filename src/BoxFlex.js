
import React from 'react'
import { Flex, Box } from '@rebass/grid'

const Bar = () => <Box><hr/></Box>

const Heading = ({children}) =>  <Box>{children}</Box>

const BoxFlex = () =>(<Flex flexWrap=''>
  <Box p={3} width={[ 1, 1/2 ]}>
    <Bar />
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>fbsjkafksakfhsakdfhksadjhfjksdhfjkshdjkfhdsjkhfdsjkhfkjh</Heading>
  </Box>
  <Box p={3} width={[ 1, 1/2 ]}>
    <Bar />
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Flexible</Heading>
  </Box>
  <Box p={3} width={[ 1, 1/2 ]}>
    <Bar />
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Flexible</Heading>
  </Box>
</Flex>
)

export default BoxFlex