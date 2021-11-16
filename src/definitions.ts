export const TOP_HEADLINES =
  "https://gnews.io/api/v4/top-headlines?token=45372783ca7c7bbc6d0a5036347549c6&lang=en";
export const INDIA =
  "https://gnews.io/api/v4/top-headlines?country=in&token=45372783ca7c7bbc6d0a5036347549c6&country=in&lang=en";
export const SPORTS =
  "https://gnews.io/api/v4/top-headlines?topic=sports&token=45372783ca7c7bbc6d0a5036347549c6&country=in&lang=en";
export const BUSINESS =
  "https://gnews.io/api/v4/top-headlines?topic=business&token=45372783ca7c7bbc6d0a5036347549c6&country=in&lang=en";
export const TECHNOLOGY =
  "https://gnews.io/api/v4/top-headlines?topic=technology&token=45372783ca7c7bbc6d0a5036347549c6&country=in&lang=en";
export const HEALTH =
  "https://gnews.io/api/v4/top-headlines?topic=health&token=45372783ca7c7bbc6d0a5036347549c6&country=in&lang=en";
export const ENTERTAINMENT =
  "https://gnews.io/api/v4/top-headlines?topic=entertainment&token=45372783ca7c7bbc6d0a5036347549c6&country=in&lang=en";
export const SCIENCE =
  "https://gnews.io/api/v4/top-headlines?topic=science&token=45372783ca7c7bbc6d0a5036347549c6&country=in&lang=en";
export const SEARCH =
  "https://gnews.io/api/v4/search?token=45372783ca7c7bbc6d0a5036347549c6&lang=en&q=";
export const WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=df2bd93f66dcadc0c11fd4c937039c81&units=imperial&q=";

export interface News {
  title: string;
  url: string;
  publishedAt: string;
  description: string;
  image: string;
}
export interface Weather {
  name: string;
  main: {
    temp: string;
    feels_like: string;
    temp_max: string;
    temp_min: string;
    humidity: string;
    pressure: string;
  };
  weather: [{ description: string }];
  wind: {
    deg: string;
    speed: string;
  };
}
