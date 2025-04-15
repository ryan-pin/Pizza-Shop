import axios from 'axios';
// import { env } from '@/env';

export const api = axios.create({
    // baseURL: env.VITE_API_URL,
    baseURL: 'http://localhost:3333',
});