import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { boolean } from 'yup/lib/locale'
import { CustomerDataTypes } from '../../../utils/dataTypes'
import {CalendarData} from './data'

import {Container, Quad} from './styles'

interface UserTagsType {
  customeritens: CustomerDataTypes[],
}

const UserCustomerTags:  React.FC<UserTagsType> = ({customeritens}) => {

  return (
    <Container>
      {
        customeritens.map(item => (
            <Link to={`/customer/${item.id}`}>
            <motion.div whileHover={{translateY: -4, transition:{type: 'spring', duration: .2}}}>
          <Quad key={item.id} isActivated={item.status}>{item.name}</Quad>
            </motion.div>
            </Link>
        ))
        
      }
    </Container>
  )
}

export default UserCustomerTags