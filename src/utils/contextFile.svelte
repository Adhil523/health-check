<script>
	import { setContext } from 'svelte';
	const bmi = async (age, weight, height) => {
		const res = await fetch(
			`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': 'a7896790aemsh8824392505e3c54p152987jsn3ae2c309f74c',
					'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
				}
			}
		)
        const data=await res.json()
        return data
	};
    const test="Adhil"
	setContext('bmi-api', bmi);
    setContext("testdata",test)
</script>
