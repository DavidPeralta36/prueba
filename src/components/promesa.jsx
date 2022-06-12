import { useEffect, useState } from 'react';

export const Promesas = () => {
	const URL_RANDOM_USERS =
		'https://randomuser.me/api/?results=1'; // Varios Usuarios

	const [usuarios, setUsuarios] = useState([]);


	const cargarUsuariosAsyncAwaitRandom = async () => {
		try {
			const respuesta = await fetch(URL_RANDOM_USERS);
			const { results } = await respuesta.json();
			setUsuarios(results);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		cargarUsuariosAsyncAwaitRandom();
	}, []);

    
    
	return (
		<>
			
			
				{/* RANDOM USERS */}
				{usuarios.map(({ login, name, picture, cell, email, location, dob}) => (
					<div key={login.uuid} className="card">
						<img
							src={picture.large}
							alt={`${name.first} ${name.last}`}
						/>
                        <hr className='linea' />
						<div className='nombre'>

                            <p className='variable hidden' id='v1'> {name.title} {name.first} {name.last}</p>
                            <p className='variable hidden'>{dob.date}</p>
                            <p className='variable hidden'>{email}</p>
                            <p className='variable hidden'>{location.city}</p>
                            <p className='variable hidden'>{cell}</p>
                            <p className='variable hidden'>{login.password}</p>

                            <div className='selectors'>
                                <div className="user"></div>
                                <div className="mail"></div>
                                <div className="calendar"></div>
                                <div className="home"></div>
                                <div className="phone"></div>
                                <div className="pass"></div>
                            </div>
                            

                            {/*
							<p>
                                {name.title} {name.first} {name.last}
							</p>
                            <small className='info'>{email}</small>
                            <small className='info'>{dob.date} </small>
                            <small className='info'>{location.city}</small>
                            <small className='info'>{cell}</small>
                            <small className='info'>{login.password}</small>
                            */}
						</div>
                        
					</div>
				))}
		</>
	);
};
