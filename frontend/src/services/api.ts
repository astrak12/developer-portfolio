// frontend/src/services/api.ts
import axios from 'axios';

// Menggunakan Environment Variable untuk baseURL agar siap di-hosting
// Jika VITE_API_URL tidak ditemukan (saat development), otomatis menggunakan URL lokal
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

export const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export const getGitHubRepos = () => axios.get('https://api.github.com/users/astrak12/repos?sort=updated&per_page=6');
export const getProfile = () => API.get('/profile');
export const getSkills = () => API.get('/skills');
export const getProjects = () => API.get('/projects');
export const sendContactMessage = (data: { name: string; email: string; subject?: string; message: string }) =>
    API.post('/contact', data);
export const getEducation = () => API.get('/education');
export const getExperiences = () => API.get('/experiences');