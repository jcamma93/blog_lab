import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Blogs from './views/Blogs';
import Create from './views/create'
import Edit from './views/Edit';
import SingleBlog from './views/SingleBlog';

const App = () => {
	return (
		<BrowserRouter>
		<Navbar />
			<main className ="container my-5">
			<Routes>
				<Route path="/" element={<h1 className='text-center text-secondary'><u>Home</u></h1>} />
				
				<Route path="/create" element={<Create />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blogs/:id" element={<SingleBlog />} />
				<Route path="/blogs/:id/edit" element={<Edit />} />
			</Routes>
			</main>
		</BrowserRouter>
	)
};

export default App;
