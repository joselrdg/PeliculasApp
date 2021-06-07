import axios from 'axios';

const movieDb = axios.create({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '36301517ac72412e514152b6beb0a473',
    language: 'es-ES',
  },
});

export default movieDb;
