import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.50.145:3333',
  baseURL: 'http://localhost:3333',
});

export default api;

// yarn json-server --host 192.168.50.145 server.json -p 3333
