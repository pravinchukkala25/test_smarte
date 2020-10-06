import React, { useEffect } from 'react';
import { Container, Button, Form, Row, Col, Card, Modal } from 'react-bootstrap';

import { useFormik } from 'formik';
import * as Yup from 'yup';



function EditEmployee(props) {

	// Formik Validations Setup
	const empVal = props.empValues;

	const formik = useFormik({
    initialValues: empVal,
    validationSchema: Yup.object({
      name: Yup.string().max(50, 'Must be 50 characters or less').required('Employee name is required.'),
      email: Yup.string().email('Invalid email address').required('Email-id is required.').typeError('Value is in incorrect format.'),
      username: Yup.string().max(20, 'Must be 20 characters or less').required('Username is required.'),
    }),
    onSubmit: values => {}
   });

	
	return (
			<Modal show={props.show} onHide={props.close}>
		        <Modal.Header closeButton>
		          <Modal.Title>Modal heading</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
						<Form onSubmit={formik.handleSubmit}>
							<Row>
						    <Col>
							    <Form.Group controlId="name">
								    <Form.Label>Name</Form.Label>
							      <Form.Control name="name" type="text" placeholder="Enter name." {...formik.getFieldProps('name')} />
							      <Form.Text className="text-danger">
								      {formik.touched.name && formik.errors.name ? formik.errors.name : null}
								    </Form.Text>
							    </Form.Group>
						    </Col>
						     <Col>
							    <Form.Group controlId="email">
								    <Form.Label >Email</Form.Label>
							      <Form.Control name="email" type="email" placeholder="Enter email." {...formik.getFieldProps('email')} />
							      <Form.Text className="text-danger">
								      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
								    </Form.Text>
								  </Form.Group>
						    </Col>
							</Row>
						
							<Row>
						    <Col md="6">
						    	<Form.Group controlId="username">
								    <Form.Label>Username</Form.Label>
							      <Form.Control 
								      type="text" 
								      name="username" 
								      placeholder="Enter Username." 
								      {...formik.getFieldProps('username')} 
							      />
							      <Form.Text className="text-danger">
								      {formik.touched.username && formik.errors.username ? formik.errors.username : null}
								    </Form.Text>
								  </Form.Group>
						    </Col>
							</Row>

						</Form>
					</Modal.Body>
		        <Modal.Footer>
	          <Button variant="secondary" onClick={props.close}>
	            Close
	          </Button>
	          <Button variant="primary" onClick={props.close}>
	            Save Changes
	          </Button>
	        </Modal.Footer>
	      </Modal>);

}




export default EditEmployee;