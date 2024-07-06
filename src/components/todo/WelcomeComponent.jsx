import { Link, useParams } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
import { useState } from 'react';
import { retrieveHelloWorldVariable } from './api/HelloWorldApiService';

export default function WelcomeComponent() {
	const { username } = useParams();
	const authContext = useAuth();

	const [message, setMessage] = useState(null);

	function callHelloWorldRestApi() {
		console.log('called');

		retrieveHelloWorldVariable('chueyee', authContext.token)
			.then((response) => successfulResponse(response))
			.catch((error) => errorResponse(error))
			.finally(() => console.log('cleanup'));
	}

	function successfulResponse(response) {
		console.log(response);
		//setMessage(response.data);
		setMessage(response.data.message);
	}

	function errorResponse(error) {
		console.log(error);
	}

	return (
		<div className='WelcomeComponent'>
			<h1>Welcome {username}</h1>
			<div>
				Manage your todos <Link to='/todos'>here</Link>
			</div>
			<div>
				<button className='btn btn-success' onClick={callHelloWorldRestApi}>
					Call Hello World REST API
				</button>
			</div>
			<div className='text-info'>{message}</div>
		</div>
	);
}
