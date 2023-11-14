import axios from "axios";


export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "0ef56c5fbf06496bb88fd6b991f4d242"
    }
})