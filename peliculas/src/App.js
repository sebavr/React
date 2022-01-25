
import './App.css';

import ListadoPeliculas from './views/ListadoPeliculas'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './views/Blog';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListadoPeliculas />} />
			</Routes>
			<Routes>
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;

