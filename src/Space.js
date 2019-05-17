
import React from 'react'
import { Flex, Box } from '@rebass/grid'


const Bar = () => <Box><hr/></Box>
const Heading = ({children}) =>  <Box>{children}</Box>
const Space = () =>
(
<Flex alignItems='baseline' justifyContent='space-around'>
  <Box p={2}>
    <Heading fontSize={[ 5, 6, 7 ]}>Baseline</Heading>
    <Bar />
  </Box>
  <Box p={2}>
    <Heading>Aligned</Heading>
  </Box>
</Flex>

)

export default Space