// import components
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

// import react router
import { Routes, Route } from 'react-router-dom';

// import styles
import './styles';

function App() {
	return (
		<div className='body'>
			<Header />

			<Routes>
				<Route path='' element={<Work />} />
				<Route path='/' element={<Work />} />

				<Route path='about' element={<About />} />
				<Route path='work' element={<Work />} />
				<Route path='contact' element={<Contact />} />

				<Route path='*' element={<Work />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
