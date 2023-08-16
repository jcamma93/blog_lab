import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

const App = () => {
	return (
		<BrowserRouter>
			<main className ="container my-5">
			<Routes>
				<Route path="/" element={<h1>Home</h1>}></Route>
			</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App;
