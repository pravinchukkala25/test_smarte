import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import {
  getEmployees as getEmployeesApi,
  view as viewApi,
  add as addApi,
  update as updateApi,
  deleteEmp as deleteApi
} from './employeesApi';

import EditEmployee from './editEmployees.js';

function Employees(props) {

  const history = useHistory();
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState([
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz"
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv"
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net"
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org"
            }
      ]);

  const [employee, setEmployee] = useState({ 
      id: '', 
      name: '', 
      username: '', 
      email: ''
    });


  const handleClose = () => setShow(false);
  const handleShow = empValues => setShow(true);


	return (
		<Container>
          <div className="my-3">
            <h1 className="text-center">Employees List</h1>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email-id</th>
                <th>Joining Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {employees.length > 0 && employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.username}</td>
                  <td>{emp.email}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleShow(emp)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </Table>

          <EditEmployee show={show} close={handleClose} empValues={employee} />

        </Container>
		);
}



export default Employees;