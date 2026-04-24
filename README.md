# Weather Forecast App

A JavaScript web app that fetches and displays current weather and forecasts for a given location.

<img width="1911" height="1041" alt="image" src="https://github.com/user-attachments/assets/985c63ef-0490-4e0c-90a0-dc3a7f9ccdaa" />

<img width="1915" height="1041" alt="image" src="https://github.com/user-attachments/assets/f40157a0-3f05-4cd9-9bc7-3d7138b8d12b" />

**Live demo:** [movie-search-app.vercel.app](https://movie-search-app.vercel.app)
## What it does

- Lets the user type in a city and see current weather.
- Shows temperature, conditions, humidity, and wind.
- Displays a multi-day forecast.


## Why I built it

I wanted to practise working with a real external API — taking data someone else provides, parsing it, and turning it into something useful on screen. Weather apps are a classic beginner API project for exactly that reason.

## What I learned

>
- How to make HTTP requests using `fetch()`.
- Reading API documentation and authenticating requests with an API key.
- Parsing nested JSON and pulling out only the fields I need.
- Handling async code with `async/await`.
- Handling errors — wrong city names, network failures, API rate limits.
- Keeping API keys out of public code (using environment variables).

## Tech used

- JavaScript (51%)
- CSS (45%)
- HTML (3%)
- Node.js / npm
- ESLint for code quality
- Weather API: [OpenWeatherMap WeatherAPI ]

## Running it locally

```bash
git clone https://github.com/Developer-Coder1/Weather-forecast-project.git
cd Weather-forecast-project
npm install
# Add your API key to a .env file (see .env.example)
npm start
```

## Project structure

```
├── Weather-foreast-Project/    # main app code
├── eslint.config.mjs           # linting rules
├── package.json                # dependencies
└── package-lock.json
```

## Honest disclosure

I built this with AI assistance (Claude). I made the design and feature decisions and wrote/edited the code, using AI as a pair programmer when I got stuck — especially for the API integration. I mention this because being upfront about tools is professional.

## What I'd do next

- Add geolocation so the user's location auto-populates.
- Cache recent searches so the app loads faster on repeat visits.
- Add a chart showing temperature over the next few hours.
- Improve error messages when the city isn't found.

## About me

I'm 14, based in the UK, building toward a Level 6 software engineering apprenticeship after sixth form.

