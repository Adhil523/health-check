<script>
    let formData={
        age:'',
        weight:'',
        height:''
    }
    let data=null;
    const handleclick=async()=>{
        console.log(formData)
        const response=await fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${formData.age}&weight=${formData.weight}&height=${formData.height}`,{
            method: 'GET',
				headers: {
					'X-RapidAPI-Key': 'a7896790aemsh8824392505e3c54p152987jsn3ae2c309f74c',
					'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
				}
        }).then((response)=>response.text())
        data=JSON.parse(response).data
        
    }

</script>

<main>
    <div class=" bg-black text-green-500">
        <div class=" items-center w-[50%] mx-auto h-auto p-20">
            <h1 class="text-6xl font-bold m-6">Body Mass Index</h1>
            <form>
                <div class="grid gap-6 h-fit p-6 sm:text-base text-xs text-white  rounded-lg">
                  <div class="flex-col space-y-2">
                    <span class="">Your Age</span>
                    <input
                      id="name"
                      placeholder="Enter your age(in years)"
                      type="text"
                      class="w-full h-14  rounded-md text-black border-white p-3 border-b placeholder-slate-500"
                      required
                      name="age"
                      bind:value={formData.age}
                    />
                  </div>
                  <div class="flex-col space-y-2">
                    <span class="">Weight</span>
                    <input
                      id="email"
                      placeholder="Enter your weight(in kgs)"
                      type="text"
                      class="w-full h-14 rounded-md border-b border-white bg-mirage-950 p-3 placeholder-slate-500 text-black"
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
                  <button
                  type="submit"
                    class="w-1/2 bg-green-500 py-2 rounded-lg text-black cursor-pointer"
                    on:click={handleclick}
                  >Submit
                  </button>
                  {#if data}
                  <div class="flex flex-col gap-5 border border-double border-white p-6 rounded-md">
                    <h2 class="text-3xl font-semibold">Patient Report</h2>
                    <span>BMI: {data.bmi}</span>
                    <span>Health Status: {data.health}</span>
                    <span>Healthy BMI Range: {data.healthy_bmi_range}</span>

                  </div>
                  {/if}
                  
                </div>
              </form>
        </div>
    </div>
</main>