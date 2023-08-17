import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Create from './views/create'

const App = () => {
	return (
		<BrowserRouter>
		<Navbar />
			<main className ="container my-5">
			<Routes>
				<Route path="/" element={<h1 className='text-center text-light'><u>Home</u></h1>} />
				<Route path="/create" element={<Create />} />
				<Route path="/blogs" element={<h1 className='text-center'><u>All Blog Topics</u></h1>} />
				<Route path="/blogs/:id" element={<h1 className='text-center'><u>Blog # </u></h1>} />
				<Route path="/blogs/:id/edit" element={<h1 className='text-center'><u>Editing Blog #</u></h1>} />
			</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App;
