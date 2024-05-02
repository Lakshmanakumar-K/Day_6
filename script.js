let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let res=JSON.parse(request.response);
    console.log(res);

    // 1.Get all the countries from Asia continent /region using Filter method

    let country_arr = res.filter((element)=> (element.region == "Asia"));
    let asian_country = country_arr.map((element)=>element["name"]["common"]);
    console.log(asian_country);

    // 2.Get all the countries with a population of less than 2 lakhs using Filter method

    let country_arr_2 = res.filter((element)=>element.population < 200000);
    let pop_less_country = country_arr_2.map((element)=>element.name.common);
    console.log(pop_less_country);

    // 3.Print the following details name, capital, flag, using forEach method
    res.forEach((element)=> console.log(`name : ${element.name.common} , capital : ${element.capital} , flag : ${element.flag}`));
    // res.forEach((element)=>{
    //     var obj={};
    //     obj["name"] = element.name.common;
    //     obj["capital"] = element.capital;
    //     obj["flag"] = element.flag;
    //     console.log(obj);
    // });
    
    // 4.Print the total population of countries using reduce method
    let total_population = res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(total_population);

    // 5.Print the country that uses US dollars as currency
    function USD_country(obj){
        let count =0;
        for (let key in obj["currencies"]){
            if (key == "USD"){
                //console.log(obj);
                return obj;
                }
        }
    }

    let country_arr_3 = res.filter(USD_country);
    let usd_country = country_arr_3.map((element)=>element.name.common);
    console.log(usd_country);

    }


