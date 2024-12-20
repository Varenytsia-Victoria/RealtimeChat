import React, { useState } from 'react'
import axios from 'axios'

function RegisterPage() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await axios.post('/api/register', { username, password })
		} catch (error) {
			console.error('Error registering user', error)
		}
	}

	return (
		<div className='register-page'>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button type='submit'>Register</button>
			</form>
		</div>
	)
}

export default RegisterPage
