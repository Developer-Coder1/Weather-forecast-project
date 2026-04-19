const API_KEY = "0ca567679d046006bd6b83d0f4c601bd";


export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}
