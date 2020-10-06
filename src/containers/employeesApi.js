
const API_URL = '../data/data.json';


export const getEmployees = () => fetch(API_URL, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	}).then(response => response.json());


export const view = id => fetch(`${API_URL}/${id}`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	}).then(response => response.json());

export const add = addFields => fetch(API_URL, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(addFields)

	}).then(response => response.json());

export const update = ({id, updateFields}) => fetch(`${API_URL}/${id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updateFields)

	}).then(response => response.json());


export const deleteEmp = id => fetch(`${API_URL}/${id}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	});


	

	
	