import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css';
import fetchData from './api';

const App = () => {
	const [ globData, setGlobData ] = useState({});
	const [ countriesData, setCountriesData ] = useState('');

	useEffect(() => {
		async function getData() {
			setGlobData(await fetchData());

			return globData;
		}

		getData();
	}, []);

	const handleCountryChange = async (countries) => {
		const fdata = await fetchData(countries);
		
		setGlobData(fdata)
		console.log(fdata);
		setCountriesData(countries)

		// console.log(countriesData);
	};

	return (
		<div className={styles.container}>
			<Cards data={globData} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart data={globData} çountries={countriesData} />
		</div>
	);
};

export default App;
