import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "b93b0902bfff4abf85b770e6a49bc2c8"
    }
})