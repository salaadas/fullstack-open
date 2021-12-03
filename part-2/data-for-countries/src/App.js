import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useForm from './hooks/useForm';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.REACT_WEATHER_KEY;

// https://restcountries.com/v3.1/all
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// (f - 32)/1.8 = c

const Country = ({ country }) => {
  const [weather, setWeather] = useState({ temperature: '', wind: '' });

  const name = country.name.common;
  const capital = country.capital[0];
  const population = country.population;
  const languages = Object.values(country.languages);
  const flag = country.flags.png;

  useEffect(() => {
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`
      )
      .then((res) => console.log(res));
  }, [capital]);

  return (
    <>
      <h2>{name}</h2>
      <p>{capital}</p>
      <p>{population}</p>
      <h3>Spoken languages</h3>
      <ul>
        {languages.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <img src={flag} alt={`${name.toLowerCase}'s flag'`} />
      <h3>Weather in {name}</h3>
      <p>
        <b>temperature</b>
        {weather.temperature}
      </p>
      <p>
        <b>wind</b>
        {weather.wind}
      </p>
    </>
  );
};

const ListCountry = ({ country }) => {
  const [show, setShow] = useState(false);
  const countryName = country.name.common;

  const toggleCountry = () => setShow(!show);

  return (
    <>
      <hr />
      {show ? (
        <Country country={country} />
      ) : (
        <p key={countryName.toLowerCase()}>{countryName}</p>
      )}
      <br />
      <button onClick={toggleCountry}>{show ? 'hide' : 'show'}</button>
      <hr />
    </>
  );
};

const Countries = ({ query, countries }) => {
  if (query === '') {
    return <p>search for something</p>;
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else {
    return (
      <>
        {countries.map((c) => (
          <ListCountry key={c.name.common.toLowerCase()} country={c} />
        ))}
      </>
    );
  }
};

const App = (props) => {
  const [countries, setCountries] = useState([]);
  const [values, handleChange] = useForm({ query: '' });

  const filteredList = countries.filter((c) =>
    c.name.common.toLowerCase().includes(values.query.toLowerCase())
  );

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div>
      <div className="query-field">
        find countries{' '}
        <input name="query" value={values.query} onChange={handleChange} />
      </div>
      <div className="countries">
        <Countries query={values.query} countries={filteredList} />
      </div>
    </div>
  );
};

export default App;
