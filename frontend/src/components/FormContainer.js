import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FormContainer = ({children}) => {
  return (
    <Container className='my-5'>
        <Row className='justify-content-md-center'>
            <Col sm={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer