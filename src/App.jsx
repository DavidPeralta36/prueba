import './App.css';
import { Promesas } from './components/promesa';
import Carrusel from './components/carrusel'
import Prueba from './components/prueba';
import Example from './components/example';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>Profiles App</h2>
        		<h3 className='spann' >From HTML to API REST</h3>
				<Carrusel/>
				<Prueba/>
				<Example/>
			</header>
			
		</div>
		
	);
}

export default App;
