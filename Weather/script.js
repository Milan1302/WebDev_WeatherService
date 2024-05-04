async function getLink(city_name) {
    let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=01cbc9cde5ea493e96d153304240404&q=${city_name}&aqi=no`);
    return await data.json();
}

const input_field = document.querySelector("#city_name");
const submit_button = document.querySelector("#button");
const cn = document.querySelector("#cn")
const cl = document.querySelector("#cl")
const ct = document.querySelector("#ct")
const fl = document.querySelector("#fl")

submit_button.addEventListener('click', async () => {
    let data = await getLink(input_field.value);
    cn.innerText = " => " + input_field.value;
    cl.innerText = " -> " + data.location.country;
    ct.innerText = " -> " + data.current.temp_c;
    fl.innerText = " -> " + data.current.feelslike_c;
    lt.innerText = " -> " + data.location.localtime;
    lu.innerText = " -> " + data.current.last_updated;
    h.innerText = " -> " + data.current.humidity;
});