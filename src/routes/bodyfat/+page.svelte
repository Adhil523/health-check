<script>
    let formData={
        age:'',
        gender:'',
        height:'',
        weight:'',
        activity:'level_1'
        
    }
    let bmr="";

    const handleclick=async ()=>{
      console.log(formData)
        const response=await fetch(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${formData.age}&gender=${formData.gender}&height=${formData.height}&weight=${formData.weight}&activitylevel=${formData.activity}`,{
          method: 'GET',
	        headers: {
		      'X-RapidAPI-Key': 'a7896790aemsh8824392505e3c54p152987jsn3ae2c309f74c',
		      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	      }
        }).then((response)=>response.text())
        const data=JSON.parse(response).data
        console.log(data)
        bmr=`BMR is ${data.BMR}`


    }
//     const test=async ()=>{
//       const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_7';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a7896790aemsh8824392505e3c54p152987jsn3ae2c309f74c',
// 		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(JSON.parse(result).data);
// } catch (error) {
// 	console.error(error);
// }
//     }
//   test()


</script>

<main>
    <div class=" bg-black text-green-500">
        <div class=" items-center w-[50%] mx-auto h-auto p-20">
            <h1 class="text-6xl font-bold m-6">Body Fat</h1>
            <form>
                <div class="grid gap-6 h-fit p-6 sm:text-base text-xs text-white  rounded-lg">
                  <div class="flex-col space-y-2">
                    <span class="">Your Age</span>
                    <input
                      id="name"
                      placeholder="Enter your age(in years)"
                      type="text"
                      class="w-full h-14  rounded-md  border-white p-3 border-b placeholder-slate-500 text-black"
                      required
                      name="age"
                      bind:value={formData.age}
                    />
                  </div>
                  <div class="flex gap-4">
                    <label>
                      <input type='radio' value="male" bind:group={formData.gender}>
                      Male
                    </label>
                    <label>
                      <input type='radio' value="female" bind:group={formData.gender}>
                      Female
                    </label>
                  </div>
                  
                  <div class="flex-col space-y-2">
                    <span class="">Weight</span>
                    <input
                      id="email"
                      placeholder="Enter your weight(in kgs)"
                      type="text"
                      class="w-full h-14 text-black rounded-md border-b border-white bg-mirage-950 p-3 placeholder-slate-500"
                      required
                      name="weight"
                      bind:value={formData.weight}
                    />
                  </div>
                  <div class="flex-col space-y-2">
                    <span class="">Height</span>
                    <input
                      id="company"
                      placeholder="Your height(in cms)"
                      type="text"
                      class="w-full h-14 rounded-md text-black border-b border-white bg-mirage-950 p-3 placeholder-slate-500"
                      required
                      name="height"
                      bind:value={formData.height}
                    />
                  </div>
                  <div class="flex gap-5">
                    <span>Activity Level</span>
                    <select bind:value={formData.activity} class="text-black" defau>
                      <option value="level_1">Level 1</option>
                      <option value="level_2">Level 2</option>
                      <option value="level_3">Level 3</option>
                      <option value="level_4">Level 4</option>
                      <option value="level_5">Level 5</option>
                      <option value="level_6">Level 6</option>

                    </select>
                  </div>
                  <button
                  type="submit"
                    class="w-1/2 bg-green-500 py-2 rounded-lg text-black cursor-pointer"
                    on:click={handleclick}
                  >Submit
                  </button>
                </div>
              </form>
              <h2 class="text-white text-xl">{bmr}</h2>
        </div>
    </div>
</main>