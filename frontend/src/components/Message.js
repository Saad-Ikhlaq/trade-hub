import React from 'react'
import { Alert} from 'react-bootstrap'


const Message = ({variant, children}) => {
  return (
    <Alert variant={variant}>
        <span>{children}</span>
    </Alert>
  )
}

export default Message