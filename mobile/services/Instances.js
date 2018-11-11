import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://go2vegan.herokuapp.com/',
});
