export async function getWeatherInformation(city) {
  const query = `https://api.weatherbit.io/v2.0/current?city=${city}&key=7ef691daf8a24b87bbb8ad0f48f12363`;
  const res = await fetch(query);
  const data = await res.json();

  const title = data.data[0].city_name;
  const weather_state_name = data.data[0].weather.description;
  const weather_state_code = data.data[0].weather.code;
  const the_temp = data.data[0].temp;

  return {
    location: title,
    weather: weather_state_name,
    weatherCode: weather_state_code,
    temperature: the_temp,
  };
}