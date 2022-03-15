import * as React from "react"
import { Link as GLink } from "gatsby"

import { VStack, Button, Heading } from '@chakra-ui/react';

import Layout from '../components/Layout';

const NotFound = () => (
  <Layout title='404'>
    <VStack height='60vh' width='100%' justify='center' alignItems='center'>
      <Heading>
        404
      </Heading>
      <Button as={GLink} to='/'>
        Home
      </Button>
    </VStack>
  </Layout>
  )

export default NotFound
