import { writable } from 'svelte/store';
const bmiFetch = async (age, weight, height) => {
	const response = await fetch(
		`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,
		{
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'a7896790aemsh8824392505e3c54p152987jsn3ae2c309f74c',
				'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
			}
		}
	).then((response) => response.text());
	return JSON.parse(response).data;
};

const bodyfatFetch = async (age, gender, height, weight, activity) => {
	const response = await fetch(
		`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activity}`,
		{
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'a7896790aemsh8824392505e3c54p152987jsn3ae2c309f74c',
				'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
			}
		}
	).then((response) => response.text());
	return JSON.parse(response).data;
};
export const bmi = writable(bmiFetch);
export const bodyFat = writable(bodyfatFetch);
