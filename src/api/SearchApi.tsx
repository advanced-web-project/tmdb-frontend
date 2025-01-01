import axios from 'axios';
import TVResult from '../type/search/tv';
import { CollectionResult } from '../type/search/collection';
import { PersonResult } from '../type/search/person';
import { MovieResult } from '../type/search/movie';
import { KeyWordResult } from '../type/search/keyword';
import { CompanyResult } from '../type/search/company';

const BASE_URL = import.meta.env.VITE_TMDB_API_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
export async function searchCompany(keyword: string, page: number): Promise<CompanyResult> {
    try {
        const response = await axios.get<CompanyResult>(`${BASE_URL}/search/company`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params:
            {
                query: keyword,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error when search movie:', error);
        throw error;
    }
}
export async function searchKeyWord(keyword: string, page: number): Promise<KeyWordResult> {
    try {
        const response = await axios.get<KeyWordResult>(`${BASE_URL}/search/keyword`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params:
            {
                query: keyword,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error when search movie:', error);
        throw error;
    }
}
export async function searchCollection(keyword: string, page: number): Promise<CollectionResult> {
    try {
        const response = await axios.get<CollectionResult>(`${BASE_URL}/search/collection`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params:
            {
                query: keyword,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error when search movie:', error);
        throw error;
    }
}
export async function searchTV(keyword: string, page: number): Promise<TVResult> {
    try {
        const response = await axios.get<TVResult>(`${BASE_URL}/search/tv`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params:
            {
                query: keyword,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error when search movie:', error);
        throw error;
    }
}
export async function searchPerson(keyword: string, page: number): Promise<PersonResult> {
    try {
        const response = await axios.get<PersonResult>(`${BASE_URL}/search/person`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params:
            {
                query: keyword,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error when search movie:', error);
        throw error;
    }
}
export async function searchMovie(keyword: string, page: number): Promise<MovieResult> {
    try {
        const response = await axios.get<MovieResult>(`${BASE_URL}/search/movie`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params:
            {
                query: keyword,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error when search movie:', error);
        throw error;
    }
}
